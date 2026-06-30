import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTable } from "@/components/docs/PageTable";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Naming conventions",
};

export default function NamingPage() {
  return (
    <article className="doc-prose">
      <Breadcrumbs
        trail={[
          { label: "Brand identity" },
          { label: "Naming conventions" },
        ]}
      />
      <PageHeader
        title="Naming conventions"
        description="How we say ACKO, our products, our plans, and our legal entity in copy. Consistency in naming is the cheapest way to feel like one brand."
      />

      <Section
        id="product-naming"
        title="Product naming"
        description="The canonical form is &lsquo;ACKO + Category + Insurance&rsquo;. We never invert it (&lsquo;Insurance by ACKO&rsquo;), and we never compress it (&lsquo;ACKO Auto&rsquo; alone)."
      >
        <PageTable
          headers={["Use case", "Correct form", "Incorrect"]}
          colWidths={["28%", "36%", "36%"]}
          rows={[
            ["Marketing headline", "ACKO Car Insurance", "Car Insurance by ACKO · ACKO Auto"],
            ["Marketing headline", "ACKO Health Insurance", "Health by ACKO · ACKO Health"],
            ["Marketing headline", "ACKO Term Life Insurance", "Life Insurance by ACKO"],
            ["Marketing headline", "ACKO Travel Insurance", "Travel by ACKO · ACKO Travel"],
            ["Nav / UI shorthand", "Car insurance", "ACKO Car (when product context is obvious)"],
            ["First mention in body", "ACKO Car Insurance — full form", "Car insurance — needs ACKO prefix"],
          ]}
        />
        <p>
          UI nav and tab labels can drop the ACKO prefix once the user is
          already inside the product context (the sidebar already says ACKO).
          Customer-facing marketing copy always uses the full form on first
          mention.
        </p>
      </Section>

      <Section
        id="feature-naming"
        title="Feature naming"
        description="Features are written in Title Case when named, and in sentence case in surrounding body copy."
      >
        <PageTable
          headers={["Feature name (Title Case)", "Used as a noun", "Used in body copy (sentence case)"]}
          colWidths={["28%", "36%", "36%"]}
          rows={[
            ["Zero Depreciation", "Add Zero Depreciation to your plan.", "Cover parts at their invoice price with zero depreciation."],
            ["Cashless Claims", "Tap Cashless Claims to file.", "We settle most hospital bills as cashless claims."],
            ["No Claim Bonus", "Your No Claim Bonus is 35%.", "You keep your no claim bonus when you renew on time."],
            ["Roadside Assistance", "Activate Roadside Assistance.", "Need a tow? Use roadside assistance — it&apos;s included."],
          ]}
        />
      </Section>

      <Section
        id="legal-entity"
        title="Legal entity references"
        description="Customer copy says &lsquo;ACKO&rsquo;. Legal and regulatory copy says &lsquo;ACKO General Insurance Limited&rsquo;. Choose by surface, not by formality."
      >
        <PageTable
          headers={["Surface", "Form to use"]}
          colWidths={["40%", "60%"]}
          rows={[
            ["Homepage, marketing, social", "ACKO"],
            ["Product UI, claim flow, support chat", "ACKO"],
            ["Terms & Conditions, policy documents", "ACKO General Insurance Limited"],
            ["Footer disclaimer", "ACKO General Insurance Limited · IRDAI Reg. No. 157"],
            ["Press release first mention", "ACKO General Insurance Limited (&lsquo;ACKO&rsquo;)"],
          ]}
        />
        <p>
          Always include the IRDAI registration number (157) wherever the full
          legal name appears.
        </p>
      </Section>

      <Section
        id="capitalisation"
        title="Capitalisation in copy"
        description="&lsquo;ACKO&rsquo; is set in all-caps as a wordmark. The only exception is when it appears mid-sentence in continuous narrative prose where the visual rhythm of all-caps reads as shouting."
      >
        <DoDont
          doItems={[
            "Write ACKO in all-caps in marketing, headlines, UI, and legal references.",
            "Use Title Case for named features (Zero Depreciation, Cashless Claims).",
            "Use Title Case for named plans (ACKO Platinum, ACKO AirPass).",
            "Use sentence case in body copy, errors, and microcopy.",
          ]}
          dontItems={[
            "Write &lsquo;Acko&rsquo; in headlines or UI — it weakens the wordmark.",
            "Write the brand as &lsquo;A.C.K.O.&rsquo; with periods.",
            "Use ALL CAPS for body copy — only for the wordmark and brief labels.",
            "Switch capitalisation styles inside one page (Title Case in one CTA, sentence case in the next).",
          ]}
        />
      </Section>

      <Section id="related" title="Related">
        <ResourceCards
          resources={[
            { title: "Brand architecture", href: "/brand/architecture", meta: "Brand identity" },
            { title: "Voice and tone", href: "/foundations/voice", meta: "Media, content & voice" },
            { title: "Typography", href: "/foundations/typography", meta: "Design system" },
            { title: "Logo usage", href: "/foundations/logo", meta: "Brand identity" },
          ]}
        />
      </Section>
    </article>
  );
}
