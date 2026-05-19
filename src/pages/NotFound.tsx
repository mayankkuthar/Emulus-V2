import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { useSEO } from "@/lib/useSEO";
import content from "@/content.json";

const c = content.pages.notFound;

export default function NotFound() {
  useSEO(c.seo);
  return (
    <PageShell>
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <p className="kicker">{c.kicker}</p>
          <h1 className="mt-3 text-5xl md:text-6xl">{c.heading}</h1>
          <p className="mt-4 text-muted-foreground">{c.subtitle}</p>
          <Link
            to={c.btnLink}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-orange px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange/30 hover:-translate-y-0.5 transition-all"
          >
            {c.btnText}
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
