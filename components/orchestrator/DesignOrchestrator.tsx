"use client";

import type { ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { OrchestratorLink, OrchestratorResult } from "@/lib/orchestrator/respond";

const STORAGE_KEY = "acko-ds-orchestrator-v1";
const MAX_MESSAGES = 50;
const MIN_TYPING_MS = 400;
const TYPING_JITTER_MS = 400;

type ChatTurn =
  | { id: string; role: "user"; text: string }
  | { id: string; role: "assistant"; result: OrchestratorResult }
  | { id: string; role: "assistant"; error: string };

function minTypingDelay(): Promise<void> {
  const ms = MIN_TYPING_MS + Math.random() * TYPING_JITTER_MS;
  return new Promise((r) => setTimeout(r, ms));
}

function loadHistory(): ChatTurn[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.slice(-MAX_MESSAGES) as ChatTurn[];
  } catch {
    return [];
  }
}

function saveHistory(rows: ChatTurn[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rows.slice(-MAX_MESSAGES)));
  } catch {
    /* ignore */
  }
}

function formatLine(line: string): ReactNode {
  const withCode = line.split(/(`[^`]+`)/g);
  return withCode.map((chunk, i) => {
    if (chunk.startsWith("`") && chunk.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded-md bg-[#EAEAFD] px-1.5 py-0.5 font-mono text-[0.9em] text-foreground/90"
        >
          {chunk.slice(1, -1)}
        </code>
      );
    }
    const withBold = chunk.split(/(\*\*[^*]+\*\*)/g);
    return withBold.map((b, j) => {
      if (b.startsWith("**") && b.endsWith("**")) {
        return (
          <strong key={`${i}-${j}`} className="font-semibold text-foreground">
            {b.slice(2, -2)}
          </strong>
        );
      }
      return b;
    });
  });
}

