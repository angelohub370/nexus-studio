import { Resend } from "resend";
import { siteConfig } from "./site.config";
import {
  buildConfirmationEmailHtml,
  buildContactEmailHtml,
  type ContactSubmission,
} from "./contact";
import { getContactToEmail, getResendApiKey } from "./env.server";

const FROM = "Nexus Studio <contact@nexusstudio.digital>";
const REPLY_TO = "contact@nexusstudio.digital";

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
  const internalTo = getContactToEmail() ?? siteConfig.contact.email;

  const internalResult = await resend.emails.send({
    from: FROM,
    to: [internalTo],
    replyTo: data.email,
    subject: `[${siteConfig.name}] Mesaj nou de la ${data.name}`,
    html: buildContactEmailHtml(data),
  });

  if (internalResult.error) {
    return {
      success: false,
      error: internalResult.error.message ?? "Failed to send notification email.",
    };
  }

  const confirmationResult = await resend.emails.send({
    from: FROM,
    to: [data.email],
    replyTo: REPLY_TO,
    subject: `[${siteConfig.name}] We received your message`,
    html: buildConfirmationEmailHtml(data),
  });

  if (confirmationResult.error) {
    return {
      success: false,
      error:
        confirmationResult.error.message ??
        "Failed to send confirmation email.",
    };
  }

  return { success: true };
}
