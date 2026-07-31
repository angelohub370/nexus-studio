import { promises as fs } from "fs";
import path from "path";
import type { ContactSubmission } from "./contact";

function getStorePath(): string {
  if (process.env.VERCEL) {
    return path.join("/tmp", "contact-submissions.json");
  }
  return path.join(process.cwd(), "data", "contact-submissions.json");
}

export async function saveContactSubmission(
  data: ContactSubmission
): Promise<void> {
  const storePath = getStorePath();
  await fs.mkdir(path.dirname(storePath), { recursive: true });

  let existing: Array<ContactSubmission & { createdAt: string }> = [];

  try {
    const raw = await fs.readFile(storePath, "utf-8");
    existing = JSON.parse(raw);
  } catch {
    existing = [];
  }

  existing.push({ ...data, createdAt: new Date().toISOString() });

  await fs.writeFile(storePath, JSON.stringify(existing, null, 2), "utf-8");
}
