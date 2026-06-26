import { alertLight, badgeSolidLight, primitiveHex } from "@/lib/color-tokens";

type BadgeColor = keyof typeof badgeSolidLight;
type AlertVariant = keyof typeof alertLight;

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  );
}

const ALERT_ICONS = {
  info: InfoIcon,
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon,
} as const;

/** Mirrors @acko/alert — acko-alert + variant classes from packages/css/src/alert.css */
function DocAlert({
  variant,
  title,
  children,
}: {
  variant: AlertVariant;
  title: string;
  children: string;
}) {
  const palette = alertLight[variant];
  const Icon = ALERT_ICONS[variant];

  return (
    <div
      role="alert"
      className="flex w-full items-start gap-3 rounded-[16px] border p-3"
      style={{
        backgroundColor: palette.bg,
        borderColor: palette.border,
        color: palette.text,
      }}
    >
      <span className="mt-0.5 shrink-0" aria-hidden>
        <Icon />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] font-semibold">{title}</p>
        <p className="truncate text-[12px]" style={{ color: primitiveHex("grey-700") }}>
          {children}
        </p>
      </div>
    </div>
  );
}

type BadgeVariant = "solid" | "outline" | "dot";

/** Mirrors @acko/badge — gradient solid/dot from packages/css/src/badge.css */
function DocBadge({
  color,
  variant = "solid",
  children,
}: {
  color: BadgeColor;
  variant?: BadgeVariant;
  children: string;
}) {
  const solid = badgeSolidLight[color];

  if (variant === "outline") {
    const outlineColor: Record<BadgeColor, string> = {
      purple: primitiveHex("purple-600"),
      green: primitiveHex("lime-600"),
      blue: primitiveHex("blue-600"),
      orange: primitiveHex("orange-600"),
      gray: primitiveHex("grey-600"),
    };

    return (
      <span
        className="inline-flex items-center gap-1 rounded-full border px-2 py-1.5 text-[12px] font-medium uppercase tracking-[0.04em]"
        style={{
          color: outlineColor[color],
          borderColor: outlineColor[color],
          backgroundColor: "transparent",
        }}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2 py-1.5 text-[12px] font-medium uppercase tracking-[0.04em]"
      style={{
        background: `linear-gradient(0deg, ${solid.from}, ${solid.to})`,
        borderColor: solid.border,
        color: solid.text,
      }}
    >
      {variant === "dot" ? (
        <span
          className="size-1.5 shrink-0 rounded-full"
          style={{ backgroundColor: "currentColor" }}
          aria-hidden
        />
      ) : null}
      {children}
    </span>
  );
}

const BADGE_CODE = `<Badge variant="solid" color="purple">Active</Badge>
<Badge variant="outline" color="green">Renewed</Badge>
<Badge variant="dot" color="orange">Pending</Badge>`;

const ALERT_CODE = `<Alert variant="info" title="Policy updated">
  Your coverage details changed on 12 Mar.
</Alert>
<Alert variant="success" title="Payment received">
  ₹2,499 confirmed. Receipt sent by email.
</Alert>
<Alert variant="warning" title="Renewal due soon">
  Your policy expires in 14 days.
</Alert>
<Alert variant="error" title="Could not save">
  Check your connection and try again.
</Alert>`;

/**
 * Live badge + alert examples using production token values from @acko/css.
 * Component API matches packages/alert and packages/badge in the Storybook playground.
 */
export function ColorComponentExamples() {
  return (
    <div className="not-prose space-y-10">
      <section>
        <h3 className="mb-1 text-[15px] font-semibold text-[#1F1F23]">Badge</h3>
        <p className="mb-4 text-[13px] leading-relaxed text-[#5C616B]">
          From{" "}
          <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 font-mono text-[11px]">
            @acko/badge
          </code>
          . Solid badges use a vertical gradient (
          <code className="font-mono text-[11px]">gradient-from → gradient-to</code>
          ) plus a 1px border token. Outline and dot variants share the same colour
          system.
        </p>
        <div className="rounded-[14px] border border-[#E4E5E9] bg-white p-5">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8F8E92]">
            Solid · outline · dot
          </p>
          <div className="flex flex-wrap gap-2">
            <DocBadge color="purple" variant="solid">
              Active
            </DocBadge>
            <DocBadge color="green" variant="outline">
              Renewed
            </DocBadge>
            <DocBadge color="orange" variant="dot">
              Pending
            </DocBadge>
            <DocBadge color="blue" variant="solid">
              New
            </DocBadge>
            <DocBadge color="gray" variant="solid">
              Draft
            </DocBadge>
          </div>
          <p className="mt-4 mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8F8E92]">
            Status colours
          </p>
          <div className="flex flex-wrap gap-2">
            <DocBadge color="purple" variant="solid">
              Info
            </DocBadge>
            <DocBadge color="green" variant="solid">
              Success
            </DocBadge>
            <DocBadge color="orange" variant="solid">
              Warning
            </DocBadge>
            <DocBadge color="purple" variant="outline">
              Expiring
            </DocBadge>
          </div>
        </div>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
          {BADGE_CODE}
        </pre>
      </section>

      <section>
        <h3 className="mb-1 text-[15px] font-semibold text-[#1F1F23]">Alert</h3>
        <p className="mb-4 text-[13px] leading-relaxed text-[#5C616B]">
          From{" "}
          <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 font-mono text-[11px]">
            @acko/alert
          </code>
          . Four variants map to feedback theme tokens — info uses purple, not
          blue. Radius 16px, 12px padding, 20px icon.
        </p>
        <div className="space-y-3 rounded-[14px] border border-[#E4E5E9] bg-white p-5">
          <DocAlert variant="info" title="Policy updated">
            Your coverage details changed on 12 Mar.
          </DocAlert>
          <DocAlert variant="success" title="Payment received">
            ₹2,499 confirmed. Receipt sent by email.
          </DocAlert>
          <DocAlert variant="warning" title="Renewal due soon">
            Your policy expires in 14 days.
          </DocAlert>
          <DocAlert variant="error" title="Could not save">
            Check your connection and try again.
          </DocAlert>
        </div>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
          {ALERT_CODE}
        </pre>
        <p className="mt-3 text-[12px] text-[#8F8E92]">
          Full prop tables and dismissible states in the{" "}
          <a
            href="https://mo-fahiz.github.io/Acko-Design-system/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#6841E6] hover:underline"
          >
            Storybook playground
          </a>
          .
        </p>
      </section>
    </div>
  );
}
