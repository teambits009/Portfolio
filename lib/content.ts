// Single source of truth for portfolio content.
// Extracted from Hussan Almosawi's professional portfolio.
//
// TODO (Hussan): fill in `email` and `linkedin` below — they render as
// clear placeholders until you do.

export const profile: {
  name: string;
  role: string;
  location: string;
  remote: string;
  email: string;
  linkedin: string;
  focus: string[];
} = {
  name: "Hussan Almosawi",
  role: "Supply Chain & Data Analyst",
  location: "Detroit, Michigan",
  remote: "Remote-ready",
  email: "", // e.g. "hussan@example.com"
  linkedin: "", // e.g. "https://www.linkedin.com/in/…"
  focus: [
    "Supply Chain",
    "Data Analysis",
    "Finance & Operations",
    "Technical Documentation",
  ],
};

export const spec: { label: string; value: string }[] = [
  { label: "Name", value: "Hussan Almosawi" },
  { label: "Focus", value: "Supply Chain · Data · Finance" },
  { label: "Based", value: "Detroit, MI — Remote-ready" },
  { label: "Education", value: "Wayne State University" },
  { label: "Status", value: "Open to opportunities" },
];

export const ledger: { figure: string; caption: string }[] = [
  { figure: "12–18%", caption: "Modeled spend reduction in targeted categories" },
  { figure: "20+", caption: "Page cross-functional SOP manual authored" },
  { figure: "4", caption: "End-to-end analytical & documentation projects" },
  { figure: "5", caption: "Core competency areas across ops, data & finance" },
];

export const strengths: string[] = [
  "Structure ambiguous information into clear, logical frameworks.",
  "Comfortable with both quantitative data and qualitative process detail.",
  "Produce documentation that is accurate, usable, and audience-appropriate.",
  "Analytical mindset focused on practical, implementable recommendations.",
];

export const coursework: string[] = [
  "Supply Chain Analytics",
  "Strategic Procurement & Sourcing",
  "Logistics & Distribution Management",
  "Operations Management",
  "Data Analysis for Business Decisions",
  "Cost & Managerial Accounting",
  "Risk Management in Global Supply Chains",
  "International Business & Trade Operations",
];

export const competencies: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Supply Chain & Procurement",
    body: "Strategic sourcing, vendor evaluation & management, inventory optimization, demand planning & forecasting, logistics coordination, process mapping, risk identification & mitigation, and end-to-end workflow design.",
  },
  {
    n: "02",
    title: "Data Analysis & Visualization",
    body: "Advanced Excel — pivot tables, Power Query, XLOOKUP, statistical functions, data modeling, dashboards — plus data cleaning & transformation, KPI development & tracking, scenario modeling, and Power BI visualization principles.",
  },
  {
    n: "03",
    title: "Finance & Business Analysis",
    body: "Total Cost of Ownership (TCO) modeling, supplier cost analysis, ROI & payback calculations, budgeting support, pricing & margin analysis, financial risk assessment in operations, and variance analysis.",
  },
  {
    n: "04",
    title: "Technical Writing & Documentation",
    body: "Clear SOPs, process documentation, training materials, analytical reports, executive summaries, and user guides — structured explanations of complex systems and data for diverse audiences.",
  },
  {
    n: "05",
    title: "Technical & Software",
    body: "Advanced Excel with VBA/macros, Microsoft Office 365, foundational Python (pandas, openpyxl), foundational SQL, process automation & scripting, Git version-control concepts, and ERP data-flow understanding.",
  },
];

export const projects: {
  n: string;
  title: string;
  objective: string;
  approach: string;
  deliverables: string;
  tags: string[];
}[] = [
  {
    n: "01",
    title: "Procurement Process Optimization & Strategic Sourcing Analysis",
    objective:
      "Analyze end-to-end procurement workflows and develop recommendations to improve efficiency and reduce costs.",
    approach:
      "Mapped the full requisition-to-payment process, identified bottlenecks and compliance gaps, built supplier evaluation scorecards, and created category segmentation recommendations with supporting cost-comparison and savings-forecast models.",
    deliverables:
      "Process flow maps, a supplier scorecard framework, category strategy recommendations, and a savings projection model showing a potential 12–18% cost reduction in targeted spend.",
    tags: ["Process analysis", "Data modeling", "Financial impact", "Documentation"],
  },
  {
    n: "02",
    title: "Inventory Management Dashboard & Demand Planning Tool",
    objective:
      "Improve inventory visibility, reduce stockouts, and support better forecasting decisions.",
    approach:
      "Built an advanced Excel dashboard integrating historical sales, lead times, safety-stock calculations, and forecasting methods — with automated alerts for critical levels and what-if scenario modeling for varied demand.",
    deliverables:
      "An interactive dashboard tracking KPIs (turns, service level, carrying cost), a user guide explaining the methodology, and process-improvement recommendations.",
    tags: ["Data visualization", "Excel automation", "Forecasting", "Technical explanation"],
  },
  {
    n: "03",
    title: "Total Cost of Ownership (TCO) Modeling & Supplier Risk Assessment",
    objective:
      "Move beyond unit price to evaluate the true long-term cost and risk profile of suppliers.",
    approach:
      "Designed a comprehensive TCO model incorporating purchase price, logistics, quality costs, inventory holding, payment terms, and disruption risk — with sensitivity analysis paired to qualitative risk assessment.",
    deliverables:
      "A dynamic Excel TCO calculator, a supplier risk heat map, and a comparison report with clear rationale and recommendations for decision-makers.",
    tags: ["Financial modeling", "Risk analysis", "Sensitivity analysis", "Structured reporting"],
  },
  {
    n: "04",
    title: "End-to-End Supply Chain Standard Operating Procedures",
    objective:
      "Develop clear, standardized documentation for complex cross-functional supply chain processes.",
    approach:
      "Gathered input from process owners, observed workflows, and synthesized comprehensive-yet-usable SOPs across procurement, order fulfillment, returns, and supplier performance — with flowcharts, RACI matrices, and exception handling.",
    deliverables:
      "A 20+ page SOP manual with visuals and quick-reference guides, plus a training outline for onboarding new team members.",
    tags: ["Technical writing", "Process documentation", "RACI & flowcharts", "Audience-aware"],
  },
];

export const toolkit: { group: string; items: string[] }[] = [
  {
    group: "Core",
    items: ["Microsoft Excel (Advanced)", "Power Query", "VBA / Macros", "Word", "PowerPoint"],
  },
  {
    group: "Data & Visualization",
    items: ["Power BI (foundational)", "Data modeling", "Dashboard design", "KPI development"],
  },
  {
    group: "Analysis & Scripting",
    items: ["Python — pandas", "Python — openpyxl", "SQL (foundational)", "Process automation"],
  },
  {
    group: "Documentation & Process",
    items: ["Process mapping", "SOP development", "Git concepts", "Structured writing"],
  },
  {
    group: "Business Systems",
    items: ["ERP data flows", "Procurement systems", "Supply chain data flows"],
  },
];

export const nav: { href: string; label: string }[] = [
  { href: "#about", label: "About" },
  { href: "#competencies", label: "Competencies" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
