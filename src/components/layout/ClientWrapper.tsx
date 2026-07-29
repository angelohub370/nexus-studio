"use client";

import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      {children}
    </>
  );
}
