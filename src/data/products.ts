// NOTE: Specifications below are industry-typical reference values.
// Verify every figure against actual EfanChem product data (CAS, purity, grade) before launch.

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  description: string;
  forms: string[];
  specs: { label: string; value: string }[];
  applications: string[];
}

export const products: Product[] = [
  {
    slug: "polyacrylamide-pam",
    name: "Polyacrylamide (PAM)",
    tagline: "Flocculant & sludge-dewatering polymer",
    icon: "molecule",
    description:
      "High-molecular-weight water-soluble polymer in anionic, cationic and non-ionic grades. Accelerates floc formation, improves settling and lowers sludge moisture for municipal and industrial dewatering.",
    forms: ["Anionic", "Cationic", "Non-ionic"],
    specs: [
      { label: "CAS No.", value: "9003-05-8" },
      { label: "Molecular weight", value: "5–25 million (grade-dependent)" },
      { label: "Charge density", value: "10–60% (cationic grades)" },
      { label: "Solid content", value: "≥ 90%" },
      { label: "Appearance", value: "White granular powder" },
    ],
    applications: [
      "Municipal sludge dewatering",
      "Industrial wastewater flocculation",
      "Mining & tailings settling",
      "Paper retention & drainage",
    ],
  },
  {
    slug: "polyaluminium-chloride-pac",
    name: "Polyaluminium Chloride (PAC)",
    tagline: "High-basicity coagulant",
    icon: "droplet",
    description:
      "Highly efficient inorganic coagulant for drinking water and industrial wastewater. Produces dense flocs with lower dosage than traditional aluminium salts, across a wide pH and turbidity range.",
    forms: ["Powder", "Granular"],
    specs: [
      { label: "CAS No.", value: "1327-41-9" },
      { label: "Al₂O₃ content", value: "28–30%" },
      { label: "Basicity", value: "40–90%" },
      { label: "Water insoluble", value: "≤ 0.5%" },
      { label: "Appearance", value: "Yellow to light-yellow powder" },
    ],
    applications: [
      "Drinking water clarification",
      "Industrial wastewater coagulation",
      "Colour & phosphorus removal",
      "Pre-treatment ahead of filtration",
    ],
  },
  {
    slug: "polyferric-sulfate-pfs",
    name: "Polyferric Sulfate (PFS)",
    tagline: "Iron-based coagulant",
    icon: "flask",
    description:
      "Polymeric ferric coagulant with strong charge-neutralising and bridging capability. Effective for turbidity, COD and phosphorus removal, and tolerant of challenging wastewater conditions.",
    forms: ["Powder"],
    specs: [
      { label: "CAS No.", value: "10028-22-5" },
      { label: "Iron (Fe) content", value: "19–21%" },
      { label: "Basicity", value: "8–16%" },
      { label: "Water insoluble", value: "≤ 0.5%" },
      { label: "Appearance", value: "Yellow-brown powder" },
    ],
    applications: [
      "Industrial wastewater coagulation",
      "Phosphorus removal",
      "Sludge conditioning",
      "Colour removal",
    ],
  },
  {
    slug: "ferrous-sulfate",
    name: "Ferrous Sulfate",
    tagline: "Coagulant & reducing agent",
    icon: "sparkles",
    description:
      "Cost-effective iron salt used as a coagulant and reducing agent. Works well for colour, COD and phosphate control, and as a component in combined coagulation programmes.",
    forms: ["Heptahydrate", "Monohydrate"],
    specs: [
      { label: "CAS No.", value: "7782-63-0 (heptahydrate)" },
      { label: "FeSO₄·7H₂O", value: "≥ 90%" },
      { label: "Iron (Fe) content", value: "≥ 19.5%" },
      { label: "Appearance", value: "Green crystalline solid" },
    ],
    applications: [
      "Wastewater coagulation",
      "Phosphorus removal",
      "Colour & COD reduction",
      "Reducing agent in treatment",
    ],
  },
  {
    slug: "activated-carbon",
    name: "Activated Carbon",
    tagline: "Adsorption & polishing media",
    icon: "layers",
    description:
      "Granular and powdered activated carbon for adsorption of organic contaminants, colour and odour. Used for final polishing of drinking water and industrial effluent.",
    forms: ["Granular", "Powdered"],
    specs: [
      { label: "CAS No.", value: "7440-44-0" },
      { label: "Iodine number", value: "800–1100 mg/g" },
      { label: "Mesh size", value: "8×30 / 12×40" },
      { label: "Moisture", value: "≤ 5%" },
      { label: "Appearance", value: "Black granular / powder" },
    ],
    applications: [
      "Drinking water polishing",
      "Organic contaminant removal",
      "Colour & odour control",
      "Industrial effluent polishing",
    ],
  },
  {
    slug: "auxiliary-chemicals",
    name: "Auxiliary Chemicals",
    tagline: "Scale inhibitors, defoamers & filter media",
    icon: "sliders",
    description:
      "Complementary treatment chemicals and media — antiscalants, defoamers and filtration media — to complete a single-supplier programme and reduce multi-vendor management.",
    forms: ["Liquid", "Granular", "Media"],
    specs: [
      { label: "Product range", value: "Antiscalants, defoamers, filter media" },
      { label: "Grade", value: "Application-specific" },
      { label: "Packaging", value: "Custom / OEM available" },
    ],
    applications: [
      "RO & cooling scale control",
      "Foam control in aeration",
      "Filtration media (sand, anthracite)",
      "Process-specific dosing programmes",
    ],
  },
];
