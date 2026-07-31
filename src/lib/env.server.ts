/** Server-only env vars — read at request time to avoid build-time inlining. */

function readEnv(key: string): string | undefined {
  const value = process.env[key];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function getResendApiKey(): string | undefined {
  return readEnv("RESEND_API_KEY");
}

export function getContactToEmail(): string | undefined {
  return readEnv("CONTACT_TO_EMAIL");
}

export function getResendFromEmail(): string | undefined {
  return readEnv("RESEND_FROM_EMAIL");
}
