import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Home as HomeIcon,
  UploadCloud,
  Megaphone,
  Clock,
  Search,
  FileText,
  Check,
  ChevronUp,
  ChevronDown,
  Lightbulb,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Table2,
  BarChart3,
  Download,
  Share2,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import caseStudyOne from "@/assets/gv-story/case-study-1.png";
import caseStudyTwo from "@/assets/gv-story/case-study-2.png";
import caseStudyThree from "@/assets/gv-story/case-study-3.png";
import caseStudyFour from "@/assets/gv-story/case-study-4.png";
import caseStudyFive from "@/assets/gv-story/case-study-5.png";
import logo from "@/assets/gv-story/gram-vikas-logo.png";
import daybookImg from "@/assets/gv-story/daybook-sample.jpg";

const caseStudySlides = [
  {
    title: "The Backbone of Rural Commerce",
    image: caseStudyOne,
    alt: "Gram Vikas community store serving rural families",
  },
  {
    title: "The Hidden Problem",
    image: caseStudyTwo,
    alt: "Paper ledger challenge across rural businesses",
  },
  {
    title: "Zero-Touch Capture",
    image: caseStudyThree,
    alt: "Store owner capturing paper ledger on a phone",
  },
  {
    title: "AI Extraction",
    image: caseStudyFour,
    alt: "AI converting handwritten ledger into structured data",
  },
  {
    title: "Financial Clarity",
    image: caseStudyFive,
    alt: "Financial reports creating rural opportunity",
  },
];

