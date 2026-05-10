/*
Design philosophy reminder for this file: Neo-Futurist Sports Cartography. Reinforce the feeling of navigating a dark competition-night road with electric United blue waypoints, shield-inspired milestone cards, beveled metallic trim, and disciplined athletic motion. If a choice does not strengthen the roadmap journey, remove it.
*/
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
  Sparkles,
  Trophy,
  Video,
} from "lucide-react";

const heroRoadUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/jBDb4VNWMJL62ujU8zZMux/united-elite-hero-road-clean-NYoy6iD2JVmVXbykU4c3aA.webp";
const roadTextureUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/jBDb4VNWMJL62ujU8zZMux/united-elite-road-texture-3u8qJVrdDg528dATYGJzv5.webp";
const waypointOrbUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/jBDb4VNWMJL62ujU8zZMux/united-elite-shield-orb-BBjdcCMMuGeArRj7SwZFjd.webp";

type RoadmapItem = {
  month: string;
  date?: string;
  title: string;
  category: string;
  description: string[];
  due?: string;
  icon: typeof Flag;
};

const roadmap: RoadmapItem[] = [
  {
    month: "JUNE",
    date: "6/3",
    title: "LATE TRYOUTS",
    category: "JUNE",
    description: ["LATE TRYOUTS 6/3"],
    icon: Flag,
  },
  {
    month: "JUNE",
    date: "6/5-6/7",
    title: "TUMBLE CAMP",
    category: "JUNE",
    description: ["TUMBLE CAMP 6/5-6/7"],
    icon: Activity,
  },
  {
    month: "JUNE",
    date: "6/21-6/23 & 6/27-6/29",
    title: "LEVEL 1-4 STUNT CAMP",
    category: "JUNE",
    description: ["LEVEL 1-4 STUNT CAMP 6/21-6/23 & 6/27-6/29"],
    icon: ShieldCheck,
  },
  {
    month: "JUNE",
    date: "6/24-6/26",
    title: "LEVEL 5-6 STUNT CAMP.",
    category: "JUNE",
    description: [
      "LEVEL 5-6 STUNT CAMP. 6/24-6/26",
      "Regarding stunt camp: TEAMS NEED TO LEAVE WITH MINIMUM A CREATIVE ENTRY 1-2 ELEMENTS AND A CREATIVE TRANSTION",
    ],
    icon: ShieldCheck,
  },
  {
    month: "JUNE",
    date: "6/30",
    title: "FINAL TEAM PLACEMENTS",
    category: "JUNE",
    description: ["FINAL TEAM PLACEMENTS 6/30"],
    icon: CheckCircle2,
  },
  {
    month: "JUNE",
    date: "6/15",
    title: "BENCHMARK#1: FLYER FLEX MEASURABLE",
    category: "BENCHMARK#1",
    description: [
      "Turn in a collage of your flyers body positions rated from best to worst. Body positons include: Heel stretch, Over stretch, Bow and arrow, Scorpion, Scale, and arabesque.",
    ],
    due: "Collage DUE: 6/15",
    icon: ClipboardCheck,
  },
  {
    month: "JULY",
    date: "7/9",
    title: "BENCH MARK #2 TUMBLING SKILL SELECTION",
    category: "BENCH MARK #2",
    description: [
      "A written outline of the running and standing tumbling passes you plan to use in your routine for the upcoming season.",
    ],
    due: "OUTLINE DUE: 7/9",
    icon: ClipboardCheck,
  },
  {
    month: "JULY",
    date: "7/13",
    title: "BENCHMARK #3 TEAM DRILLS",
    category: "BENCHMARK #3",
    description: ["Teams are expected to be able to perform 4 of the 2:30 daily tumbling drills ."],
    due: "VIDEO DUE 7/13",
    icon: Video,
  },
  {
    month: "JULY",
    date: "7/16",
    title: "BENCHMARK #4: JUMPS IN MAX #S",
    category: "BENCHMARK #4",
    description: [
      "HAVE YOUR TEAM PERFORM INDIIVUAL VIDEOS OF A SINGLE TOE, RIGHT HURDLER TOE DOUBLE JUMP SEQUENCE, THEN ONE OF A LEFT HURDLER, ONE AND ONE OF A PIKE",
    ],
    due: "VIDEO DUE:7/16",
    icon: Video,
  },
  {
    month: "AUGUST",
    date: "8/20",
    title: "BENCHMARK #5: STUNT SEQUENCE (ELEMENT BY ELEMENT)",
    category: "BENCHMARK #5",
    description: [
      "The explectation for the stunt sequence is",
      "A CREATIVE IN + 1-2 ELEMENTS",
      "MID CREATIVE ELEMENT",
      "FINAL 1-2 ELEMENTS & DISMOUNT",
      "You must submit a video of your stunt sequence in broken down in that order.",
    ],
    due: "VIDEO DUE:8/20",
    icon: ShieldCheck,
  },
  {
    month: "SEPTEMBER",
    date: "9/16",
    title: "BENCHMARK #6: 1st half of stunt and 2nd half of stunt full out",
    category: "BENCHMARK #6",
    description: [
      "You must submit 2 videos. One of your first half of the stunt and one of the second through the end.",
    ],
    due: "VIDEO DUE:9/16",
    icon: Video,
  },
  {
    month: "OCTOBER",
    date: "10/13",
    title: "OCTOBER INITIAL PYRAMID CONCEPTS",
    category: "OCTOBER",
    description: ["Send a video of your initial pyramid concepts"],
    due: "VIDEO DUE:10/13",
    icon: Route,
  },
  {
    month: "OCTOBER",
    date: "10/15",
    title: "BENCHMARK #7: Full out (minus pyramid & Dance)",
    category: "BENCHMARK #7",
    description: ["BENCHMARK #7: Full out (minus pyramid & Dance)"],
    due: "VIDEO DUE:10/15",
    icon: Trophy,
  },
  {
    month: "OCTOBER",
    date: "10/16",
    title: "BENCHMARK #8 FLYER FLEX MEASURABLE",
    category: "BENCHMARK #8",
    description: [
      "Turn in a collage of your flyers body positions rated from best to worst. Body positons include: Heel stretch, Over stretch, Bow and arrow, Scorpion, Scale, and arabesque.",
    ],
    due: "COLLAGE DUE:10/16",
    icon: ClipboardCheck,
  },
  {
    month: "OCTOBER",
    date: "10/20",
    title: "BENCHMARK #9 JUMPS IN MAX #S",
    category: "BENCHMARK #9",
    description: [
      "1. HAVE YOUR TEAM PERFORM INDIIVUAL VIDEOS OF A SINGLE TOE, RIGHT HURDLER TOE DOUBLE JUMP SEQUENCE, THEN ONE OF A LEFT HURDLER, ONE AND ONE OF A PIKE.",
      "2. Submit a photo collage of your toe touches and rate them best to worst.",
    ],
    due: "VIDEO & COLLAGE DUE 10/20",
    icon: ClipboardCheck,
  },
  {
    month: "OCTOBER",
    date: "10/29/2023",
    title: "BENCHMARK #10: IN GYM SHOWCASE",
    category: "BENCHMARK #10",
    description: ["Teams must be able to go full out."],
    due: "10/29/2023",
    icon: Trophy,
  },
  {
    month: "NOVEMBER",
    date: "11/5/2023",
    title: "BENCHMARK #11: USASF LEGALITY SUBMISSION",
    category: "BENCHMARK #11",
    description: [
      "All building (INLCUDING LIFTS)",
      "Submit ALL of your building elements …If itcomes off the ground it gets submitted period.",
    ],
    due: "USASF LEGAL RULINGS DUE 11/5/2023",
    icon: ClipboardCheck,
  },
  {
    month: "NOVEMBER",
    date: "11/5/2023 / 11/6/2023 / 12/1/2023",
    title: "BENCHMARK #12: RUBRIC DOUBLE CHECK",
    category: "BENCHMARK #12",
    description: [
      "1. Fill out the document DUE: 11/5/2023",
      "2. Email the form to our scoring rep DUE: 11/6/2023",
      "3. Post confirmation that you meet #’s DUE: 12/1/2023",
    ],
    icon: ClipboardCheck,
  },
  {
    month: "DECEMBER",
    date: "PRIOR TO LEAVING FOR BREAK",
    title: "BENCHMARK #13: PHYSICAL FITNESS TEST",
    category: "BENCHMARK #13",
    description: [
      "PHYSICAL FITNESS TEST",
      "1. Have your team do 2 Rounds of the warm-up and record it on one continuous video",
      "2. Same for the Stretch system/flyer stretch",
    ],
    due: "VIDEO DUE: PRIOR TO LEAVING FOR BREAK",
    icon: Activity,
  },
  {
    month: "DECEMBER",
    date: "12/12",
    title: "12/12 COMPETIION",
    category: "DECEMBER",
    description: ["12/12 COMPETIION"],
    icon: Trophy,
  },
  {
    month: "DECEMBER",
    date: "12/20",
    title: "12/20 COMPETITION",
    category: "DECEMBER",
    description: ["12/20 COMPETITION"],
    icon: Trophy,
  },
];

