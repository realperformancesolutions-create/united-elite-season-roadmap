/*
Design philosophy reminder for this file: Neo-Futurist Sports Cartography. Reinforce the feeling of navigating a dark competition-night road with electric United blue waypoints, shield-inspired milestone cards, beveled metallic trim, and disciplined athletic motion. If a choice does not strengthen the roadmap journey, remove it.
*/
import { useEffect, type MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Flag,
  MapPinned,
  Route,
  ShieldCheck,
  Trophy,
  Video,
} from "lucide-react";

const logoUrl = "/manus-storage/united-elite-shield_fa4df632.webp";
const heroRoadUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/jBDb4VNWMJL62ujU8zZMux/united-elite-hero-road-clean-NYoy6iD2JVmVXbykU4c3aA.webp";
const roadTextureUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/jBDb4VNWMJL62ujU8zZMux/united-elite-road-texture-3u8qJVrdDg528dATYGJzv5.webp";
const waypointOrbUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/jBDb4VNWMJL62ujU8zZMux/united-elite-shield-orb-BBjdcCMMuGeArRj7SwZFjd.webp";
const encoreLogoUrl = "/manus-storage/encore-logo-transparent_e9a25bc0.png";
const americanCheerPowerLogoUrl = "/manus-storage/american-cheer-power-logo-transparent_e6647425.png";

type RoadmapItem = {
  month: string;
  window: string;
  title: string;
  category: string;
  description: string;
  due?: string;
  competitionLogo?: string;
  icon: typeof Flag;
};