export function GvStorySection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % caseStudySlides.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="block !pb-10 xl:!pb-[40px]" id="gv-story">
      <div className="wrap">
          <div className="mx-auto grid max-w-[1560px] gap-4 xl:gap-8 xl:grid-cols-[minmax(0,1fr)_340px] xl:items-start">
          <section className="flex min-h-[343px] sm:min-h-[437px] lg:min-h-[530px] xl:min-h-[624px] flex-col justify-between rounded-[2rem] border border-border/60 bg-gradient-to-br from-navy to-navy-soft p-5 shadow-2xl sm:p-7 lg:p-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-soft">Case Study</p>
              <h1 className="max-w-3xl text-3xl font-bold leading-[0.95] text-white sm:text-4xl lg:text-5xl">
                From Paper Ledger
                <br />
                to AI-Powered Intelligence.
              </h1>
            </div>

            <div className="mt-6 flex-1 overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="relative h-full min-h-[240px] sm:min-h-[320px] lg:min-h-[432px] bg-black">
                {caseStudySlides.map((slide, index) => (
                  <div
                    key={slide.title}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === activeSlide
                        ? "pointer-events-auto translate-x-0 opacity-100"
                        : index < activeSlide
                          ? "pointer-events-none -translate-x-6 opacity-0"
                          : "pointer-events-none translate-x-6 opacity-0"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="h-full w-full object-contain"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent px-5 py-5 sm:px-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/70">Sequence</p>
                    <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">{caseStudySlides[activeSlide]?.title}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {caseStudySlides.map((slide, index) => (
                      <button
                        key={slide.title}
                        type="button"
                        aria-label={`Show ${slide.title}`}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-10 bg-primary" : "w-2.5 bg-white/45 hover:bg-white/70"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="flex items-start justify-center xl:justify-end pt-0 xl:pt-1">
            <PhoneEmulator />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   Phone Frame
   =============================================================== */

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex justify-center xl:justify-end max-w-full py-2 h-[343px] sm:h-[437px] lg:h-[530px] xl:h-[624px]">
      <div className="absolute top-0 shrink-0 scale-[0.44] sm:scale-[0.56] lg:scale-[0.68] xl:scale-[0.8] origin-top" style={{ width: 380, height: 780 }}>
        <div
          className="absolute inset-0 rounded-[3rem] bg-neutral-900 shadow-2xl"
          style={{
            boxShadow:
              "0 0 0 2px #1a1a1a, 0 30px 60px -20px rgba(0,0,0,0.6), inset 0 0 0 2px #2a2a2a",
          }}
        />
        <div className="absolute -left-[3px] top-28 h-10 w-[3px] rounded-l bg-neutral-800" />
        <div className="absolute -left-[3px] top-44 h-16 w-[3px] rounded-l bg-neutral-800" />
        <div className="absolute -right-[3px] top-36 h-20 w-[3px] rounded-r bg-neutral-800" />

        <div className="absolute inset-[10px] flex flex-col overflow-hidden rounded-[2.6rem] bg-background">
          <div className="relative z-20 flex h-8 shrink-0 items-center justify-between bg-background px-7 text-[11px] font-semibold text-foreground">
            <span>9:41</span>
            <div className="absolute left-1/2 top-1 h-6 w-28 -translate-x-1/2 rounded-full bg-neutral-900" />
            <div className="flex items-center gap-1.5">
              <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><rect x="0" y="8" width="2.5" height="3" rx="0.5"/><rect x="3.5" y="6" width="2.5" height="5" rx="0.5"/><rect x="7" y="3" width="2.5" height="8" rx="0.5"/><rect x="10.5" y="0" width="2.5" height="11" rx="0.5"/></svg>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M1 4a10 10 0 0 1 13 0"/><path d="M3 6.5a7 7 0 0 1 9 0"/><path d="M5 9a4 4 0 0 1 5 0"/></svg>
              <svg width="24" height="11" viewBox="0 0 24 11" fill="none"><rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke="currentColor" opacity="0.5"/><rect x="2" y="2" width="17" height="7" rx="1.5" fill="currentColor"/><rect x="21" y="3.5" width="1.6" height="4" rx="0.6" fill="currentColor" opacity="0.5"/></svg>
            </div>
          </div>
          <div className="flex-1 overflow-x-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   Phone Emulator
   =============================================================== */

type Screen = "home" | "upload" | "review" | "statements" | "alerts" | "history";

const navItems: { id: Screen; label: string; icon: typeof HomeIcon }[] = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "upload", label: "Upload", icon: UploadCloud },
  { id: "alerts", label: "Alerts", icon: Megaphone },
  { id: "history", label: "History", icon: Clock },
];

function PhoneEmulator() {
  const [screen, setScreen] = useState<Screen>("home");
  const [uploadStep, setUploadStep] = useState(0);
  const [uploadHover, setUploadHover] = useState(false);
  const [fileShown, setFileShown] = useState(false);
  const [approvePressed, setApprovePressed] = useState(false);
  const [finView, setFinView] = useState<"chart" | "table">("chart");

  const [paused, setPaused] = useState(false);
  const reviewScrollRef = useRef<HTMLDivElement>(null);
  const statementsScrollRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(0);

  const pausedRef = useRef(false);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const inside = phoneRef.current?.contains(e.target as Node) ?? false;
      if (inside === pausedRef.current) return;
      pausedRef.current = inside;
      setPaused(inside);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    if (paused) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = setTimeout(() => resolve(), ms);
        timers.push(t);
      });

    const runStep = (fn: () => void) => {
      if (!cancelled) fn();
    };

    const flow = async () => {
      runStep(() => {
        setScreen("home");
        setUploadStep(0);
        setUploadHover(false);
        setFileShown(false);
        setApprovePressed(false);
        setFinView("chart");
        if (reviewScrollRef.current) reviewScrollRef.current.scrollTop = 0;
        if (statementsScrollRef.current) statementsScrollRef.current.scrollTop = 0;
      });
      await wait(2000);
      if (cancelled) return;

      runStep(() => setScreen("upload"));
      await wait(1000);
      if (cancelled) return;

      runStep(() => setUploadHover(true));
      await wait(1500);
      if (cancelled) return;

      runStep(() => {
        setUploadHover(false);
        setFileShown(true);
      });
      await wait(1000);
      if (cancelled) return;

      runStep(() => setUploadStep(1));
      for (let i = 2; i <= 5; i++) {
        await wait(1000);
        if (cancelled) return;
        runStep(() => setUploadStep(i));
      }
      await wait(1000);
      if (cancelled) return;

      runStep(() => setScreen("review"));
      await wait(1000);
      if (cancelled) return;

      runStep(() => {
        reviewScrollRef.current?.scrollTo({
          top: reviewScrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      });
      await wait(1200);
      if (cancelled) return;

      runStep(() => setApprovePressed(true));
      await wait(450);
      if (cancelled) return;
      runStep(() => {
        setApprovePressed(false);
        setScreen("statements");
        setFinView("chart");
      });

      await wait(3000);
      if (cancelled) return;

      runStep(() => setFinView("table"));
      await wait(2000);
      if (cancelled) return;

      runStep(() => {
        statementsScrollRef.current?.scrollTo({
          top: statementsScrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      });
      await wait(1000);
      if (cancelled) return;

      runStep(() => setScreen("alerts"));
      await wait(2000);
      if (cancelled) return;

      runStep(() => setScreen("history"));
      await wait(2000);
      if (cancelled) return;

      runStep(() => setScreen("home"));
      await wait(100);
      if (cancelled) return;
      setTick((t) => t + 1);
    };

    flow();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [paused, tick]);

  return (
    <div ref={phoneRef}>
      <PhoneFrame>
        <div className="flex h-full min-h-full flex-col">
          {screen === "home" && <HomeScreen onNav={setScreen} />}
          {screen === "upload" && (
            <UploadScreen
              step={uploadStep}
              hover={uploadHover}
              fileShown={fileShown}
              onBack={() => setScreen("home")}
            />
          )}
          {screen === "review" && (
            <ReviewScreen
              scrollRef={reviewScrollRef}
              approvePressed={approvePressed}
              onBack={() => setScreen("home")}
              onApprove={() => setScreen("statements")}
            />
          )}
          {screen === "statements" && (
            <StatementsScreen
              scrollRef={statementsScrollRef}
              view={finView}
              setView={setFinView}
              onBack={() => setScreen("home")}
            />
          )}
          {screen === "alerts" && <AlertsScreen onBack={() => setScreen("home")} onView={() => setScreen("statements")} />}
          {screen === "history" && <HistoryScreen onBack={() => setScreen("home")} />}
          <PhoneBottomNav active={screen} onNav={setScreen} />
        </div>
      </PhoneFrame>
    </div>
  );
}

function PhoneBottomNav({
  active,
  onNav,
}: {
  active: Screen;
  onNav: (s: Screen) => void;
}) {
  return (
    <nav className="border-t border-border bg-card/95 backdrop-blur px-2 pt-2 pb-3 shrink-0">
      <ul className="flex items-center justify-around">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => onNav(id)}
                className="flex flex-col items-center gap-1 px-3 py-1 rounded-lg"
              >
                <Icon
                  className={`size-6 ${isActive ? "text-primary" : "text-foreground/70"}`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span
                  className={`text-[11px] font-medium ${isActive ? "text-primary" : "text-foreground/70"}`}
                >
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function PhoneHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="flex items-center gap-3 px-5 pt-3 pb-4">
      <button
        type="button"
        onClick={onBack}
        className="size-8 flex items-center justify-center rounded-full hover:bg-muted text-foreground"
        aria-label="Back"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <h1 className="text-2xl font-bold text-foreground">{title}</h1>
    </div>
  );
}

/* ---------- HOME ---------- */
const stats: { label: string; value: number; target: Screen }[] = [
  { label: "PENDING REVIEWS", value: 5, target: "review" },
  { label: "UPLOADS TODAY", value: 12, target: "upload" },
  { label: "ALERTS", value: 2, target: "home" },
  { label: "BUSINESSES", value: 27, target: "home" },
];
const activity = [
  { id: "12345", name: "Prakash Tailors", status: "Extraction Pending", time: "Today, 11:30 AM", action: "Review", target: "review" as Screen },
  { id: "15678", name: "Sonali Kirana", status: "Extraction Completed", time: "Today, 10:23 AM", action: "Download", target: "statements" as Screen },
  { id: "11233", name: "Pooja Bakery", status: "Alert: Low Revenue", time: "Today, 09:05 AM", action: "View", target: "home" as Screen },
];

function HomeScreen({ onNav }: { onNav: (s: Screen) => void }) {
  return (
    <div className="flex-1 overflow-y-auto px-5 pt-3 pb-4 scrollbar-white">
      <div className="flex items-center gap-3 pt-2 pb-4">
        <img src={logo} alt="Gram Vikas" className="h-10 w-auto" />
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            className="h-10 w-full rounded-full border border-border bg-muted/60 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Search..."
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold leading-tight text-foreground">
        Welcome,
        <br />
        Udyog Mitra
      </h2>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <button
            key={s.label}
            type="button"
            onClick={() => onNav(s.target)}
            className="rounded-xl border border-border bg-card p-4 text-center shadow-sm transition hover:shadow-md"
          >
            <div className="text-[11px] font-bold tracking-wide text-foreground/80">{s.label}</div>
            <div className="mt-1 text-4xl font-extrabold text-primary">{s.value}</div>
          </button>
        ))}
      </div>
      <h3 className="mb-2 mt-6 text-lg font-semibold text-foreground">Recent Activity</h3>
      <ul className="space-y-2">
        {activity.map((item) => (
          <li key={item.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-foreground">
                {item.id} &ndash; {item.name}
              </div>
              <div className="text-xs font-medium text-primary">{item.status}</div>
              <div className="text-[11px] text-muted-foreground">{item.time}</div>
            </div>
            <button
              type="button"
              onClick={() => onNav(item.target)}
              className="shrink-0 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
            >
              {item.action}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- UPLOAD ---------- */
const stepsList = [
  "Daybook Upload",
  "Scan Quality Check",
  "Digitization",
  "Extraction Review",
  "Statement Generation",
];
const enterprise = {
  id: "PTO2E012",
  name: "Sai Tailor Shop",
  entrepreneur: "Sasmita Patra",
  type: "Service",
  village: "Titirsingi",
  panchayat: "Ankuli",
  block: "Patreapur",
};

function UploadScreen({
  step,
  hover,
  fileShown,
  onBack,
}: {
  step: number;
  hover: boolean;
  fileShown: boolean;
  onBack: () => void;
}) {
  const [expanded, setExpanded] = useState(true);
  const [localFile, setLocalFile] = useState(false);
  return (
    <>
      <PhoneHeader title="Daybook Upload" onBack={onBack} />
      <div className="flex-1 overflow-y-auto px-5 pb-4 scrollbar-white">
        <div className="flex gap-2 mb-3">
          <input
            defaultValue={enterprise.id}
            className="flex-1 h-12 px-4 rounded-xl bg-card border border-border font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button className="size-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
            <Search className="size-5" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="w-full flex items-center justify-between text-sm text-muted-foreground mb-2 px-1"
        >
          <span>
            Name of the Enterprise:{" "}
            <span className="font-semibold text-foreground ml-1">{enterprise.name}</span>
          </span>
          {expanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        </button>
        {expanded && (
          <div className="rounded-xl px-1 pb-3 text-sm space-y-1.5">
            {([
              ["Name of the Entrepreneur", enterprise.entrepreneur],
              ["Types of Enterprise", enterprise.type],
              ["Name of Village", enterprise.village],
              ["Name of Panchayat", enterprise.panchayat],
              ["Name of Block", enterprise.block],
            ] as const).map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4">
                <span className="text-muted-foreground">{k}:</span>
                <span className="font-semibold">{v}</span>
              </div>
            ))}
          </div>
        )}

        <h3 className="mt-4 mb-3 font-semibold">Status Tracking</h3>

        <ol className="flex items-center justify-between mb-4 px-1">
          {stepsList.map((_, i) => {
            const n = i + 1;
            const done = step > 0 && n < step;
            const active = step > 0 && n === step;
            return (
              <li key={i} className="flex items-center flex-1 last:flex-none">
                <span
                  className={`size-7 rounded-full text-xs font-bold flex items-center justify-center border transition-all duration-500 ${
                    done
                      ? "bg-success text-success-foreground border-success"
                      : active
                        ? "bg-primary text-primary-foreground border-primary scale-110 shadow-lg"
                        : "bg-muted text-foreground/70 border-border"
                  }`}
                >
                  {done ? <Check className="size-3.5" strokeWidth={3} /> : n}
                </span>
                {i < stepsList.length - 1 && (
                  <span
                    className={`flex-1 border-t mx-1 transition-colors duration-500 ${
                      step > 0 && n < step ? "border-success" : "border-dashed border-border"
                    }`}
                  />
                )}
              </li>
            );
          })}
        </ol>

        {step > 0 && (
          <p className="text-xs text-center text-muted-foreground mb-3">
            {step < 5 ? `Step ${step} of 5: ${stepsList[step - 1]}...` : "Ready for review"}
          </p>
        )}

        <button
          type="button"
          onClick={() => setLocalFile((v) => !v)}
          className={`w-full rounded-2xl border-2 border-dashed p-4 flex flex-col items-center justify-center text-center min-h-[200px] transition-colors ${
            hover ? "border-primary bg-primary/5" : "border-border"
          } cursor-pointer`}
        >
          {(fileShown || localFile) ? (
            <div className="w-full">
              <img
                src={daybookImg}
                alt="Selected daybook"
                className="w-full h-32 object-cover rounded-lg border border-border"
              />
              <p className="text-xs font-semibold mt-2">daybook-page-12.jpg</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Ready</p>
            </div>
          ) : (
            <>
              <UploadCloud className="size-12 text-foreground/70 mb-3" strokeWidth={1.5} />
              <p className="text-lg font-medium text-foreground/80">Tap to upload</p>
              <p className="text-lg font-medium text-foreground/80">or drag and drop</p>
            </>
          )}
        </button>
      </div>
    </>
  );
}

/* ---------- REVIEW ---------- */
function ReviewScreen({
  scrollRef,
  approvePressed,
  onBack,
  onApprove,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  approvePressed: boolean;
  onBack: () => void;
  onApprove: () => void;
}) {
  return (
    <>
      <PhoneHeader title="Review" onBack={onBack} />
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 pb-4 scroll-smooth scrollbar-white">
        <div className="rounded-xl overflow-hidden border border-border bg-card">
          <img src={daybookImg} alt="Uploaded daybook page" className="w-full h-auto object-contain" />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Enterprise ID: <span className="font-semibold text-foreground">PB04E010</span>
        </p>
        <dl className="mt-4 space-y-3">
          {([
            ["Start Date", "01/06/2024 - Sat"],
            ["End Date", "01/07/2024 - Mon"],
            ["Cash Sales", "₹ 35,413"],
            ["Credit Sales", "₹ 2,514"],
          ] as const).map(([k, v]) => (
            <div key={k} className="flex items-center justify-between border-b border-border pb-3 last:border-b-0">
              <dt className="font-semibold">{k}</dt>
              <dd className="text-foreground">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="grid grid-cols-3 gap-2 mt-5">
          <button className="h-11 rounded-lg border border-border bg-card font-semibold text-sm">
            Resubmit
          </button>
          <button className="h-11 rounded-lg border border-border bg-card font-semibold text-sm">
            Flag
          </button>
          <button
            type="button"
            onClick={onApprove}
            className={`h-11 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all ${
              approvePressed ? "scale-95 brightness-90 ring-4 ring-primary/40" : ""
            }`}
          >
            Approve
          </button>
        </div>
      </div>
    </>
  );
}

/* ---------- STATEMENTS ---------- */
const tabs = ["Summary", "Profit & Loss", "Cash Flow"] as const;
const trend = [
  { m: "Jan'25", Revenue: 38000, Expenses: 28000, Profit: 9000 },
  { m: "Feb'25", Revenue: 39500, Expenses: 29200, Profit: 9500 },
  { m: "Mar'25", Revenue: 41000, Expenses: 30100, Profit: 10000 },
  { m: "Apr'25", Revenue: 40500, Expenses: 29800, Profit: 10200 },
  { m: "May'25", Revenue: 43000, Expenses: 31000, Profit: 11200 },
  { m: "Jun'25", Revenue: 42500, Expenses: 30800, Profit: 10500 },
  { m: "July'25", Revenue: 42000, Expenses: 31500, Profit: 10500 },
];
const tableRows = [
  ["01/07/25", "₹42,000", "₹31,500", "₹10,500"],
  ["03/06/25", "₹44,200", "₹32,400", "₹11,800"],
  ["08/05/25", "₹48,000", "₹35,000", "₹13,000"],
  ["04/04/25", "₹37,000", "₹28,200", "₹8,800"],
  ["12/03/25", "₹35,500", "₹26,700", "₹8,800"],
];
const expense = [
  { name: "Raw Materials", value: 11000, color: "var(--color-chart-1)" },
  { name: "Labor Wages", value: 7500, color: "var(--color-chart-2)" },
  { name: "Rent", value: 4000, color: "var(--color-chart-4)" },
  { name: "Marketing", value: 3000, color: "var(--color-chart-6)" },
  { name: "Transport", value: 2500, color: "var(--color-chart-5)" },
  { name: "Misc", value: 3500, color: "var(--color-chart-3)" },
];

function StatementsScreen({
  scrollRef,
  view,
  setView,
  onBack,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  view: "chart" | "table";
  setView: (v: "chart" | "table") => void;
  onBack: () => void;
}): ReactNode {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Summary");
  return (
    <>
      <PhoneHeader title="Financial Statements" onBack={onBack} />
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 pb-4 scroll-smooth scrollbar-white">
        <div className="flex items-center gap-4 border-b border-border mb-4 -mx-1 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-2 text-sm font-medium whitespace-nowrap border-b-2 -mb-px transition ${
                tab === t ? "border-primary text-primary" : "border-transparent text-foreground/70"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {view === "table" && (
          <div className="rounded-xl border border-border bg-card p-4 mb-3">
            <div className="grid grid-cols-3 gap-3">
              {([
                { k: "REVENUE", v: "₹ 42,000", d: "2%", up: false },
                { k: "EXPENSE", v: "₹ 31,500", d: "4%", up: true },
                { k: "PROFIT", v: "₹ 10,500", d: "2%", up: true },
              ] as const).map((c) => (
                <div key={c.k}>
                  <div className="text-[11px] font-bold tracking-wide">{c.k}</div>
                  <div className="text-lg font-bold mt-1">{c.v}</div>
                  <div
                    className={`flex items-center gap-1 text-xs font-semibold mt-0.5 ${
                      c.up ? "text-success" : "text-destructive"
                    }`}
                  >
                    {c.up ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                    {c.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "table" && (
          <div className="rounded-lg bg-destructive/10 border border-destructive/30 px-3 py-2 mb-2 flex items-start gap-2 text-xs">
            <AlertTriangle className="size-4 text-destructive shrink-0 mt-0.5" />
            <p>
              <b className="text-destructive">Alert:</b> Revenue dropped by 30% vs average
            </p>
          </div>
        )}

        <div className="rounded-lg bg-info border border-info/40 px-3 py-2 mb-3 flex items-start gap-2 text-xs">
          <Lightbulb className="size-4 text-info-foreground shrink-0 mt-0.5" />
          <p className="text-info-foreground">
            <b>Insight:</b> Profit margin up by 5% from last month
          </p>
        </div>

        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-semibold">Historic Trend</h3>
          <div className="flex rounded-md border border-border overflow-hidden">
            <button
              onClick={() => setView("table")}
              className={`px-2 py-1 ${view === "table" ? "bg-primary text-primary-foreground" : "bg-card"}`}
              aria-label="Table"
            >
              <Table2 className="size-4" />
            </button>
            <button
              onClick={() => setView("chart")}
              className={`px-2 py-1 ${view === "chart" ? "bg-primary text-primary-foreground" : "bg-card"}`}
              aria-label="Chart"
            >
              <BarChart3 className="size-4" />
            </button>
          </div>
        </div>

        {view === "chart" ? (
          <div className="rounded-xl border border-border bg-card p-3 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trend} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                <XAxis dataKey="m" tick={{ fontSize: 9 }} stroke="currentColor" />
                <YAxis tick={{ fontSize: 9 }} stroke="currentColor" />
                <Tooltip wrapperStyle={{ fontSize: 11 }} />
                <Legend wrapperStyle={{ fontSize: 10 }} iconSize={8} />
                <Line type="monotone" dataKey="Revenue" stroke="var(--color-chart-1)" strokeWidth={1.5} dot={false} />
                <Line type="monotone" dataKey="Expenses" stroke="var(--color-chart-2)" strokeWidth={1.5} dot={false} />
                <Line type="monotone" dataKey="Profit" stroke="var(--color-chart-3)" strokeWidth={1.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-4 text-[11px] font-semibold border-b border-border bg-muted/50 px-3 py-2">
              <span>Date</span>
              <span className="text-right">Revenue</span>
              <span className="text-right">Expenses</span>
              <span className="text-right">Profit</span>
            </div>
            {tableRows.map((r) => (
              <div key={r[0]} className="grid grid-cols-4 text-xs px-3 py-2 border-b border-border last:border-b-0">
                <span>{r[0]}</span>
                <span className="text-right">{r[1]}</span>
                <span className="text-right">{r[2]}</span>
                <span className="text-right">{r[3]}</span>
              </div>
            ))}
          </div>
        )}

        <h3 className="text-base font-semibold mt-4 mb-2">Expense Bifurcation</h3>
        <div className="rounded-xl border border-border bg-card p-3 flex items-center gap-2">
          <div className="w-1/2 h-44">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expense} innerRadius={32} outerRadius={62} paddingAngle={1} dataKey="value" label={{ fontSize: 9 }}>
                  {expense.map((e) => (
                    <Cell key={e.name} fill={e.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="text-xs space-y-1 w-1/2">
            {expense.map((e) => (
              <li key={e.name} className="flex items-center gap-2">
                <span className="size-3 rounded-sm" style={{ background: e.color }} />
                {e.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4 mb-1">
          <button className="h-12 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2">
            <Download className="size-4" /> Download PDF
          </button>
          <button className="h-12 rounded-xl bg-card border border-border font-semibold flex items-center justify-center gap-2">
            <Share2 className="size-4" /> Share
          </button>
        </div>
      </div>
    </>
  );
}

/* ---------- ALERTS ---------- */
const alertItems = [
  { id: "11233", name: "Pooja Bakery", msg: "Revenue dropped 30% vs average", icon: TrendingDown },
  { id: "12876", name: "Ravi Electronics", msg: "Unusual expense spike detected", icon: AlertTriangle },
];

function AlertsScreen({ onBack, onView }: { onBack: () => void; onView: () => void }) {
  return (
    <>
      <PhoneHeader title="Alerts" onBack={onBack} />
      <div className="flex-1 overflow-y-auto px-5 pb-4 scrollbar-white">
        <ul className="space-y-3">
          {alertItems.map((a) => (
            <li key={a.id} className="rounded-xl border border-destructive/30 bg-destructive/5 p-3 flex gap-3">
              <a.icon className="size-5 text-destructive shrink-0 mt-1" />
              <div className="flex-1">
                <div className="text-sm font-semibold">{a.id} &ndash; {a.name}</div>
                <div className="text-xs text-foreground/80 mt-0.5">{a.msg}</div>
                <button type="button" onClick={onView} className="inline-block mt-2 text-xs font-semibold text-primary">
                  View statement &rarr;
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/* ---------- HISTORY ---------- */
const historyRecords = [
  { id: "12345", name: "Prakash Tailors", date: "10 Jul 2025", status: "Completed" },
  { id: "15678", name: "Sonali Kirana", date: "08 Jul 2025", status: "Completed" },
  { id: "11233", name: "Pooja Bakery", date: "06 Jul 2025", status: "Flagged" },
  { id: "12876", name: "Ravi Electronics", date: "01 Jul 2025", status: "Completed" },
  { id: "13099", name: "Lata Dairy", date: "28 Jun 2025", status: "Resubmitted" },
];

function HistoryScreen({ onBack }: { onBack: () => void }) {
  return (
    <>
      <PhoneHeader title="History" onBack={onBack} />
      <div className="flex-1 overflow-y-auto px-5 pb-4 scrollbar-white">
        <ul className="space-y-2">
          {historyRecords.map((r) => (
            <li key={r.id} className="rounded-xl border border-border bg-card p-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">{r.id} &ndash; {r.name}</div>
                <div className="text-[11px] text-muted-foreground">{r.date}</div>
              </div>
              <span className={`text-[11px] font-semibold px-2 py-1 rounded-full ${
                r.status === "Completed" ? "bg-success/15 text-success" :
                r.status === "Flagged" ? "bg-destructive/15 text-destructive" :
                "bg-warning/20 text-warning-foreground"
              }`}>{r.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
