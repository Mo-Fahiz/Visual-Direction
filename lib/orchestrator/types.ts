export type OrchestratorLink = {
  href: string;
  title: string;
  description?: string;
};

export type OrchestratorResult = {
  summary: string;
  links: OrchestratorLink[];
  kind: "hex" | "topic" | "fallback";
};
