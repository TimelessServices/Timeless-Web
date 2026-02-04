import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function POST(req) {
  try {
    const payload = (await req.json()) || {};

    const formsparkURL = process.env.FORMSPARK_ENDPOINT;
    console.log("URL: " + formsparkURL);

    const body = new URLSearchParams();
    for (const [k, v] of Object.entries(payload)) {
        body.append(k, v == null ? "" : String(v));
    }

    const res = await fetch(process.env.FORMSPARK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
        redirect: "manual",
    });

    const location = res.headers.get("location") || "";
    const isSuccessRedirect = (res.status === 302 || res.status === 303) && location.includes("submitted.formspark.io");

    if (res.ok || isSuccessRedirect) {
        return NextResponse.json({ ok: true, upstreamStatus: res.status }, { status: 200 });
    }

    const text = await res.text().catch(() => "");
    return NextResponse.json(
      {
        ok: false,
        error: "Formspark rejected the submission",
        upstreamStatus: res.status,
        upstreamLocation: location,
        upstreamBodyPreview: text.slice(0, 300),
      },
      { status: 502 }
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}