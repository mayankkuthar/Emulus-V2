import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { useSEO } from "@/lib/useSEO";

export default function NotFound() {
  useSEO({ title: "404 — Page not found" });
  return (
    <PageShell>
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <p className="kicker">404</p>
          <h1 className="mt-3 text-5xl md:text-6xl">Page not found.</h1>
          <p className="mt-4 text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-orange px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange/30 hover:-translate-y-0.5 transition-all"
          >
            Go home
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
