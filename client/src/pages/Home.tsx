/*
Design philosophy reminder for this file: Neo-Futurist Sports Cartography -- CFA Edition.
Red/white/blue patriotic color scheme with the same dark competition-night road experience.
CFA = Cheer Florida Alliance. Season 2025-2026.
*/
import { useEffect, type MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  CalendarDays,
  ChevronRight,
  ClipboardCheck,
  Flag,
  MapPinned,
  Route,
  ShieldCheck,
  Users,
  Video,
} from "lucide-react";

const logoUrl = "/manus-storage/17960_2_08691122.png";
const heroRoadUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/jBDb4VNWMJL62ujU8zZMux/united-elite-hero-road-clean-NYoy6iD2JVmVXbykU4c3aA.webp";
const roadTextureUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/jBDb4VNWMJL62ujU8zZMux/united-elite-road-texture-3u8qJVrdDg528dATYGJzv5.webp";

type RoadmapItem = {
  month: string;
  window: string;
  title: string;
  category: string;
  description: string;
  due?: string;
  note?: string;
  icon: typeof Flag;
};

const roadmap: RoadmapItem[] = [
  // -- MAY -------------------------------------------------------------------
  {
    month: "MAY",
    window: "5/14-5/30",
    title: "TRYOUTS -- TEAM ASSESSMENTS AND PLACEMENTS",
    category: "MAY",
    description:
      "THE PURPOSE OF TRYOUTS IS TO ASSESS ATHLETES ACROSS MULTIPLE DIMENSIONS -- INDIVIDUAL SKILL, STUNT GROUP CHEMISTRY, LEVEL READINESS, AND LONG-TERM TEAM FIT. COACHES EVALUATE NOT ONLY WHAT ATHLETES CAN DO TODAY, BUT HOW THEY WILL DEVELOP AND CONTRIBUTE THROUGHOUT THE SEASON.",
    note: "TIMELINE: (1) 5/14 THURSDAY -- LEVEL 4-5-6 ASSESSMENT. (2) 5/15 FRIDAY -- LEVEL 3-4 ASSESSMENT. (3) 5/15 SATURDAY -- LEVEL 1 ASSESSMENT. (4) 5/17 SUNDAY -- INITIAL TEAM PLACEMENT RELEASE. (5) 5/18 MONDAY -- 1ST DAY OF STUNT ASSESSMENTS. (6) 5/25 MEMORIAL DAY -- LAST WEEK OF STUNT ASSESSMENTS. (7) 5/26 STAFF MEETING -- LEAD COACHES ONLY: DISCUSS ANY MOVEMENTS PRIOR TO THE LAST 2 DAYS OF STUNT EVALUATIONS. (8) 5/29 STAFF MEETING -- LEAD COACHES ONLY: DISCUSS ANY FINAL MOVEMENTS BEFORE TEAM REVEAL. (9) 5/30 TEAM REVEAL DAY.",
    icon: Flag,
  },
  {
    month: "MAY",
    window: "5/14-5/18",
    title: "STUNT GROUP DEVELOPMENT (NO TUMBLING)",
    category: "MAY",
    description:
      "FORM STUNT GROUPS, ASSESS LEVEL READINESS, AND BUILD THE TUMBLE-TO-STUNT FORMATION AHEAD OF FINAL EVALUATIONS NEXT WEEK.",
    note: "KEEP IT SIMPLE -- CELEBRATE EVERY WIN AND BUILD A CULTURE OF CONFIDENCE FROM DAY ONE.",
    icon: ShieldCheck,
  },
  {
    month: "MAY",
    window: "5/25-5/30",
    title: "FINAL STUNT ASSESSMENT WEEK",
    category: "MAY",
    description:
      "LAST CHANCE TO ASSESS STUNT GROUPS -- INTEGRATE STUNTING WITH TUMBLING UNDER PERFORMANCE CONDITIONS BEFORE TEAM REVEAL.",
    icon: ShieldCheck,
  },
  // -- JUNE ------------------------------------------------------------------
  {
    month: "JUNE",
    window: "6/3",
    title: "FIRST OFFICIAL TEAM PRACTICE",
    category: "JUNE",
    description:
      "WEEK 1 AND 2 DIRECTIVES -- SETS THE TONE FOR THE SEASON. BUILD TEAM CULTURE, INTRODUCE THE H.I.I.T WARM-UP, REINFORCE THE GENERAL STRETCH SYSTEM, AND CONTINUE STUNT WARM-UP DEVELOPMENT.",
    icon: Activity,
  },
  {
    month: "JUNE",
    window: "6/7",
    title: "MANDATORY ALL-STAFF TRAINING -- ALL DAY EVENT",
    category: "JUNE",
    description:
      "ALL STAFF REQUIRED. STAFF TRAINING IS DESIGNED TO ESTABLISH THE SYSTEMS, EXPECTATIONS, STRUCTURE, AND COACHING STANDARDS THAT WILL GUIDE THE SEASON MOVING FORWARD. THE PURPOSE IS TO ENSURE ALL COACHES UNDERSTAND NOT ONLY WHAT WE ARE DOING AS A PROGRAM, BUT WHY WE ARE DOING IT.",
    icon: Users,
  },
  {
    month: "JUNE",
    window: "6/9",
    title: "BENCH MARK #1 -- INDIVIDUAL TEAM PARENT MEETINGS",
    category: "BENCH MARK #1",
    description:
      "EACH COACH HOSTS THEIR FIRST INDIVIDUAL TEAM PARENT MEETING TO ESTABLISH EXPECTATIONS, COMMUNICATE GOALS, AND BUILD A FOUNDATION OF TRUST WITH THEIR TEAM FAMILIES.",
    due: "DUE: 6/9",
    icon: Users,
  },
  {
    month: "JUNE",
    window: "6/8-6/13",
    title: "MANDATORY SKILLS CAMP",
    category: "JUNE",
    description:
      "MANDATORY SKILLS CAMP RUNS 6/8, 6/9, 6/11, 6/12, AND 6/13. CAMP GOALS: LEAVE CAMP WITH A CREATIVE ENTRY, THE FIRST TWO STUNT ELEMENTS, A TRANSITION, AND THE STUNT ISOLATION DRILL READY TO TRAIN.",
    icon: ShieldCheck,
  },
  {
    month: "JUNE",
    window: "6/14",
    title: "BENCH MARK #2 -- ENTRIES/TRANSITIONS/DISMOUNTS",
    category: "BENCH MARK #2",
    description:
      "CONFIRMS CAMP WAS PRODUCTIVE -- TEAMS SHOULD HAVE A STUNT SEQUENCE, MINI ROUTINE, AND ISOLATION DRILL READY TO CARRY THROUGH THE SUMMER.",
    due: "DUE: 6/14",
    icon: Video,
  },
  {
    month: "JUNE",
    window: "6/17-6/26",
    title: "WEEKS 3-4 DIRECTIVES -- TECHNICAL DEVELOPMENT PHASE",
    category: "JUNE",
    description:
      "HISTORICALLY A PERIOD OF FLUCTUATING ATTENDANCE DUE TO VACATIONS -- PRIORITIZE HEAVY TUMBLING TECHNIQUE AND JUMP DEVELOPMENT WHILE MAINTAINING STUNT FUNDAMENTALS.",
    icon: Activity,
  },
  {
    month: "JUNE",
    window: "6/26",
    title: "START OF 4TH OF JULY BREAK",
    category: "BREAK",
    description:
      "COACHES SHOULD ASSIGN THE FOLLOWING HOMEWORK TO THEIR ATHLETES BEFORE THE BREAK BEGINS. EACH ATHLETE MUST RECORD THEMSELVES PERFORMING 1 CONTINUOUS, UNEDITED VIDEO OF A FULL ROUND OF THE H.I.I.T WARM-UP.",
    note: "ATHLETES ARE REQUIRED TO SUBMIT 2 SEPARATE VIDEOS DURING THE BREAK -- NOT BOTH ON THE SAME DAY. VIDEOS MUST BE SUBMITTED PRIOR TO THE FIRST PRACTICE BACK ON 7/6. COACHES SHOULD COMMUNICATE THE SUBMISSION METHOD (BAND, EMAIL, OR TEAM GROUP CHAT) AND REMIND ATHLETES THAT THE EXPECTATION IS THE SAME STANDARD OF EXECUTION THEY HOLD IN PRACTICE: FULL INTENSITY, CORRECT TECHNIQUE, AND NO SHORTCUTS. THIS ASSIGNMENT KEEPS ATHLETES ACCOUNTABLE DURING THE BREAK, MAINTAINS THE WARM-UP HABIT, AND GIVES COACHES A WINDOW INTO HOW ATHLETES ARE MAINTAINING THEIR CONDITIONING AWAY FROM THE GYM.",
    icon: ClipboardCheck,
  },
  // -- JULY ------------------------------------------------------------------
  {
    month: "JULY",
    window: "7/6",
    title: "PRACTICE RESUMES -- END OF 4TH OF JULY BREAK",
    category: "JULY",
    description:
      "WEEKS 5-6 DIRECTIVES -- ACCOUNTABILITY MEETS PREPARATION. EVERY TASK IN THESE TWO WEEKS IS INTENTIONAL -- FROM CONDITIONING TO CULTURE. WE ARE ONE TEAM, BUT WE WILL HOLD ATHLETES ACCOUNTABLE WHILE ALSO RECOGNIZING AND REWARDING THOSE WHO DID THEIR PART. THE STANDARD DOES NOT LOWER BECAUSE ATTENDANCE IS INCONSISTENT.",
    icon: Activity,
  },
  {
    month: "JULY",
    window: "7/20",
    title: "WEEKS 7-8 DIRECTIVES -- STRUCTURE AND CONSISTENCY PHASE",
    category: "JULY",
    description:
      "PRACTICE STRUCTURE MUST NOW BE AUTOMATIC. EVERY REP, EVERY SYSTEM, EVERY STANDARD -- EXECUTED WITHOUT BEING REMINDED. WE ARE BUILDING ATHLETES WHO PERFORM, NOT JUST ATHLETES WHO PARTICIPATE.",
    icon: Activity,
  },
  {
    month: "JULY",
    window: "7/26",
    title: "BENCH MARK #3 -- JUMP THRESHOLD -- TOE TOUCH PYRAMID",
    category: "BENCH MARK #3",
    description:
      "A PHOTO-BASED PYRAMID RANKING OF EVERY ATHLETE'S BEST TOE TOUCH -- FROM STRONGEST TO WEAKEST EXECUTION -- TO ESTABLISH A MEASURABLE STARTING POINT FOR JUMP DEVELOPMENT.",
    note: "(1) INDIVIDUAL TOE TOUCH PHOTO OF EVERY ATHLETE ON THE TEAM. (2) COLLAGE ORGANIZED FROM STRONGEST TO WEAKEST EXECUTION BASED ON HEIGHT, TECHNIQUE, TOE POINT, AND BODY POSITION.",
    due: "DUE: 7/26",
    icon: ClipboardCheck,
  },
];

