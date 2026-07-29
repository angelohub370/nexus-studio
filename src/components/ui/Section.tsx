import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export function Section({
  children,
  id,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-28 md:py-36 lg:py-40", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
