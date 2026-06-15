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
  note?: string;
  competitionLogo?: string;
  icon: typeof Flag;
};

const roadmap: RoadmapItem[] = [
  // -- MAY -------------------------------------------------------------------
  {
    month: "MAY",
    window: "5/3-5/4",
    title: "TRYOUTS -- BUILDING THE RIGHT TEAMS",
    category: "MAY",
    description:
      "THE PURPOSE OF TRYOUTS IS NOT SIMPLY TO IDENTIFY THE 'BEST ATHLETES' INDIVIDUALLY, BUT TO BUILD THE STRONGEST AND MOST FUNCTIONAL TEAMS POSSIBLE AS A WHOLE. COACHES MUST EVALUATE NOT ONLY SKILL LEVEL, BUT ALSO STUNT GROUP COMPOSITION, AGE OVERLAP, BODY TYPES, TIMING, ATHLETE CHEMISTRY, TUMBLING QUANTITY STRATEGY, FLEXIBILITY, PERFORMANCE QUALITY, AND LONG-TERM DEVELOPMENTAL FIT WITHIN THE PROGRAM.",
    note: "THROUGHOUT THE PROCESS, ATHLETES MAY BE MOVED MULTIPLE TIMES AS COACHES CONTINUE COMPARING COMBINATIONS AND GATHERING MORE INFORMATION. TEAM PLACEMENT DECISIONS ARE MADE WITH THE GOAL OF BUILDING ROUTINES THAT ARE COMPETITIVE, STRUCTURALLY SOUND, AGE APPROPRIATE, AND CAPABLE OF LONG-TERM SUCCESS THROUGHOUT THE SEASON. THE EXPECTATION THROUGHOUT TRYOUTS IS PATIENCE, COMMUNICATION, PROFESSIONALISM, AND TRUST IN THE EVALUATION PROCESS AS WE WORK TO GET THE RIGHT ATHLETES IN THE RIGHT ENVIRONMENTS.",
    icon: Flag,
  },
  {
    month: "MAY",
    window: "5/29",
    title: "EMPLOYEE ORIENTATION",
    category: "MAY",
    description:
      "EMPLOYEE ORIENTATION WILL BE CONDUCTED ALONGSIDE JEFF BENSON, SPORTS ELITE PERFORMANCE EXPERT, AND WILL FOCUS ON ESTABLISHING THE OPERATIONAL STANDARDS, EXPECTATIONS, AND SYSTEMS THAT STAFF MEMBERS WILL BE EXPECTED TO FOLLOW THROUGHOUT THE SEASON. THIS ORIENTATION SERVES AS THE FOUNDATION FOR EMPLOYEE ONBOARDING AND WILL FUNCTION AS A REVIEW OF THE PROGRAM'S SOPs, EMPLOYEE HANDBOOK EXPECTATIONS, COMMUNICATION STRUCTURE, AND OVERALL STANDARDS OF OPERATION.",
    note: "(1) EMPLOYEE HANDBOOK REVIEW. (2) STAFF EXPECTATIONS AND RESPONSIBILITIES. (3) STANDARD OPERATING PROCEDURES (SOPs). (4) ATTENDANCE, PUNCTUALITY, AND RELIABILITY STANDARDS. (5) COMMUNICATION EXPECTATIONS AND RESPONSE TIMES. (6) PRACTICE FLOOR PROFESSIONALISM. (7) COACH APPEARANCE AND PRESENTATION STANDARDS. (8) PARENT AND ATHLETE INTERACTION EXPECTATIONS. (9) PRACTICE PLAN AND REPORTING EXPECTATIONS. (10) ACCOUNTABILITY SYSTEMS AND DOCUMENTATION. (11) LEADERSHIP STRUCTURE AND CHAIN OF COMMUNICATION. (12) CONFLICT RESOLUTION AND PROFESSIONAL CONDUCT. (13) PROGRAM CULTURE AND STANDARDS OF EXCELLENCE. THE EXPECTATION IS THAT ALL EMPLOYEES LEAVE ORIENTATION WITH A CLEAR UNDERSTANDING OF HOW THE PROGRAM OPERATES, WHAT IS EXPECTED OF THEM PROFESSIONALLY, AND THE STANDARDS THEY WILL BE HELD ACCOUNTABLE TO THROUGHOUT THE SEASON.",
    icon: ShieldCheck,
  },
  {
    month: "JUNE",
    window: "6/7",
    title: "STAFF TRAINING",
    category: "JUNE",
    description:
      "STAFF TRAINING IS DESIGNED TO ESTABLISH THE SYSTEMS, EXPECTATIONS, STRUCTURE, AND COACHING STANDARDS THAT WILL GUIDE THE SEASON MOVING FORWARD. THE PURPOSE IS TO ENSURE ALL COACHES UNDERSTAND NOT ONLY WHAT WE ARE DOING AS A PROGRAM, BUT WHY WE ARE DOING IT.",
    note: "(1) PRACTICE PLAN STRUCTURE AND TIMING. (2) WARM-UP AND STRETCH SYSTEM EXECUTION. (3) ATHLETE CORRECTION STANDARDS. (4) STUNT PROGRESSION SYSTEMS. (5) TUMBLING DRILL IMPLEMENTATION. (6) COMMUNICATION EXPECTATIONS. (7) TEAM CULTURE AND LEADERSHIP STANDARDS. (8) PRACTICE EFFICIENCY AND ORGANIZATION. (9) TRYOUT AND EVALUATION PROCEDURES. (10) ACCOUNTABILITY SYSTEMS AND DOCUMENTATION. (11) PARENT COMMUNICATION EXPECTATIONS. (12) SCORESHEET AND ROUTINE STRATEGY EDUCATION. THE EXPECTATION IS THAT ALL STAFF MEMBERS LEAVE TRAINING WITH A CLEAR UNDERSTANDING OF PROGRAM SYSTEMS, TERMINOLOGY, EXPECTATIONS, AND COACHING RESPONSIBILITIES HEADING INTO TEAM PLACEMENTS AND THE START OF THE SEASON.",
    icon: ShieldCheck,
  },

  // -- JUNE ------------------------------------------------------------------
  {
    month: "JUNE",
    window: "6/1",
    title: "BENCHMARK #1 JUMP MEASURABLE",
    category: "BENCHMARK #1",
    description:
      "BASELINE JUMP MEASURABLE -- ESTABLISHES THE INDIVIDUAL JUMP BASELINE THAT WILL BE TRACKED FOR IMPROVEMENT THROUGHOUT THE SEASON.",
    note: "DELIVERABLES: (1) VIDEO OF THE WHOLE TEAM PERFORMING JUMPS * (2) INDIVIDUAL TOE TOUCH COLLAGE OF EVERY ATHLETE RANKED FROM BEST TO WORST",
    due: "VIDEO DUE: 6/1",
    icon: Video,
  },
  {
    month: "JUNE",
    window: "6/2",
    title: "BENCHMARK #2 FLYER FLEX MEASURABLE",
    category: "BENCHMARK #2",
    description:
      "THIS BENCHMARK ESTABLISHES THE BASELINE BODY POSITION COLLAGE FOR EVERY FLYER ON THE TEAM. EACH FLYER SHOULD TAKE A FULL-BODY PICTURE OF THE FOLLOWING BODY POSITIONS: HEEL STRETCH, FRONT STRETCH, BOW & ARROW, ARABESQUE, SCALE, AND NEEDLE.",
    note: "ONCE ALL PICTURES ARE COLLECTED, COACHES SHOULD EVALUATE AND RANK EACH BODY POSITION INDIVIDUALLY FROM STRONGEST TO WEAKEST BASED ON FLEXIBILITY, BODY LINES, STABILITY, POSTURE, CONTROL, TOE POINT, AND OVERALL EXECUTION. COACHES SHOULD THEN ORGANIZE THE PICTURES INTO A COLLAGE FORMAT THAT CLEARLY SHOWS THE ATHLETE'S CURRENT BASELINE STRENGTHS AND WEAKNESSES ACROSS ALL REQUIRED FLYER BODY POSITIONS. THE PURPOSE OF THIS BENCHMARK IS TO CREATE A MEASURABLE STARTING POINT FOR FLYER DEVELOPMENT WHILE ALSO HELPING COACHES IDENTIFY WHICH POSITIONS REQUIRE THE MOST ATTENTION MOVING FORWARD THROUGHOUT THE SEASON.",
    due: "COLLAGE DUE: 6/2",
    icon: ClipboardCheck,
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
    note: "TEAMS NEED TO LEAVE WITH MINIMUM A CREATIVE ENTRY 1-2 ELEMENTS AND A CREATIVE TRANSITION",
    icon: ShieldCheck,
  },
  {
    month: "JUNE",
    window: "6/24-6/26",
    title: "LEVEL 5-6 STUNT CAMP",
    category: "JUNE",
    description: "LEVEL 5-6 STUNT CAMP",
    note: "TEAMS NEED TO LEAVE WITH MINIMUM A CREATIVE ENTRY 1-2 ELEMENTS AND A CREATIVE TRANSITION",
    icon: ShieldCheck,
  },
  {
    month: "JUNE",
    window: "6/28",
    title: "BENCHMARK #3 STUNT CAMP SHOWCASE",
    category: "BENCHMARK #3",
    description:
      "TEAMS MUST SUBMIT A VIDEO OF THE CREATIVE ENTRIES AND STUNT SEQUENCES THEY BUILT DURING STUNT CAMP. WE DON'T EXPECT IT TO BE PERFECT, BUT WE WOULD LIKE TO SEE WHAT THEY CAME UP WITH.",
    note: "(1) VIDEO OF THE TEAM PERFORMING THE CREATIVE ENTRY SEQUENCE BUILT DURING STUNT CAMP. (2) VIDEO OF THE FULL STUNT SEQUENCE BUILT DURING STUNT CAMP.",
    due: "VIDEO DUE: 6/28",
    icon: Video,
  },
  {
    month: "JUNE",
    window: "6/30",
    title: "FINAL TEAM PLACEMENTS",
    category: "TEAM SELECTION",
    description: "FINAL TEAM PLACEMENTS 6/30",
    icon: CheckCircle2,
  },
  // -- JULY ------------------------------------------------------------------
  {
    month: "JULY",
    window: "7/1",
    title: "JULY -- TEAM CHOREOGRAPHY MONTH",
    category: "CHOREO MONTH",
    description:
      'TEAM CHOREOGRAPHY BEGINS THIS MONTH. COACHES SHOULD NOTE THAT BY THIS POINT, ATHLETES MUST BE PHYSICALLY CONDITIONED TO HANDLE THE DEMANDS OF COMBINING TUMBLING SECTIONS, JUMP SECTIONS, AND STUNT SECTIONS WITHIN A SINGLE PRACTICE AND ROUTINE RUN-THROUGH. THIS CONDITIONING CAN BE ACCOMPLISHED BY RUNNING MINI "FAKE ROUTINES" THROUGHOUT THE SUMMER -- STRINGING SKILL SECTIONS TOGETHER IN SEQUENCE TO BUILD THE ENDURANCE AND TIMING NEEDED BEFORE FULL CHOREOGRAPHY IS SET.',
    icon: Activity,
  },
  {
    month: "JULY",
    window: "7/9",
    title: "BENCHMARK #4 TUMBLING SKILL SELECTION",
    category: "BENCHMARK #4",
    description:
      "COACHES MUST WORK THROUGH THE TEAM ROSTER AND IDENTIFY THE 2 STANDING TUMBLING AND 1 RUNNING TUMBLING PASS THAT WILL BE CHOREOGRAPHED INTO THE ROUTINE, AS WELL AS WHICH ATHLETES WILL BE PERFORMING EACH PASS. SELECTION SHOULD BE BASED NOT ONLY ON WHETHER THE ATHLETE CAN THROW THE SKILL, BUT ALSO ON EXECUTION, CONSISTENCY, ENDURANCE, TIMING, AND HOW THE SKILL CONTRIBUTES TO THE OVERALL ROUTINE COMPOSITION AND SCORESHEET STRATEGY.",
    note: "(1) WRITTEN OUTLINE OF THE 2 SELECTED STANDING TUMBLING PASSES -- INCLUDING SKILL, ATHLETES PERFORMING, AND RATIONALE. (2) WRITTEN OUTLINE OF THE SELECTED RUNNING TUMBLING PASS -- INCLUDING SKILL, ATHLETES PERFORMING, AND RATIONALE.",
    due: "OUTLINE DUE: 7/9",
    icon: ClipboardCheck,
  },
  {
    month: "JULY",
    window: "7/10",
    title: "BENCHMARK #5 JUMPS IN MAX NUMBERS",
    category: "BENCHMARK #5",
    description:
      "BY THIS POINT, COACHES SHOULD HAVE IDENTIFIED THE TEAM'S STRONGEST JUMPERS AND BEGUN ESTABLISHING THE JUMP FORMATION THAT WILL BE UTILIZED WITHIN THE ROUTINE.",
    note: "WE WOULD LIKE TO SEE A VIDEO OF THE TEAM (USING DIVISION MAX NUMBERS ONLY) PERFORM BOTH A SINGLE TOE TOUCH AND THE DOUBLE JUMP SEQUENCE MOST LIKELY TO BE CHOREOGRAPHED INTO THE ROUTINE. THE PURPOSE OF THIS BENCHMARK IS TO EVALUATE TIMING, SYNCHRONIZATION, ENDURANCE, EXECUTION QUALITY, AND OVERALL JUMP QUANTITY STRATEGY WITHIN REALISTIC COMPETITION NUMBERS.",
    due: "VIDEO DUE: 7/10",
    icon: Video,
  },
  {
    month: "JULY",
    window: "7/13",
    title: "BENCHMARK #6 TEAM DRILLS",
    category: "BENCHMARK #6",
    description:
      "COACHES MUST IDENTIFY THE 4 TUMBLING DRILLS THAT WILL BE UTILIZED AS PART OF THE TEAM'S DAILY PRACTICE PLAN. EACH DRILL SHOULD BE STRUCTURED TO A 2:30 MINUTE TRACK, TOTALING APPROXIMATELY 10 MINUTES OF TUMBLING DRILL WORK EACH PRACTICE. THESE DRILLS SHOULD BE SELECTED INTENTIONALLY BASED ON THE CURRENT NEEDS, WEAKNESSES, AND SKILL GOALS OF THE TEAM. WHILE DRILLS MAY EVOLVE AND BE INTERCHANGED AS THE SEASON PROGRESSES, COACHES MUST ESTABLISH A CONSISTENT STARTING POINT THAT SUPPORTS PROPER TECHNIQUE, SHAPING, ENDURANCE, TIMING, AND LONG-TERM ATHLETE DEVELOPMENT.",
    note: "(1) VIDEO OF DRILL #1 -- FULL TEAM PERFORMING THE DRILL TO A 2:30 TRACK. (2) VIDEO OF DRILL #2 -- FULL TEAM PERFORMING THE DRILL TO A 2:30 TRACK. (3) VIDEO OF DRILL #3 -- FULL TEAM PERFORMING THE DRILL TO A 2:30 TRACK. (4) VIDEO OF DRILL #4 -- FULL TEAM PERFORMING THE DRILL TO A 2:30 TRACK.",
    due: "VIDEO DUE: 7/13",
    icon: Video,
  },
  // -- AUGUST ----------------------------------------------------------------
  {
    month: "AUGUST",
    window: "8/20",
    title: "BENCHMARK #7 STUNT SEQUENCE",
    category: "BENCHMARK #7",
    description:
      "COACHES SHOULD PRESENT THE STUNT SEQUENCE BROKEN DOWN ELEMENT BY ELEMENT WITH CLEAN, CONTROLLED EXECUTION THROUGHOUT THE PROCESS. THIS SHOULD INCLUDE THE OPENING CREATIVE SEQUENCE, 1-2 CONNECTED STUNT ELEMENTS, THE MIDDLE CREATIVE SECTION, THE FINAL 1-2 STUNT ELEMENTS, AND THE DISMOUNT. THE PURPOSE OF THIS BENCHMARK IS TO EVALUATE HOW THE STUNT SEQUENCE IS PROGRESSING.",
    note: "(1) VIDEO OF THE OPENING CREATIVE SEQUENCE AND FIRST 1-2 STUNT ELEMENTS -- PERFORMED ELEMENT BY ELEMENT WITH CLEAN, CONTROLLED EXECUTION. (2) VIDEO OF THE MIDDLE CREATIVE SECTION AND FINAL 1-2 STUNT ELEMENTS -- PERFORMED ELEMENT BY ELEMENT. (3) VIDEO OF THE DISMOUNT.",
    due: "VIDEO DUE: 8/20",
    icon: ShieldCheck,
  },
  // -- SEPTEMBER -------------------------------------------------------------
  {
    month: "SEPTEMBER",
    window: "9/15",
    title: "BENCHMARK #8 FULL OUT SKILLS ISOLATION",
    category: "BENCHMARK #8",
    description:
      "BY THIS POINT, ALL INDIVIDUAL SKILL SELECTIONS SHOULD BE LOCKED IN AND ATHLETES SHOULD BE EXECUTING AT FULL EFFORT. THIS BENCHMARK EVALUATES READINESS HEADING INTO PYRAMID AND DANCE CHOREOGRAPHY MONTH.",
    note: "DELIVERABLES: (1) VIDEO OF THE TEAM PERFORMING A TUMBLING FULL OUT -- ALL ATHLETES EXECUTING THEIR ASSIGNED TUMBLING SKILLS IN SEQUENCE. (2) VIDEO OF THE TEAM PERFORMING A FULL OUT OF ALL STUNT SEQUENCES AND BASKET TOSSES.",
    due: "VIDEO DUE: 9/15",
    icon: Video,
  },
  {
    month: "SEPTEMBER",
    window: "9/24",
    title: "BENCHMARK #9 FULL STUNT ISOLATION",
    category: "BENCHMARK #9",
    description: "COACHES SHOULD SUBMIT A FULL STUNT ISOLATION VIDEO OF THE COMPLETE STUNT SEQUENCE UTILIZING THE PROGRAM'S STUNT ISOLATION SYSTEM -- ADDING AN 8-COUNT BETWEEN EACH SKILL AND TRANSITION TO EMPHASIZE DETAILS, TIMING, AND EXECUTION THROUGHOUT THE SEQUENCE.",
    note: "(1) VIDEO OF THE FULL STUNT SEQUENCE PERFORMED IN ISOLATION -- WITH AN 8-COUNT BETWEEN EACH SKILL AND TRANSITION. (2) ATHLETES SHOULD FREEZE AT KEY POSITIONS AND CHECKPOINTS, DEMONSTRATING CONTROL, SYNCHRONIZATION, AND CLEAN BODY POSITIONING THROUGHOUT.",
    due: "VIDEO DUE: 9/24",
    icon: Video,
  },
  // -- OCTOBER ---------------------------------------------------------------
  {
    month: "OCTOBER",
    window: "10/1",
    title: "OCTOBER -- PYRAMID AND DANCE CHOREOGRAPHY MONTH",
    category: "PYRAMID AND DANCE CHOREO MONTH",
    description:
      "PYRAMID AND DANCE CHOREOGRAPHY BEGINS THIS MONTH. BY THIS POINT, ALL STUNT SEQUENCES AND INDIVIDUAL SKILL SELECTIONS SHOULD BE SOLIDIFIED, ALLOWING COACHES TO SHIFT FULL FOCUS TO PYRAMID AND DANCE DESIGN. IF COACHES HAVE PROPERLY PREPARED THEIR ATHLETES THROUGHOUT THE SEASON, PYRAMID IS SIMPLY AN EXTENSION OF THE STUNT SKILLS ALREADY MASTERED -- AND THIS PROCESS SHOULD FEEL LIKE A NATURAL AND STRAIGHTFORWARD PROGRESSION.",
    icon: Activity,
  },
  {
    month: "OCTOBER",
    window: "10/1",
    title: "BENCHMARK #10 1ST HALF FULL OUT",
    category: "BENCHMARK #10",
    description:
      "TEAMS MUST SUBMIT A VIDEO PERFORMING THE FIRST HALF OF THE ROUTINE FROM START TO THE MIDPOINT -- INCLUDING TUMBLING, JUMPS, AND STUNT SECTIONS. PYRAMID AND DANCE ARE NOT REQUIRED AT THIS STAGE.",
    note: "(1) VIDEO OF THE FIRST HALF OF THE ROUTINE PERFORMED FULL OUT -- FROM THE OPENING TO THE MIDPOINT, INCLUDING ALL TUMBLING, JUMPS, AND STUNT SECTIONS. PYRAMID AND DANCE ARE NOT REQUIRED AT THIS STAGE.",
    due: "VIDEO DUE: 10/1",
    icon: Trophy,
  },
  {
    month: "OCTOBER",
    window: "10/13",
    title: "BENCHMARK #11 INITIAL PYRAMID CONCEPTS",
    category: "BENCHMARK #11",
    description:
      "COACHES SHOULD PRESENT THE TEAM'S INITIAL PYRAMID CONCEPTS AND OVERALL DIRECTION FOR PYRAMID STRUCTURE AND TRANSITIONS. THIS BENCHMARK IS NOT ABOUT HAVING A FINISHED PYRAMID, BUT RATHER SHOWING THE EARLY DEVELOPMENTAL PROCESS, CREATIVITY, SKILLS, STRUCTURES, AND OVERALL VISION FOR HOW THE PYRAMID SECTION MAY COME TOGETHER WITHIN THE ROUTINE.",
    note: "VIDEO SUBMISSIONS SHOULD INCLUDE: INITIAL ENTRY CONCEPTS, BUILDING ELEMENTS EVEN IF THEY HAVE TO BE COUNTED IN SLOWLY, DISMOUNT OR EXIT CONCEPTS, AND ANY CREATIVE OR VISUAL MOMENTS CURRENTLY BEING EXPLORED. THE PURPOSE OF THIS BENCHMARK IS TO EVALUATE HOW THE PYRAMID IS DEVELOPING STRUCTURALLY, CREATIVELY, AND SAFELY WHILE GIVING FEEDBACK EARLY ENOUGH IN THE PROCESS TO MAKE ADJUSTMENTS BEFORE WE GO INTO COMPETITION SEASON. REMEMBER THAT PYRAMID IS THE ONLY BUILDING CATEGORY THAT IS UNCAPPED. PUSH THE BOUNDARIES EARLY AND WATER DOWN AT THE LAST MINUTE INSTEAD OF STARTING EASY AND TRYING TO PLAY CATCH UP ALL YEAR.",
    due: "VIDEO DUE: 10/13",
    icon: Route,
  },
  {
    month: "OCTOBER",
    window: "10/15",
    title: "BENCHMARK #12 2ND HALF FULL OUT",
    category: "BENCHMARK #12",
    description:
      "TEAMS MUST SUBMIT A VIDEO PERFORMING THE SECOND HALF OF THE ROUTINE -- INCLUDING TUMBLING, JUMPS, AND STUNT SECTIONS. PYRAMID AND DANCE ARE NOT REQUIRED AT THIS STAGE.",
    note: "(1) VIDEO OF THE SECOND HALF OF THE ROUTINE PERFORMED FULL OUT -- FROM THE MIDPOINT TO THE END, INCLUDING ALL TUMBLING, JUMPS, AND STUNT SECTIONS. PYRAMID AND DANCE ARE NOT REQUIRED AT THIS STAGE.",
    due: "VIDEO DUE: 10/15",
    icon: Trophy,
  },
  {
    month: "OCTOBER",
    window: "10/19",
    title: "BENCHMARK #13 FULL OUT (MINUS PYRAMID/DANCE)",
    category: "BENCHMARK #13",
    description:
      "FULL OUT (MINUS PYRAMID/DANCE). FROM THIS POINT FORWARD -- 2 FULL OUTS PER PRACTICE. NO EXCEPTIONS.",
    note: "(1) VIDEO OF THE TEAM PERFORMING A FULL OUT OF THE COMPLETE ROUTINE -- EXCLUDING PYRAMID AND DANCE SECTIONS. (2) FROM THIS POINT FORWARD, 2 FULL OUTS ARE REQUIRED EVERY PRACTICE WITH NO EXCEPTIONS.",
    due: "VIDEO DUE: 10/19",
    icon: Trophy,
  },
  {
    month: "OCTOBER",
    window: "10/16",
    title: "BENCHMARK #14 JUMPS IN MAX #S",
    category: "BENCHMARK #14",
    description:
      "THIS IS OUR NEXT CHECK-IN TO SEE HOW JUMPS ARE PROGRESSING WHEN IT COMES TO MAX NUMBERS. WHILE WE ARE NOT FOCUSING ON THE ATHLETES NOT IN THE JUMP SEQUENCE, WE EXPECT THEM TO IMPROVE AS WELL -- SINCE THEY SHOULD BE DOING THE SAME TRAINING THE JUMPERS ARE DOING.",
    note: "DELIVERABLES: (1) VIDEO OF THE TEAM PERFORMING A SINGLE TOE TOUCH AND DOUBLE JUMP SEQUENCE IN MAX NUMBERS. (2) VIDEO OF NON-JUMPERS PERFORMING THEIR JUMPS. (3) INDIVIDUAL TOE TOUCH COLLAGE OF ROUTINE JUMPERS RANKED FROM BEST TO WORST AS A COMPARISON.",
    due: "VIDEO DUE: 10/15 * COLLAGE DUE: 10/16",
    icon: ClipboardCheck,
  },
  {
    month: "OCTOBER",
    window: "OCTOBER",
    title: "BENCHMARK #15 FLYER BODY POSITION CHECK",
    category: "BENCHMARK #15",
    description:
      "COACHES SHOULD SUBMIT UPDATED FULL-BODY PICTURES OF EACH FLYER PERFORMING THE REQUIRED BODY POSITIONS ESTABLISHED EARLIER IN THE SEASON. THIS BENCHMARK IS INTENDED TO MEASURE PROGRESS, CONSISTENCY, AND OVERALL DEVELOPMENT SINCE THE INITIAL FLYER FLEX MEASURABLE BASELINE. REQUIRED BODY POSITIONS: HEEL STRETCH, FRONT STRETCH, BOW & ARROW, ARABESQUE, SCALE, AND NEEDLE.",
    note: "COACHES SHOULD AGAIN EVALUATE AND RANK EACH BODY POSITION INDIVIDUALLY FROM STRONGEST TO WEAKEST BASED ON FLEXIBILITY, BODY LINES, POSTURE, STABILITY, CONTROL, TOE POINT, AND EXECUTION QUALITY. UPDATED COLLAGES SHOULD CLEARLY SHOW EACH ATHLETE'S CURRENT PROGRESS AND ALLOW COMPARISON TO THE ORIGINAL BASELINE. THE PURPOSE OF THIS BENCHMARK IS TO MONITOR FLYER DEVELOPMENT OVER TIME, IDENTIFY AREAS THAT ARE IMPROVING, HIGHLIGHT POSITIONS THAT MAY STILL NEED ADDITIONAL FOCUS, AND ENSURE THAT BODY POSITION TRAINING IS TRANSLATING INTO CLEANER, MORE COMPETITION-READY VISUALS IN THE AIR.",
    due: "COLLAGE DUE: OCTOBER",
    icon: ClipboardCheck,
  },
  {
    month: "OCTOBER",
    window: "10/23",
    title: "BENCHMARK #16 1ST HALF OF PYRAMID",
    category: "BENCHMARK #16",
    description:
      "COACHES SHOULD SUBMIT FULL-SPEED VIDEOS OF BOTH THE FIRST AND SECOND HALF OF THE PYRAMID SEQUENCE AS THEY CURRENTLY STAND IN DEVELOPMENT. THE EXPECTATION AT THIS POINT IS THAT PYRAMID SECTIONS ARE BEGINNING TO SHOW STRUCTURE, TIMING, CONTINUITY, AND OVERALL ROUTINE FLOW RATHER THAN ISOLATED SKILLS OR CONCEPTS.",
    note: "VIDEOS SHOULD DEMONSTRATE: FULL-SPEED TIMING AND TRANSITIONS, CONNECTED PYRAMID STRUCTURE, ATHLETE SYNCHRONIZATION AND AWARENESS, STABILITY DURING TRANSITIONS AND BODY POSITIONS, VISUAL CLARITY AND OVERALL PYRAMID FLOW, AND CLEAN DISMOUNTS AND EXITS WHERE APPLICABLE. THE PURPOSE OF THIS BENCHMARK IS TO EVALUATE HOW THE PYRAMID IS PROGRESSING FROM CONCEPT INTO A FUNCTIONAL ROUTINE SECTION. WHILE PERFECTION IS NOT EXPECTED AT THIS STAGE, THE PYRAMID SHOULD CLEARLY REFLECT THE INTENDED DIRECTION AND STRUCTURE OF THE ROUTINE.",
    due: "VIDEO DUE: 10/23",
    icon: Route,
  },
  {
    month: "SEPTEMBER",
    window: "9/27",
    title: "BENCHMARK #17 STUNT ISOLATION",
    category: "BENCHMARK #17",
    description:
      "COACHES SHOULD SUBMIT A FULL STUNT ISOLATION SEQUENCE UTILIZING THE PROGRAM'S STUNT ISOLATION SYSTEM. THE PURPOSE OF STUNT ISOLATION IS TO SLOW THE SEQUENCE DOWN AND EMPHASIZE THE DETAILS BETWEEN STUNT ELEMENTS BY ADDING AN 8-COUNT BETWEEN EACH SKILL AND TRANSITION.",
    note: "THROUGHOUT THE ISOLATION, ATHLETES SHOULD: (1) FREEZE AT KEY POSITIONS AND CHECKPOINTS. (2) EMPHASIZE DIPS, TIMING, AND MOTION PLACEMENT. (3) FOCUS ON BODY POSITIONING AND VISUAL CLEANLINESS. (4) DEMONSTRATE CONTROL THROUGHOUT TRANSITIONS. (5) PRIORITIZE SYNCHRONIZATION AND EXACT EXECUTION OF GRIPS, STANCES, AND SPACING. THIS BENCHMARK IS INTENDED TO HELP COACHES IDENTIFY TIMING BREAKDOWNS, MOTION INCONSISTENCIES, STUNT PATHWAY ISSUES, AND TRANSITION WEAKNESSES BEFORE ROUTINES BEGIN BEING PERFORMED CONTINUOUSLY AT FULL SPEED. THE GOAL IS TO CREATE CLEANER, MORE INTENTIONAL STUNT EXECUTION BY REINFORCING THE DETAILS BETWEEN SKILLS, NOT JUST THE SKILLS THEMSELVES.",
    due: "VIDEO DUE: 9/27",
    icon: ShieldCheck,
  },
  // -- NOVEMBER --------------------------------------------------------------
  {
    month: "NOVEMBER",
    window: "11/5/2023",
    title: "BENCHMARK #18 USASF LEGALITY SUBMISSION",
    category: "BENCHMARK #18",
    description:
      "COACHES MUST SUBMIT ALL BUILDING SECTIONS OF THE ROUTINE THROUGH THE USASF LEGALITY APP FOR OFFICIAL LEGALITY REVIEW. THIS INCLUDES ALL STUNT SEQUENCES, PYRAMIDS, TRANSITIONS, RELEASES, INVERSIONS, DISMOUNTS, AND LIFTS, REGARDLESS OF WHETHER THEY ARE CONSIDERED MAJOR SKILLS OR CONNECTIVE CHOREOGRAPHY. THE PURPOSE OF THIS BENCHMARK IS TO PROACTIVELY IDENTIFY AND ADDRESS ANY POTENTIAL LEGALITY CONCERNS BEFORE ROUTINES MOVE DEEPER INTO CLEANING AND FULL-OUT PREPARATION.",
    note: "SUBMISSION SHOULD INCLUDE: ALL STUNT SEQUENCES, PYRAMID SECTIONS AND TRANSITIONS, SPECIALTY ENTRIES AND RELEASES, CRADLES AND DISMOUNTS, LIFTS AND VISUAL BUILDING CHOREOGRAPHY, AND CONNECTED TRANSITIONAL ELEMENTS BETWEEN SKILLS. COACHES SHOULD ENSURE VIDEOS ARE CLEAR AND PERFORMED WITH ENOUGH COMPLETION AND CONTROL FOR PROPER LEGALITY EVALUATION. ONCE SUBMITTED, COACHES SHOULD SAVE AND PROVIDE CONFIRMATION OR FEEDBACK RECEIVED FROM USASF AS PART OF THE BENCHMARK COMPLETION PROCESS.",
    due: "DUE: 11/5/2023",
    icon: ClipboardCheck,
  },
  {
    month: "NOVEMBER",
    window: "11/5/2023-12/1/2023",
    title: "BENCHMARK #19 RUBRIC DOUBLE CHECK",
    category: "BENCHMARK #19",
    description:
      "THIS BENCHMARK IS DESIGNED TO ENSURE THAT ALL ROUTINE QUANTITY GOALS, SCORE SHEET STRATEGIES, AND DIVISION REQUIREMENTS ARE BEING VERIFIED AND TRACKED BEFORE ENTERING THE MAJOR COMPETITION SEASON. COACHES ARE EXPECTED TO REVIEW ROUTINE COMPOSITION CAREFULLY AND CONFIRM THAT THE ROUTINE MEETS THE INTENDED SCORING AND QUANTITY GOALS FOR THE DIVISION.",
    note: "REQUIRED STEPS: (1) FILL OUT THE RUBRIC VERIFICATION DOCUMENT -- DUE 11/5/2023. COACHES MUST COMPLETE THE PROVIDED RUBRIC VERIFICATION DOCUMENT INCLUDING TUMBLING QUANTITIES, JUMP QUANTITIES, BUILDING QUANTITIES, SPECIALTY SKILL COUNTS, RANGE AND VARIETY CONSIDERATIONS, AND DIVISION-SPECIFIC SCORE SHEET REQUIREMENTS. (2) EMAIL THE COMPLETED FORM TO THE SCORING REPRESENTATIVE -- DUE 11/6/2023. (3) POST CONFIRMATION THAT QUANTITIES AND REQUIREMENTS ARE BEING MET -- DUE 12/1/2023. AFTER FEEDBACK AND ADJUSTMENTS HAVE BEEN MADE, COACHES MUST SUBMIT CONFIRMATION SHOWING THAT THE ROUTINE NOW OFFICIALLY MEETS THE INTENDED QUANTITY REQUIREMENTS, SCORE SHEET GOALS, AND DIVISION STANDARDS MOVING INTO COMPETITION SEASON.",
    due: "DUE: 11/5/2023-12/1/2023",
    icon: ClipboardCheck,
  },
  // -- DECEMBER (Physical Fitness) -------------------------------------------
  {
    month: "DECEMBER",
    window: "12/2",
    title: "BENCHMARK #21 PHYSICAL FITNESS TEST",
    category: "BENCHMARK #21",
    description:
      "THIS BENCHMARK IS INTENDED TO EVALUATE THE TEAM'S OVERALL CONDITIONING, ENDURANCE, PHYSICAL DISCIPLINE, AND ABILITY TO MAINTAIN TECHNIQUE AND CONSISTENCY UNDER FATIGUE AS THE SEASON PROGRESSES.",
    note: "REQUIRED SUBMISSION: (1) 2 FULL ROUNDS OF THE TEAM WARM-UP -- TEAMS MUST COMPLETE 2 CONTINUOUS ROUNDS OF THE PROGRAMMED WARM-UP SYSTEM WITH PROPER TECHNIQUE, TIMING, ENERGY, AND EFFORT MAINTAINED THROUGHOUT BOTH ROUNDS. (2) STRETCH SYSTEM / FLYER STRETCH SYSTEM -- TEAMS MUST ALSO PERFORM THE FULL GENERAL STRETCH SYSTEM AND FLYER STRETCH SYSTEM WITH ATTENTION TO BODY POSITIONS, CONTROL, POSTURE, TIMING, AND EXECUTION STANDARDS. COACHING EVALUATION RATINGS: EXCELLENT EXECUTION -- HIGHLY ORGANIZED, INTENTIONAL, DISCIPLINED, WITH STRONG TIMING, ACCOUNTABILITY, AND CORRECTION STANDARDS. MEETS PROGRAM STANDARD -- STRUCTURED APPROPRIATELY WITH MINOR INCONSISTENCIES. BELOW PROGRAM STANDARD -- LACKS CONSISTENCY, ORGANIZATION, OR ACCOUNTABILITY. IMPROVEMENT PLAN REQUIRED. NON-COMPLIANT -- BENCHMARK EXPECTATIONS WERE NOT PROPERLY IMPLEMENTED. SUBJECT TO CORRECTIVE ACTION AND/OR PROGRAM FINES.",
    due: "VIDEO DUE: PRIOR TO LEAVING FOR BREAK -- 12/2",
    icon: Activity,
  },
  // -- DECEMBER --------------------------------------------------------------
  {
    month: "DECEMBER",
    window: "12/6",
    title: "BENCHMARK #20 SEASON SHOWCASE FULL OUT",
    category: "BENCHMARK #20",
    description:
      "THIS BENCHMARK SERVES AS THE TEAM'S FIRST FULL PERFORMANCE EXPERIENCE IN FRONT OF FAMILY AND FRIENDS PRIOR TO ENTERING THE MAJOR COMPETITION PORTION OF THE SEASON. TEAMS ARE EXPECTED TO PERFORM THEIR ROUTINES FULL OUT WITH PERFORMANCE QUALITY, CONFIDENCE, ENERGY, AND PROFESSIONALISM. THE PURPOSE OF THIS BENCHMARK IS TO EVALUATE NOT ONLY ROUTINE EXECUTION, BUT ALSO HOW ATHLETES RESPOND TO THE PRESSURE, ADRENALINE, AND ENVIRONMENT OF PERFORMING IN FRONT OF A CROWD.",
    note: "EVALUATION FOCUS AREAS: (1) FULL-OUT ENDURANCE AND ROUTINE COMPLETION. (2) TIMING, SYNCHRONIZATION, AND SPACING. (3) PERFORMANCE QUALITY AND CONFIDENCE. (4) CROWD AWARENESS AND ATHLETE COMPOSURE. (5) STUNT CONSISTENCY AND PYRAMID TIMING. (6) OVERALL ROUTINE CLEANLINESS AND PREPAREDNESS. (7) TEAM ENERGY, COMMITMENT, AND PRESENTATION. COACHES ARE EXPECTED TO PREPARE ATHLETES AS IF THIS WERE A REAL COMPETITION PERFORMANCE ENVIRONMENT. ATHLETES SHOULD UNDERSTAND ENTRANCES, EXITS, APPEARANCE EXPECTATIONS, TRANSITIONS, AND OVERALL PERFORMANCE STANDARDS. THE GOAL OF THIS BENCHMARK IS NOT PERFECTION, BUT RATHER TO IDENTIFY ROUTINE STRENGTHS, PRESSURE POINTS, ENDURANCE CONCERNS, AND PERFORMANCE ISSUES BEFORE ENTERING THE COMPETITIVE SEASON AFTER BREAK.",
    due: "EVENT DATE: 12/6",
    icon: Trophy,
  },
  {
    month: "DECEMBER",
    window: "12/12",
    title: "COMPETITION #1 FIRST COMPETITION OF THE SEASON",
    category: "DECEMBER",
    description:
      "THIS BENCHMARK MARKS THE TEAM'S FIRST OFFICIAL COMPETITION OF THE SEASON AND THE FIRST REAL OPPORTUNITY TO EVALUATE HOW THE ROUTINE PERFORMS AGAINST OUTSIDE COMPETITION WITHIN THE DIVISION. WHILE EXECUTION, PERFORMANCE QUALITY, AND ROUTINE CONSISTENCY REMAIN IMPORTANT, THIS BENCHMARK IS ULTIMATELY RESULTS-DRIVEN. THE EXPECTATION IS THAT TEAMS ARE BEGINNING TO ESTABLISH THEMSELVES COMPETITIVELY WHILE POSITIONING THE PROGRAM TO OBTAIN AS MANY SUMMIT BIDS AS POSSIBLE THROUGHOUT THE SEASON.",
    note: "EVALUATION FOCUS AREAS: COMPETITION PLACEMENT AND RANKINGS, SUMMIT BID POSITIONING AND POTENTIAL, ROUTINE EXECUTION UNDER PRESSURE, DEDUCTIONS AND ROUTINE CONSISTENCY, STUNT AND PYRAMID STABILITY, TIMING, SYNCHRONIZATION, AND ENDURANCE, PERFORMANCE QUALITY AND CONFIDENCE, WARM-UP EFFECTIVENESS AND COMPETITION PREPARATION, SCORESHEET ANALYSIS AND JUDGE FEEDBACK, AND OVERALL DIVISION COMPETITIVENESS. COACHES ARE EXPECTED TO THOROUGHLY REVIEW SCORESHEETS, DEDUCTIONS, RANKINGS, AND JUDGE COMMENTS FOLLOWING THE EVENT TO IDENTIFY BOTH STRENGTHS AND PRIORITY AREAS FOR IMPROVEMENT.",
    due: "EVENT DATE: 12/12",
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
      {item.note && (
        <div className="mt-4 rounded border border-blue-400/30 bg-blue-900/20 px-4 py-3 font-heading text-xs uppercase tracking-[0.18em] text-blue-200">
          <p className="mb-2 font-bold text-blue-300 tracking-[0.22em]">DELIVERABLES</p>
          {item.note.split(/(?=\(\d+\))/).filter(Boolean).map((part, i) => {
            const match = part.match(/^(\(\d+\))\s*(.*)/);
            if (match) {
              return (
                <div key={i} className="flex gap-2 mt-1.5">
                  <span className="shrink-0 font-bold text-blue-300">{match[1]}</span>
                  <span>{match[2]}</span>
                </div>
              );
            }
            return <p key={i} className="mt-1.5">{part}</p>;
          })}
        </div>
      )}
      {item.due && <p className="mt-5 border-l-2 border-blue-300 pl-4 font-heading text-sm uppercase tracking-[0.16em] text-blue-100">{item.due}</p>}
    </div>
  );
}
