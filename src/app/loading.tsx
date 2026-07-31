import { Logo } from "@/components/ui/Logo";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Logo showText={false} size={48} />
    </div>
  );
}
