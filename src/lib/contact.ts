import { siteConfig } from "./site.config";

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function validateContactBody(body: unknown): {
  success: true;
  data: ContactSubmission;
} | {
  success: false;
  error: string;
} {
  if (!body || typeof body !== "object") {
    return { success: false, error: "Invalid request body." };
  }

  const { name, email, phone, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return { success: false, error: "Name must be at least 2 characters." };
  }

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Invalid email address." };
  }

  if (phone !== undefined && phone !== "" && typeof phone !== "string") {
    return { success: false, error: "Invalid phone number." };
  }

  if (typeof message !== "string" || message.trim().length < 10) {
    return { success: false, error: "Message must be at least 10 characters." };
  }

  return {
    success: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      phone: typeof phone === "string" ? phone.trim() : undefined,
      message: message.trim(),
    },
  };
}

export function buildContactEmailHtml(data: ContactSubmission): string {
  return `
    <h2>New contact message — ${siteConfig.name}</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone || "—")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
