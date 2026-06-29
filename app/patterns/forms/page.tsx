import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTable } from "@/components/docs/PageTable";
import { PlaceholderCarousel } from "@/components/docs/PlaceholderCarousel";
import { PlaceholderImage } from "@/components/docs/PlaceholderImage";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Forms",
};

export default function FormsPage() {
  return (
    <article className="doc-prose">
      <Breadcrumbs
        trail={[
          { label: "Components & patterns" },
          { label: "Forms" },
        ]}
      />
      <PageHeader
        title="Forms"
        description="Insurance is 80% forms. Validation timing, error voice, progressive disclosure, and step structure are where most of the brand promise gets kept or broken."
      />

      <Section
        id="validation"
        title="Validation timing"
        description="Validate at the moment that&apos;s most helpful — not the moment that&apos;s easiest to code."
      >
        <PageTable
          headers={["Trigger", "Use for", "Avoid for"]}
          colWidths={["28%", "36%", "36%"]}
          rows={[
            ["On blur (after leaving a field)", "Most fields — email, phone, name, IDs", "First-time entry on first field"],
            ["On submit", "Final check, server-side validations", "Anything the user could fix immediately"],
            ["On change (live)", "Strong-password meters, formatted IDs (Aadhaar, PAN, IFSC)", "General input — too noisy"],
            ["Never", "—", "Auto-submit on Enter inside multi-field forms"],
          ]}
        />
      </Section>

      <Section
        id="error-voice"
        title="Error voice"
        description="Errors are help, not blame. Follow the framework from Voice patterns: what happened, why (if non-obvious), what to do next."
      >
        <PageTable
          headers={["Wrong", "Right"]}
          colWidths={["50%", "50%"]}
          rows={[
            ["Invalid email", "Check the email address — try removing the extra space."],
            ["Required", "Please add your registered phone number to continue."],
            ["Error 422", "We couldn&apos;t reach the bank server. Try again in a moment."],
            ["Password too weak", "Add at least one number to make your password stronger."],
          ]}
        />
      </Section>

      <Section
        id="multi-step"
        title="Multi-step flows"
        description="Insurance quotes, claims, and onboarding are multi-step by nature. Make progress visible and reversible."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Progress indicator:</strong> show position (step 2 of 5)
            and step names — not just a bar.
          </li>
          <li>
            <strong>Back navigation:</strong> always allowed without losing
            entered data.
          </li>
          <li>
            <strong>Save draft:</strong> available from step 2 onwards on any
            flow longer than 4 steps.
          </li>
          <li>
            <strong>Persistent summary:</strong> on flows where context matters
            (quote, claim), pin a summary card showing what&apos;s been
            captured so far.
          </li>
          <li>
            <strong>Final review:</strong> last step before submit lets the
            user review and edit each section.
          </li>
        </ul>
        <PlaceholderImage
          label="Multi-step quote flow — 5-step indicator with named steps top, current step content centre, persistent summary card right, primary CTA bottom-right, secondary &lsquo;Back&rsquo; bottom-left."
          size="tall"
        />
      </Section>

      <Section
        id="progressive"
        title="Progressive disclosure"
        description="Ask one thing at a time. Reveal the next only when the previous is answered."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            Forms reveal fields as they become relevant — not all upfront.
          </li>
          <li>
            Conditional fields appear inline with a soft 200ms fade-down. They
            don&apos;t shove the page.
          </li>
          <li>
            Optional fields collapse behind a &ldquo;More options&rdquo; link.
          </li>
          <li>
            Never disable a CTA without telling the user what&apos;s missing.
            Either guide them, or let them click and validate.
          </li>
        </ul>
      </Section>

      <Section
        id="layout"
        title="Field layout"
        description="One field per row on mobile, max two per row on desktop, paired by semantic group."
      >
        <PageTable
          headers={["Pattern", "Use", "Spacing"]}
          colWidths={["28%", "44%", "28%"]}
          rows={[
            ["Single column", "Default for all flows", "16px between fields"],
            ["Paired (City + State, First + Last)", "Logically grouped fields", "12px horizontal, 16px vertical"],
            ["Stacked label", "Default for all inputs", "8px between label and input"],
            ["Inline label", "Rare — only fixed numeric (₹, %, kg)", "12px between label and input"],
          ]}
        />
      </Section>

      <Section
        id="examples"
        title="Form patterns"
        description="Auto-cycling through canonical form patterns."
      >
        <PlaceholderCarousel
          slides={[
            {
              name: "Single column — sign up",
              description: "Stacked fields, primary CTA full-width at the bottom, secondary link below the CTA, helper text in muted grey under each input.",
            },
            {
              name: "Multi-step — auto quote",
              description: "5-step progress at the top, current step content centred, persistent summary on the right showing vehicle + cover so far.",
            },
            {
              name: "Inline validation — success state",
              description: "Email field showing a success checkmark on the right, muted helper text confirming the email is recognised.",
            },
            {
              name: "Inline validation — error state",
              description: "Phone field with red border, error message below in semantic-danger colour, focus ring still visible.",
            },
            {
              name: "Conditional fields — claim type",
              description: "Selecting &lsquo;Accident&rsquo; reveals 3 follow-up fields in a 200ms fade-down. Selecting another type swaps them.",
            },
            {
              name: "Final review — confirm and submit",
              description: "Read-only summary of all entered data grouped by step, &lsquo;Edit&rsquo; affordance per section, primary &lsquo;Submit policy&rsquo; CTA at the bottom.",
            },
          ]}
        />
      </Section>

      <Section
        id="do-dont"
        title="Do and don&apos;t"
      >
        <DoDont
          doItems={[
            "Validate on blur for most fields; on submit as a final check.",
            "Allow back navigation without losing entered data.",
            "Reveal conditional fields inline with a soft fade-down.",
            "Write error messages that name the fix, not just the failure.",
          ]}
          dontItems={[
            "Validate on every keystroke (except specific formatted IDs).",
            "Disable the submit CTA without telling the user why.",
            "Stack all optional fields visibly — collapse them behind a link.",
            "Use &lsquo;Submit&rsquo; as a CTA label — name the outcome (&lsquo;Buy policy&rsquo;, &lsquo;File claim&rsquo;).",
          ]}
        />
      </Section>

      <Section id="related" title="Related">
        <ResourceCards
          resources={[
            { title: "Form field (molecule)", href: "/patterns/form-field", meta: "Components" },
            { title: "Voice — patterns", href: "/foundations/voice/patterns", meta: "Voice and tone" },
            { title: "CTA hierarchy", href: "/foundations/cta-hierarchy", meta: "Components & patterns" },
            { title: "Onboarding pattern", href: "/patterns/pages/onboarding", meta: "Page patterns" },
          ]}
        />
      </Section>
    </article>
  );
}
