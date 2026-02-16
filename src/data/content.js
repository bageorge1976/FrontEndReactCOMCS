import MathCPSCFusion from "../assets/MathCPSCFusion.png";
import MathCPSCFusionChinese from "../assets/MathCPSCFusionChinese.png";

export const spotlight = {
  dateLabel: "Feb 2026",
  title: "Prepare for contests with structured weekly coaching",
  blurb:
    "Math Olympiad, American Mathematics Competitions (AMC), Advanced Placement (AP)/International Baccalaureate (IB) support, and competitive programming. In-person and online options with clear schedules.",
  cta: { label: "Honor Roll", to: "/honor-roll" },
  image: MathCPSCFusion,
  imageAlt: "Math and Computer Science Fusion",
  imageChinese: MathCPSCFusionChinese,
  imageChineseAlt: "数学与计算机科学融合",
};

export const featured = [
  {
    title: "Math Program",
    blurb: "Olympiad track, Singapore math, AP/IB support.",
    to: "/programs/math",
  },
  {
    title: "Computer Program",
    blurb: "Scratch, Python, C++/algorithms and contest prep.",
    to: "/programs/computing",
  },
  {
    title: "Sciences Program",
    blurb: "Physics & Chemistry support, AP/IB pathways.",
    to: "/programs/science",
  },
];
/*
export const contests = [
  // Example rows based on the contest table style on the current site; replace with your real dataset.
  { category: "Mathematics", name: "Pascal/Cayley/Fermat", examDate: "2026-02-25", deadline: "2026-02-15", duration: "60 min" },
  { category: "Mathematics", name: "Canadian Math Kangaroo", examDate: "2026-03-22", deadline: "2026-03-03", duration: "3 hours" },
  { category: "Physics", name: "USA Physics Bowl", examDate: "2026-03-19", deadline: "2026-02-21", duration: "45 min" },
];
*/
export const contests = [
  // Mathematics
  { category: "Mathematics", name: "Pascal (G9) / Cayley (G10) / Fermat (G11)", examDate: "2026-02-25", deadline: "2026-02-15", duration: "60 min" },
  { category: "Mathematics", name: "Canadian Math Kangaroo (G1 to 12)", examDate: "2026-03-22", deadline: "2026-03-03", duration: "3 hours" },
  { category: "Mathematics", name: "Fryer (G9) / Galois (G10) / Hypatia (G11)", examDate: "2026-04-01", deadline: "2026-03-07", duration: "75 min" },
  { category: "Mathematics", name: "Calgary Junior High School Math Contest (G7, 8, 9)", examDate: "2026-05-06", deadline: "2026-04-15", duration: "90 min" },
  { category: "Mathematics", name: "GAUSS Math Contest (G7/8)", examDate: "2026-05-11", deadline: "2026-04-25", duration: "60 min" },
  { category: "Mathematics", name: "Canada Lynx Mathematics Competition (G7–G12)", examDate: "2026-09-28", deadline: null, duration: "90 min" },
  { category: "Mathematics", name: "Canada Geometry Contest (up to G12)", examDate: "2026-10-16", deadline: "2026-10-14", duration: "85 min" },
  { category: "Mathematics", name: "Canadian Open Math Challenge (G7–G12)", examDate: "2026-10-30", deadline: "2026-10-13", duration: "2.5 hours" },
  { category: "Mathematics", name: "Alberta High School Math Competition (G7–G12)", examDate: "2026-11-21", deadline: "2026-10-29", duration: "80 min" },
  { category: "Mathematics", name: "Canada Jay Math Competition (CJMC, ≤ G8)", examDate: "2026-11-20", deadline: "2026-11-05", duration: "75 min" },
  { category: "Mathematics", name: "CIMC (≤ G10)", examDate: "2026-11-12", deadline: "2026-10-19", duration: "2 hours" },
  { category: "Mathematics", name: "AMC 10A / 12A", examDate: "2026-11-05", deadline: "2026-10-26", duration: "75 min" },
  { category: "Mathematics", name: "AMC 10B / 12B", examDate: "2026-11-13", deadline: "2026-11-02", duration: "75 min" },
  { category: "Mathematics", name: "AMC 8", examDate: "2027-01-22", deadline: "2027-01-07", duration: "40 min" },

  // Physics
  { category: "Physics", name: "USA Physics Bowl Contest", examDate: "2026-03-19", deadline: "2026-02-21", duration: "45 min" },
  { category: "Physics", name: "CAP Physics Olympiad (≤ G12)", examDate: "2026-04-09", deadline: "2026-03-15", duration: "180 min" },
  { category: "Physics", name: "Sir Isaac Newton Physics (≤ G12)", examDate: "2026-05-01", deadline: "2026-04-19", duration: "120 min" },

  // Chemistry
  { category: "Chemistry", name: "CCC / CCO Chemistry Olympiad (≤ G12)", examDate: "2026-04-22", deadline: "2026-03-31", duration: "60–240 min" },

  // Biology
  { category: "Biology", name: "Canadian Biology Competition (CBO includes NBC)", examDate: null, deadline: null, duration: null },
  { category: "Biology", name: "National Biology Competition (≤ G12)", examDate: "2026-04-17", deadline: "2026-03-06", duration: "60 min" },

  // Computing
  { category: "Computing", name: "USA Computing Olympiad — Bronze", examDate: "2026-12-14 to 2026-12-17", deadline: null, duration: "3–5 hours" },
  { category: "Computing", name: "Beaver Computing Challenge", examDate: "2026-11-10", deadline: null, duration: "45 min" },
];