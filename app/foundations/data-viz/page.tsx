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
  title: "Data visualisation",
};

export default function DataVizPage() {
  return (
    <article className="doc-prose">
      <Breadcrumbs
        trail={[
          { label: "Design system foundations" },
          { label: "Data visualisation" },
        ]}
      />
      <PageHeader
        title="Data visualisation"
        description="Charts, tables, and metric tiles inherit from the same colour and typography system. Restrained palette, generous spacing, accessible by default."
      />

      <Section
        id="palette"
        title="Chart palette"
        description="Two palettes — sequential for ordered data, categorical for distinct series. Never reach outside them."
      >
        <h3 className="mt-8 text-[1.125rem] font-semibold tracking-[-0.01em] text-foreground">
          Sequential — purple ramp
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
          For ordered or magnitude-based data. Use 4–7 steps from the purple ramp.
        </p>
        <PageTable
          headers={["Step", "Token", "Use"]}
          colWidths={["20%", "32%", "48%"]}
          rows={[
            ["1", "purple-50", "Lowest bin"],
            ["2", "purple-200", ""],
            ["3", "purple-400", ""],
            ["4", "purple-600", "ACKO Purple — midpoint"],
            ["5", "purple-800", ""],
            ["6", "purple-950", "Highest bin"],
          ]}
        />

        <h3 className="mt-10 text-[1.125rem] font-semibold tracking-[-0.01em] text-foreground">
          Categorical — four-vertical accents
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
          For distinct categorical series. Use the four vertical accents plus
          purple as the fifth category. Beyond five categories, the chart is too
          dense — reconsider the visualisation.
        </p>
        <PageTable
          headers={["Series", "Token", "Hex (light)"]}
          colWidths={["28%", "36%", "36%"]}
          rows={[
            ["Series 1 (Auto)", "--category-auto", "Sunshade yellow"],
            ["Series 2 (Health)", "--category-health", "Vivid cerise"],
            ["Series 3 (Life)", "--category-life", "Picton blue"],
            ["Series 4 (Travel)", "--category-travel", "Leafy green"],
            ["Series 5 (Master)", "--color-primary", "ACKO Purple #6841E6"],
          ]}
        />

        <h3 className="mt-10 text-[1.125rem] font-semibold tracking-[-0.01em] text-foreground">
          Semantic — feedback states
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
          Reserve these for charts that need to convey direction or threshold.
          Never mix semantic with categorical on the same series.
        </p>
        <PageTable
          headers={["Meaning", "Token", "Use"]}
          colWidths={["24%", "36%", "40%"]}
          rows={[
            ["Positive / growth", "--color-success", "Up-trend, settled claims"],
            ["Negative / decline", "--color-danger", "Down-trend, rejected claims"],
            ["Warning / approaching threshold", "--color-warning", "Renewal due, low balance"],
            ["Neutral / baseline", "--color-text-muted", "Reference lines, axes"],
          ]}
        />
      </Section>

      <Section
        id="chart-types"
        title="Chart type guide"
        description="Pick the right chart for the question. The palette is the easy part."
      >
        <PageTable
          headers={["Chart type", "Best for", "Avoid for"]}
          colWidths={["20%", "44%", "36%"]}
          rows={[
            ["Bar (vertical)", "Comparing 3–8 categories at a single point in time", "Time series, continuous data"],
            ["Bar (horizontal)", "Long category labels, ranked lists", "Time-axis data"],
            ["Line", "Trends over time, 1–4 series", "Categorical comparison"],
            ["Area", "Cumulative totals over time", "Many overlapping series"],
            ["Donut / pie", "Composition of a whole — max 5 segments", "Comparison, trend, >5 categories"],
            ["Sparkline", "Inline trend in a table cell or metric tile", "Standalone, primary chart"],
            ["Heatmap", "Density across two dimensions (e.g. day × hour)", "Continuous numeric magnitude"],
            ["Scatter", "Correlation between two variables", "Categorical data"],
          ]}
        />
      </Section>

      <Section
        id="axes-labels"
        title="Axes & labels"
        description="The fastest way to make a chart look ACKO is to get the type and axes right."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Type:</strong> Euclid Circular B, Regular 400 for labels,
            Semibold 600 for axis titles.
          </li>
          <li>
            <strong>Numerals:</strong> always tabular-nums on axis values so
            digits align column-wise.
          </li>
          <li>
            <strong>Axis size:</strong> 12px tick labels, 14px axis title,
            never below 10px.
          </li>
          <li>
            <strong>Casing:</strong> sentence case for axis titles, labels, and
            captions.
          </li>
          <li>
            <strong>Grid lines:</strong> 1px in grey-100; horizontal only on bar
            and line charts; turn off on cleaner displays.
          </li>
        </ul>
      </Section>

      <Section
        id="examples"
        title="Chart examples"
        description="Auto-cycling through canonical chart types in ACKO style."
      >
        <PlaceholderCarousel
          slides={[
            {
              name: "Bar chart — Claim settlement ratio by quarter",
              description: "Vertical bars in purple-600, soft grid lines horizontal, tabular axis numerals, takeaway line below the chart.",
            },
            {
              name: "Line chart — Premium trend by category",
              description: "Four lines in the categorical accent palette, 2px stroke, dot markers at each quarter, legend top-right.",
            },
            {
              name: "Donut chart — Policy mix",
              description: "Five segments using categorical accents, centre label showing total count, segment labels outside the donut.",
            },
            {
              name: "Sparkline in table cell",
              description: "Inline 80px-wide sparkline in a policy summary row, purple line, last-value dot, no axes.",
            },
            {
              name: "Heatmap — Claims by day × hour",
              description: "Sequential purple ramp from purple-50 to purple-950, monospace day labels left, hour labels bottom.",
            },
            {
              name: "Metric tile — Total settled",
              description: "Large display number (60px Bold), supporting label below, small delta indicator with up arrow in success colour.",
            },
          ]}
        />
      </Section>

      <Section
        id="accessibility"
        title="Accessibility"
        description="Colour alone is never the signal. Build for screen readers, colour blindness, and small screens from the start."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Contrast:</strong> all chart elements meet WCAG AA — 3:1
            against the surface for non-text, 4.5:1 for labels.
          </li>
          <li>
            <strong>Pattern fills:</strong> for print and accessibility,
            supplement colour with patterns (diagonal stripes, dots, hatches)
            on categorical series.
          </li>
          <li>
            <strong>Direct labels:</strong> when there are 5 or fewer
            categories, label data points directly rather than relying on a
            legend.
          </li>
          <li>
            <strong>Text alternative:</strong> every chart needs a one-sentence
            caption summarising the takeaway, available to screen readers.
          </li>
        </ul>
        <PlaceholderImage label="Accessibility reference — same bar chart shown with colour, with pattern fills, and a colour-blind-safe variant — proving the chart works without colour as the only signal." />
      </Section>

      <Section
        id="do-dont"
        title="Do and don&apos;t"
      >
        <DoDont
          doItems={[
            "Use the sequential purple ramp for ordered data; categorical accents for distinct series.",
            "Use tabular numerals on all axis and table values.",
            "Direct-label data points when there are 5 or fewer categories.",
            "Cite the data source under every chart in 12px caption weight.",
          ]}
          dontItems={[
            "Use 3D charts under any circumstances.",
            "Put more than 5 segments in a donut or pie.",
            "Truncate the Y-axis to dramatise a trend.",
            "Use colour as the only signal — pair with pattern or direct label.",
          ]}
        />
      </Section>

      <Section id="related" title="Related">
        <ResourceCards
          resources={[
            { title: "Colour", href: "/foundations/color", meta: "Design system" },
            { title: "Typography", href: "/foundations/typography", meta: "Design system" },
            { title: "Dark mode", href: "/foundations/color/dark-mode", meta: "Design system" },
            { title: "Accessibility", href: "/foundations/accessibility", meta: "Governance" },
          ]}
        />
      </Section>
    </article>
  );
}