const stats = [
  { label: "BENCHMARK#1", value: "Collage DUE: 6/15" },
  { label: "BENCHMARK #7", value: "VIDEO DUE:10/15" },
  { label: "BENCHMARK #13", value: "VIDEO DUE: PRIOR TO LEAVING FOR BREAK" },
];

const monthSummary = Array.from(new Set(roadmap.map((item) => item.month))).map((month) => ({
  month,
}));

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
          <stop offset="0.58" stopColor="#86D2FF" stopOpacity="0.68" />
          <stop offset="1" stopColor="#154DFF" stopOpacity="0.28" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Home() {
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
          <a href="/" className="group flex items-center gap-3" aria-label="Season road map home">
            <div className="flex h-14 w-14 items-center justify-center border border-blue-200/35 bg-blue-400/10 shadow-[0_0_18px_rgba(54,150,255,0.35)] backdrop-blur">
              <Route className="h-7 w-7 text-blue-100" />
            </div>
            <div>
              <p className="font-display text-2xl uppercase tracking-[0.18em] text-white">SEASON ROAD MAP</p>
              <p className="text-[0.68rem] uppercase tracking-[0.38em] text-blue-200/80">BENCHMARK#1</p>
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
              SEASON ROAD MAP
            </div>
            <h1 className="font-display text-[clamp(4rem,12vw,10.5rem)] uppercase leading-[0.78] tracking-[0.02em] text-white text-shadow-blue">
              Season
              <span className="block text-blue-300">Road Map</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200/86 sm:text-xl">
              BENCHMARK#1: FLYER FLEX MEASURABLE
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#roadmap"
                className="group inline-flex items-center justify-center gap-3 bg-blue-400 px-6 py-4 font-heading text-sm uppercase tracking-[0.24em] text-black shadow-[0_0_38px_rgba(60,157,255,0.45)] transition hover:bg-blue-200"
              >
                SEASON ROAD MAP <Route className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#benchmarks"
                className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-6 py-4 font-heading text-sm uppercase tracking-[0.24em] text-white backdrop-blur transition hover:border-blue-200/60 hover:bg-blue-300/10"
              >
                BENCHMARK #13
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

      <section className="relative border-y border-blue-200/10 bg-[#050b13] px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bevel-panel px-6 py-5">
              <p className="font-heading text-xs uppercase tracking-[0.28em] text-blue-200/70">{stat.label}</p>
              <p className="mt-2 font-display text-2xl uppercase text-white sm:text-3xl">{stat.value}</p>
            </div>
          ))}
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
                BENCHMARK#1
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Turn in a collage of your flyers body positions rated from best to worst. Body positons include: Heel stretch, Over stretch, Bow and arrow, Scorpion, Scale, and arabesque.
            </p>
          </div>

          <div className="space-y-10 lg:space-y-0">
            {roadmap.map((item, index) => {
              const Icon = item.icon;
              const alignRight = index % 2 === 1;
              return (
                <motion.article
                  key={`${item.month}-${item.date ?? "no-date"}-${item.title}`}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, delay: Math.min(index * 0.025, 0.22), ease: "easeOut" }}
                  className={`relative grid min-h-40 items-center lg:grid-cols-[1fr_104px_1fr] ${index > 0 ? "lg:-mt-4" : ""}`}
                >
                  <div className={`${alignRight ? "hidden lg:block" : "lg:pr-8"}`}>
                    {!alignRight && <RoadmapCard item={item} index={index} Icon={Icon} />}
                  </div>
                  <div className="relative order-first mb-4 flex justify-start lg:order-none lg:mb-0 lg:justify-center">
                    <div className="waypoint-marker">
                      <span className="absolute inset-[-12px] rounded-full border border-blue-300/40 opacity-60" />
                      <Icon className="relative h-6 w-6 text-blue-100" />
                    </div>
                  </div>
                  <div className={`${alignRight ? "lg:pl-8" : "hidden lg:block"}`}>
                    {alignRight && <RoadmapCard item={item} index={index} Icon={Icon} />}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="benchmarks" className="relative border-t border-blue-200/10 bg-[#07101b] px-5 py-24 sm:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(55,156,255,0.14),transparent_34%),radial-gradient(circle_at_78%_24%,rgba(184,223,255,0.1),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-heading text-sm uppercase tracking-[0.34em] text-blue-300">SEASON ROAD MAP</p>
              <h2 className="mt-4 font-display text-6xl uppercase leading-[0.92] text-white">BENCHMARK #13</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                VIDEO DUE: PRIOR TO LEAVING FOR BREAK
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {monthSummary.map((month, index) => (
                <motion.div
                  key={month.month}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="month-tile"
                >
                  <Sparkles className="h-5 w-5 text-blue-300" />
                  <p className="mt-6 font-display text-5xl uppercase text-white">{month.month}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href="/" className="flex items-center gap-3" aria-label="Season road map footer link">
            <div className="flex h-12 w-12 items-center justify-center border border-blue-200/30 bg-blue-400/10">
              <Route className="h-6 w-6 text-blue-100" />
            </div>
            <div>
              <p className="font-heading text-sm uppercase tracking-[0.28em] text-white">SEASON ROAD MAP</p>
              <p className="text-sm text-slate-400">12/20 COMPETITION</p>
            </div>
          </a>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            12/12 COMPETIION 12/20 COMPETITION
          </p>
        </div>
      </footer>
    </main>
  );
}

function RoadmapCard({ item, Icon }: { item: RoadmapItem; index: number; Icon: typeof Flag }) {
  return (
    <div className="roadmap-card group">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.28em] text-blue-300">{item.month}</p>
          <h3 className="mt-3 font-heading text-2xl uppercase leading-tight text-white sm:text-3xl">{item.title}</h3>
        </div>
        <div className="card-icon">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.date && <span className="road-pill"><CalendarDays className="h-3.5 w-3.5" /> {item.date}</span>}
        <span className="road-pill blue">{item.category}</span>
      </div>
      <div className="mt-5 space-y-3 text-base leading-7 text-slate-300">
        {item.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      {item.due && <p className="mt-5 border-l-2 border-blue-300 pl-4 font-heading text-sm uppercase tracking-[0.16em] text-blue-100">{item.due}</p>}
    </div>
  );
}