const roadmap: RoadmapItem[] = [
  {
    month: "MAY",
    window: "5/3-5/4",
    title: "TRYOUTS — WE HAVE TO GET IT RIGHT",
    category: "MAY",
    description: "TRYOUTS — WE HAVE TO GET IT RIGHT",
    icon: Flag,
  },
  {
    month: "MAY",
    window: "5/8-5/9",
    title: "STAFF TRAINING",
    category: "MAY",
    description: "STAFF TRAINING",
    icon: ShieldCheck,
  },
  {
    month: "MAY",
    window: "5/13",
    title: "2ND TRYOUTS",
    category: "MAY",
    description: "2ND TRYOUTS",
    icon: Flag,
  },
  {
    month: "MAY",
    window: "5/24-5/25",
    title: "TUMBLING SEMINAR",
    category: "MAY",
    description: "TUMBLING SEMINAR",
    icon: Activity,
  },
  {
    month: "JUNE",
    window: "6/3",
    title: "LATE TRYOUTS",
    category: "2ND TRYOUT 6/3",
    description: "LATE TRYOUTS",
    icon: Flag,
  },
  {
    month: "JUNE",
    window: "6/5-6/7",
    title: "TUMBLE CAMP",
    category: "JUNE",
    description: "TUMBLE CAMP",
    icon: Activity,
  },
  {
    month: "JUNE",
    window: "6/21-6/23 & 6/27-6/29",
    title: "LEVEL 1-4 STUNT CAMP",
    category: "JUNE",
    description: "LEVEL 1-4 STUNT CAMP",
    icon: ShieldCheck,
  },
  {
    month: "JUNE",
    window: "6/24-6/26",
    title: "LEVEL 5-6 STUNT CAMP.",
    category: "JUNE",
    description: "LEVEL 5-6 STUNT CAMP.",
    icon: ShieldCheck,
  },
  {
    month: "JUNE",
    window: "JUNE",
    title: "TEAMS NEED TO LEAVE WITH MINIMUM A CREATIVE ENTRY 1-2 ELEMENTS AND A CREATIVE TRANSTION",
    category: "JUNE",
    description: "TEAMS NEED TO LEAVE WITH MINIMUM A CREATIVE ENTRY 1-2 ELEMENTS AND A CREATIVE TRANSTION",
    icon: ClipboardCheck,
  },
  {
    month: "JUNE",
    window: "6/30",
    title: "FINAL TEAM PLACEMENTS",
    category: "TEAM SELECTION",
    description: "FINAL TEAM PLACEMENTS 6/30",
    icon: CheckCircle2,
  },
  {
    month: "JULY",
    window: "7/9",
    title: "BENCHMARK #1 TUMBLING  SKILL SELECTION",
    category: "BENCHMARK  #1",
    description: "TUMBLING  SKILL SELECTION",
    due: "OUTLINE DUE: 7/9",
    icon: ClipboardCheck,
  },
  {
    month: "JULY",
    window: "7/13",
    title: "BENCHMARK #2 TEAM DRILLS",
    category: "BENCHMARK  #2",
    description: "TEAM DRILLS",
    due: "VIDEO DUE  7/13",
    icon: Video,
  },
  {
    month: "JULY",
    window: "7/16",
    title: "BENCHMARK #3 ROUTINE CHOREO MONTH",
    category: "BENCHMARK  #3",
    description: "JUMPS IN MAX #S SINGLE TOE, DOUBLE JUMP SEQUENCE AND ANY JUMP NOT PERFORMED.  IE: LEFT HURDLER OR PIKE",
    due: "VIDEO DUE:7/16",
    icon: Video,
  },
  {
    month: "AUGUST",
    window: "8/20",
    title: "BENCHMARK #4 STUNT SEQUENCE",
    category: "(ELEMENT BY ELEMENT)",
    description: "STUNT SEQUENCE (ELEMENT BY ELEMENT) CREATIVE IN 1-2 ELEMENTS MID CREATIVE ELEMENT FINAL 1-2 ELEMENTS & DISMOUNT",
    due: "VIDEO DUE:8/20",
    icon: ShieldCheck,
  },
  {
    month: "OCTOBER",
    window: "10/13",
    title: "BENCHMARK #5 INITIAL PYRAMID CONCEPTS",
    category: "PYRAMID CHOREO  MONTH",
    description: "INITIAL PYRAMID CONCEPTS",
    due: "VIDEO DUE:10/13",
    icon: Route,
  },
  {
    month: "OCTOBER",
    window: "10/15",
    title: "BENCHMARK #6 FULL OUT",
    category: "PYRAMID CHOREO  MONTH",
    description: "FULL OUT (MINUST PYRAMID/DANCE",
    due: "VIDEO DUE:10/15",
    icon: Trophy,
  },
  {
    month: "OCTOBER",
    window: "10/16",
    title: "BENCHMARK #7 FLYER FLEX MEASURABLE",
    category: "PYRAMID CHOREO  MONTH",
    description: "FLYER FLEX MEASURABLE BOBY POSITION COLLAGE INCLUDING: HEEL STRETCH, FRONT STRETCH, BOW & ARROW, ARABESQUE, SCALE & NEEDLE",
    due: "COLLAGE DUE:10/16",
    icon: ClipboardCheck,
  },
  {
    month: "OCTOBER",
    window: "10/20",
    title: "BENCHMARK #8 JUMPS IN MAX #S",
    category: "PYRAMID CHOREO  MONTH",
    description: "JUMPS IN MAX #S SINGLE TOE, DOUBLE JUMP SEQUENCE AND ANY JUMP NOT PERFORMED.  IE: LEFT HURDLER OR PIKE (INCLUDING NON-JUMPERS) # 1. VIDEO OF JUMPS PERFORMED #2 INDIVIAL COLLAGE",
    due: "COLLAGE DUE 10/20",
    icon: ClipboardCheck,
  },
  {
    month: "OCTOBER",
    window: "9/24",
    title: "BENCHMARK #9 FULL STUNT ISOLATION",
    category: "BENCHMARK  #9",
    description: "FULL STUNT ISOLATION",
    due: "VIDEO DUE:9/24",
    icon: Video,
  },
  {
    month: "OCTOBER",
    window: "OCTOBER",
    title: "BENCHMARK #10 FLYER BODY POSITION CHECK",
    category: "DANCE  CHOREO MONTH",
    description: "FLYER BODY POSITION CHECK",
    icon: ClipboardCheck,
  },
  {
    month: "OCTOBER",
    window: "10/15",
    title: "BENCHMARK #11 FULL OUT",
    category: "DANCE  CHOREO MONTH",
    description: "FULL OUT FROM THIS POINT FORWARD 2 FULL OUTS PER PRACTICE. NO EXCEPTIONS.",
    due: "VIDEO DUE:10/15",
    icon: Trophy,
  },
  {
    month: "OCTOBER",
    window: "10/23",
    title: "BENCHMARK #12 1ST HALF OF PRAMID",
    category: "DANCE  CHOREO MONTH",
    description: "1ST HALF OF PRAMID    (FULL SPEED) 2ND HALF OF PYRAMID  (FULL SPEED)",
    due: "VIDEO DUE:10/23",
    icon: Route,
  },
  {
    month: "OCTOBER",
    window: "10/29",
    title: "BENCHMARK #13 PYRAMID ISOLATION DANCE CHOREO",
    category: "Gym rehearsal",
    description: "PYRAMID ISOLATION DANCE CHOREO",
    due: "VIDEO DUE:10/29 10/29/2023",
    icon: Trophy,
  },
  {
    month: "NOVEMBER",
    window: "11/5/2023",
    title: "BENCHMARK #9 USASF LEGALITY SUBMISSION",
    category: "BENCHMARK  #9",
    description: "USASF LEGALITY SUBMISSION All building (INLCUDING LIFTS)",
    due: "DUE 11/5/2023",
    icon: ClipboardCheck,
  },
  {
    month: "NOVEMBER",
    window: "11/5/2023-12/1/2023",
    title: "BENCHMARK #10 RUBRIC DOUBLE CHECK",
    category: "BENCHMARK  #10",
    description: "RUBRIC DOUBLE CHECK 1. Fill out the document DUE: 11/5/2023 2. Email the form to our scoring rep DUE: 11/6/2023 3. Post confirmation that you meet #’s DUE: 12/1/2023",
    due: "DUE 11/5/2023-12/1/2023",
    icon: ClipboardCheck,
  },
  {
    month: "NOVEMBER",
    window: "11/12/2023",
    title: "BENCHMARK #11 GIFT OF THE SEASON TEAM SHOWCASE",
    category: "FULL OUT",
    description: "GIFT OF THE SEASON TEAM SHOWCASE FULL OUT 21 days left of training #Prodigy elevate",
    due: "11/12/2023",
    icon: Trophy,
  },
  {
    month: "DECEMBER",
    window: "12/2",
    title: "BENCHMARK #11 PHYSICAL FITNESS TEST",
    category: "DECEMBER",
    description: "PHYSICAL FITNESS TEST 1. 2 Rounds of the warm-up 2. Stretch system/flyer stretch",
    due: "VIDEO DUE: PRIOR TO LEAVING FOR BREAK 12/2",
    icon: Activity,
  },
  {
    month: "DECEMBER",
    window: "12/12",
    title: "COMPETITION",
    category: "DECEMBER",
    description: "12/12 COMPETITION",
    competitionLogo: encoreLogoUrl,
    icon: Trophy,
  },
  {
    month: "DECEMBER",
    window: "12/16 & 12/17",
    title: "THE PRODIGY SHOW DOWN",
    category: "DECEMBER",
    description: "THE PRODIGY SHOW DOWN",
    icon: Trophy,
  },
  {
    month: "DECEMBER",
    window: "12/20",
    title: "COMPETITION",
    category: "DECEMBER",
    description: "12/20 COMPETITION",
    competitionLogo: americanCheerPowerLogoUrl,
    icon: Trophy,
  },
];


