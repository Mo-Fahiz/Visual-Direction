/**
 * ACKO Voice & Tone — structured data for Foundation /voice-tone pages.
 * Covers tone calibration per lifecycle moment, vocabulary standards,
 * error-message framework, CTA hierarchy, before/after rewrites,
 * sentence patterns, and Indian-English conventions.
 */

/* ------------------------------------------------------------------ */
/*  1. Tone Calibration — natural tone shifts by lifecycle moment       */
/* ------------------------------------------------------------------ */

export type ToneEntry = {
  moment: string;
  context: string;
  tone: string;
  example: string;
};

export const toneCalibration: ToneEntry[] = [
  {
    moment: "Browsing / discovery",
    context: "User is browsing products and exploring options",
    tone: "Cool, factual",
    example: "Covers engine, gearbox, and 6 more parts.",
  },
  {
    moment: "Comparing plans",
    context: "User is evaluating and comparing different plans",
    tone: "Neutral, scannable",
    example:
      "Zero depreciation — parts valued at invoice price, not market price.",
  },
  {
    moment: "Purchasing / checkout",
    context: "User is ready to buy and completing payment",
    tone: "Confident, clear",
    example: "Pay ₹4,299 annually. Your policy starts immediately.",
  },
  {
    moment: "Post-purchase / onboarding",
    context: "User just purchased and is getting oriented",
    tone: "Helpful, grounded",
    example:
      "Your car insurance is active. Here's what to do if something happens.",
  },
  {
    moment: "Filing a claim",
    context: "User filed a claim and needs empathetic support",
    tone: "Empathetic, factual",
    example: "We're sorry this happened. Let's get your claim started.",
  },
  {
    moment: "Claim in progress",
    context: "User is waiting on a claim decision",
    tone: "Reassuring, specific",
    example:
      "Your claim is being reviewed. You'll hear from us by Thursday.",
  },
  {
    moment: "Claim rejected",
    context: "User received a negative outcome and needs clarity",
    tone: "Respectful, transparent",
    example:
      "This isn't covered because [reason]. Here's what you can do.",
  },
  {
    moment: "Renewal",
    context: "User's policy is due for renewal",
    tone: "Straightforward, no urgency",
    example:
      "Your policy renews on 12 Aug. Renew now to keep your 35% NCB.",
  },
  {
    moment: "Emergency / crisis",
    context: "User is in an emergency and needs immediate help",
    tone: "Calm, direct, human",
    example: "Call 112 for emergency. We'll handle the paperwork after.",
  },
];

/* ------------------------------------------------------------------ */
/*  2. Vocabulary — preferred insurance terminology                    */
/* ------------------------------------------------------------------ */

export type VocabularyEntry = {
  term: string;
  preferred: string;
  avoid: string;
  reason: string;
};

export const vocabularyTerms: VocabularyEntry[] = [
  {
    term: "IDV",
    preferred:
      '"Your car\'s current market value (IDV)" on first use; "IDV" after',
    avoid: '"Insured Declared Value" without context',
    reason: "First-use expansion then abbreviation",
  },
  {
    term: "NCB",
    preferred:
      '"No Claim Bonus (NCB) — your discount for claim-free years"',
    avoid: '"Accumulated NCB percentage"',
    reason: "Explain the benefit not the mechanic",
  },
  {
    term: "KYC",
    preferred: '"Identity verification (KYC)"',
    avoid: '"KYC compliance"',
    reason: "User-facing not regulatory-facing",
  },
  {
    term: "Premium",
    preferred: '"Price" or "annual price" in UI; "premium" in policy docs',
    avoid: '"Cost" (negative framing)',
    reason: '"Price" is clearer in shopping',
  },
  {
    term: "Sum insured",
    preferred:
      '"Maximum cover amount" in UI; "sum insured" in documents',
    avoid: '"SI" (abbreviation unclear)',
    reason: "Plain language first",
  },
  {
    term: "Deductible",
    preferred: '"Amount you pay first" on first use; "deductible" after',
    avoid: '"Compulsory/voluntary excess"',
    reason: 'Indian market prefers "deductible"',
  },
  {
    term: "Cashless claim",
    preferred: '"Direct settlement with the hospital/garage"',
    avoid: '"Cashless facility"',
    reason: "Describes the experience",
  },
  {
    term: "Reimbursement claim",
    preferred: '"We pay you back after you pay"',
    avoid: '"Reimbursement modality"',
    reason: "Plain",
  },
  {
    term: "Endorsement",
    preferred: '"Policy change" or "update to your policy"',
    avoid: '"Endorsement" in UI',
    reason: "Keep legal term in documents only",
  },
  {
    term: "IRDAI",
    preferred: '"IRDAI (India\'s insurance regulator)" on first use',
    avoid: "Unexpanded acronym",
    reason: "Regulatory body needs context",
  },
  {
    term: "Copay",
    preferred: '"Your share of the bill"',
    avoid: '"Co-payment percentage"',
    reason: "Explain the impact",
  },
];

