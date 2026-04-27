import { NextResponse } from "next/server";
import { orchestrateUserMessage } from "@/lib/orchestrator/respond";

const MAX_LEN = 2000;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const msg =
    typeof body === "object" && body !== null && "message" in body
      ? String((body as { message: unknown }).message ?? "")
      : "";
  if (msg.length > MAX_LEN) {
    return NextResponse.json(
      { error: `Message must be at most ${MAX_LEN} characters` },
      { status: 400 }
    );
  }
  const result = orchestrateUserMessage(msg);
  return NextResponse.json(result);
}
