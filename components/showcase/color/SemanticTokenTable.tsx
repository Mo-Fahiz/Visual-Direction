import { CodeChip } from "@/components/docs/CodeChip";
import type { SemanticGroup } from "@/lib/color-tokens";
import { ColorSwatch } from "./ColorSwatch";

type Props = {
  group: SemanticGroup;
};

/**
 * Live semantic-token table: token chip · role · light swatch+hex · dark swatch+hex.
 */
export function SemanticTokenTable({ group }: Props) {
  return (
    <div className="not-prose -mx-4 mb-6 overflow-x-auto md:mx-0">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-y border-border bg-white/50">
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-muted">
              Token
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-muted">
              Role
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-muted">
              Light
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-muted">
              Dark
            </th>
          </tr>
        </thead>
        <tbody>
          {group.tokens.map((t) => (
            <tr
              key={t.token}
              className="border-b border-border/70 align-middle last:border-b-0"
            >
              <td className="px-4 py-3">
                <CodeChip>{t.token}</CodeChip>
              </td>
              <td className="px-4 py-3 text-foreground">{t.role}</td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center gap-3">
                  <ColorSwatch hex={t.light} size={28} />
                  <span className="font-mono text-xs text-muted">
                    {t.light}
                  </span>
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center gap-3">
                  <ColorSwatch hex={t.dark} size={28} />
                  <span className="font-mono text-xs text-muted">
                    {t.dark}
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
