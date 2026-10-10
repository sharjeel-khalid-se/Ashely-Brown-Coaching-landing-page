// src/content/site.ts
// Copy transcribed from Coach Ash's email (phone-note screenshots).
// Spelling and punctuation fixed with client permission; wording and voice kept exactly as she wrote.
// "REVIEW" = claim to confirm with the client before launch (health/results/credentials).

export const siteContent = {
  brand: {
    name: "Coach Ash",
    tagline: "Nutritionist + online coach",
    logo: "/images/logo.png", // Muscle Mommy Method logo — confirmed as one logo by client
    // REVIEW: confirm exact credential wording allowed in her state ("Nurse Nutritionist", "RN")
    credentialsLine: "Nurse Nutritionist · Body transformation expert · Glute specialist",
    instagram: "https://instagram.com/transformation.pro.ash", // confirm handle
    tiktok: "https://www.tiktok.com/@transformationproash",
    contactEmail: "apfaacoach@gmail.com", // confirm she wants this public
  },

  nav: {
    logoText: "Coach Ash",
    applyCta: "Apply Now",
    mobileStickyCta: "Apply for Coaching",
    footerCta: "Apply for Coaching",
  },


  hero: {
    headline: "It's time to kick the C-section shelf, “mom butt” and no energy TO THE CURB!",
    highlightWords: ["C-section shelf", "mom butt"],
    ctaPrimary: "Apply for Coaching",
    ctaSecondary: "Join the Challenge",
    photo: "/images/Photoshot/839869060_1637260221475849_3071360000220388480_n.jpg", // #6 Newspaper close — eyes sharp, "Muscle Mommy Method" front page visible
  },

  problem: {
    photo: "/images/Photoshot/841532556_1628922772268550_2108186069370112453_n.jpg", // #14 Looking up at pelvis model, yellow fat model in hand
    paragraphs: [
      "I know… you've tried everything but the “pooch” hasn't went away. You're doing more cardio, some YouTube videos, eating healthier, fasting, and it's not budging. You still look pregnant, MONTHS after giving birth.",
      "That's because you're treating it like it's JUST fat… and that's how you make it WORSE.",
      // REVIEW: "dysfunction" is a medical-sounding claim; consider "your core needs to be rebuilt the right way"
      "There's dysfunction that we HAVE to fix for a flatter, toned, STRONG CORE AFTER BABIES!",
    ],
  },

  method: {
    intro: "Introducing the Muscle Mommy Method",
    introPhoto: "/images/Photoshot/841644331_2439969386496403_2107670476816853547_n.jpg", // #17 Couch reading newspaper
    rrrPhotos: {
      restore: "/images/Photoshot/839558828_1058311087027788_6310127441202570028_n.jpg", // #4 Mat, kneeling stretch
      rehab: "/images/Photoshot/842086349_1135462286096462_839265512371590603_n.jpg",   // #18 Mat, bird-dog reach
      rebuild: "/images/Photoshot/845864810_978197952007508_8047479966712870590_n.jpg", // #22 Overhead dumbbell press in MMM tee
    },
    // Real client before/after transformation photos (Ash confirmed permission to publish)
    // T4 = Black nursing bras (front), T6 = White bra/purple shorts→black set (front), T10 = Green top/white shorts→navy bra (front)
    progressPhotoImages: [
      "/images/Before after photos/838708670_1902306324475605_7671778679451673715_n.png",   // T4 Black nursing bras (front)
      "/images/Before after photos/840115091_960533610446683_3560475728128667768_n.png",    // T6 White bra/purple shorts → black set (front)
      "/images/Before after photos/840577740_2158991151679622_163566126119652658_n.png",    // T10 Green top/white shorts → navy bra (front)
    ],
    // Testimonials extracted verbatim from client-provided message screenshots
    testimonials: [
      {
        quote: "3 c-sections later and I'm feeling better than I have ever before!!! This is why I can't leave you alone. We in this for life 🤣",
        author: "@girlwiththesnaketattoo",
        role: "Community member",
      },
      {
        quote: "I literally feel like a brand new person... I have everything I wanted from this, more energy for the kids, I'm healthier, I'm happy in my own skin! I can sit and cross my legs now, silly stuff that people don't think about until you can't do it. It's WILD how far I've come!",
        author: "Community member",
      },
      {
        quote: "I also just wanted to share I have been feeling AMAZING. I am getting habitual about waking up earlier to get the gym in, and it has been doing wonders for my mental/emotional space. We are THRIVING. Thank you for creating an environment of structure and positive reinforcement.",
        author: "Community member",
      },
      {
        quote: "Can I just tell you that today was probably the first time ever in my life that I felt confident in the gym 😭",
        author: "Community member",
      },
      {
        quote: "you know sometimes in the moment, I get so insecure & hard on myself and just start nitpicking everyyyy part of my body. Then I see those side by side and I just feel so accomplished 😭",
        author: "Community member",
      },
    ],
    // Client message screenshots
    screenshotTestimonials: [
      "/images/testimonals screenshot/840188886_1138530688899064_1536153723698839943_n.png",
      "/images/testimonals screenshot/840951165_1362289299316377_1952915349946347933_n.png",
      "/images/testimonals screenshot/842554076_2087363838813065_3906671281328171685_n.png",
    ],
  },

  collective: {
    heading: "INSIDE of the Muscle Mommy Collective..",
    rrr: ["RESTORE THE CORE", "REHAB THE ABS", "REBUILD THE BODY"],
    subline: "The collective changing the body that moms wake up to every single day.",
    // T5 = Camo bra → leopard bra (front), T12 = White floral bikini → black bikini (front), T14 = Grey bra/red undies → olive undies (side)
    progressPhotoImages: [
      "/images/Before after photos/839278341_1018092617984541_2734143295779687260_n.png",   // T5
      "/images/Before after photos/841030033_958282543466965_5428021720526466461_n.png",    // T12 — REVIEW: visible tattoos; need Ash's written consent
      "/images/Before after photos/842100478_4029805317314416_1641007576559365913_n.png",   // T14
    ],
  },

  wants: {
    heading: "This is what you ACTUALLY WANT…",
    bullets: [
      "A stomach that you don't have to hide (and one that doesn't weigh you down)",
      "You don't want to feel like you're constantly hiding into a turtle shell",
      // REVIEW: "losing fat every single day ... NO KICKBACKS" reads as a results guarantee
      "You want to wake up daily, losing fat every single day, feeling lighter and more energized WITH NO KICKBACKS!",
    ],
  },

  lockInLoop: {
    body: "And THAT'S why I've created the lock-in loop inside of this coaching program, where our check-ins are EVERY. SINGLE. WEEK. To ensure progress is being made, and you're locked in every single day.",
    photo: "/images/Photoshot/842677394_1603562598132619_187859312333752399_n.jpg", // #19 Gym back view, towel, looking at camera
  },

  forYouIf: {
    heading: "This is for you if…",
    items: [
      "You feel like motherhood took a part of you, but you're ready to claim it back, and feel like superwomen again.",
      // REVIEW: "start losing fat tomorrow" = results promise
      "You want to literally start losing fat tomorrow",
      // REVIEW: "LAST coach you'll ever hire" = strong promise
      "You want me to be the LAST coach that you ever hire, because after this you will know EXACTLY what to do to keep the progress rolling.",
    ],
  },

  apply: {
    heading: "Apply for coaching",
    postpartumStart: "Coaching available from 6 weeks postpartum.", // confirmed by client
    // Confirmed flow (Ash, Oct 9):
    afterApplySteps: ["Apply", "VIP Assessment Call", "Onboarding", "Program Start"],
    // Pricing is not shown in her copy. Confirm whether to show it, and what the VIP assessment call is.
    afterSubmit: "Application received! I'll review it and be in touch within 24 hours.",
    // Photo above the application form (#11) and T8 Instagram comment (without handle)
    aboveFormPhoto: "/images/Photoshot/841259554_1811902976726277_5079336172036283634_n (1).jpg", // #11 Laughing between pedestals
    aboveFormQuote: "Amen!!!! Everytime I see this I want to cry. 3 c-sections later and I'm feeling better than I have ever before!!! This is why I can't leave you alone. We in this for life",
    // REVIEW: T8 attribution — Ash needs to approve attribution format (not using @handle until she confirms)
    aboveFormQuoteAttribution: "Community member", // Do NOT use @girlwiththesnaketattoo until Ash confirms
  },

  form: {
    totalSteps: 9,
    steps: {
      1: {
        stepLabel: "Step 1 of 9",
        title: "Time since giving birth",
        subtitle: "Where are you in your postpartum journey?",
        options: [
          "Under 6 months",
          "6-12 months",
          "1-2 years",
          "2+ years",
        ],
      },
      2: {
        stepLabel: "Step 2 of 9",
        title: "Delivery type",
        subtitle: "How did you bring your baby into the world?",
        options: [
          "C-section",
          "Vaginal",
          "Both (multiple births)",
        ],
      },
      3: {
        stepLabel: "Step 3 of 9",
        title: "Has your doctor cleared you to exercise?",
        subtitle: "Safety is Coach Ash's top priority as an RN.",
        options: [
          "Yes",
          "No",
          "Not sure yet",
        ],
        gentleNote: "No problem, we'll talk about this on your assessment call.",
      },
      4: {
        stepLabel: "Step 4 of 9",
        title: "Are you breastfeeding?",
        subtitle: "Nutrition plans are customized to support or protect milk supply.",
        options: [
          "Yes",
          "No",
        ],
      },
      5: {
        stepLabel: "Step 5 of 9",
        title: "Primary goal",
        subtitle: "What is the #1 transformation you want right now?",
        options: [
          "Lose the belly / C-section shelf",
          "Rebuild my core strength",
          "Lose fat + build glutes and muscle",
          "Get my energy and confidence back",
        ],
      },
      6: {
        stepLabel: "Step 6 of 9",
        title: "Training location & days per week",
        subtitle: "Coach Ash customizes workouts around your life as a mom.",
        locationTitle: "Where will you be working out?",
        locationOptions: [
          "Gym",
          "Home",
        ],
        daysTitle: "Days per week you can dedicate:",
        daysOptions: [
          "2-3",
          "4-5",
          "6+",
        ],
      },
      7: {
        stepLabel: "Step 7 of 9",
        title: "Biggest struggle right now",
        subtitle: "In your own words, what feels hardest or has held you back?",
        placeholder: "Tell Coach Ash about your routine, nutrition struggles, or past attempts...",
        maxChars: 500,
      },
      8: {
        stepLabel: "Step 8 of 9",
        title: "Coaching investment",
        subtitle: "Are you able to invest $275–$415 per month for coaching?",
        options: [
          "Yes, payment plan me!",
          "I'd rather spend that on fast food per month and gain 50 more pounds.",
        ],
      },
      9: {
        stepLabel: "Step 9 of 9",
        title: "Your Contact Details",
        subtitle: "So Coach Ash can review your application and reach out directly.",
        nameLabel: "Full Name",
        namePlaceholder: "Your full name",
        emailLabel: "Email Address",
        emailPlaceholder: "you@example.com",
        instagramLabel: "Instagram Handle",
        instagramOptional: "(optional)",
        instagramPlaceholder: "@yourhandle",
        consentLabel: "I agree to be contacted about coaching and accept the Privacy Policy",
      },
    },
    navigation: {
      prevButton: "Previous",
      nextButton: "Next Step",
      submitButton: "Submit Coaching Application",
      submittingButton: "Submitting Application...",
      errorMessage: "Something went wrong sending your application. Please try again.",
      retryButton: "Try Again",
    },
  },


  about: {
    eyebrow: "The trio you never knew you needed…",
    heading: "Coach Ash, Nurse Nutritionist, Body transformation expert and GLUTE specialist.",
    paragraphs: [
      // Verbatim from Ash's About story. Punctuation fixed with client permission; wording unchanged.
      // Changes: "Coach Ash. mom" → "Coach Ash, mom" | "budge.. even" → "budge — even" | "life. and" → "life, and" | "i truly" → "I truly"
      "I'm Coach Ash, mom of three, coach of 13 years, Registered Nurse Nutritionist, and body transformation expert.",
      "A few years ago, I saw a gap in women's fitness: moms were being told to \"bounce back\" without being taught how to rebuild after birth and C-sections. I knew that struggle because I was living it.",
      "After a traumatic vaginal birth that nearly took my life and two back-to-back C-sections, my body wouldn't budge — even with years of coaching experience. I needed a new approach that respected everything my body had been through.",
      "That's why I created the Muscle Mommy Method and RRR: Restore, Rehab, Rebuild.",
      "Today, after three kids, I've built the best physique of my life, and I'm helping other moms reclaim their strength, confidence, and belief in what's possible.",
      "I truly believe moms should feel their BEST after having kids, not settling for less.",
    ],
    photo: "/images/Photoshot/840101591_2636613033454899_7851971200740497299_n.jpg", // #7 Stairs, arms crossed
    credentialPhoto: "/images/Photoshot/841574488_2129500700934334_2694288136849635006_n.jpg", // #15 Holding muscle model (Nurse Nutritionist tag)
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
        a: "Yes, I'm a nurse nutritionist so let me take something OFF OF YOUR PLATE, let me handle the meals, macros, calories, snacks, etc. You just watch the progress roll in.",
      },
      {
        q: "What if I don't have a lot of time?",
        a: "Girl… please. This is for MOMS. We know about that - on your VIP assessment call we go over all of the things on YOUR schedule to see how many days / how long your workouts need to be.",
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
        a: "Absolutely, each program can be paid in full, or you can pay monthly. We use Affirm, PayPal, Klarna, Zip, etc. if you need to split this into smaller payments as well.",
      },
    ],
  },

  challenge: {
    title: "6 Week RRR Challenge",
    eyebrow: "Restore your core after babies",
    intro: "You ready to leave the exhausted, not confident mom norm in the past?",
    postpartumStart: "Can be started as soon as 7 days postpartum.", // confirmed by client
    forYouIf: [
      "You're ready to lose the C-section shelf + \"mom pooch\"",
      "You're ready to kiss the mom butt GOODBYE and grow your glutes",
      "You're actually wanting to wake up DAILY motivated, energized and CONFIDENT (as you should!)",
    ],
    inside: [
      "Nutrition guidance for breastfeeding / non-breastfeeding moms",
      "Workouts for at home OR the gym",
      "Demonstrations of exercises inside",
    ],
    price: "$97",
    buttonLabel: "Join the Challenge",
    note: "Digital program delivered through Stan Store.",
    stanStoreUrl:
      process.env.NEXT_PUBLIC_STAN_STORE_URL ||
      "https://stan.store/CoachAshTraining/p/6-week-challenge-to-restore-your-core-after-babies?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    coverPhoto: "/images/Photoshot/841608939_1049936801417809_5140832464182646745_n.jpg", // #16 Mat, seated stretch, serious
    forYouPhoto: "/images/Photoshot/844889048_1815634336129834_3288162649600908353_n.jpg", // #21 Pedestals, back view over shoulder
    insidePhoto: "/images/Photoshot/840418526_1756384422357474_3128540963387752029_n.jpg", // #9 Mat, seated, smiling
    // Provisional transformations (held without "6-week win" label until Ash confirms timeline)
    progressPhotoImages: [
      "/images/Before after photos/838946853_1434316911976931_2255434394209736688_n.png",
      "/images/Before after photos/840020279_1778971896650320_36992660718914107_n.png",
      "/images/Before after photos/840308253_1133315615700380_5217461985562258980_n.png",
    ],
    // REVIEW: client's Stan page shows a crossed-out $297. Do not show it unless confirmed as a real previous price.
    // REVIEW: client's Stan page claims "lose 10-20 pounds in 6 weeks". Do NOT include this claim.
  },

  legal: {
    disclaimer:
      "Coaching is educational and is not medical advice. Check with your doctor before starting any exercise or nutrition program, especially after childbirth. Results vary.",
    testimonialDisclaimer:
      "Results vary based on individual starting point, consistency, and health history. Real client experiences; individual results are not guaranteed.",
  },
};

export type SiteContent = typeof siteContent;

