import type { Metadata } from "next";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Colour · Code",
};

export default function ColorCodePage() {
  return (
    <>
      <Section
        id="install"
        title="Install"
        description="The token CSS is generated from the same source the Figma library reads. Pull it via npm and import once at the application root."
      >
        <pre className="not-prose mb-6 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`# inside your product app
npm install @acko/tokens`}
        </pre>
      </Section>

      <Section
        id="css"
        title="CSS custom properties"
        description="The simplest integration — works with any framework, no JS required."
      >
        <pre className="not-prose mb-6 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`/* app.css */
@import "@acko/tokens/css/light.css";
@import "@acko/tokens/css/dark.css";

/* index.html or your <html> root */
<html data-theme="acko-light">

/* component */
.acko-btn-primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  border-radius: var(--radius-md);
}
.acko-btn-primary:hover {
  background-color: var(--color-primary-hover);
}`}
        </pre>
      </Section>

      <Section
        id="tailwind"
        title="Tailwind"
        description="Tokens are exposed as Tailwind theme keys via the @theme inline declaration in globals.css. New tokens become Tailwind utilities automatically."
      >
        <pre className="not-prose mb-6 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`/* globals.css */
@theme inline {
  --color-primary: var(--color-primary);
  --color-surface: var(--color-surface);
}

/* JSX */
<button className="bg-primary text-on-primary hover:bg-primary-hover" />`}
        </pre>
      </Section>

      <Section
        id="react"
        title="React"
        description="Inline styles should still resolve through CSS variables — never hard-code a hex."
      >
        <pre className="not-prose mb-6 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`function Banner({ tone }: { tone: "info" | "error" }) {
  return (
    <div
      style={{
        backgroundColor:
          tone === "info"
            ? "var(--color-info-subtle)"
            : "var(--color-error-subtle)",
        color:
          tone === "info"
            ? "var(--color-info-text)"
            : "var(--color-error-text)",
        border: \`1px solid var(--color-\${tone}-border)\`,
      }}
    />
  );
}`}
        </pre>
      </Section>

      <Section
        id="theming"
        title="Theming"
        description="Switch themes by changing the data-theme attribute on the html element. No re-render is needed."
      >
        <pre className="not-prose mb-6 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`function setTheme(theme: "acko-light" | "acko-dark") {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("acko-theme", theme);
}`}
        </pre>
      </Section>

      <Section id="resources" title="Resources">
        <ResourceCards
          resources={[
            {
              title: "Token JSON (source)",
              href: "https://github.com/rahulpramod-stack/DS",
              meta: "GitHub · /data/tokens.json",
              external: true,
            },
            {
              title: "Token CSS (build output)",
              href: "https://github.com/rahulpramod-stack/DS",
              meta: "@acko/tokens · CSS",
              external: true,
            },
            {
              title: "Figma library",
              href: "https://www.figma.com",
              meta: "Variables: Color/Light + Color/Dark",
              external: true,
            },
          ]}
        />
      </Section>
    </>
  );
}
