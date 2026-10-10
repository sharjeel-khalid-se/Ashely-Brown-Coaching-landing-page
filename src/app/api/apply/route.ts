import { NextResponse } from "next/server";
import { Resend } from "resend";
import { applicationSchema } from "@/lib/applicationSchema";

// Simple in-memory rate limiting map: IP -> { count, resetTime }
// NOTE: This in-memory rate limit resets on serverless cold starts. In production, an external store like Upstash Redis would be better.
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5; // max 5 requests per IP per 10 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    // 1. In-memory Rate Limit Check
    const forwardedHeader = request.headers.get("x-forwarded-for");
    const clientIp =
      forwardedHeader?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Too many submissions. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    const json = await request.json();

    // 2. Honeypot check: If filled, return 200 silently and do nothing
    if (
      json &&
      typeof json.honeypot === "string" &&
      json.honeypot.trim().length > 0
    ) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // 3. Validate with shared Zod schema
    const result = applicationSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        {
          ok: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;

    // 4. Read keys from environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.APPLICATIONS_TO_EMAIL;

    if (!resendApiKey || !recipientEmail) {
      console.error(
        "Server configuration error: Missing RESEND_API_KEY or APPLICATIONS_TO_EMAIL."
      );
      return NextResponse.json(
        {
          ok: false,
          message: "Email service is temporarily unavailable. Please try again shortly.",
        },
        { status: 503 }
      );
    }

    // 5. Send application email via Resend
    const resend = new Resend(resendApiKey);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; color: #2B1B24; line-height: 1.6;">
        <h2 style="color: #C8083F; border-bottom: 2px solid #FDE3EC; padding-bottom: 8px;">
          New Muscle Mommy Method Application
        </h2>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Instagram Handle:</strong> ${data.instagramHandle || "Not provided"}</p>
        <p><strong>Time Since Giving Birth:</strong> ${data.timePostpartum}</p>
        <p><strong>Delivery Type:</strong> ${data.deliveryType}</p>
        <p><strong>Doctor Cleared to Exercise:</strong> ${data.doctorCleared}</p>
        <p><strong>Currently Breastfeeding:</strong> ${data.isBreastfeeding}</p>
        <p><strong>Primary Goal:</strong> ${data.primaryGoal}</p>
        <p><strong>Training Location:</strong> ${data.trainingLocation}</p>
        <p><strong>Days Per Week:</strong> ${data.trainingDays}</p>
        <p><strong>Monthly Investment ($275–$415/mo):</strong> ${data.monthlyInvestment}</p>
        <div style="margin-top: 16px; padding: 12px; background-color: #F4F4F4; border-radius: 8px;">
          <strong>Biggest Struggle:</strong><br />
          ${data.biggestStruggle}
        </div>
      </div>
    `;

    const { error: resendError } = await resend.emails.send({
      from: "Muscle Mommy Method <onboarding@resend.dev>",
      to: recipientEmail,
      replyTo: data.email,
      subject: `New Coaching Application: ${data.fullName}`,
      html: emailHtml,
    });

    if (resendError) {
      // NOTE: Never log applicant data per privacy rules; log only error metadata
      console.error("Resend API error:", resendError.message);
      return NextResponse.json(
        {
          ok: false,
          message: "Failed to deliver application. Please try again shortly.",
        },
        { status: 500 }
      );
    }

    // 6. Return { ok: true } on success
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    // NOTE: Never log applicant data
    console.error(
      "Application submission error:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      {
        ok: false,
        message: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
