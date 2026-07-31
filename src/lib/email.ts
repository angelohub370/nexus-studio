import { Resend } from "resend";
import { siteConfig } from "./site.config";
import { buildContactEmailHtml, type ContactSubmission } from "./contact";
import {
  getContactToEmail,
  getResendApiKey,
  getResendFromEmail,
} from "./env.server";

export async function sendContactEmail(
  data: ContactSubmission
): Promise<{ success: true } | { success: false; error: string }> {
  const apiKey = getResendApiKey();

  if (!apiKey) {
    return {
      success: false,
      error: "RESEND_API_KEY is not configured on the server.",
    };
  }

  const resend = new Resend(apiKey);
  const to = getContactToEmail() ?? siteConfig.contact.email;
  const from =
    getResendFromEmail() ?? "Nexus Studio <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `[${siteConfig.name}] Mesaj nou de la ${data.name}`,
    html: buildContactEmailHtml(data),
  });

  if (error) {
    return {
      success: false,
      error: error.message ?? "Failed to send email.",
    };
  }

  return { success: true };
}
