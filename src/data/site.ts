// NOTE: Contact details are placeholders — replace with real EfanChem information before launch.
export const site = {
  name: "EfanChem",
  legalName: "Efan Chem",
  tagline: "Water Treatment Chemicals Supplier",
  url: "https://efanchem.com",
  email: "sales@efanchem.com",
  phone: "+86 000 0000 0000",
  whatsapp: "+86 000 0000 0000",
  address: "China (address to be confirmed)",
  description:
    "Efan Chem is a water-treatment chemicals supplier focused on industrial wastewater and sludge dewatering — providing stable PAM, PAC, PFS and activated carbon with on-site testing and technical support for overseas distributors, EPC contractors and industrial plants.",
};

export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "Industries", href: "/industries/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];
