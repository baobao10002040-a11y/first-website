export interface Industry {
  slug: string;
  name: string;
  icon: string;
  overview: string;
  painPoints: string[];
  solution: string[];
  outcomes: string[];
}

export const industries: Industry[] = [
  {
    slug: "distributors-importers",
    name: "Distributors & Importers",
    icon: "package",
    overview:
      "Regional water-treatment chemical distributors who need consistent quality, OEM packaging and dependable export supply across multiple product lines.",
    painPoints: [
      "Batch-to-batch quality variation from suppliers",
      "Delayed delivery and slow supplier response",
      "Missing technical documentation (COA, TDS, SDS)",
      "Margin pressure from price-only competition",
    ],
    solution: [
      "Unified packaging and complete technical documentation",
      "Quarterly purchasing and safety-stock planning",
      "Multi-product consolidation (PAM, PAC, PFS, activated carbon)",
      "OEM and private-label packaging options",
    ],
    outcomes: [
      "Fewer end-customer complaints",
      "Higher repeat purchase rate",
      "Shift from price competition to technical-service competition",
      "Cross-selling across the full product range",
    ],
  },
  {
    slug: "engineering-epc",
    name: "Engineering & EPC Contractors",
    icon: "building",
    overview:
      "Wastewater treatment engineering firms and EPC contractors who need project-grade chemicals, on-site support and reliable long-term operating supply.",
    painPoints: [
      "Hard to estimate chemical cost at bid stage",
      "Field water quality differs from design conditions",
      "Chemicals fail to meet design performance",
      "Commissioning and acceptance risk",
    ],
    solution: [
      "Project sample testing and product selection",
      "On-site commissioning support",
      "Technical parameters and certification documents",
      "Long-term operating supply with emergency restock",
    ],
    outcomes: [
      "Smoother project acceptance",
      "Compliance with discharge standards",
      "Lower construction and operating costs",
      "Reduced commissioning risk",
    ],
  },
  {
    slug: "municipal-wastewater",
    name: "Municipal Wastewater Treatment",
    icon: "droplet",
    overview:
      "City and industrial-park wastewater plants requiring stable, compliant supply of coagulants and flocculants under seasonal load variation.",
    painPoints: [
      "Seasonal influent quality swings",
      "Unstable sludge dewatering",
      "Rising discharge standards",
      "Complex procurement and audit requirements",
    ],
    solution: [
      "Season-specific product testing programmes",
      "Cationic PAM screening by charge and molecular weight",
      "Dosing and maturation optimisation",
      "Safety-stock and framework supply agreements",
    ],
    outcomes: [
      "Stable year-round operation",
      "Lower sludge cake moisture",
      "Reduced filter-cloth blinding",
      "Fewer manual parameter adjustments",
    ],
  },
  {
    slug: "mining-coal-mineral",
    name: "Mining, Coal & Mineral Processing",
    icon: "mountain",
    overview:
      "Mines, coal washing plants and mineral processors needing high-volume flocculants for tailings settling, dewatering and water recycling.",
    painPoints: [
      "High slurry and tailings density",
      "Slow tailings settling",
      "Low water-recycling rates",
      "High chemical consumption per tonne",
    ],
    solution: [
      "Anionic/non-ionic PAM screening by molecular weight",
      "PAC/PFS + PAM combined programmes",
      "Dosing-point and mixing optimisation",
      "Cost-per-tonne-of-tailings evaluation",
    ],
    outcomes: [
      "Faster solid–liquid separation",
      "Shorter settling-pond residence time",
      "Higher recycled-water reuse",
      "Lower tailings-handling pressure",
    ],
  },
  {
    slug: "paper-textile-food",
    name: "Paper, Textile, Dyeing & Food",
    icon: "leaf",
    overview:
      "Manufacturing plants producing high-organic, high-colour effluent that requires consistent coagulation, flocculation and sludge dewatering.",
    painPoints: [
      "High organic and fibre content",
      "High colour and oil/grease loadings",
      "Large sludge volumes",
      "Strict discharge limits",
    ],
    solution: [
      "Cationic/ionic PAM selection by sludge type",
      "PAC and PFS dosing for COD, SS and colour",
      "Concentration and maturation testing",
      "Field-data-driven dosage optimisation",
    ],
    outcomes: [
      "Lower COD, SS and colour",
      "Stable compliance",
      "Reduced sludge volume",
      "Lower cost per treated cubic metre",
    ],
  },
  {
    slug: "stone-sand-concrete",
    name: "Stone, Sand & Concrete",
    icon: "layers",
    overview:
      "Stone-cutting, sand/gravel and concrete plants that need fast settling of fine particles for process-water recycling and sludge dewatering.",
    painPoints: [
      "High fine-particle and suspended-solids load",
      "Turbid recycling water",
      "Frequent settling-pond cleaning",
      "Low water-reuse rates",
    ],
    solution: [
      "Anionic PAM selection by particle size",
      "PAC for fine-particle pre-aggregation",
      "Simple on-site jar-test method",
      "Standard dosing by recycled-water volume",
    ],
    outcomes: [
      "Faster particle settling",
      "Clearer recycled water",
      "Less frequent pond cleaning",
      "Higher production continuity",
    ],
  },
];

export interface ProductLine {
  name: string;
  icon: string;
  description: string;
  focus: string;
}

export const productLines: ProductLine[] = [
  {
    name: "Distributor Supply",
    icon: "package",
    description:
      "Price, packaging, lead time, OEM and multi-product consolidation for resellers.",
    focus: "Reliable, margin-protecting supply",
  },
  {
    name: "Engineering Projects",
    icon: "building",
    description:
      "Sample testing, product selection, on-site commissioning and project delivery.",
    focus: "Design-matched, field-verified chemicals",
  },
  {
    name: "Industrial End-Users",
    icon: "factory",
    description:
      "Cost per treated cubic metre, operational stability, dewatering results and long-term service.",
    focus: "Lower total operating cost",
  },
];
