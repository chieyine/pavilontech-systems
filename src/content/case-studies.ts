export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  outcomes: { label: string; value: string }[];
  excerpt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "decision-intelligence-dashboard",
    title: "Decision Intelligence Dashboard",
    subtitle: "From fragmented reporting to real-time program clarity.",
    tags: ["Dashboards", "Data pipeline", "Interoperability"],
    outcomes: [
      { label: "Reporting cycle", value: "↓ 60%" },
      { label: "Data completeness", value: "↑ 25%" },
      { label: "Time-to-insight", value: "Hours, not weeks" },
    ],
    excerpt:
      "A secure dashboard system that consolidates multi-source data into clear indicators and action-ready views for leadership and field teams.",
  },
  {
    slug: "meal-framework-and-learning-loop",
    title: "MEAL Framework + Learning Loop",
    subtitle: "Make evidence part of daily decision-making.",
    tags: ["MEAL", "Accountability", "Learning"],
    outcomes: [
      { label: "Indicator quality", value: "↑ 2×" },
      { label: "Review cadence", value: "Monthly" },
      { label: "Action tracking", value: "End-to-end" },
    ],
    excerpt:
      "A performance framework with practical routines, templates, and accountability mechanisms that convert evidence into continuous improvement.",
  },
  {
    slug: "data-quality-assurance-verification",
    title: "Data Quality Assurance Verification",
    subtitle: "Trustworthy data you can defend.",
    tags: ["DQA", "Surveys", "Verification"],
    outcomes: [
      { label: "Error rate", value: "↓ 40%" },
      { label: "Audit readiness", value: "High" },
      { label: "Confidence", value: "Decision-grade" },
    ],
    excerpt:
      "A robust verification workflow and field support that improves accuracy, consistency, and reliability across tools, teams, and locations.",
  },
];

