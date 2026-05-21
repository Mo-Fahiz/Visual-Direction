import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs/Section";
import { PageTable } from "@/components/docs/PageTable";
import { DoDont } from "@/components/docs/DoDont";

export const metadata: Metadata = {
  title: "Voice & tone",
};

export default function VoicePage() {
  return (
    <>
      <Section
        id="north-star"
        title="North star"
        description="The single sentence that governs all ACKO copy."
      >
        <blockquote className="border-l-4 border-[var(--acko-purple)] pl-4 text-lg font-medium text-foreground">
          Plain, respectful, and present. We explain trade-offs clearly, avoid
          hustle language, and never disappear after the sale.
        </blockquote>
      </Section>

      <Section
        id="by-principle"
        title="By principle"
        description="Each principle shapes how we write."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <Link href="/principles/clear-over-clever" className="underline text-[var(--acko-purple)]">
              Clear over clever
            </Link>{" "}
            — say what something means; skip gimmicks.
          </li>
          <li>
            <Link href="/principles/effortless-by-default" className="underline text-[var(--acko-purple)]">
              Effortless by default
            </Link>{" "}
            — short sentences, strong verbs, obvious next steps.
          </li>
          <li>
            <Link href="/principles/present-when-it-matters" className="underline text-[var(--acko-purple)]">
              Present when it matters
            </Link>{" "}
            — acknowledge lifecycle moments; offer help.
          </li>
          <li>
            <Link href="/principles/respectful-of-time" className="underline text-[var(--acko-purple)]">
              Respectful of time
            </Link>{" "}
            — no manufactured urgency; don&apos;t repeat questions we already answered.
          </li>
        </ul>
      </Section>

      <Section
        id="tone-calibration"
        title="Tone calibration"
        description="Tone shifts naturally based on where the customer is in their journey. These aren't named modes — they're natural responses to context."
      >
        <PageTable
          headers={["Lifecycle moment", "Context", "Tone", "Example"]}
          colWidths={["20%", "25%", "15%", "40%"]}
          rows={[
            ["Browsing / discovery", "User is browsing products", "Cool, factual", "\"Covers engine, gearbox, and 6 more parts.\""],
            ["Comparing plans", "User is evaluating options", "Neutral, scannable", "\"Zero depreciation — parts valued at invoice price, not market price.\""],
            ["Purchasing / checkout", "User is completing payment", "Confident, clear", "\"Pay ₹4,299 annually. Your policy starts immediately.\""],
            ["Post-purchase", "User just purchased", "Helpful, grounded", "\"Your car insurance is active. Here's what to do if something happens.\""],
            ["Filing a claim", "User needs empathetic support", "Empathetic, factual", "\"We're sorry this happened. Let's get your claim started.\""],
            ["Claim in progress", "User is waiting on a decision", "Reassuring, specific", "\"Your claim is being reviewed. You'll hear from us by Thursday.\""],
            ["Claim rejected", "User received a negative outcome", "Respectful, transparent", "\"This isn't covered because [reason]. Here's what you can do.\""],
            ["Renewal", "User's policy is due for renewal", "Straightforward", "\"Your policy renews on 12 Aug. Renew to keep your 35% NCB.\""],
            ["Emergency / crisis", "User needs immediate help", "Calm, direct, human", "\"Call 112 for emergency. We'll handle the paperwork after.\""],
          ]}
        />
      </Section>

      <Section
        id="decision-guide"
        title="Decision guide"
        description="When you're unsure what tone to use."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Is the user <strong>making a decision</strong> (choosing, comparing, paying)? → <strong>Keep it factual and scannable.</strong></li>
          <li>Is the user <strong>stressed, blocked, or in a bad situation</strong> (claim, hospital, emergency)? → <strong>Lead with empathy, stay fact-complete.</strong></li>
          <li>Unsure? → <strong>Clarity wins.</strong> Empathy never obscures terms.</li>
        </ul>
      </Section>

      <Section
        id="anti-patterns"
        title="Voice anti-patterns"
      >
        <DoDont
          doItems={[
            "Lead with the outcome, then supporting detail",
            "Use consistent terms for the same concept across touchpoints",
            "Name the next step explicitly — never just \"Contact support\"",
            "Acknowledge the moment before instructing (claims, errors)",
          ]}
          dontItems={[
            "\"Oops!\" or \"Uh oh!\" — casualness is not warmth",
            "\"Submit\" as a CTA — always name the outcome",
            "\"Please try again later\" without a timeline",
            "Manufactured urgency: \"Act now!\", \"Limited time!\", \"Don't miss out!\"",
            "\"Invalid input\" — describe what's needed, not what's wrong",
          ]}
        />
      </Section>
    </>
  );
}
