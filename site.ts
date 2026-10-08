// src/content/site.ts
// Copy transcribed from Coach Ash's email (phone-note screenshots).
// Typos fixed; wording otherwise kept in her voice.
// "REVIEW" = claim to confirm with the client before launch (health/results/credentials).

export const siteContent = {
  brand: {
    name: "Coach Ash",
    tagline: "Nutritionist + online coach",
    // REVIEW: confirm exact credential wording allowed in her state ("Nurse Nutritionist", "RN")
    credentialsLine: "Nurse Nutritionist · Body transformation expert · Glute specialist",
    instagram: "https://instagram.com/transformation.pro.ash", // confirm handle
    tiktok: "", // [PLACEHOLDER]
    contactEmail: "apfaacoach@gmail.com", // confirm she wants this public
  },

  hero: {
    headline: "It's time to kick the C-section shelf, “mom butt” and no energy TO THE CURB!",
    highlightWords: ["C-section shelf", "mom butt"],
    ctaPrimary: "Apply for Coaching",
    ctaSecondary: "Get the Guide",
    photo: "/images/hero.jpg", // [PLACEHOLDER: photoshoot image]
  },

  problem: {
    paragraphs: [
      "I know… you've tried everything but the “pooch” hasn't gone away. You're doing more cardio, some YouTube videos, eating healthier, fasting, and it's not budging. You still look pregnant, MONTHS after giving birth.",
      "That's because you're treating it like it's JUST fat… and that's how you make it WORSE.",
      // REVIEW: "dysfunction" is a medical-sounding claim; consider "your core needs to be rebuilt the right way"
      "There's dysfunction that we HAVE to fix for a flatter, toned, STRONG CORE AFTER BABIES!",
    ],
  },

  method: {
    intro: "Introducing the Muscle Mommy Method",
    progressPhotos: "[PLACEHOLDER: client progress photos, need written permission]",
    testimonials: [
      // [PLACEHOLDER: real testimonials only, with permission]
    ],
  },

  collective: {
    heading: "INSIDE of the Muscle Mommy Collective..",
    rrr: ["RESTORE THE CORE", "REHAB THE ABS", "REBUILD THE BODY"],
    subline: "The collective changing the body that moms wake up to every single day.",
    progressPhotos: "[PLACEHOLDER: progress photos]",
  },

  wants: {
    heading: "This is what you ACTUALLY WANT…",
    bullets: [
      "A stomach that you don't have to hide (and one that doesn't weigh you down)",
      "You don't want to feel like you're constantly hiding in a turtle shell",
      // REVIEW: "losing fat every single day ... NO KICKBACKS" reads as a results guarantee
      "You want to wake up daily, losing fat every single day, feeling lighter and more energized WITH NO KICKBACKS!",
    ],
  },

  lockInLoop: {
    body: "And THAT'S why I've created the lock-in loop inside of this coaching program, where our check-ins are EVERY. SINGLE. WEEK. To ensure progress is being made, and you're locked in every single day.",
  },

  forYouIf: {
    heading: "This is for you if…",
    items: [
      "You feel like motherhood took apart a piece of you, but you're ready to claim it back, and feel like superwomen again.",
      // REVIEW: "start losing fat tomorrow" = results promise
      "You want to literally start losing fat tomorrow",
      // REVIEW: "LAST coach you'll ever hire" = strong promise
      "You want me to be the LAST coach that you ever hire, because after this you will know EXACTLY what to do to keep the progress rolling.",
    ],
  },

  apply: {
    heading: "Apply for coaching",
    // Pricing is not shown in her copy. Confirm whether to show it, and what the VIP assessment call is.
    afterSubmit: "Application received! I'll review it and email you within [PLACEHOLDER: timeframe].",
  },

  about: {
    eyebrow: "The trio you never knew you needed…",
    heading: "Coach Ash, Nurse Nutritionist, Body transformation expert and GLUTE specialist.",
    paragraphs: [
      // [PLACEHOLDER: her story, not provided yet]
    ],
    photo: "/images/about.jpg", // [PLACEHOLDER]
  },

  faq: {
    heading: "FAQs",
    items: [
      {
        q: "Is this for the gym or can I work out from home?",
        a: "Everything is 10000% customized, so whether you have a gym or a dumbbell and a dream, I got you covered.",
      },
      {
        q: "Will you create my nutrition plans?",
        // REVIEW: credential wording
        a: "Yes, I'm a nurse nutritionist so let me take something OFF OF YOUR PLATE. Let me handle the meals, macros, calories, snacks, etc. You just watch the progress roll in.",
      },
      {
        q: "What if I don't have a lot of time?",
        a: "Girl… please. This is for MOMS. We know about that. On your VIP assessment call we go over all of the things on YOUR schedule to see how many days and how long your workouts need to be.",
      },
      {
        q: "What if I'm a picky eater?",
        a: "Babe, I'm a nutritionist, I've seen it all. I create programs to contain ONLY what you like!",
      },
      {
        q: "Is there chat support?",
        a: "This is a high level coaching program, so the support is top tier. I offer support by iMessage + Slack. Don't worry, you won't be emailing some dusty email box.",
      },
      {
        q: "What if I'm breastfeeding?",
        // REVIEW: medical/nutrition claim about milk supply
        a: "I've got you covered! As a nurse nutritionist, I will create a plan to support fat loss (if that's the goal) and also support your breast milk supply!",
      },
      {
        q: "Do you offer payment plans?",
        // REVIEW: confirm which payment options are actually live (Affirm, PayPal, Klarna, Zip)
        a: "Absolutely! Each program can be paid in full, or you can pay monthly. We use Affirm, PayPal, Klarna, Zip, etc. if you need to split this into smaller payments as well.",
      },
    ],
  },

  guide: {
    // Not in her copy yet. [PLACEHOLDER: title, 3-5 benefits, cover image]
    title: "[PLACEHOLDER: guide title]",
    price: "$97",
    // Link goes in NEXT_PUBLIC_STAN_STORE_URL, not here
  },

  legal: {
    disclaimer:
      "Coaching is educational and is not medical advice. Check with your doctor before starting any exercise or nutrition program, especially after childbirth. Results vary.",
  },
};
