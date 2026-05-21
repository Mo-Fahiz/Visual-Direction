import { GitHubPagesHome } from "@/components/docs/GitHubPagesHome";
import { DesignOrchestrator } from "@/components/orchestrator/DesignOrchestrator";

export default function HomePage() {
  if (process.env.NEXT_PUBLIC_GITHUB_PAGES === "true") {
    return <GitHubPagesHome />;
  }
  return <DesignOrchestrator />;
}