function parseMonthDay(win: string) {
  const match = win.match(/^(\d{1,2})\/(\d{1,2})/);
  if (!match) return null;
  return { month: Number(match[1]), day: Number(match[2]) };
}

function nextAnnualDate(month: number, day: number, now = new Date()) {
  const candidate = new Date(now.getFullYear(), month - 1, day, 23, 59, 59, 999);
  if (candidate.getTime() < now.getTime()) {
    return new Date(now.getFullYear() + 1, month - 1, day, 23, 59, 59, 999);
  }
  return candidate;
}

function getUpcomingBenchmark() {
  const now = new Date();
  const datedBenchmarks = roadmap
    .filter((item) => item.title.includes("BENCH MARK"))
    .map((item) => {
      const dateParts = parseMonthDay(item.window);
      return dateParts ? { item, date: nextAnnualDate(dateParts.month, dateParts.day, now) } : null;
    })
    .filter((entry): entry is { item: RoadmapItem; date: Date } => Boolean(entry))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return datedBenchmarks[0]?.item ?? roadmap.find((item) => item.title.includes("BENCH MARK"));
}

function getDateFirstTitle(item: RoadmapItem) {
  return parseMonthDay(item.window) ? `${item.window} ${item.title}` : item.title;
}

function getRoadmapItemId(item: RoadmapItem) {
  return `roadmap-${item.window}-${item.title}`
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function RoadLine() {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[42rem] -translate-x-1/2 lg:block"
      viewBox="0 0 640 2600"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M338 0 C110 210 548 370 304 570 C92 744 536 916 322 1114 C120 1301 538 1492 296 1683 C96 1841 544 2006 314 2190 C164 2310 392 2456 318 2600"
        stroke="url(#roadGlowCFA)"
        strokeWidth="52"
        strokeLinecap="round"
        className="road-shadow"
      />
      <path
        d="M338 0 C110 210 548 370 304 570 C92 744 536 916 322 1114 C120 1301 538 1492 296 1683 C96 1841 544 2006 314 2190 C164 2310 392 2456 318 2600"
        stroke="#0A0810"
        strokeWidth="38"
        strokeLinecap="round"
      />
      <path
        d="M338 0 C110 210 548 370 304 570 C92 744 536 916 322 1114 C120 1301 538 1492 296 1683 C96 1841 544 2006 314 2190 C164 2310 392 2456 318 2600"
        stroke="#FCA5A5"
        strokeOpacity="0.82"
        strokeWidth="4"
        strokeDasharray="22 28"
        strokeLinecap="round"
        className="road-dash"
      />
      <defs>
        <linearGradient id="roadGlowCFA" x1="320" y1="0" x2="320" y2="2600" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EF4444" stopOpacity="0.15" />
          <stop offset="0.28" stopColor="#DC2626" stopOpacity="0.88" />
          <stop offset="0.58" stopColor="#F87171" stopOpacity="0.45" />
          <stop offset="1" stopColor="#B91C1C" stopOpacity="0.88" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Home() {
  const upcomingBenchmark = getUpcomingBenchmark();
  const upcomingBenchmarkHref = upcomingBenchmark ? `#${getRoadmapItemId(upcomingBenchmark)}` : "#roadmap";

  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return;

    const scrollTimer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    }, 80);

    return () => window.clearTimeout(scrollTimer);
  }, []);

  const handleUpcomingBenchmarkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!upcomingBenchmark) return;

    event.preventDefault();
    const targetId = getRoadmapItemId(upcomingBenchmark);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${targetId}`);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080510] text-slate-50">
      <section className="relative min-h-[92vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url(${heroRoadUrl})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_28%,rgba(220,38,38,0.26),transparent_34%),linear-gradient(90deg,rgba(8,5,16,0.98)_0%,rgba(8,5,16,0.84)_38%,rgba(8,5,16,0.35)_100%)]" />
        <div className="absolute inset-0 hero-noise" aria-hidden="true" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="/" className="group flex items-center gap-3" aria-label="CFA home">
            <img
              src={logoUrl}
              alt="CFA shield logo"
              className="h-14 w-14 object-contain drop-shadow-[0_0_18px_rgba(220,38,38,0.55)] transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <p className="font-display text-2xl uppercase tracking-[0.18em] text-white">SEASON ROAD MAP</p>
              <p className="text-[0.68rem] uppercase tracking-[0.38em] text-red-200/80">2025-2026</p>
            </div>
          </a>
          <a
            href="#roadmap"
            className="hidden items-center gap-2 border border-red-300/30 bg-red-400/10 px-5 py-3 font-heading text-sm uppercase tracking-[0.22em] text-red-100 shadow-[0_0_26px_rgba(220,38,38,0.18)] backdrop-blur transition hover:border-red-200/70 hover:bg-red-300/20 md:flex"
          >
            SEASON ROAD MAP <ChevronRight className="h-4 w-4" />
          </a>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[calc(92vh-96px)] max-w-7xl items-center px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-8 inline-flex items-center gap-3 border border-red-300/25 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.28em] text-red-100 backdrop-blur">
              <MapPinned className="h-4 w-4 text-red-300" />
              SEASON ROAD MAP 2025-2026
            </div>
            <h1 className="font-display text-[clamp(4rem,12vw,10.5rem)] uppercase leading-[0.78] tracking-[0.02em] text-white text-shadow-red">
              Season
              <span className="block text-red-400">Road Map</span>
            </h1>
            {upcomingBenchmark && (
              <div className="mt-8 max-w-[calc(100vw-3rem)] border-l-2 border-red-400 bg-black/25 py-4 pl-5 pr-3 text-slate-200/90 backdrop-blur sm:max-w-2xl">
                <p className="font-heading text-xs uppercase tracking-[0.28em] text-red-300">Upcoming Benchmark</p>
                <p className="mt-2 break-words text-lg leading-8 sm:text-xl">{getDateFirstTitle(upcomingBenchmark)}</p>
                {upcomingBenchmark.due && <p className="mt-1 text-sm uppercase tracking-[0.14em] text-red-100/80">{upcomingBenchmark.due}</p>}
              </div>
            )}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#roadmap"
                className="group inline-flex items-center justify-center gap-3 bg-red-600 px-6 py-4 font-heading text-sm uppercase tracking-[0.24em] text-white shadow-[0_0_38px_rgba(220,38,38,0.45)] transition hover:bg-red-500"
              >
                SEASON ROAD MAP <Route className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href={upcomingBenchmarkHref}
                onClick={handleUpcomingBenchmarkClick}
                className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-6 py-4 text-center font-heading text-sm uppercase tracking-[0.24em] text-white backdrop-blur transition hover:border-red-300/60 hover:bg-red-900/20"
              >
                UPCOMING BENCHMARK
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
            className="relative hidden justify-self-end lg:block"
          >
            <div className="absolute inset-8 rounded-full bg-red-600/20 blur-3xl" />
            <img
              src={logoUrl}
              alt="CFA shield logo large"
              className="relative w-[22rem] opacity-90 [mask-image:radial-gradient(circle_at_center,black_56%,transparent_78%)]"
            />
          </motion.div>
        </div>
      </section>

      <section
        id="roadmap"
        className="relative bg-[#080510] px-5 py-24 sm:px-8"
        style={{ backgroundImage: `linear-gradient(rgba(8,5,16,0.84), rgba(8,5,16,0.98)), url(${roadTextureUrl})` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(220,38,38,0.17),transparent_36%),radial-gradient(circle_at_12%_48%,rgba(248,113,113,0.08),transparent_24%)]" />
        <RoadLine />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="font-heading text-sm uppercase tracking-[0.34em] text-red-400">SEASON ROAD MAP</p>
              <h2 className="mt-4 font-display text-6xl uppercase leading-[0.9] text-white sm:text-7xl">
                2025-2026
              </h2>
            </div>
          </div>

          <div className="space-y-10 lg:space-y-0">
            {roadmap.map((item, index) => {
              const Icon = item.icon;
              const alignRight = index % 2 === 1;
              return (
                <motion.article
                  key={`${item.month}-${item.window}-${item.title}`}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, delay: Math.min(index * 0.025, 0.22), ease: "easeOut" }}
                  className={`relative grid min-h-40 items-center lg:grid-cols-[1fr_104px_1fr] ${index > 0 ? "lg:-mt-4" : ""}`}
                >
                  <div className={`${alignRight ? "hidden lg:block" : "lg:pr-8"}`}>
                    {!alignRight && <RoadmapCard item={item} index={index} Icon={Icon} cardId={getRoadmapItemId(item)} />}
                  </div>
                  <div className="relative order-first mb-4 flex justify-start lg:order-none lg:mb-0 lg:justify-center">
                    <div className="waypoint-marker">
                      <span className="absolute inset-[-12px] rounded-full border border-red-400/40 opacity-60" />
                      <Icon className="relative h-6 w-6 text-red-100" />
                    </div>
                  </div>
                  <div className={`${alignRight ? "lg:pl-8" : "hidden lg:block"}`}>
                    {alignRight && <RoadmapCard item={item} index={index} Icon={Icon} cardId={getRoadmapItemId(item)} />}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href="/" className="flex items-center gap-3" aria-label="CFA home footer link">
            <img src={logoUrl} alt="CFA shield logo" className="h-12 w-12 object-contain" />
            <div>
              <p className="font-heading text-sm uppercase tracking-[0.28em] text-white">SEASON ROAD MAP</p>
              <p className="text-sm text-slate-400">2025-2026</p>
            </div>
          </a>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            CHEER FLORIDA * EST. 1998 * ALL STAR CHEER
          </p>
        </div>
      </footer>
    </main>
  );
}

function RoadmapCard({ item, index, Icon, cardId }: { item: RoadmapItem; index: number; Icon: typeof Flag; cardId: string }) {
  return (
    <div id={cardId} className="roadmap-card group scroll-mt-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="font-heading text-xs uppercase tracking-[0.28em] text-red-400">{item.month}</p>
          <h3 className="mt-3 break-words font-heading text-2xl uppercase leading-tight text-white sm:text-3xl">{getDateFirstTitle(item)}</h3>
        </div>
        <div className="card-icon">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="road-pill"><CalendarDays className="h-3.5 w-3.5" /> {item.window}</span>
        <span className="road-pill red">{item.category}</span>
      </div>
      <p className="mt-5 text-base leading-7 text-slate-300">{item.description}</p>
      {item.note && (
        <div className="mt-4 rounded border border-red-500/30 bg-red-950/30 px-4 py-3 font-heading text-xs uppercase tracking-[0.18em] text-red-200">
          <p className="mb-2 font-bold text-red-400 tracking-[0.22em]">NOTES</p>
          {item.note.split(/(?=\(\d+\))/).filter(Boolean).map((part, i) => {
            const match = part.match(/^(\(\d+\))\s*(.*)/);
            if (match) {
              return (
                <div key={i} className="flex gap-2 mt-1.5">
                  <span className="shrink-0 font-bold text-red-400">{match[1]}</span>
                  <span>{match[2]}</span>
                </div>
              );
            }
            return <p key={i} className="mt-1.5">{part}</p>;
          })}
        </div>
      )}
      {item.due && <p className="mt-5 border-l-2 border-red-500 pl-4 font-heading text-sm uppercase tracking-[0.16em] text-red-200">{item.due}</p>}
    </div>
  );
}