function parseMonthDay(window: string) {
  const match = window.match(/^(\d{1,2})\/(\d{1,2})/);
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
    .filter((item) => item.title.includes("BENCHMARK"))
    .map((item) => {
      const dateParts = parseMonthDay(item.window);
      return dateParts ? { item, date: nextAnnualDate(dateParts.month, dateParts.day, now) } : null;
    })
    .filter((entry): entry is { item: RoadmapItem; date: Date } => Boolean(entry))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return datedBenchmarks[0]?.item ?? roadmap.find((item) => item.title.includes("BENCHMARK"));
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
        stroke="url(#roadGlow)"
        strokeWidth="52"
        strokeLinecap="round"
        className="road-shadow"
      />
      <path
        d="M338 0 C110 210 548 370 304 570 C92 744 536 916 322 1114 C120 1301 538 1492 296 1683 C96 1841 544 2006 314 2190 C164 2310 392 2456 318 2600"
        stroke="#0A0F16"
        strokeWidth="38"
        strokeLinecap="round"
      />
      <path
        d="M338 0 C110 210 548 370 304 570 C92 744 536 916 322 1114 C120 1301 538 1492 296 1683 C96 1841 544 2006 314 2190 C164 2310 392 2456 318 2600"
        stroke="#8DC8FF"
        strokeOpacity="0.82"
        strokeWidth="4"
        strokeDasharray="22 28"
        strokeLinecap="round"
        className="road-dash"
      />
      <defs>
        <linearGradient id="roadGlow" x1="320" y1="0" x2="320" y2="2600" gradientUnits="userSpaceOnUse">
          <stop stopColor="#68B8FF" stopOpacity="0.15" />
          <stop offset="0.28" stopColor="#2A91FF" stopOpacity="0.88" />
          <stop offset="0.58" stopColor="#86D2FF" stopOpacity="0.45" />
          <stop offset="1" stopColor="#2D8EFF" stopOpacity="0.88" />
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
    <main className="min-h-screen overflow-hidden bg-[#03070d] text-slate-50">
      <section className="relative min-h-[92vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-95"
          style={{ backgroundImage: `url(${heroRoadUrl})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_28%,rgba(47,148,255,0.26),transparent_34%),linear-gradient(90deg,rgba(3,7,13,0.98)_0%,rgba(3,7,13,0.84)_38%,rgba(3,7,13,0.35)_100%)]" />
        <div className="absolute inset-0 hero-noise" aria-hidden="true" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="/" className="group flex items-center gap-3" aria-label="United Elite home">
            <img
              src={logoUrl}
              alt="United Elite shield logo"
              className="h-14 w-14 object-contain drop-shadow-[0_0_18px_rgba(54,150,255,0.55)] transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <p className="font-display text-2xl uppercase tracking-[0.18em] text-white">SEASON ROAD MAP</p>
              <p className="text-[0.68rem] uppercase tracking-[0.38em] text-blue-200/80">2023-2024</p>
            </div>
          </a>
          <a
            href="#roadmap"
            className="hidden items-center gap-2 border border-blue-300/30 bg-blue-400/10 px-5 py-3 font-heading text-sm uppercase tracking-[0.22em] text-blue-100 shadow-[0_0_26px_rgba(41,145,255,0.18)] backdrop-blur transition hover:border-blue-200/70 hover:bg-blue-300/20 md:flex"
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
            <div className="mb-8 inline-flex items-center gap-3 border border-blue-300/25 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.28em] text-blue-100 backdrop-blur">
              <MapPinned className="h-4 w-4 text-blue-300" />
              SEASON ROAD MAP 2023-2024
            </div>
            <h1 className="font-display text-[clamp(4rem,12vw,10.5rem)] uppercase leading-[0.78] tracking-[0.02em] text-white text-shadow-blue">
              Season
              <span className="block text-blue-300">Road Map</span>
            </h1>
            {upcomingBenchmark && (
              <div className="mt-8 max-w-[calc(100vw-3rem)] border-l-2 border-blue-300 bg-black/25 py-4 pl-5 pr-3 text-slate-200/90 backdrop-blur sm:max-w-2xl">
                <p className="font-heading text-xs uppercase tracking-[0.28em] text-blue-300">Upcoming Benchmark</p>
                <p className="mt-2 break-words text-lg leading-8 sm:text-xl">{getDateFirstTitle(upcomingBenchmark)}</p>
                {upcomingBenchmark.due && <p className="mt-1 text-sm uppercase tracking-[0.14em] text-blue-100/80">{upcomingBenchmark.due}</p>}
              </div>
            )}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#roadmap"
                className="group inline-flex items-center justify-center gap-3 bg-blue-400 px-6 py-4 font-heading text-sm uppercase tracking-[0.24em] text-black shadow-[0_0_38px_rgba(60,157,255,0.45)] transition hover:bg-blue-200"
              >
                SEASON ROAD MAP <Route className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href={upcomingBenchmarkHref}
                onClick={handleUpcomingBenchmarkClick}
                className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-6 py-4 text-center font-heading text-sm uppercase tracking-[0.24em] text-white backdrop-blur transition hover:border-blue-200/60 hover:bg-blue-300/10"
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
            <div className="absolute inset-8 rounded-full bg-blue-400/20 blur-3xl" />
            <img
              src={waypointOrbUrl}
              alt="Blue chrome roadmap waypoint"
              className="relative w-[25rem] opacity-95 [mask-image:radial-gradient(circle_at_center,black_56%,transparent_78%)]"
            />
          </motion.div>
        </div>
      </section>

      <section
        id="roadmap"
        className="relative bg-[#03070d] px-5 py-24 sm:px-8"
        style={{ backgroundImage: `linear-gradient(rgba(3,7,13,0.84), rgba(3,7,13,0.98)), url(${roadTextureUrl})` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(37,143,255,0.17),transparent_36%),radial-gradient(circle_at_12%_48%,rgba(92,187,255,0.08),transparent_24%)]" />
        <RoadLine />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="font-heading text-sm uppercase tracking-[0.34em] text-blue-300">SEASON ROAD MAP</p>
              <h2 className="mt-4 font-display text-6xl uppercase leading-[0.9] text-white sm:text-7xl">
                2023-2024
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Key season milestones, benchmark deliverables, training events, and competitions in roadmap order.
            </p>
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
                      <span className="absolute inset-[-12px] rounded-full border border-blue-300/40 opacity-60" />
                      <Icon className="relative h-6 w-6 text-blue-100" />
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
          <a href="/" className="flex items-center gap-3" aria-label="United Elite home footer link">
            <img src={logoUrl} alt="United Elite shield logo" className="h-12 w-12 object-contain" />
            <div>
              <p className="font-heading text-sm uppercase tracking-[0.28em] text-white">SEASON ROAD MAP</p>
              <p className="text-sm text-slate-400">2023-2024</p>
            </div>
          </a>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            THE PRODIGY SHOW DOWN 12/16 & 12/17
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
          <p className="font-heading text-xs uppercase tracking-[0.28em] text-blue-300">{item.month}</p>
          <h3 className="mt-3 break-words font-heading text-2xl uppercase leading-tight text-white sm:text-3xl">{getDateFirstTitle(item)}</h3>
        </div>
        <div className={item.competitionLogo ? "flex min-h-16 w-full max-w-44 shrink-0 items-center justify-center rounded-sm border border-blue-200/20 bg-black/35 p-2 sm:w-auto sm:min-w-24" : "card-icon"}>
          {item.competitionLogo ? (
            <img src={item.competitionLogo} alt={`${item.title} logo`} className="max-h-16 w-full max-w-36 object-contain sm:max-h-14 sm:max-w-28" />
          ) : (
            <Icon className="h-5 w-5" />
          )}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="road-pill"><CalendarDays className="h-3.5 w-3.5" /> {item.window}</span>
        <span className="road-pill blue">{item.category}</span>
      </div>
      <p className="mt-5 text-base leading-7 text-slate-300">{item.description}</p>
      {item.due && <p className="mt-5 border-l-2 border-blue-300 pl-4 font-heading text-sm uppercase tracking-[0.16em] text-blue-100">{item.due}</p>}
    </div>
  );
}
