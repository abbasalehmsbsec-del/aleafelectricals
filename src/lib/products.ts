export type ProductCategory = "machines" | "printers" | "consumables";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  specs: Record<string, string>;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "ferrule-pro-5000",
    name: "Ferrule Pro 5000",
    category: "machines",
    categoryLabel: "Ferrule Printing Machines",
    description:
      "High-speed automated ferrule printing with precision alignment and industrial-grade durability.",
    longDescription:
      "The Ferrule Pro 5000 is our flagship automated ferrule printing solution. Designed for high-volume production environments, it delivers precise, permanent markings on wire ferrules and cable end sleeves. With its advanced alignment system and robust steel construction, it ensures consistent quality even under demanding industrial conditions.",
    image: "/products/ferrule-printer-1.jpg",
    features: [
      "Up to 2,400 ferrules/hour printing speed",
      "Automatic alignment with 0.1mm precision",
      "Industrial-grade steel frame construction",
      "Touchscreen control panel with 50+ preset templates",
      "Compatible with 0.5mm² to 16mm² ferrule sizes",
      "Built-in quality inspection camera",
    ],
    specs: {
      "Printing Speed": "2,400 units/hour",
      "Print Resolution": "600 x 600 DPI",
      "Ferrule Range": "0.5mm² - 16mm²",
      "Power": "220V / 50Hz",
      "Dimensions": "620 x 480 x 520mm",
      "Weight": "42kg",
    },
    featured: true,
  },
  {
    id: "ferrule-heavy-x1",
    name: "Ferrule Heavy X1",
    category: "machines",
    categoryLabel: "Ferrule Printing Machines",
    description:
      "Floor-standing heavy-duty crimping and marking station for large-scale wire harness operations.",
    longDescription:
      "The Ferrule Heavy X1 is built for the most demanding wire harness production facilities. This floor-standing unit combines ferrule crimping, cutting, and marking in a single automated workstation. Its pneumatic drive system and heavy-duty frame handle continuous operation in 24/7 manufacturing environments.",
    image: "/products/ferrule-printer-2.jpg",
    features: [
      "Combined crimping, cutting & marking in one pass",
      "Pneumatic drive with 8-ton crimping force",
      "Handles ferrules up to 50mm² cross-section",
      "Automated wire feeding system",
      "Integrated wire cutting to precise lengths",
      "Safety guards with emergency stop system",
    ],
    specs: {
      "Crimping Force": "8 tons",
      "Ferrule Range": "0.5mm² - 50mm²",
      "Wire Length Accuracy": "±0.5mm",
      "Cycle Time": "3.2 seconds",
      "Power": "380V 3-phase",
      "Dimensions": "1200 x 800 x 1650mm",
      "Weight": "185kg",
    },
    featured: true,
  },
  {
    id: "label-master-dt400",
    name: "LabelMaster DT400",
    category: "printers",
    categoryLabel: "Label Printers",
    description:
      "Desktop thermal transfer label printer with high-resolution output and flexible media support.",
    longDescription:
      "The LabelMaster DT400 brings professional-grade label printing to your desk. Featuring 300 DPI thermal transfer technology, it produces crisp, durable labels for cable management, asset tracking, and safety identification. The compact design fits any workspace while supporting label widths from 20mm to 104mm.",
    image: "/products/label-printer-1.jpg",
    features: [
      "300 DPI thermal transfer printing",
      "Print speeds up to 152mm/second",
      "Label widths: 20mm - 104mm",
      "USB, Ethernet & Wi-Fi connectivity",
      "Compatible with major label design software",
      "Automatic cutter & peeler options",
    ],
    specs: {
      "Print Resolution": "300 DPI",
      "Max Print Speed": "152mm/s",
      "Max Label Width": "104mm",
      "Connectivity": "USB 2.0, Ethernet, Wi-Fi",
      "Media Types": "Roll, fanfold, continuous",
      "Power": "100-240V AC",
      "Dimensions": "250 x 320 x 240mm",
      "Weight": "4.2kg",
    },
    featured: true,
  },
  {
    id: "label-rugged-hp200",
    name: "Label Rugged HP200",
    category: "printers",
    categoryLabel: "Label Printers",
    description:
      "Portable handheld thermal printer engineered for field service, construction, and industrial site use.",
    longDescription:
      "Take label printing anywhere with the Label Rugged HP200. This handheld thermal printer is built to survive drops, dust, and harsh environments. Perfect for field technicians, cable installers, and maintenance teams who need on-the-spot labeling for safety, identification, and compliance.",
    image: "/products/label-printer-2.jpg",
    features: [
      "IP54 rated dust and water resistance",
      "Drop-tested to 1.8 meters on concrete",
      "Rechargeable battery: 8 hours continuous use",
      "Bluetooth & USB connectivity",
      "Pre-loaded with 200+ industry symbols",
      "Lightweight at just 680g",
    ],
    specs: {
      "Print Resolution": "203 DPI",
      "Max Label Width": "58mm",
      "Battery Life": "8 hours",
      "Connectivity": "Bluetooth 5.0, USB-C",
      "Protection Rating": "IP54",
      "Weight": "680g",
      "Dimensions": "180 x 120 x 75mm",
    },
    featured: false,
  },
  {
    id: "ferrule-sleeve-kit",
    name: "Insulated Ferrule Sleeve Kit",
    category: "consumables",
    categoryLabel: "Consumables",
    description:
      "Comprehensive kit of insulated wire ferrules in all standard sizes and colors for professional electrical work.",
    longDescription:
      "Our Insulated Ferrule Sleeve Kit contains over 1,200 pieces of high-quality copper ferrules with polypropylene insulation in standard IEC colors. Each ferrule is pre-crimped for easy insertion and provides a secure, gas-tight connection that prevents wire strand breakage and improves conductivity.",
    image: "/products/consumables-1.jpg",
    features: [
      "1,200+ pieces in organized storage case",
      "Copper tube with polypropylene insulation",
      "Standard IEC color coding",
      "Sizes from 0.5mm² to 16mm²",
      "RoHS compliant & UL recognized",
      "Reusable compartmentalized case",
    ],
    specs: {
      "Material": "Copper tube, PP insulation",
      "Color Coding": "IEC standard",
      "Quantity": "1,200 pieces",
      "Size Range": "0.5mm² - 16mm²",
      "Compliance": "RoHS, UL recognized",
    },
    featured: false,
  },
  {
    id: "thermal-ribbon-set",
    name: "Thermal Transfer Ribbon Set",
    category: "consumables",
    categoryLabel: "Consumables",
    description:
      "Premium wax-resin thermal transfer ribbons for durable, smudge-proof labeling in industrial environments.",
    longDescription:
      "Our Thermal Transfer Ribbon Set delivers exceptional print quality and durability. The wax-resin formulation resists abrasion, chemicals, and UV exposure, making it ideal for labels that must withstand harsh industrial conditions. Each ribbon is precision-wound to prevent wrinkling and ensure consistent feed.",
    image: "/products/consumables-2.jpg",
    features: [
      "Wax-resin formula for maximum durability",
      "Resistant to chemicals, abrasion & UV",
      "Precision-wound to prevent wrinkling",
      "Compatible with all major label printers",
      "Available in black, red, white & blue",
      "110mm x 300m standard size",
    ],
    specs: {
      "Type": "Wax-Resin",
      "Width": "110mm",
      "Length": "300m",
      "Core Size": "1 inch",
      "Colors": "Black, Red, White, Blue",
      "Shelf Life": "2 years",
    },
    featured: false,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