function SummaryView({ text }: { text: string }) {
  const paragraphs = text.split("\n\n");
  return (
    <div className="text-left text-sm leading-relaxed text-foreground/90">
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-3 last:mb-0">
          {p.split("\n").map((line, li) => (
            <span key={li}>
              {li > 0 ? <br /> : null}
              {formatLine(line)}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

function LinksRow({ links }: { links: OrchestratorLink[] }) {
  if (!links.length) return null;
  return (
    <div className="mt-4 border-t border-border pt-4">
      <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted">
        Explore in this system
      </p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.href + l.title}>
            <Link
              href={l.href}
              className="inline-flex max-w-full items-center gap-1 rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-foreground shadow-sm no-underline transition hover:border-foreground/25"
            >
              <span className="truncate">{l.title}</span>
              <span aria-hidden className="shrink-0 text-[var(--acko-purple)]">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="inline-flex items-center gap-1 rounded-2xl border border-border bg-white/90 px-4 py-3 shadow-sm">
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" />
      <span className="sr-only">Design system is preparing an answer</span>
    </div>
  );
}

function AssistantCard({ result }: { result: OrchestratorResult }) {
  return (
    <div className="rounded-2xl border border-border bg-white/90 p-5 text-left shadow-sm">
      <SummaryView text={result.summary} />
      <LinksRow links={result.links} />
    </div>
  );
}

function makeId() {
  return `m-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function DesignOrchestrator() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatTurn[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef(input);
  inputRef.current = input;

  useEffect(() => {
    setMessages(loadHistory());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveHistory(messages);
  }, [messages, hydrated]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const clearChat = useCallback(() => {
    setMessages([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const submit = useCallback(async () => {
    const q = inputRef.current.trim();
    if (!q || loading) return;
    const userId = makeId();
    setMessages((m) => [...m, { id: userId, role: "user", text: q }]);
    setInput("");
    setLoading(true);
    try {
      const [res] = await Promise.all([
        fetch("/api/orchestrator", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: q }),
        }),
        minTypingDelay(),
      ]);
      if (!res.ok) {
        const d = (await res.json().catch(() => ({}))) as { error?: string };
        setMessages((m) => [
          ...m,
          { id: makeId(), role: "assistant", error: d.error || `Request failed (${res.status})` },
        ]);
        return;
      }
      const data = (await res.json()) as OrchestratorResult;
      setMessages((m) => [...m, { id: makeId(), role: "assistant", result: data }]);
    } catch {
      setMessages((m) => [...m, { id: makeId(), role: "assistant", error: "Network error — try again." }]);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const empty = !messages.length;

  return (
    <section
      aria-label="Design Orchestrator"
      className="not-prose flex h-dvh max-h-dvh min-h-0 w-full flex-col overflow-hidden border-b border-border bg-background"
    >
      <div className="flex min-h-0 w-full flex-1 flex-col overflow-y-auto">
        <div className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 pt-6 pb-2 md:pt-10">
          {!empty ? (
            <div className="absolute right-0 top-6 z-10 md:top-10">
              <button
                type="button"
                onClick={clearChat}
                className="rounded-lg border border-border bg-white/80 px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-foreground/20"
              >
                New chat
              </button>
            </div>
          ) : null}
          <div className="w-full text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Design Orchestrator</p>
            <h1 className="mt-2 text-balance text-2xl font-medium tracking-[-0.02em] text-foreground md:text-3xl">
              {empty ? "What can we look up for you?" : "Continue the thread"}
            </h1>
            {empty ? (
              <p className="mt-2 text-balance text-sm text-muted">
                Query colours, type, motion, radii, and tokens from the published guidance on this site. Your
                conversation stays in this browser until you clear it.
              </p>
            ) : null}
          </div>

          {empty ? (
            <p className="mb-2 mt-6 text-center text-sm text-muted">
              e.g. “Is #398332 a colour?” &middot; “Type ramp step 5” &middot; “Is 99px corner radius OK?”
            </p>
          ) : null}

          <div className="mt-4 flex flex-1 flex-col gap-4 pb-4">
            {messages.map((turn) => (
              <div key={turn.id}>
                {turn.role === "user" ? (
                  <div className="flex justify-end">
                    <div className="max-w-[min(100%,32rem)] rounded-2xl border border-border bg-white px-4 py-3 text-left text-sm text-foreground shadow-sm">
                      {turn.text}
                    </div>
                  </div>
                ) : "error" in turn ? (
                  <div>
                    <p className="rounded-2xl border border-red-200 bg-red-50/80 px-4 py-3 text-sm text-red-800">
                      {turn.error}
                    </p>
                  </div>
                ) : (
                  <div className="flex justify-start">
                    <div className="w-full min-w-0 max-w-[min(100%,40rem)]">
                      <AssistantCard result={turn.result} />
                    </div>
                  </div>
                )}
              </div>
            ))}
            {loading ? (
              <div className="flex justify-start">
                <TypingIndicator />
              </div>
            ) : null}
            <div ref={bottomRef} className="h-px w-full shrink-0" aria-hidden />
          </div>
        </div>
      </div>

      <div className="w-full shrink-0 border-t border-border bg-background/90 px-3 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <form
          className="mx-auto w-full max-w-2xl px-1"
          onSubmit={(e) => {
            e.preventDefault();
            void submit();
          }}
        >
          <div className="flex h-12 items-center gap-2 overflow-hidden rounded-[1.4rem] border border-border bg-white px-3 pr-1.5 shadow-sm transition-shadow focus-within:border-foreground/15 focus-within:shadow-md md:h-[3.25rem]">
            <input
              type="text"
              name="q"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message the design system"
              autoComplete="off"
              className="min-w-0 flex-1 border-0 bg-transparent py-2 text-[15px] text-foreground placeholder:text-muted focus:outline-none focus:ring-0"
              aria-label="Message to the design system"
            />
            <button
              type="button"
              className="hidden shrink-0 p-1.5 text-muted sm:flex"
              title="Voice is not available here"
              disabled
              tabIndex={-1}
            >
              <span className="sr-only">Voice (not available)</span>
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v2"
                />
              </svg>
            </button>
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="ml-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--acko-purple)] text-white shadow-sm transition enabled:hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-35 md:h-10 md:w-10"
              title="Send"
              aria-label="Send"
            >
              {loading ? (
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white" />
              ) : (
                <ArrowUp className="h-4 w-4" strokeWidth={2.2} />
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
