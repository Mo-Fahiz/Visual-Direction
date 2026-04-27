import type { Metadata } from "next";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Motion · Code",
};

export default function MotionCodePage() {
  return (
    <>
      <Section
        id="install"
        title="Install"
        description="ACKO motion ships as CSS custom properties first — works with vanilla CSS, Tailwind, and any JS animation library. The recommended JS library is `motion`."
      >
        <pre className="not-prose mb-6 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`# CSS-only — included in @acko/tokens
npm install @acko/tokens

# JS animation runtime (recommended)
npm install motion`}
        </pre>
      </Section>

      <Section
        id="css"
        title="CSS"
        description="Motion tokens are pure CSS. Reference them anywhere a transition, animation, or @keyframes shorthand would normally live."
      >
        <pre className="not-prose mb-6 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`:root {
  --ease-out-quad:     cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out-cubic:    cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-out-quart:    cubic-bezier(0.165, 0.84, 0.44, 1);
  --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
  --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
}

.acko-popover {
  animation: acko-menu-enter 150ms var(--ease-out-cubic);
}

@keyframes acko-menu-enter {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}`}
        </pre>
      </Section>

      <Section
        id="motion-react"
        title="React (motion)"
        description="The same bezier values work in motion's transition.ease — pass them as a four-tuple."
      >
        <pre className="not-prose mb-6 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`import { motion, AnimatePresence } from "motion/react";

export function Popover({ open, children }) {
  return (
    <AnimatePresence initial={false}>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{
            duration: 0.15,
            ease: [0.215, 0.61, 0.355, 1], // --ease-out-cubic
          }}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}`}
        </pre>
      </Section>

      <Section
        id="reduced-motion-code"
        title="Respecting reduced motion"
        description="Use the platform-native check. motion ships useReducedMotion(); CSS users get @media (prefers-reduced-motion: reduce)."
      >
        <pre className="not-prose mb-6 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`/* CSS */
@media (prefers-reduced-motion: reduce) {
  .acko-popover { animation: none; }
}

/* React */
import { useReducedMotion } from "motion/react";

const reduced = useReducedMotion();
const transition = reduced
  ? { duration: 0 }
  : { duration: 0.15, ease: [0.215, 0.61, 0.355, 1] };`}
        </pre>
      </Section>

      <Section id="resources" title="Resources">
        <ResourceCards
          resources={[
            {
              title: "motion (React)",
              href: "https://motion.dev/docs/react-quick-start",
              meta: "Docs · API",
              external: true,
            },
            {
              title: "Cubic-bezier playground",
              href: "https://cubic-bezier.com",
              meta: "Tool",
              external: true,
            },
            {
              title: "WCAG · Animation",
              href: "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
              meta: "Spec",
              external: true,
            },
          ]}
        />
      </Section>
    </>
  );
}