/* ------------------------------------------------------------------ */
/*  3. Error Framework — message templates                             */
/* ------------------------------------------------------------------ */

export type ErrorTemplate = {
  type: string;
  template: string;
  example: string;
};

export const errorFramework: ErrorTemplate[] = [
  {
    type: "Validation",
    template: "[Field] needs [requirement].",
    example: "Phone number needs 10 digits.",
  },
  {
    type: "Network",
    template: "Couldn't connect. [Retry action].",
    example: "Couldn't connect. Tap to try again.",
  },
  {
    type: "Payment failure",
    template: "Payment didn't go through. [Alternative].",
    example:
      "Payment didn't go through. Try another method or contact your bank.",
  },
  {
    type: "Eligibility rejection",
    template: "[What's not available]. [Why briefly]. [Alternative].",
    example:
      "This add-on isn't available for cars older than 5 years. You can still get base coverage.",
  },
  {
    type: "System error",
    template: "Something went wrong on our end. [Recovery].",
    example:
      "Something went wrong on our end. We've saved your progress — try again in a minute.",
  },
  {
    type: "Claim rejection",
    template: "This claim wasn't approved. [Reason]. [Next step].",
    example:
      "This claim wasn't approved because [specific reason from policy]. You can appeal within 30 days or call us to discuss.",
  },
];

/* ------------------------------------------------------------------ */
/*  4. CTA Hierarchy                                                   */
/* ------------------------------------------------------------------ */

export type CtaLevel = {
  priority: string;
  type: string;
  pattern: string;
  examples: string[];
};

export const ctaHierarchy: CtaLevel[] = [
  {
    priority: "Primary",
    type: "Page-level action",
    pattern: "Verb + clear outcome",
    examples: ["Get a quote", "Start your claim", "Renew now", "Pay ₹4,299"],
  },
  {
    priority: "Secondary",
    type: "Supporting action",
    pattern: "Verb + context",
    examples: [
      "Compare plans",
      "View details",
      "Download policy",
      "Edit address",
    ],
  },
  {
    priority: "Tertiary",
    type: "Navigation / optional",
    pattern: "Verb (+ object if ambiguous)",
    examples: ["Learn more", "Skip for now", "Edit", "View all"],
  },
  {
    priority: "Destructive",
    type: "Remove / cancel",
    pattern: "Verb + what is affected",
    examples: ["Cancel policy", "Remove add-on", "Delete document"],
  },
];

/* ------------------------------------------------------------------ */
/*  5. Before / After Rewrites                                         */
/* ------------------------------------------------------------------ */

export type RewriteExample = {
  context: string;
  before: string;
  after: string;
  principle: string;
};

