/*
Design philosophy reminder for this file: Neo-Futurist Sports Cartography -- CFA Edition.
Red/white/blue patriotic color scheme with the same dark competition-night road experience.
CFA = Cheer Florida. Season 2025-2026.
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
  Trophy,
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
  tasks?: { label: string; text: string; isKey?: boolean }[];
  practiceTime?: string;
  upcoming?: string;
  icon: typeof Flag;
};

const roadmap: RoadmapItem[] = [
  // -- MAY -------------------------------------------------------------------
  {
    month: "MAY",
    window: "5/14-5/30",
    title: "TRYOUTS & TRAINING",
    category: "MAY",
    description:
      "THE PURPOSE OF TRYOUTS IS TO ASSESS ATHLETES ACROSS MULTIPLE DIMENSIONS — INDIVIDUAL SKILL, STUNT GROUP CHEMISTRY, LEVEL READINESS, AND LONG-TERM TEAM FIT. COACHES EVALUATE NOT ONLY WHAT ATHLETES CAN DO TODAY, BUT HOW THEY WILL DEVELOP AND CONTRIBUTE THROUGHOUT THE SEASON.",
    note: "TIMELINE: 5/14 THURSDAY — LEVEL 4-5-6 ASSESSMENT · 5/15 FRIDAY — LEVEL 3-4 ASSESSMENT · 5/15 SATURDAY — LEVEL 1 ASSESSMENT · 5/17 SUNDAY — INITIAL TEAM PLACEMENT RELEASE · 5/18 MONDAY — 1ST DAY OF STUNT ASSESSMENTS · 5/25 MEMORIAL DAY — LAST WEEK OF STUNT ASSESSMENTS · 5/26 STAFF MEETING — LEAD COACHES ONLY: DISCUSS ANY MOVEMENTS PRIOR TO THE LAST 2 DAYS OF STUNT EVALUATIONS · 5/29 STAFF MEETING — LEAD COACHES ONLY: DISCUSS ANY FINAL MOVEMENTS BEFORE TEAM REVEAL · 5/30 TEAM REVEAL DAY",
    icon: Flag,
  },
  {
    month: "MAY",
    window: "5/14-5/18",
    title: "STUNT GROUP DEVELOPMENT (NO TUMBLING)",
    category: "MAY",
    description:
      "THIS WEEK IS USED TO WORK WITH THE ATHLETES SELECTED FOR THE PRELIMINARY TEAMS TO FORM REALISTIC STUNT GROUPS AND ASSESS THEIR READINESS TO STUNT AT THE LEVEL. TEAMS WILL LEARN THE PROGRAM'S BASIC STUNT WARM-UP AND REVIEW FUNDAMENTAL STUNTING STANDARDS. THE PRIMARY OBJECTIVE IS TO EVALUATE HOW QUICKLY GROUPS CAN PROGRESS TOWARD PERFORMING LEVEL-APPROPRIATE STUNTS. BY THE SECOND PRACTICE OF THE WEEK, TEAMS ARE EXPECTED TO CREATE A FORMATION THAT TRANSITIONS FROM STANDING TUMBLING INTO AN ELITE STUNT, PREPARING THEM FOR FINAL STUNT EVALUATIONS THE FOLLOWING WEEK.",
    note: "COACH'S NOTE: KEEP IT SIMPLE — CELEBRATE EVERY WIN AND BUILD A CULTURE OF CONFIDENCE FROM DAY ONE.",
    icon: ShieldCheck,
  },
  {
    month: "MAY",
    window: "5/25-5/30",
    title: "FINAL STUNT ASSESSMENT WEEK",
    category: "MAY",
    description:
      "TO TEST STUNT GROUPS' ABILITY TO MAINTAIN EXECUTION WHILE CONNECTING STAMINA TO THEIR ABILITY TO EXECUTE A STUNT SEQUENCE. THIS WILL BE THE FINAL OPPORTUNITY TO ASSESS STUNT GROUPS — INTEGRATE STUNTING WITH TUMBLING TO EVALUATE HOW WELL GROUPS CAN PERFORM UNDER THE PHYSICAL DEMANDS THEY WILL EXPERIENCE IN THE ROUTINE. REMEMBER: THE GOAL ISN'T TO MAKE THE STUNT UNOBTAINABLE — MAKE THE ATHLETES FEEL ACCOMPLISHED AS THEY GO INTO TEAM REVEAL.",
    note: "5/29 STAFF MEETING — LEAD COACHES ONLY: DISCUSS ANY FINAL MOVEMENTS BEFORE TEAM REVEAL · 5/30 TEAM REVEAL DAY",
    icon: ShieldCheck,
  },
  // -- JUNE ------------------------------------------------------------------
  {
    month: "JUNE",
    window: "6/3",
    title: "WEEK 1 & 2 DIRECTIVES — FIRST OFFICIAL TEAM PRACTICE",
    category: "JUNE",
    description:
      "THIS IS THE FIRST OFFICIAL TEAM PRACTICE OF THE SEASON, AND IT SETS THE TONE FOR EVERYTHING THAT FOLLOWS. THE EXPECTATIONS, HABITS, AND STANDARDS ESTABLISHED THIS WEEK WILL SHAPE HOW YOUR TEAM TRAINS, COMMUNICATES, AND PERFORMS THROUGHOUT THE YEAR. YOUR RESPONSIBILITY AS A COACH IS TO CREATE EXCITEMENT FOR THE SEASON AHEAD WHILE CLEARLY ESTABLISHING THE STANDARDS, DISCIPLINE, AND CULTURE THAT DEFINE OUR PROGRAM.",
    tasks: [
      {
        label: "TASK #1 — BUILD CONNECTION WITH YOUR TEAM",
        text: "Take time to get to know your athletes better. Set aside 10 minutes at the end of practice to ask the team a simple question about themselves. Another option is to make a post in Band asking athletes to share something fun, like a picture of their pet. The goal is to begin building relationships and creating team culture.",
      },
      {
        label: "TASK #2 — INTRODUCE THE H.I.I.T WARM-UP (TIER 1)",
        text: "5 (8-counts) T-kicks · 20 Squat Jacks · 5 (8-counts) Tuck Jumps · 10 Burpees · 5 Push-ups · 5 Level-appropriate tumbling skills. The expectation is execution. If athletes cannot execute the fundamentals of the warm-up correctly, they do not move on to cheer skills. Coaches will be evaluated on their team's execution and discipline during the warm-up.",
      },
      {
        label: "TASK #3 — CONTINUE MASTERING THE GENERAL STRETCH SYSTEM",
        text: "Continue reinforcing the General Stretch System so athletes understand the sequence and expectations. Consistency here is important because this system will be used throughout the season.",
      },
      {
        label: "TASK #4 — CONTINUE PROGRESS ON THE STUNT WARM-UP",
        text: "Continue developing the stunt warm-up. Because the previous week focused heavily on stunting, the majority of this week's practice should prioritize development in other areas.",
      },
      {
        label: "TASK #5 — INTRODUCE THE JUMP SYSTEM",
        text: "Introduce the program's jump system this week. Teach and rep 1 plyometric drill, 1 isometric drill, the arm placement drill, and the 5-minute jump rep process. The goal is to establish the foundation of the jump system so athletes understand the structure and expectations from the start of the season.",
      },
    ],
    practiceTime: "40% Tumbling Technique Work · 25% Stunting · 20% Warm-Up & General Stretch · 10% Jumps · 5% Team Connection / Culture",
    icon: Activity,
  },
  {
    month: "JUNE",
    window: "6/7",
    title: "MANDATORY ALL-STAFF TRAINING — ALL DAY EVENT",
    category: "JUNE",
    description:
      "ALL STAFF REQUIRED. STAFF TRAINING IS DESIGNED TO ESTABLISH THE SYSTEMS, EXPECTATIONS, STRUCTURE, AND COACHING STANDARDS THAT WILL GUIDE THE SEASON MOVING FORWARD. THE PURPOSE IS TO ENSURE ALL COACHES UNDERSTAND NOT ONLY WHAT WE ARE DOING AS A PROGRAM, BUT WHY WE ARE DOING IT.",
    icon: Users,
  },
  {
    month: "JUNE",
    window: "6/9",
    title: "BENCH MARK #1 — INDIVIDUAL TEAM PARENT MEETINGS",
    category: "BENCH MARK #1",
    description:
      "EACH COACH HOSTS THEIR FIRST INDIVIDUAL TEAM PARENT MEETING TO ESTABLISH EXPECTATIONS, COMMUNICATE GOALS, AND BUILD A FOUNDATION OF TRUST WITH THEIR TEAM FAMILIES.",
    note: "THESE MEETINGS CAN BEGIN AS EARLY AS THE FIRST PRACTICE ON 6/3 AND MUST BE COMPLETED PRIOR TO STUNT CAMP. USE THIS MEETING AS AN OPPORTUNITY TO STRESS THE IMPORTANCE OF STUNT CAMP ATTENDANCE. PARENTS NEED TO UNDERSTAND THAT STUNT CAMP IS NOT OPTIONAL — A SIGNIFICANT NUMBER OF DECISIONS REGARDING STUNT GROUP PLACEMENTS AND FORMATIONS ARE MADE DURING CAMP. ATHLETES WHO ARE ABSENT FROM CAMP MAY MISS CRITICAL EVALUATIONS THAT DIRECTLY IMPACT THEIR ROLE ON THE TEAM. THIS BENCHMARK SERVES TWO CRITICAL PURPOSES. FIRST, IT TRAINS COACHES TO OWN THEIR PARENT RELATIONSHIPS DIRECTLY — HANDLING COMMUNICATION, SETTING EXPECTATIONS, AND BUILDING TRUST WITHOUT RELYING ON PROGRAM LEADERSHIP TO MANAGE THOSE INTERACTIONS FOR THEM. SECOND, IT ESTABLISHES THE FOUNDATION OF A HEALTHY TEAM CULTURE FROM THE VERY START OF THE SEASON. COACHES SHOULD USE THIS MEETING TO INTRODUCE THEMSELVES AND THEIR COACHING PHILOSOPHY, SHARE TEAM GOALS AND THE SEASON ROADMAP, OUTLINE PRACTICE EXPECTATIONS AND ATTENDANCE STANDARDS, ADDRESS ANY EARLY CONCERNS FROM PARENTS, AND BEGIN BUILDING THE RELATIONSHIP THAT WILL CARRY THE TEAM THROUGH A FULL COMPETITIVE SEASON. A COACH WHO CAN COMMUNICATE EFFECTIVELY WITH PARENTS IS A COACH WHO CAN LEAD A TEAM.",
    due: "DUE: 6/9",
    icon: Users,
  },
  {
    month: "JUNE",
    window: "6/8-6/13",
    title: "MANDATORY SKILLS CAMP",
    category: "JUNE",
    description:
      "MANDATORY SKILLS CAMP RUNS 6/8, 6/9, 6/11, 6/12, AND 6/13.",
    note: "CAMP GOALS: TEAMS SHOULD LEAVE CAMP WITH AT MINIMUM A CREATIVE ENTRY, THE FIRST TWO ELEMENTS OF THEIR STUNT SEQUENCE, AND A CREATIVE TRANSITION INTO THE SECOND HALF OF THEIR ELITE STUNT. MOST TEAMS SHOULD BE ABLE TO COMPLETE THEIR FULL STUNT SEQUENCE, AS THIS IS A VERY REALISTIC EXPECTATION WITHIN THE CAMP SETTING. ALL TEAMS SHOULD ALSO LEAVE WITH THEIR STUNT ISOLATION DRILL ESTABLISHED AND READY FOR TRAINING.",
    icon: ShieldCheck,
  },
  {
    month: "JUNE",
    window: "6/14",
    title: "BENCH MARK #2 — ENTRIES/TRANSITIONS/DISMOUNTS",
    category: "BENCH MARK #2",
    description:
      "THIS BENCHMARK ENSURES THAT TEAMS USED THEIR TIME AT STUNT CAMP PRODUCTIVELY AND INTENTIONALLY TO BUILD THE FOUNDATION OF THEIR STUNT SECTION. BY THIS POINT, TEAMS SHOULD HAVE PRODUCED A STUNT SEQUENCE AND MINI ROUTINE THAT CAN BE TRAINED THROUGHOUT THE SUMMER AS ATHLETES PREPARE FOR CHOREOGRAPHY SEASON. THE STUNT ISOLATION VIDEO ENSURES THAT STUNT ISOLATION IS BEING PERFORMED ACCORDING TO THE GYM'S STANDARDS AND GIVES US AN OPPORTUNITY TO PROVIDE FEEDBACK ON HOW THE DRILL CAN BE IMPROVED TO HELP BUILD STRONGER, MORE TECHNICALLY SOUND STUNT GROUPS. COMPLETING THIS BENCHMARK WILL HELP PREPARE TEAMS FOR CHOREOGRAPHY SEASON WHILE ALSO GIVING COACHES EFFECTIVE TOOLS TO CONTINUE DRILLING TECHNIQUE AND BUILDING THE STRENGTH REQUIRED FOR ELITE STUNTING.",
    note: "(1) VIDEO: STUNT SECTION FROM STUNT CAMP (W/MINI ROUTINE). (2) VIDEO: STUNT ISOLATION.",
    due: "DUE: 6/14",
    icon: Video,
  },
  {
    month: "JUNE",
    window: "6/17-6/26",
    title: "WEEK 3–4 DIRECTIVES — TECHNICAL DEVELOPMENT PHASE",
    category: "JUNE",
    description:
      "HISTORICALLY, THIS IS THE TIME OF THE SUMMER WHEN ATTENDANCE CAN BEGIN TO FLUCTUATE DUE TO VACATIONS. BECAUSE OF THAT, PRACTICE PLANS SHOULD PRIORITIZE AREAS WHERE ATHLETES CAN CONTINUE TO DEVELOP REGARDLESS OF FULL STUNT GROUP AVAILABILITY. THE EMPHASIS DURING THIS PHASE SHOULD BE HEAVY TUMBLING TECHNIQUE WORK AND JUMP DEVELOPMENT, WHILE MAINTAINING THE FUNDAMENTALS OF STUNTING.",
    tasks: [
      {
        label: "TASK #1 — H.I.I.T WARM-UP (TIER 1)",
        text: "Continue implementing Tier 1 of the H.I.I.T warm-up at the start of every practice. The expectation remains execution and discipline. Athletes should not be moving on to cheer skills until the warm-up is completed correctly. Coaches will be evaluated on their team's execution and discipline during the warm-up.",
      },
      {
        label: "TASK #2 — GENERAL STRETCH SYSTEM MASTERY",
        text: "By the end of this phase, athletes should be able to perform the General Stretch System to music with minimal correction. Coaches must remain active and engaged throughout this portion of practice. Athletes will naturally become relaxed or disengaged — it is the coach's responsibility to consistently demand the standard.",
      },
      {
        label: "TASK #3 — TUMBLING SYSTEM DEVELOPMENT",
        text: "Tumbling technique is the primary focus of this phase. Coaches must begin establishing their team's 4 daily tumbling drills. By the end of Weeks 3–4, every team should have at least 2 of their 4 drills identified and consistently implemented. Each drill should be structured to a 2:30 track, totaling approximately 5 minutes of tumbling drill work per practice at this stage.",
      },
      {
        label: "TASK #4 — JUMP SYSTEM DEVELOPMENT",
        text: "Continue developing the Jump System. Introduce the 2nd plyometric drill and 2nd isometric drill. Continue the Jump Approach Drill and 5 minutes of jump repetition work. The goal is to build the foundation of the jump system so athletes understand the structure and expectations from the start of the season.",
      },
      {
        label: "TASK #5 — STUNT SYSTEM MAINTENANCE",
        text: "Due to inconsistent attendance, coaches must be flexible with stunt group structures. Combine athletes to form complete groups when possible and use fill-ins as needed. Focus on stunt isolations (1–2 elements at a time) and repeat stunt sequences from camp when possible. This is an opportunity to build stronger, more technically sound stunt groups.",
      },
      {
        label: "TASK #6 — TEAM CULTURE",
        text: "End-of-Practice Reminder: Close every practice this phase with two intentional moments. First, ask the group one get-to-know-you question — something that goes beyond cheer and lets athletes feel seen as people, not just performers. Second, close with a recognition moment: each athlete names one teammate who showed up, worked hard, or made practice better that day. Keep both moments brief and consistent. The goal is to build a team that genuinely knows and cares about each other — because that is what shows up on the competition floor.",
      },
    ],
    practiceTime: "40% Tumbling Technique Work · 20% Stunt Work and Isolation · 15% Warm-Up & General Stretch · 15% Jump System · 10% Team Culture",
    icon: Activity,
  },
  {
    month: "JUNE",
    window: "6/26",
    title: "START OF 4TH OF JULY BREAK",
    category: "BREAK",
    description:
      "COACHES SHOULD ASSIGN THE FOLLOWING HOMEWORK TO THEIR ATHLETES BEFORE THE BREAK BEGINS. EACH ATHLETE MUST RECORD THEMSELVES PERFORMING 1 CONTINUOUS, UNEDITED VIDEO OF A FULL ROUND OF THE H.I.I.T WARM-UP.",
    note: "ATHLETES ARE REQUIRED TO SUBMIT 2 SEPARATE VIDEOS DURING THE BREAK — NOT BOTH ON THE SAME DAY. VIDEOS MUST BE SUBMITTED PRIOR TO THE FIRST PRACTICE BACK ON 7/6. COACHES SHOULD COMMUNICATE THE SUBMISSION METHOD (BAND, EMAIL, OR TEAM GROUP CHAT) AND REMIND ATHLETES THAT THE EXPECTATION IS THE SAME STANDARD OF EXECUTION THEY HOLD IN PRACTICE: FULL INTENSITY, CORRECT TECHNIQUE, AND NO SHORTCUTS. THIS ASSIGNMENT KEEPS ATHLETES ACCOUNTABLE DURING THE BREAK, MAINTAINS THE WARM-UP HABIT, AND GIVES COACHES A WINDOW INTO HOW ATHLETES ARE MAINTAINING THEIR CONDITIONING AWAY FROM THE GYM.",
    icon: ClipboardCheck,
  },
  // -- JULY ------------------------------------------------------------------
  {
    month: "JULY",
    window: "7/6",
    title: "PRACTICE RESUMES — END OF 4TH OF JULY BREAK",
    category: "JULY",
    description:
      "WEEK 5 — BREAK RECONNECTION: AT THE END OF PRACTICE, GATHER THE TEAM IN A CIRCLE. GO AROUND THE ROOM AND HAVE EACH ATHLETE SHARE ONE FUN THING THEY DID OVER THE 4TH OF JULY BREAK.",
    icon: Activity,
  },
  {
    month: "JULY",
    window: "7/6-7/13",
    title: "WEEKS 5–6 DIRECTIVES — ACCOUNTABILITY & ROUTINE PREPARATION",
    category: "JULY",
    description:
      "AS ATHLETES RETURN FROM BREAK, THIS PHASE BECOMES A CRITICAL CHECKPOINT FOR ACCOUNTABILITY, OWNERSHIP, AND PREPARATION FOR CHOREOGRAPHY — APPROXIMATELY 45 DAYS AWAY. ATHLETES WERE GIVEN ASSIGNMENTS OVER THE BREAK. THIS IS THE MOMENT TO EVALUATE WHO TOOK OWNERSHIP OF THEIR DEVELOPMENT AND BEGIN REINFORCING THE STANDARDS OF THE PROGRAM. WE ARE ONE TEAM — AND WE WILL HOLD ATHLETES ACCOUNTABLE WHILE ALSO RECOGNIZING AND REWARDING THOSE WHO SHOWED UP.",
    tasks: [
      {
        label: "TASK #1 — ACCOUNTABILITY AND CONDITIONING STANDARD",
        text: "This week, accountability will be directly tied to conditioning. · Athletes who did NOT submit their assigned videos will complete a full conditioning set · Athletes who DID submit their videos will complete half the conditioning. This reinforces ownership, responsibility, and fairness within the team structure. Athletes who finish early should be encouraged to cheer on their teammates while others complete their work. This is an opportunity to teach that we support each other — but standards are still upheld.",
      },
      {
        label: "TASK #2 — H.I.I.T WARM-UP TIER II",
        text: "Begin implementing Tier II of the H.I.I.T warm-up. · 5 (8-counts) T-kicks · 40 Squat Jacks · 7 (8-counts) Tuck Jumps · 20 Burpees · 10 Push-ups · 5 level-appropriate tumbling skills. The expectation is execution. If athletes cannot execute the fundamentals of the warm-up correctly, they do not move on to cheer skills. Coaches will be evaluated on their team's execution, discipline, and standard of performance during this phase. Accountability Extension: Athletes who are absent must submit a video of themselves completing one full round of the warm-up. Coaches are responsible for tracking and enforcing this.",
      },
      {
        label: "TASK #3 — MASTER THE GENERAL STRETCH SYSTEM",
        text: "By the end of this phase, athletes should be able to perform the General Stretch System to music with minimal correction. Coaches must remain active and engaged throughout this portion of practice. Athletes will naturally become relaxed or disengaged — it is the coach's responsibility to consistently demand the standard.",
      },
      {
        label: "TASK #4 — TUMBLING SYSTEM DEVELOPMENT",
        text: "Tumbling technique continues to be a major priority. By this point, teams should have 2 of their 4 daily drills established. Weeks 5–6 should reinforce and execute those drills consistently while introducing Drills 3 and 4. By the end of this phase, every team should have a complete 10-minute tumbling drill system.",
      },
      {
        label: "TASK #5 — ADVANCED TUMBLING TECHNIQUE WORK",
        text: "Due to continued absences, this is an ideal time to focus on technical refinement. Use tools such as foam blocks, panel mats, and resistance bands. Focus on shapes, speed, control, and body positions. The goal is to improve technical precision — not just skill completion.",
      },
      {
        label: "TASK #6 — MINI ROUTINE IMPLEMENTATION",
        text: "Mini routines begin during this phase. Each practice should include 2–3 full mini routine runs consisting of: · running tumbling · jump sequence · standing tumbling · stunt section. This begins building stamina, timing, and routine awareness that will carry directly into choreography.",
        isKey: true,
      },
      {
        label: "TASK #7 — STUNT ADAPTABILITY AND ISOLATION",
        text: "Due to inconsistent attendance, coaches must be flexible with stunt group structures. Combine athletes to form complete groups when possible and use fill-ins as needed. Focus on stunt isolations (1–2 elements at a time) and repeat stunt sequences from camp when possible. This is an opportunity to build stronger, more technically sound stunt groups.",
      },
      {
        label: "TASK #8 — CONTINUE BUILDING THE JUMP SYSTEM",
        text: "Continue developing the Jump System. Introduce the 4th plyometric drill and 4th isometric drill. Continue the Jump Approach Drill and 5 minutes of jump repetition work. By the end of this phase, athletes should be highly familiar with all drills. Beginning in August, drills will begin rotating on a structured schedule — athletes must be able to execute them consistently and efficiently.",
      },
      {
        label: "TASK #9 — COACH AUTONOMY AFTER SYSTEMS",
        text: "Once all required systems are completed within practice, coaches have the ability to begin exploring routine ideas. This may include formations, transitions, timing concepts, and creative sequencing. The focus is not to finalize routines — but to begin thinking intentionally about how pieces will come together heading into choreography season.",
      },
      {
        label: "TASK #10 — TEAM CULTURE",
        text: "WEEK 5 — Break Reconnection: At the end of practice, gather the team in a circle. Go around the room and have each athlete share one fun thing they did over the 4th of July break. Keep it light · Let athletes be themselves. End-of-Practice Reminder (carry through both weeks): Close every practice this phase with two intentional moments. First, ask the group one get-to-know-you question — something that goes beyond cheer and lets athletes feel seen as people, not just performers. Second, close with a recognition moment: each athlete names one teammate who showed up, worked hard, or made practice better that day.",
      },
    ],
    upcoming: "JUMP THRESHOLD — Due by end of July: Coaches must begin identifying their best jumpers now. Every single athlete must be included. Each athlete needs one photo of a clean toe touch (solo, no one in the background). Photos will be arranged into a pyramid hierarchy collage from best to worst execution. This is a tool we will use to communicate jump weaknesses directly with parents — it must be thorough and include every athlete on the team.",
    practiceTime: "25–30% Tumbling System and Technique · 20–25% Mini Routine and Stamina Work · 15–20% Stunt Work and Isolation · 15–20% Jump System · 10–15% Warm-Up and Stretch Systems · 5% Team Culture and Accountability",
    icon: Activity,
  },
  {
    month: "JULY",
    window: "7/13-7/20",
    title: "WEEKS 7–8 DIRECTIVES — STRUCTURE & CONSISTENCY PHASE",
    category: "JULY",
    description:
      "MID-JULY IS NOT A RESET — IT IS A CONTINUATION. THE WORK FROM WEEKS 5–6 DOES NOT PAUSE; IT COMPOUNDS. WHILE MORE ATHLETES ARE EXPECTED TO RETURN FROM VACATIONS, WE CANNOT BUILD OUR PRACTICE PLANS AROUND WHO MIGHT SHOW UP. WE BUILD FOR THE ATHLETES WHO ARE THERE, AND WE HOLD THE STANDARD FOR EVERYONE. THE THREE NON-NEGOTIABLES FOR THIS PHASE ARE SIMPLE: BUILD STRONGER ATHLETES, SHARPEN TUMBLING EXECUTION, AND ELEVATE JUMP PERFORMANCE. EVERY PRACTICE DECISION SHOULD SERVE AT LEAST ONE OF THOSE THREE OUTCOMES.",
    tasks: [
      {
        label: "TASK #1 — PRACTICE STRUCTURE & EFFICIENCY",
        text: "By this point, the practice structure should be fully understood and consistently executed. Every practice should follow: H.I.I.T Warm-Up (Tier II) · General Stretch System / Flyer Stretch · 10 Minutes of Daily Tumbling Drills. Practices must be run efficiently and on time. The goal is to ensure that by the time choreography season begins, practice runs like clockwork. We are not reteaching structure later — we are executing it now.",
      },
      {
        label: "TASK #2 — H.I.I.T & STRETCH SYSTEM STANDARDS",
        text: "Continue implementing Tier II of the H.I.I.T warm-up. The expectation is that athletes look better each week in control, timing, effort, and execution. The same standard applies to the General Stretch System. By this point, athletes should be able to complete the full stretch sequence with minimal correction. If standards are not being met: STOP — correct — and reinforce. This is where we begin to sweat the small details.",
      },
      {
        label: "TASK #3 — INTRODUCE BASKET SYSTEM (DRILL #1)",
        text: "Begin implementing Basket Drill #1. This is the most fundamental drill and should be used consistently throughout the season. It can be completed within 2:30 and repeated multiple times per practice. Focus on timing, technique, and consistency. This begins building the foundation for basket performance later in the season.",
      },
      {
        label: "TASK #4 — CONTINUE MINI ROUTINE & STAMINA DEVELOPMENT",
        text: "Continue running mini routines at every practice. At this stage, the expectation is that athletes begin showing improvement in stamina, timing between sections, and the ability to connect skills under fatigue. Mini routines should still be performed 2–3 times per practice.",
      },
      {
        label: "TASK #5 — JUMP SYSTEM EXECUTION",
        text: "The 30-minute Jump System (Foundation) should now be running efficiently. It must be implemented at least 1 of the 2 practices per week. Athletes should understand all drills. Coaches should be spending less time explaining and more time executing. At this point, the system should feel smooth, organized, and consistent.",
      },
      {
        label: "TASK #6 — CULTURE, BUY-IN & ATHLETE CONNECTION",
        text: "As more athletes return from vacations, this is a critical time to re-establish expectations and reinforce culture. Continue to communicate what we stand for, the standards we uphold, and what is expected daily. Athletes must begin to buy into the process, not just participate in it. Always end practice on a positive and intentional note — a quick team reflection, team prayer, closing huddle, or simple goodbyes with intention. The goal is for every athlete to leave practice knowing they are valued, they are part of something, and their coach cares about them.",
        isKey: true,
      },
    ],
    practiceTime: "25–30% Tumbling Development & Skill Connection · 20–25% Mini Routine / Stamina Work · 15–20% Stunt Work & Basket Introduction · 15–20% Jump System (1 full day per week) · 10–15% Warm-Up & Stretch Systems · 5% Culture & Athlete Connection",
    icon: Activity,
  },
  {
    month: "JULY",
    window: "7/26",
    title: "BENCH MARK #3 — JUMP THRESHOLD — TOE TOUCH PYRAMID",
    category: "BENCH MARK #3",
    description:
      "A PHOTO-BASED PYRAMID RANKING OF EVERY ATHLETE'S BEST TOE TOUCH — FROM STRONGEST TO WEAKEST EXECUTION — TO ESTABLISH A MEASURABLE STARTING POINT FOR JUMP DEVELOPMENT.",
    note: "EACH COACH MUST COLLECT ONE PHOTO OF EVERY ATHLETE ON THEIR TEAM PERFORMING A CLEAN TOE TOUCH. PHOTOS SHOULD BE TAKEN SOLO WITH NO OTHER ATHLETES IN THE BACKGROUND. ONCE COLLECTED, COACHES WILL ARRANGE THE PHOTOS INTO A PYRAMID HIERARCHY COLLAGE FROM BEST TO WORST EXECUTION. THIS BENCHMARK SERVES A CLEAR, THREE-PART PURPOSE. FIRST, IT GIVES US A MEASURABLE STARTING POINT FOR OUR TEAM'S JUMP DEVELOPMENT — NOT JUST A GENERAL SENSE OF WHERE ATHLETES ARE, BUT A DOCUMENTED, VISUAL RECORD. SECOND, IT DIRECTLY INFORMS CHOREOGRAPHY PLANNING BY IDENTIFYING WHICH ATHLETES CAN ANCHOR JUMP SEQUENCES AND WHICH NEED CONTINUED DEVELOPMENT BEFORE THE ROUTINE IS BUILT AROUND THEM. THIRD, IT GIVES COACHES A TANGIBLE, PROFESSIONAL TOOL TO USE IN PARENT CONVERSATIONS — SHOWING EXACTLY WHERE AN ATHLETE STANDS, WHAT THE STANDARD LOOKS LIKE, AND WHAT GROWTH WILL BE MEASURED AGAINST GOING FORWARD. EVERY ATHLETE MUST BE INCLUDED. NO EXCEPTIONS.",
    due: "DELIVERABLE: 7/26 — PHOTO: BEST TOE TOUCH PER ATHLETE (SOLO, NO ONE IN THE BACKGROUND)",
    icon: Trophy,
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
              alt="Cheer Florida logo"
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
              alt="Cheer Florida logo large"
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
            <img src={logoUrl} alt="Cheer Florida logo" className="h-12 w-12 object-contain" />
            <div>
              <p className="font-heading text-sm uppercase tracking-[0.28em] text-white">SEASON ROAD MAP</p>
              <p className="text-sm text-slate-400">2025-2026</p>
            </div>
          </a>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            CHEER FLORIDA · EST. 1998 · ALL STAR CHEER
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

      {/* Tasks list */}
      {item.tasks && item.tasks.length > 0 && (
        <div className="mt-5 space-y-3">
          {item.tasks.map((task, i) => (
            <div key={i} className={`rounded border px-4 py-3 text-xs tracking-[0.12em] ${task.isKey ? "border-yellow-500/40 bg-yellow-900/20" : "border-red-500/20 bg-red-950/20"}`}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`font-bold uppercase tracking-[0.18em] ${task.isKey ? "text-yellow-400" : "text-red-400"}`}>{task.label}</span>
                {task.isKey && <span className="rounded bg-yellow-500/20 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-yellow-300">KEY TASK</span>}
              </div>
              <p className="text-slate-300 leading-5">{task.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Practice time distribution */}
      {item.practiceTime && (
        <div className="mt-4 rounded border border-slate-600/30 bg-slate-900/40 px-4 py-3">
          <p className="font-heading text-xs uppercase tracking-[0.22em] text-slate-400 mb-1">PRACTICE TIME DISTRIBUTION</p>
          <p className="text-xs text-slate-300 leading-5">{item.practiceTime}</p>
        </div>
      )}

      {/* Upcoming alert */}
      {item.upcoming && (
        <div className="mt-4 rounded border border-amber-500/40 bg-amber-900/20 px-4 py-3">
          <p className="font-heading text-xs uppercase tracking-[0.22em] text-amber-400 mb-1.5">⚠ UPCOMING</p>
          <p className="text-xs text-amber-200 leading-5">{item.upcoming}</p>
        </div>
      )}

      {/* Notes */}
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
