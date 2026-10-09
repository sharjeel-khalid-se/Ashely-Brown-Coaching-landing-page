import { z } from "zod";

export const applicationSchema = z.object({
  // Step 1: Time since giving birth
  timePostpartum: z.enum(
    ["Under 6 months", "6-12 months", "1-2 years", "2+ years"],
    { message: "Please select your time since giving birth" }
  ),

  // Step 2: Delivery type
  deliveryType: z.enum(
    ["C-section", "Vaginal", "Both (multiple births)"],
    { message: "Please select your delivery type" }
  ),

  // Step 3: Has your doctor cleared you to exercise?
  doctorCleared: z.enum(
    ["Yes", "No", "Not sure yet"],
    { message: "Please select your doctor clearance status" }
  ),

  // Step 4: Are you breastfeeding?
  isBreastfeeding: z.enum(
    ["Yes", "No"],
    { message: "Please indicate whether you are breastfeeding" }
  ),

  // Step 5: Primary goal
  primaryGoal: z.enum(
    [
      "Lose the belly / C-section shelf",
      "Rebuild my core strength",
      "Lose fat + build glutes and muscle",
      "Get my energy and confidence back",
    ],
    { message: "Please select your primary goal" }
  ),

  // Step 6: Training location and days per week
  trainingLocation: z.enum(
    ["Gym", "Home"],
    { message: "Please select where you plan to train" }
  ),
  trainingDays: z.enum(
    ["2-3", "4-5", "6+"],
    { message: "Please select how many days per week you can dedicate" }
  ),

  // Step 7: Biggest struggle right now (500 char limit)
  biggestStruggle: z
    .string()
    .min(5, "Please share a few words about your biggest struggle")
    .max(500, "Must be 500 characters or less"),

  // Step 8: Contact details
  fullName: z
    .string()
    .min(2, "Please enter your full name"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  instagramHandle: z
    .string()
    .optional()
    .or(z.literal("")),
  consent: z
    .literal(true, {
      message: "Please agree to be contacted and accept the Privacy Policy",
    }),

  // Honeypot field (hidden bot trap)
  honeypot: z.string().optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;