export const beforeAfterRewrites: RewriteExample[] = [
  {
    context: "Plan comparison",
    before: "Our best-selling plan with maximum coverage!",
    after:
      "Covers engine, gearbox, electrical, and 6 more parts. View full list.",
    principle: "Clear over clever",
  },
  {
    context: "Claim status",
    before: "Your claim is under process. Please wait.",
    after:
      "Your claim is being reviewed by our team. You'll get an update by Thursday, 15 May.",
    principle: "Present when it matters",
  },
  {
    context: "Error",
    before: "Invalid input. Please try again.",
    after: "Phone number needs 10 digits. Check and re-enter.",
    principle: "Effortless by default",
  },
  {
    context: "Renewal push",
    before:
      "Your policy is about to EXPIRE! Renew NOW to stay protected!",
    after:
      "Your car insurance renews on 12 Aug. Renew to keep your 35% NCB discount.",
    principle: "Respectful of time",
  },
  {
    context: "Payment confirmation",
    before: "Congratulations! You've made a smart choice!",
    after:
      "Done. Your policy is active from today. Here's your policy number: ACK-1234567.",
    principle: "Clear over clever",
  },
  {
    context: "Claim rejection",
    before: "Unfortunately, your claim has been denied.",
    after:
      "This repair isn't covered under your plan because it's classified as regular wear. Here's what you can do next.",
    principle: "Present when it matters",
  },
  {
    context: "Onboarding",
    before:
      "Welcome to the ACKO family! We're so excited to have you!",
    after:
      "Your car insurance is active. Save these two numbers: [roadside assist] and [claim helpline].",
    principle: "Respectful of time",
  },
  {
    context: "KYC prompt",
    before:
      "Complete your KYC to comply with regulatory requirements.",
    after:
      "Verify your identity to activate your policy. It takes about 2 minutes.",
    principle: "Effortless by default",
  },
];

/* ------------------------------------------------------------------ */
/*  6. Sentence Patterns                                               */
/* ------------------------------------------------------------------ */

export type SentencePattern = {
  context: string;
  maxWords: number;
  pattern: string;
  example: string;
};

export const sentencePatterns: SentencePattern[] = [
  {
    context: "Headings",
    maxWords: 8,
    pattern: "[Benefit/Action] + [Object]",
    example: "Get car insurance in 2 minutes",
  },
  {
    context: "Body copy",
    maxWords: 20,
    pattern: "Subject-verb-object. One idea per sentence.",
    example:
      "Your policy covers engine damage, theft, and third-party liability.",
  },
  {
    context: "Tooltips",
    maxWords: 15,
    pattern: "[Term] means [plain definition].",
    example: "IDV means your car's current market value.",
  },
  {
    context: "Table cells",
    maxWords: 4,
    pattern: "Fragment or value",
    example: '"Covered" / "₹5,00,000"',
  },
  {
    context: "Status messages",
    maxWords: 12,
    pattern: "[State] + [next step or timeline]",
    example: "Claim approved. Amount will be transferred by Friday.",
  },
  {
    context: "Push notifications",
    maxWords: 10,
    pattern: "[What happened] + [action if needed]",
    example: "Policy renewed. Download your new document.",
  },
];

/* ------------------------------------------------------------------ */
/*  7. Indian-English Rules                                            */
/* ------------------------------------------------------------------ */

export const indianEnglishRules: string[] = [
  "Use lakh and crore for Indian currency amounts (not 100,000 or 10 million). Format: ₹5,00,000 with Indian comma grouping.",
  "Currency always with ₹ symbol: ₹4,299 not Rs. 4299 or INR 4299.",
  "Date format: 12 Aug 2026 (not August 12, 2026 or 12/08/2026).",
  "Numbers: use words for one through nine, numerals for 10+. Exception: always use numerals for prices, percentages, dates, and policy numbers.",
  "Insurance acronyms (IDV, NCB, KYC) stay in English across all language translations. Product names remain in English.",
  "Transliterated Hindi in marketing is acceptable but never in product UI.",
];
