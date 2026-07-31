import { NextResponse } from "next/server";
import { validateContactBody } from "@/lib/contact";
import { saveContactSubmission } from "@/lib/contact-store";
import { sendContactEmail } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = validateContactBody(body);

    if (!validated.success) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    try {
      await saveContactSubmission(validated.data);
    } catch {
      // Non-blocking: email delivery must work even if local storage fails (e.g. Vercel).
    }

    const emailResult = await sendContactEmail(validated.data);

    if (!emailResult.success) {
      return NextResponse.json(
        {
          error: emailResult.error,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Unexpected server error. Please try again." },
      { status: 500 }
    );
  }
}
