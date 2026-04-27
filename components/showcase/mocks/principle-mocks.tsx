import { palette } from "@/lib/showcase-tokens";

const {
  P50,
  P200,
  P600,
  G100,
  G200,
  G300,
  G450,
  G550,
  G800,
  O50,
  O100,
  O600,
  O800,
  GN50,
  GN100,
  GN600,
  GN700,
  R600,
} = palette;

/** Common card frame for all the principle mocks. */
const cardBase: React.CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  width: 280,
  fontFamily: "var(--font-sans)",
};

/* ──────────────── 01 · Clear over clever ──────────────── */

export function ClearNot() {
  return (
    <div style={{ ...cardBase, padding: 20, border: `1px solid ${G200}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 10 }}>
        <div>
          <div style={{ fontSize: 10, color: G300, marginBottom: 3 }}>PREMIUM PLUS SHIELD PRO</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: G800 }}>Comprehensive Coverage*</div>
        </div>
        <div
          style={{
            background: "linear-gradient(135deg,#F59E0B,#EF4444)",
            color: "#fff",
            fontSize: 9,
            fontWeight: 700,
            padding: "3px 8px",
            borderRadius: 4,
            whiteSpace: "nowrap",
          }}
        >
          BESTSELLER!
        </div>
      </div>
      <div style={{ fontSize: 24, fontWeight: 800, color: G800 }}>
        ₹4,999<span style={{ fontSize: 11, color: G300 }}>*</span>
      </div>
      <div style={{ fontSize: 9, color: G300, marginBottom: 10 }}>
        *T&amp;C apply. Starting price. Final premium may vary.
      </div>
      <div
        style={{
          fontSize: 10,
          color: G450,
          lineHeight: 1.5,
          padding: 10,
          background: G100,
          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        Subject to IDV, NCB, zero-dep rider exclusions as per clause 4.2(b). Coverage terms governed by master policy
        document.
      </div>
      <button
        style={{
          width: "100%",
          padding: 10,
          background: P600,
          color: "#fff",
          border: "none",
          borderRadius: 9999,
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        Buy now →
      </button>
    </div>
  );
}

export function ClearYes() {
  return (
    <div style={{ ...cardBase, padding: 20, border: "1px solid #D1FAE5" }}>
      <div
        style={{
          fontSize: 10,
          fontWeight: 600,
          color: GN700,
          letterSpacing: "0.06em",
          marginBottom: 4,
        }}
      >
        CAR INSURANCE
      </div>
      <div style={{ fontSize: 17, fontWeight: 700, color: G800, lineHeight: 1.3, marginBottom: 14 }}>
        Full coverage for your Swift
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
        <span style={{ fontSize: 28, fontWeight: 700, color: G800 }}>₹4,999</span>
        <span style={{ fontSize: 13, color: G450 }}>/ year</span>
      </div>
      <div style={{ fontSize: 12, color: GN600, fontWeight: 500, marginBottom: 16 }}>
        Your final price. No hidden fees.
      </div>
      {[
        "Covers theft, accidents, natural damage",
        "Zero-depreciation included",
        "24/7 roadside help",
      ].map((t) => (
        <div
          key={t}
          style={{
            display: "flex",
            gap: 8,
            alignItems: "start",
            marginBottom: 8,
            fontSize: 12,
            color: G550,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden>
            <circle cx="7" cy="7" r="7" fill={GN100} />
            <path
              d="M4 7l2 2 4-4"
              stroke={GN700}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          {t}
        </div>
      ))}
    </div>
  );
}

/* ──────────────── 02 · Effortless by default ──────────────── */

export function EffortNot() {
  return (
    <div style={{ ...cardBase, padding: 18, border: `1px solid ${G200}` }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: G800, marginBottom: 12 }}>
        Buy car insurance (Step 1 of 7)
      </div>
      {[
        "Full name",
        "Father's full name",
        "Date of birth",
        "Gender",
        "Marital status",
        "Occupation",
        "Annual income",
        "PAN number",
      ].map((f) => (
        <div key={f} style={{ marginBottom: 6 }}>
          <div style={{ fontSize: 9, color: G450, marginBottom: 2 }}>
            {f} <span style={{ color: R600 }}>*</span>
          </div>
          <div style={{ height: 22, background: G100, border: `1px solid ${G200}`, borderRadius: 6 }} />
        </div>
      ))}
    </div>
  );
}

export function EffortYes() {
  return (
    <div style={{ ...cardBase, padding: 20, border: `1px solid ${P200}` }}>
      <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
        <div style={{ flex: 1, height: 3, background: P600, borderRadius: 2 }} />
        <div style={{ flex: 1, height: 3, background: P600, borderRadius: 2 }} />
        <div style={{ flex: 1, height: 3, background: G200, borderRadius: 2 }} />
      </div>
      <div style={{ fontSize: 11, color: G450, marginBottom: 4 }}>Step 2 of 3</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: G800, marginBottom: 4, lineHeight: 1.3 }}>
        What&apos;s your car number?
      </div>
      <div style={{ fontSize: 12, color: G450, marginBottom: 16 }}>
        We&apos;ll fetch the rest automatically.
      </div>
      <div
        style={{
          padding: "14px 16px",
          border: `2px solid ${P600}`,
          borderRadius: 12,
          marginBottom: 14,
          background: P50,
        }}
      >
        <div
          style={{
            fontSize: 10,
            color: P600,
            fontWeight: 600,
            marginBottom: 2,
            letterSpacing: "0.04em",
          }}
        >
          CAR NUMBER
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: G800,
            letterSpacing: "0.08em",
            fontFamily: "monospace",
          }}
        >
          KL 10 AB 1234
        </div>
      </div>
      <div
        style={{
          padding: "10px 12px",
          background: GN50,
          border: `1px solid ${GN100}`,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
          <circle cx="7" cy="7" r="7" fill={GN600} />
          <path
            d="M4 7l2 2 4-4"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <div style={{ fontSize: 12, color: GN700 }}>Maruti Swift VXi · 2022 · detected</div>
      </div>
    </div>
  );
}

/* ──────────────── 03 · Present when it matters ──────────────── */

export function PresentNot() {
  return (
    <div style={{ ...cardBase, padding: 20, border: `1px solid ${G200}` }}>
      <div style={{ fontSize: 10, color: G300, marginBottom: 4, letterSpacing: "0.04em" }}>
        TICKET #CLM-887341-XZ
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: G800, marginBottom: 14 }}>Status: UNDER PROCESSING</div>
      <div
        style={{
          padding: 12,
          background: G100,
          border: `1px solid ${G200}`,
          borderRadius: 8,
          fontSize: 10,
          color: G450,
          lineHeight: 1.5,
          marginBottom: 16,
        }}
      >
        Your claim has been submitted successfully. TAT: 7–14 business days. For queries, contact
        support@example.com quoting the ticket ID.
      </div>
      <div style={{ height: 6, background: G200, borderRadius: 3, marginBottom: 8 }}>
        <div style={{ width: "30%", height: "100%", background: G300, borderRadius: 3 }} />
      </div>
      <div style={{ fontSize: 10, color: G300 }}>30% complete</div>
      <div style={{ height: 80 }} />
    </div>
  );
}

export function PresentYes() {
  const steps: Array<{ l: string; d?: boolean; a?: boolean }> = [
    { l: "Claim received", d: true },
    { l: "Documents verified", d: true },
    { l: "Surveyor arrives tomorrow", a: true },
    { l: "Payout to your account" },
  ];
  return (
    <div style={{ ...cardBase, padding: 20, border: `1px solid ${O100}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: O50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path
              d="M9 2C5 2 2 5 2 9c0 2 1 4 2 5l-1 2 3-1c1 1 2 1 3 1 4 0 7-3 7-7s-3-7-7-7z"
              stroke={O600}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: G800 }}>We&apos;ve got this, Fahiz.</div>
          <div style={{ fontSize: 11, color: O800 }}>Your claim is in progress</div>
        </div>
      </div>
      <div style={{ padding: 14, background: O50, borderRadius: 12, marginBottom: 14 }}>
        <div style={{ fontSize: 11, color: O800, marginBottom: 10, fontWeight: 500 }}>
          What&apos;s happening right now
        </div>
        {steps.map((s, i) => (
          <div
            key={s.l}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: i < steps.length - 1 ? 10 : 0,
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: s.d ? O600 : s.a ? "#fff" : G200,
                border: s.a ? `2px solid ${O600}` : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {s.d && (
                <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                  <path
                    d="M2 5l2 2 4-4"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              )}
              {s.a && (
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: O600 }} />
              )}
            </div>
            <div
              style={{
                fontSize: 12,
                color: s.d || s.a ? G800 : G300,
                fontWeight: s.a ? 600 : 400,
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 12, color: G550, lineHeight: 1.5 }}>
        Priya from our team will call you by 3pm today.
      </div>
    </div>
  );
}

/* ──────────────── 04 · Respectful of time ──────────────── */

export function RespNot() {
  return (
    <div style={{ ...cardBase, padding: 16, border: `1px solid ${G200}` }}>
      <div
        style={{
          padding: 12,
          background: "linear-gradient(135deg,#F59E0B,#EF4444)",
          borderRadius: 10,
          color: "#fff",
          marginBottom: 8,
        }}
      >
        <div style={{ fontSize: 11, fontWeight: 700 }}>LIMITED TIME!</div>
        <div style={{ fontSize: 10 }}>Upgrade to Premium NOW</div>
      </div>
      <div style={{ padding: 12, background: "#DBEAFE", borderRadius: 10, marginBottom: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#1E40AF" }}>New: Health Insurance</div>
        <div style={{ fontSize: 10, color: "#1E40AF" }}>Get covered today!</div>
      </div>
      <div style={{ padding: 12, background: "#FEF3C7", borderRadius: 10, marginBottom: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#92400E" }}>Refer &amp; earn ₹500</div>
      </div>
      <div style={{ fontSize: 11, color: G300, textAlign: "center", padding: "12px 0" }}>
        Your policy · Tap to view
      </div>
    </div>
  );
}

export function RespYes() {
  return (
    <div style={{ ...cardBase, padding: 20, border: `1px solid ${P200}` }}>
      <div style={{ fontSize: 11, color: G450, marginBottom: 4 }}>Good morning, Fahiz</div>
      <div style={{ fontSize: 17, fontWeight: 700, color: G800, marginBottom: 16, lineHeight: 1.3 }}>
        Your car insurance renews in 12 days
      </div>
      <div style={{ padding: 14, background: P50, borderRadius: 12, marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <div style={{ fontSize: 11, color: P600 }}>This year&apos;s price</div>
          <div style={{ fontSize: 11, color: GN600, fontWeight: 600 }}>₹400 less</div>
        </div>
        <div style={{ fontSize: 24, fontWeight: 700, color: G800 }}>₹4,599</div>
        <div style={{ fontSize: 11, color: G450 }}>Same cover. No claims bonus applied.</div>
      </div>
      <button
        style={{
          width: "100%",
          padding: 12,
          background: P600,
          color: "#fff",
          border: "none",
          borderRadius: 9999,
          fontSize: 13,
          fontWeight: 600,
          marginBottom: 8,
        }}
      >
        Renew in one tap
      </button>
      <div style={{ fontSize: 11, color: G450, textAlign: "center" }}>
        Or review details · Takes 30 seconds
      </div>
    </div>
  );
}
