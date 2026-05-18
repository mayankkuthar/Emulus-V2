import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="gradient-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-white max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
