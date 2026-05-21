import type { Metadata } from "next";
import { Section } from "@/components/docs/Section";
import { PageTable } from "@/components/docs/PageTable";
import { CodeChip } from "@/components/docs/CodeChip";
import { vocabularyTerms, indianEnglishRules } from "@/lib/voice-tokens";

export const metadata: Metadata = {
  title: "Voice & tone · Vocabulary",
};

export default function VocabularyPage() {
  return (
    <>
      <Section
        id="insurance-terms"
        title="Insurance terminology"
        description="Preferred phrasing for terms customers encounter. On first use, expand the acronym with a plain-language explanation. After that, the abbreviation is fine."
      >
        <PageTable
          headers={["Term", "Preferred phrasing", "Avoid", "Why"]}
          colWidths={["12%", "30%", "25%", "33%"]}
          rows={vocabularyTerms.map((v) => [
            <CodeChip key={v.term}>{v.term}</CodeChip>,
            v.preferred,
            <span key={`a-${v.term}`} className="text-[#dc2626]">{v.avoid}</span>,
            v.reason,
          ])}
        />
      </Section>

      <Section
        id="indian-english"
        title="Indian English conventions"
        description="ACKO serves the Indian market. These rules ensure copy feels local and accurate."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground space-y-2">
          {indianEnglishRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </Section>

      <Section
        id="casing"
        title="Casing quick reference"
        description="Sentence case is the default across all UI. See Typography → Usage for the full rule."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground space-y-2">
          <li><strong>Always caps:</strong> ACKO, IRDAI, IDV, NCB, KYC, GST, EMI, OTP, PAN</li>
          <li><strong>Standard capitalisation:</strong> City names, state names, person names, Aadhaar</li>
          <li><strong>Always lowercase</strong> (unless starting a sentence): premium, claim, policy, cover, deductible</li>
          <li><strong>All-caps emphasis</strong> (FREE, NEW) belongs in Badge components only — never in labels or buttons</li>
        </ul>
      </Section>
    </>
  );
}
