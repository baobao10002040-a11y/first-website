export interface CaseStudy {
  sector: string;
  region: string;
  title: string;
  challenge: string;
  solution: string[];
  results: string[];
}

export const cases: CaseStudy[] = [
  {
    sector: "Water-treatment distributor",
    region: "Southeast Asia",
    title: "Stabilising PAM supply for a multi-line distributor",
    challenge:
      "A regional distributor sourced PAM from three Chinese suppliers but saw batch-to-batch differences that made its customers' sludge dewatering inconsistent.",
    solution: [
      "Segmented end-customer sludge into municipal, food and industrial types",
      "Recommended different cationic PAM charge densities per scenario",
      "Supplied multiple batch samples for side-by-side comparison",
      "Standardised packaging and technical documentation",
    ],
    results: [
      "Fewer end-customer complaints",
      "Higher distributor repeat-purchase rate",
      "Shift from price to technical-service competition",
      "Cross-selling of PAC, PFS and activated carbon",
    ],
  },
  {
    sector: "Engineering & EPC",
    region: "Industrial park project",
    title: "Clearing turbidity swings for an industrial-park EPC",
    challenge:
      "A park wastewater project using standard PAC and PAM suffered fluctuating effluent turbidity and slow sludge settling.",
    solution: [
      "Analysed influent SS, COD, oil/grease and metal ions",
      "Adjusted PAC aluminium content, basicity and dosage",
      "Screened anionic PAM by molecular weight with jar tests",
      "Set a backup dosing plan for influent fluctuation",
    ],
    results: [
      "Better floc formation and settling",
      "More stable effluent quality",
      "Reduced over-dosing",
      "Stronger EPC delivery to the end-owner",
    ],
  },
  {
    sector: "Municipal wastewater plant",
    region: "Tropical region",
    title: "Riding out the rainy season at a municipal plant",
    challenge:
      "During the rainy season, higher inflow and organic load caused the plant's cationic PAM dewatering performance to drop.",
    solution: [
      "Built separate testing plans for wet and dry seasons",
      "Screened cationic PAM by charge density and molecular weight",
      "Optimised dissolution concentration and maturation time",
      "Tuned dosing points for centrifuge and belt press",
    ],
    results: [
      "Stable year-round operation",
      "Lower sludge-cake moisture",
      "Less filter-cloth blinding",
      "Fewer manual parameter changes",
    ],
  },
  {
    sector: "Mining & mineral processing",
    region: "Tailings operation",
    title: "Faster tailings settling and higher water reuse",
    challenge:
      "A mine's tailings pond was large, settling was slow, and recycled-water supply was constrained.",
    solution: [
      "Collected slurry density, particle size and pH data",
      "Screened anionic PAM by molecular weight",
      "Evaluated PAC/PFS + PAM combined programmes",
      "Calculated cost per tonne of tailings treated",
    ],
    results: [
      "Faster tailings settling",
      "Shorter pond residence time",
      "Higher recycled-water reuse",
      "Lower fresh-water consumption",
    ],
  },
];
