export type ProductCategory =
  | "machines"
  | "printers"
  | "consumables"
  | "agriculture";


export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  specs: Record<string, string>;
  featured: boolean;
}

const MACHINES = "Ferrule Printing Machines";
const PRINTERS = "Label Printers";
const CONSUMABLES = "Consumables";
const AGRICULTURE = "Agricultural Equipment";


export const products: Product[] = [
  /* ---------------- Ferrule printing machines ---------------- */
  {
    id: "max-lm-550a-pc",
    name: "MAX LETATWIN LM-550A / LM-550A3-PC",
    brand: "MAX",
    category: "machines",
    categoryLabel: MACHINES,
    description:
      "Thermal transfer ferrule and tube printer with built-in tube heater, half-cut function and PC Editor software.",
    longDescription:
      "The MAX LETATWIN LM-550A / LM-550A3-PC is a professional electric lettering machine for wire ferrules, PVC tubing, heat shrink tubing and tapes. A built-in tube heater keeps print quality consistent, while the bundled PC Editor software makes designing and managing label files simple for panel builders and wire harness shops.",
    image: "/products/max-lm-550a.jpg",
    features: [
      "Thermal transfer printing at 40 mm/sec",
      "Backlit 64 x 160 pixel LCD dot matrix display",
      "Prints PVC tube, heat shrink tube and tapes",
      "Auto half cut and manual full cut",
      "Up to 250,000 characters across max 50 files",
      "Built-in tube heater and PC Editor software",
    ],
    specs: {
      "Printing Method": "Thermal transfer printing",
      "Print Speed": "40 mm/sec",
      Display: "LCD dot matrix 64 x 160 pixels (backlit)",
      "Maximum Print Length": "Tube: up to 100 m; Tape: up to 7 m",
      "Character Input Limit": "Up to 250,000 characters (max 50 files)",
      "Print Media": "PVC tubing, heat shrink tubing, tapes",
      "Cutting Method": "Auto half cut, manual full cut",
      Interface: "USB 2.0 Full Speed",
      "Power Supply": "DC 12V 4.2A AC adapter (100-240V); 4 x AA batteries",
      "Dimensions (HxWxD)": "94 mm x 295 mm x 293 mm",
      Weight: "2.4 kg",
    },
    featured: true,
  },
  {
    id: "canon-mk-3000",
    name: "Canon MK-3000",
    brand: "Canon",
    category: "machines",
    categoryLabel: MACHINES,
    description:
      "300 dpi cable ID printer for tubes and labels with automatic full-cut and half-cut and USB PC connection.",
    longDescription:
      "The Canon MK-3000 is a compact cable ID and ferrule printer designed for electrical contractors and control panel manufacturers. It prints crisp 300 dpi markings on tubes from 1.5 to 10 mm diameter as well as label tape, with automatic full and half cutting and an included PC connection kit.",
    image: "/products/canon-mk-3000.jpg",
    features: [
      "Thermal transfer printing at 300 dpi",
      "Prints tubes 1.5-10 mm diameter and labels",
      "Backlit LCD graphic display 160 x 64 dots",
      "Automatic full-cut and half-cut",
      "Memory for approx. 250,000 characters / 10 folders",
      "Horizontal, vertical, mirror and sequential printing",
    ],
    specs: {
      "Printing Method": "Thermal transfer",
      "Print Resolution": "300 dpi",
      "Print Speed": "Tubes: up to 25 mm/sec; Labels: up to 25 mm/sec",
      "Character Sizes": "1.3 mm (full width), 2, 2.6, 3, 4, 6 mm",
      Display: "LCD graphic 160 x 64 dots with backlight",
      Memory: "5,000 characters; approx. 250,000 characters or 10 folders",
      Cutter: "Automatic full-cut, automatic half-cut",
      "Power Supply": "AC adapter (100V-240V, 50/60Hz)",
      Interface: "USB 2.0; PC connection kit included",
      "Dimensions (WxDxH)": "272 mm x 318 mm x 97 mm",
      Weight: "Approx. 2.7 kg (without accessories)",
      "Supported Media": "Tubes diameter 1.5-10 mm, thickness 0.2-0.6 mm",
    },
    featured: true,
  },
  {
    id: "canon-mk-5000",
    name: "Canon MK-5000",
    brand: "Canon",
    category: "machines",
    categoryLabel: MACHINES,
    description:
      "High-speed 300 dpi tube and label marking system with selectable print speeds and battery operation.",
    longDescription:
      "The Canon MK-5000 builds on the MK-3000 platform with selectable high, middle and low print speeds up to 40 mm/sec and optional rechargeable battery operation for on-site work. It handles PVC tube, heat shrink tube and 6/9/12 mm label tape for complete cable identification.",
    image: "/products/canon-mk-5000.jpg",
    features: [
      "High speed printing up to 40 mm/sec",
      "300 dpi thermal transfer print head",
      "Runs on AC adapter or 6 x AA rechargeable batteries",
      "Automatic full-cut and half-cut",
      "Supports 6, 9 and 12 mm tape widths",
      "Fine pitch adjustment and mirror printing",
    ],
    specs: {
      "Printing Method": "Thermal transfer",
      "Print Resolution": "300 dpi",
      "Print Speed": "High: 40 mm/sec; Middle: 25 mm/sec; Low: 18.5 mm/sec",
      "Character Sizes": "1.3, 2, 2.6, 3, 4, 6 mm (full/half width)",
      Display: "LCD graphic 160 x 64 dots with backlight",
      Memory: "Approx. 5,000 characters; 250,000 characters or 10 folders",
      Cutter: "Automatic full-cut and half-cut",
      "Power Supply": "AC adapter (100V-240V, 50/60Hz); 6 x AA rechargeable batteries",
      Interface: "USB 2.0; PC connection kit included",
      "Dimensions (WxDxH)": "272 mm x 318 mm x 97 mm",
      Weight: "Approx. 2.7 kg (without accessories)",
      "Supported Media": "Tubes 1.5-10 mm diameter; thickness 0.4-0.6 mm",
      "Supported Tape Widths": "6 mm, 9 mm, 12 mm",
    },
    featured: true,
  },
  {
    id: "supvan-tp-70e",
    name: "SUPVAN TP-70E",
    brand: "SUPVAN",
    category: "machines",
    categoryLabel: MACHINES,
    description:
      "Portable tube printer with automatic feed, ribbon tightening and repeat printing up to 200 times.",
    longDescription:
      "The SUPVAN TP-70E is a rugged, portable ferrule and tube printer for electrical panel and wire harness production. It prints black, white or red on PVC tubes, heat shrink tubes and label tape, with automatic feeding, cutting and multiple print modes for fast batch marking.",
    image: "/products/supvan-tp-70e.jpg",
    features: [
      "300 dpi thermal transfer printing",
      "Prints 35 tube pieces per minute (20 mm per piece)",
      "PVC tube 1.5-8 mm, heat shrink 2.5-6 mm, label 6/9/12 mm",
      "Black, white and red ink ribbon options",
      "Automatic cutting with cut segment and cut out modes",
      "Repeat printing 1-200 times, foot/framed/normal print modes",
    ],
    specs: {
      "Printing Method": "Thermal transfer",
      Resolution: "300 dpi",
      "Print Speed": "Tube: 35 pieces/min (20 mm per piece)",
      "Print Size": "Label: 1-7 mm; Tube: 1-5 lines",
      "Printing Materials":
        "PVC tubes (1.5-8 mm), heat shrink tubes (2.5-6 mm), labels (6, 9, 12 mm)",
      "Ink Colors": "Black, White, Red",
      Keyboard: "Computer-like keyboard with letters, numbers and symbols",
      Display: "White backlit LCD, up to 2-line editing",
      "Power Supply": "AC adapter (AC 100V-240V 50/60Hz)",
      "Dimensions (LxWxH)": "320 mm x 280 mm x 80 mm",
      Weight: "3 kg",
    },
    featured: true,
  },
  {
    id: "supvan-tp-76e",
    name: "SUPVAN TP-76E",
    brand: "SUPVAN",
    category: "machines",
    categoryLabel: MACHINES,
    description:
      "PC-connected tube printer with 5-line editing, 64-file memory and professional editing software.",
    longDescription:
      "The SUPVAN TP-76E adds PC connectivity and a large double-column display to the TP-series tube printer line. With 64-file memory, power-off recovery and automatic half cutting, it is built for continuous ferrule marking in busy panel shops.",
    image: "/products/supvan-tp-76e.jpg",
    features: [
      "300 dpi thermal transfer printing",
      "Tubes 35 pcs/min, labels 40 pcs/min",
      "White backlit LCD with double column, 5-line editing",
      "Memory for up to 64 files with power-off recovery",
      "USB 2.0 connection with professional PC editing software",
      "Automatic feed, cutting and repeat printing up to 200 times",
    ],
    specs: {
      "Printing Method": "Thermal transfer",
      "Print Resolution": "300 dpi",
      "Print Speed": "Tubes: 35 pcs/min; Labels: 40 pcs/min",
      "Character Size": "Tubes: 1-5 characters; Labels: 1-7 characters",
      "Print Length Range": "6 mm to 100 mm",
      "Printing Materials":
        "PVC tubes (1.5-8 mm), heat shrink tubes (2.5-6 mm), labels (6, 9, 12 mm)",
      "Ink Ribbon Length": "Black: 100 m; White: 80 m; Red: 80 m",
      Memory: "Up to 64 files",
      "Cutting Method": "Automatic half cutting",
      Interface: "USB 2.0 Full Speed",
      "Power Supply": "AC adapter (100-240 V AC, 50/60 Hz)",
      "Dimensions (LxWxH)": "320 mm x 280 mm x 80 mm",
      Weight: "3 kg",
    },
    featured: false,
  },
  {
    id: "puty-pt-1010",
    name: "PUTY PT-1010",
    brand: "PUTY",
    category: "machines",
    categoryLabel: MACHINES,
    description:
      "Compact QWERTY ferrule printer for PVC tube, heat shrink tube and label tape with auto half-cut.",
    longDescription:
      "The PUTY PT-1010 is an easy-to-operate ferrule printing machine for electricians and panel builders. Its QWERTY keyboard, power-off recovery and multi-character input make quick work of marking sleeves from 0.5 mm² to 8 mm² as well as heat shrink tube and label tape.",
    image: "/products/puty-pt-1010.jpg",
    features: [
      "300 dpi thermal transfer printing",
      "Prints PVC tube, label tape and heat shrink tube",
      "Sleeve diameter 0.5 mm² to 8 mm²",
      "Auto half-cut and manual full-cut",
      "Eight selectable font sizes",
      "Power-off recovery and multi-character input",
    ],
    specs: {
      "Printing Method": "Thermal transfer",
      "Print Resolution": "300 dpi",
      "Print Speed": "20 mm per segment",
      "Printing Media": "PVC tube, label tape, heat shrink tube",
      "Media Size":
        "Sleeve 0.5-8 mm²; heat shrink 1.0-8.0 mm; label width 6, 9, 12 mm",
      Keyboard: "QWERTY keyboard",
      Cutter: "Auto half-cut, manual full-cut",
      "Font Size": "1 to 8",
      "Power Supply": "AC 220V",
      "Dimensions (LxWxH)": "298 mm x 260 mm x 100 mm",
      Weight: "Approx. 2.6 kg",
    },
    featured: false,
  },
  {
    id: "puty-p-900",
    name: "PUTY P-900",
    brand: "PUTY",
    category: "machines",
    categoryLabel: MACHINES,
    description:
      "High-speed tube marking machine printing up to 125 pieces per minute with 100-file memory.",
    longDescription:
      "The PUTY P-900 is a high-output tube and ferrule printer for large wire harness runs. A 78-key standard keyboard, white backlit screen and 100-file memory support fast job setup, while high-speed mode reaches 125 pieces per minute. It supports both standalone and PC operation and ships in a hard case.",
    image: "/products/puty-p-900.jpg",
    features: [
      "High speed printing up to 125 pcs/min",
      "300 dpi thermal transfer print head",
      "PVC tube 1.5-8.0 mm, heat shrink 1.0-16 mm, tape 6/9/12 mm",
      "78-key standard keyboard with white backlit screen",
      "100 files, 12,000 characters per file",
      "Segment setting 5-300 mm, manual and PC operation modes",
    ],
    specs: {
      "Printing Method": "Thermal transfer",
      "Print Resolution": "300 dpi",
      "Print Speed": "Half-cut: 42 pcs/min; High speed: 125 pcs/min",
      "Printing Media": "PVC tube, label tape, heat shrink tube",
      "Media Size":
        "PVC tube 1.5-8.0 mm; heat shrink tube 1.0-16 mm; label tape 6, 9, 12 mm",
      Keyboard: "78-key standard keyboard",
      Display: "White backlit screen",
      Memory: "100 files, 12,000 characters per file",
      "Cutting Mode": "Auto half-cutting, manual full-cutting",
      "Power Supply": "DC 12V, 3A power adapter",
      "Dimensions (LxWxH)": "283 mm x 323 mm x 85 mm",
      Weight: "Approx. 3.0 kg (including hard case)",
    },
    featured: true,
  },

  /* ---------------- Label printers ---------------- */
  {
    id: "brother-pt-d610bt",
    name: "Brother PT-D610BT",
    brand: "Brother",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Bluetooth desktop label maker with colour backlit LCD, QWERTY keyboard and tapes up to 24 mm.",
    longDescription:
      "The Brother PT-D610BT combines a full QWERTY keyboard with Bluetooth connectivity so you can design labels on the device or from your phone and computer. It prints Brother TZe laminated tapes from 6 mm to 24 mm at 180 dpi with an automatic cutter and full barcode support.",
    image: "/products/brother-pt-d610bt.jpg",
    features: [
      "Bluetooth Classic and USB 2.0 connectivity",
      "20-character x 2-line backlit colour LCD",
      "Brother TZe tapes 6, 9, 12, 18 and 24 mm",
      "Barcode support: CODE39, CODE128, EAN-8, EAN-13, ITF 2/5, UPC",
      "Automatic cutter",
      "Multi-block, copy and mirror printing",
    ],
    specs: {
      "Printing Technology": "Thermal transfer",
      "Print Resolution": "180 dpi",
      "Print Speed": "Up to 30 mm/sec",
      "Tape Compatibility": "Brother TZe (6, 9, 12, 18, 24 mm)",
      Keyboard: "QWERTY",
      Display: "20-character x 2-line backlit colour LCD",
      Cutter: "Automatic",
      Connectivity: "USB 2.0 Full Speed Micro-B, Bluetooth Classic",
      "Power Supply": "6 x AA alkaline or AC adapter",
      "Dimensions (WxDxH)": "202 mm x 87 mm x 199 mm",
      Weight: "0.99 kg",
    },
    featured: true,
  },
  {
    id: "brother-pt-h105",
    name: "Brother PT-H105",
    brand: "Brother",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Lightweight handheld label maker for everyday identification with 6, 9 and 12 mm TZe tapes.",
    longDescription:
      "The Brother PT-H105 is a simple handheld label maker weighing just 0.39 kg. Powered by AAA batteries or an optional AC adapter, it prints durable TZe laminated labels in 6, 9 and 12 mm widths — ideal for workshops, offices and small electrical jobs.",
    image: "/products/brother-pt-h105.jpg",
    features: [
      "Thermal transfer print head at 180 dpi",
      "Print speed 20 mm/sec",
      "Tape sizes 6, 9 and 12 mm",
      "12 character x 1 line LCD display",
      "Manual cutter",
      "Runs on 6 x AAA alkaline batteries or AC adapter",
    ],
    specs: {
      "Printing Method": "Thermal transfer print head",
      "Print Speed": "20 mm/sec",
      "Print Resolution": "180 dpi",
      "Tape Sizes": "6 mm, 9 mm, 12 mm",
      "LCD Display": "12 characters x 1 line",
      Cutter: "Manual",
      "Dimensions (WxDxH)": "110 mm x 59 mm x 208 mm",
      Weight: "0.39 kg",
      Power: "6 x AAA alkaline batteries or AC adapter",
    },
    featured: false,
  },
  {
    id: "brother-pt-d210",
    name: "Brother PT-D210",
    brand: "Brother",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Desktop QWERTY label maker with print preview, auto numbering and repeat printing.",
    longDescription:
      "The Brother PT-D210 is a compact desktop label maker with a QWERTY keyboard and 15-character display. Print preview, mirror printing, auto numbering and repeat printing make it a dependable choice for offices, stores and light industrial labelling.",
    image: "/products/brother-pt-d210.jpg",
    features: [
      "Thermal transfer printing at 180 dpi",
      "Print speed up to 20 mm/sec",
      "Compatible with 6, 9 and 12 mm tapes",
      "QWERTY keyboard with 15 character x 1 line LCD",
      "Auto power off after around 5 minutes",
      "Print preview, mirror printing, auto numbering, repeat printing",
    ],
    specs: {
      "Printing Technology": "Thermal transfer",
      "Print Resolution": "180 dpi",
      "Print Speed": "Up to 20 mm/sec",
      "Tape Compatibility": "6 mm, 9 mm, 12 mm",
      Keyboard: "QWERTY",
      LCD: "15 characters x 1 line",
      Weight: "Approximately 0.49 kg",
      "Dimensions (WxDxH)": "157 x 149 x 68 mm",
      "Power Supply": "6 x AAA batteries or optional AC adapter",
      "Auto Power Off": "Yes (around 5 minutes)",
    },
    featured: false,
  },
  {
    id: "brother-pt-e110vp",
    name: "Brother PT-E110VP",
    brand: "Brother",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Handheld electrician's label printer with cable wrap, cable flag and patch panel label templates.",
    longDescription:
      "The Brother PT-E110VP is purpose-built for electricians and network installers. Supplied in a carry case, it offers dedicated cable wrap, cable flag, faceplate and patch panel label templates plus serial numbering, printing on Brother TZe laminated tapes up to 12 mm.",
    image: "/products/brother-pt-e110vp.jpg",
    features: [
      "Dedicated cable wrap, flag, faceplate and patch panel templates",
      "Thermal transfer printing at 180 dpi",
      "Brother TZe laminated tapes 6, 9 and 12 mm",
      "16-character graphic LCD with label preview",
      "Serial numbering",
      "Runs on 6 x AAA batteries or AC adapter",
    ],
    specs: {
      "Printing Technology": "Thermal transfer",
      "Print Resolution": "180 dpi",
      "Print Speed": "Up to 20 mm/sec",
      "Maximum Print Width": "12 mm",
      "Tape Compatibility": "Brother TZe laminated tapes (6, 9, 12 mm)",
      LCD: "16-character graphic",
      "Keyboard Layout": "QWERTY",
      Cutter: "Manual",
      "Power Supply": "6 x AAA batteries or AC adapter",
      "Dimensions (WxDxH)": "110 mm x 58 mm x 204 mm",
      Weight: "0.4 kg",
    },
    featured: true,
  },
  {
    id: "brother-pt-e550wvp",
    name: "Brother PT-E550WVP",
    brand: "Brother",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Wireless handheld industrial labeller with heat shrink tube support and automatic half/full cutter.",
    longDescription:
      "The Brother PT-E550WVP is a wireless handheld labelling tool for datacom and electrical professionals. It prints on Brother TZe tapes and HSe heat shrink tubing, supports multiple barcode types, and connects over USB or wireless LAN for printing directly from a PC or mobile device.",
    image: "/products/brother-pt-e550wvp.jpg",
    features: [
      "Wireless LAN and USB 2.0 connectivity",
      "Prints Brother TZe tape and HSe heat shrink tube",
      "180 dpi at up to 30 mm/sec",
      "15 character x 2 line backlit graphic LCD",
      "Automatic half and full cut",
      "Multi-block printing, preview and sequential numbering",
    ],
    specs: {
      "Printing Technology": "Thermal transfer",
      "Print Resolution": "180 dpi",
      "Print Speed": "Up to 30 mm/sec",
      "Tape Compatibility": "Brother TZe, HSe (heat shrink tube)",
      Keyboard: "QWERTY",
      Display: "15 characters x 2 lines backlit graphic LCD",
      "Barcode Support": "Multiple barcode types",
      Cutter: "Automatic (half and full cut)",
      Connectivity: "USB 2.0, Wireless LAN",
      "Power Supply": "6 x AAA alkaline batteries, AC adapter",
      "Dimensions (WxDxH)": "125.8 mm x 94.1 mm x 249.9 mm",
      Weight: "0.95 kg",
    },
    featured: true,
  },
  {
    id: "brother-pt-e850tkw",
    name: "Brother PT-E850TKW",
    brand: "Brother",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Dual tube and label printer at 360 dpi for heavy-duty cable identification, up to 36 mm tape.",
    longDescription:
      "The Brother PT-E850TKW is a professional dual-function machine that prints both heat shrink tubing and laminated labels. With 360 dpi resolution, tape widths up to 36 mm and print speeds up to 60 mm/sec, it suits high-volume control panel and cable identification work.",
    image: "/products/brother-pt-e850tkw.jpg",
    features: [
      "Prints both tube and label media",
      "360 dpi resolution for fine detail",
      "Tape widths 6, 9, 12, 18, 24 and 36 mm",
      "Brother TZe, HSe and FLe cassette compatible",
      "Automatic and half cutter",
      "Optional Li-ion battery for portable use",
    ],
    specs: {
      "Model Name": "Brother PT-E850TKW",
      "Printing Technology": "Thermal transfer",
      "Print Resolution": "360 dpi",
      "Print Speed": "Tube printing: 40 mm/sec; Label printing: 60 mm/sec",
      "Tape Size": "6, 9, 12, 18, 24, 36 mm",
      "Tape Compatibility":
        "Brother TZe laminated tape (3.5-36 mm), HSe heat-shrink tube (5.8-23.6 mm), FLe label cassette (21 x 45 mm)",
      Keyboard: "QWERTY",
      Cutter: "Automatic and half cutter",
      "Power Supply": "AC adapter (24 V); optional Li-ion battery (14.4 V)",
      Interface: "USB 2.0 Full Speed",
      "Dimensions (WxDxH)": "338 mm x 188 mm x 173 mm",
      Weight: "Approximately 4.6 kg",
    },
    featured: true,
  },
  {
    id: "brother-ql-800",
    name: "Brother QL-800",
    brand: "Brother",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "High-speed desktop direct thermal label printer with two-colour black and red printing.",
    longDescription:
      "The Brother QL-800 prints DK die-cut and continuous labels up to 62 mm wide at up to 148 mm/sec. Two-colour black and red printing on compatible DK rolls highlights critical information, and the automatic cutter keeps batch runs moving on Windows and Mac.",
    image: "/products/brother-ql-800.jpg",
    features: [
      "Direct thermal printing up to 148 mm/sec",
      "Two-colour black and red on compatible DK rolls",
      "High resolution mode 300 x 600 dpi",
      "Label widths 12 mm to 62 mm",
      "Automatic full cut cutter",
      "Works with Windows and Mac",
    ],
    specs: {
      "Printing Method": "Direct thermal printing via thermal head",
      "Print Resolution": "Standard 300 x 300 dpi; High resolution 300 x 600 dpi",
      "Print Speed": "Up to 148 mm/sec (black); 24 mm/sec (two-colour)",
      "Supported Label Widths": "12 mm to 62 mm",
      Cutter: "Automatic full cut cutter",
      Connectivity: "USB 2.0",
      "Dimensions (WxDxH)": "125.3 mm x 213 mm x 142 mm",
      Weight: "1.15 kg",
      Power: "AC 120/230 V",
      "Compatible Systems": "Windows and Mac",
    },
    featured: false,
  },
  {
    id: "brother-pt-p900w",
    name: "Brother PT-P900W",
    brand: "Brother",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Wi-Fi desktop laminated label printer at 360 dpi for durable labels in harsh environments.",
    longDescription:
      "The Brother PT-P900W is a wireless desktop label printer producing high-quality laminated labels that survive heat, water, chemicals and abrasion. With auto and half cutter, P-touch Editor 5 software and 360 dpi output, it handles barcodes, images, text and frames with ease.",
    image: "/products/brother-pt-p900w.jpg",
    features: [
      "360 dpi thermal transfer printing",
      "Print speeds up to 60 mm/sec",
      "USB 2.0 and Wi-Fi connectivity",
      "Auto and half cutter",
      "Brother TZe and HGe tape compatible",
      "P-touch Editor 5 label design software included",
    ],
    specs: {
      "Printing Technology": "Thermal transfer",
      "Print Resolution": "360 dpi",
      "Print Speed": "Up to 60 mm/sec",
      "Tape Compatibility": "Brother TZe, HGe",
      Cutter: "Auto and half cutter",
      Connectivity: "USB 2.0, Wi-Fi",
      "Power Supply": "AC adapter included; optional rechargeable Li-ion battery",
      "Dimensions (WxDxH)": "118 mm x 192 mm x 146 mm",
      Weight: "1.48 kg",
      Software: "Brother P-touch Editor 5",
    },
    featured: false,
  },
  {
    id: "brother-ql-810w",
    name: "Brother QL-810W",
    brand: "Brother",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Wireless two-colour desktop label printer at 176 mm/sec with 21 barcode protocols.",
    longDescription:
      "The Brother QL-810W is a fast wireless label printer for offices, warehouses and retail. It prints black and red on compatible DK rolls up to 62 mm wide at 176 mm/sec, supports 21 barcode protocols and includes label collection templates for instant printing.",
    image: "/products/brother-ql-810w.jpg",
    features: [
      "Two-colour direct thermal printing (black and red)",
      "Print speed 176 mm/sec at 300 dpi",
      "Label widths up to 62 mm",
      "USB 2.0 and wireless LAN",
      "21 barcode protocols supported",
      "Copy, mirror and numbering print modes",
    ],
    specs: {
      "Printing Technology": "Direct thermal with 2-colour print capability (black and red)",
      "Print Resolution": "300 dpi",
      "Print Speed": "176 mm/sec",
      "Supported Label Widths": "Up to 62 mm",
      Connectivity: "USB 2.0, Wireless LAN",
      Cutter: "Auto cutter",
      "Power Source": "100-240V AC external adapter",
      "Dimensions (WxDxH)": "125.3 mm x 234 mm x 145 mm",
      Weight: "1.15 kg",
      "Barcode Protocols": "21 barcode protocols supported",
    },
    featured: false,
  },
  {
    id: "brother-ql-820nwb",
    name: "Brother QL-820NWB",
    brand: "Brother",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Networked two-colour label printer with Wi-Fi, Ethernet, Bluetooth and backlit LCD.",
    longDescription:
      "The Brother QL-820NWB is the most connected model in the QL range, offering USB, Ethernet, Wi-Fi and Bluetooth alongside a backlit LCD for standalone operation. Two-colour printing, mobile app support and date/time stamping make it ideal for shared workgroup labelling.",
    image: "/products/brother-ql-820nwb.jpg",
    features: [
      "USB, LAN, Wi-Fi and Bluetooth connectivity",
      "Two-colour black and red direct thermal printing",
      "176 mm/sec print speed at 300 dpi",
      "Backlit LCD for standalone label creation",
      "Barcode support including Code39, GS1 DataBar and QR Code",
      "iPrint&Label and AirPrint mobile support",
    ],
    specs: {
      "Printing Technology": "Direct thermal with 2-colour print capability (black and red)",
      "Print Resolution": "300 dpi",
      "Print Speed": "176 mm/sec",
      "Supported Label Widths": "Up to 62 mm",
      Connectivity: "USB 2.0, LAN, Wi-Fi, Bluetooth",
      Cutter: "Automatic cutter",
      Display: "Backlit LCD",
      "Barcode Support": "Code39, GS1 DataBar, QR Code and more",
      "Power Source": "AC adapter (100-240V)",
      "Dimensions (WxDxH)": "125.3 mm x 234 mm x 145 mm",
      Weight: "Approximately 1.16 kg",
    },
    featured: false,
  },
  {
    id: "casio-kl-820",
    name: "CASIO KL-820",
    brand: "CASIO",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Desktop label printer with 24 mm print width, three-line printing and 100 stored layouts.",
    longDescription:
      "The CASIO KL-820 EZ-Label Printer prints up to three lines on tapes as wide as 24 mm. With five fonts, 248 built-in characters, barcode printing and memory for 100 label layouts, it is a versatile all-rounder for offices, laboratories and workshops.",
    image: "/products/casio-kl-820.jpg",
    features: [
      "Maximum print width 24 mm, up to 3 lines",
      "200 dpi thermal transfer at 20 mm/sec",
      "16 digits x 3 lines LCD display",
      "5 fonts with 3 character effects, 87 special characters, 65 frames",
      "Barcode printing supported",
      "Stores up to 100 label layouts",
    ],
    specs: {
      "Printing Method": "Thermal transfer",
      "Print Resolution": "200 dpi",
      "Print Speed": "20 mm/sec",
      "Maximum Print Width": "24 mm",
      "Maximum Print Lines": "Up to 3 lines (24 or 18 mm tape)",
      Display: "16 digits x 3 lines LCD",
      Fonts: "5 fonts with 3 character effects",
      "Built-in Characters": "248 characters, 62 alphanumeric",
      "Languages Supported": "14 languages",
      Memory: "Stores up to 100 label layouts",
      Keyboard: "QWERTY style",
      "Power Supply": "AC adapter (optional), 6 x AA batteries (sold separately)",
      "Dimensions (HxWxD)": "52.5 mm x 167 mm x 223 mm",
      Weight: "Approx. 610 g",
    },
    featured: false,
  },
  {
    id: "casio-kl-hd1",
    name: "CASIO KL-HD1",
    brand: "CASIO",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Ultra-light 340 g handheld label printer with ABCD keyboard and 8 built-in fonts.",
    longDescription:
      "The CASIO KL-HD1 is a pocket-friendly handheld label printer weighing only 340 g. Its ABCD keyboard and 96 x 32 dot LCD keep operation simple, with horizontal or vertical printing on 6 to 18 mm tapes for quick on-the-spot identification.",
    image: "/products/casio-kl-hd1.jpg",
    features: [
      "Weighs approximately 340 g",
      "200 dpi / 96 dot thermal transfer printing",
      "Supports 6, 9, 12 and 18 mm tape widths",
      "8 built-in fonts, 8 selectable message languages",
      "Print preview and mirror printing",
      "Horizontal and vertical print direction",
    ],
    specs: {
      "Printing Method": "Thermal transfer",
      "Print Resolution": "200 dpi / 96 dots",
      "Print Speed": "10 mm/sec",
      Fonts: "8 fonts",
      "Keyboard Layout": "ABCD keyboard",
      Display: "LCD 96 x 32 dots, 12 digits input",
      "Tape Widths Supported": "6 mm, 9 mm, 12 mm, 18 mm",
      "Print Direction": "Horizontal / Vertical",
      "Power Supply": "6 x AA alkaline batteries (sold separately)",
      "Dimensions (HxWxD)": "60 mm x 112 mm x 202 mm",
      Weight: "Approx. 340 g",
    },
    featured: false,
  },
  {
    id: "dymo-lm-280",
    name: "DYMO LabelManager 280",
    brand: "DYMO",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Rechargeable portable label maker with graphical LCD and PC/Mac connectivity over USB.",
    longDescription:
      "The DYMO LabelManager 280 is a rechargeable handheld label maker with a three-line graphical display and USB connection to Windows or Mac. Fast-formatting keys and extensive font and graphic options make custom D1 labels quick to create anywhere.",
    image: "/products/dymo-lm-280.jpg",
    features: [
      "Rechargeable battery for portable use",
      "180 dpi thermal transfer at 15 mm/sec",
      "Graphical LCD, 12 digits and 3 lines",
      "DYMO D1 tapes in 6, 9 and 12 mm",
      "USB 2.0 connection to PC and Mac",
      "Fast-formatting keys with fonts and graphics",
    ],
    specs: {
      "Printing Method": "Thermal transfer",
      "Print Resolution": "180 dpi",
      "Print Speed": "15 mm/sec",
      "Keyboard Layout": "QWERTY",
      Display: "Graphical LCD, 12 digits & 3 lines",
      "Supported Tapes": "D1 tapes (6, 9 and 12 mm)",
      Connectivity: "USB 2.0",
      Compatibility: "Windows 7 and later, Mac OS X v10.8 and later",
      "Dimensions (HxWxD)": "107.5 mm x 206 mm x 46.5 mm",
      Weight: "810 g",
      "Included Parts": "LabelManager 280, rechargeable battery, USB cable",
    },
    featured: false,
  },
  {
    id: "dymo-lm-160",
    name: "DYMO LabelManager 160",
    brand: "DYMO",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Handheld label maker with large preview display, 200+ symbols and quick format keys.",
    longDescription:
      "The DYMO LabelManager 160 is a lightweight 350 g handheld label maker with a large LCD that previews the label layout before printing. Over 200 symbols, six font sizes and eight font styles cover everyday home, office and workshop labelling.",
    image: "/products/dymo-lm-160.jpg",
    features: [
      "Large LCD preview of the label before printing",
      "180 dpi thermal transfer printing",
      "Maximum print width 12 mm",
      "DYMO D1 tapes in 6, 9 and 12 mm",
      "Over 200 symbols, 6 font sizes, 8 font styles, 4 boxes",
      "Only 350 g with quick format keys",
    ],
    specs: {
      "Printing Method": "Thermal transfer",
      "Print Resolution": "180 dpi",
      "Max Print Width": "12 mm",
      Keyboard: "QWERTY keyboard",
      Display: "Large LCD preview",
      "Supported Tapes": "D1 tapes (6, 9, 12 mm)",
      "Symbols & Fonts": "Over 200 symbols, 6 font sizes, 8 font styles, 4 boxes",
      "Power Supply": "6 x AAA batteries, AC adapter",
      "Dimensions (HxWxD)": "Approx. 118 mm x 203 mm x 49 mm",
      Weight: "Approx. 350 g",
    },
    featured: false,
  },
  {
    id: "dymo-lm-420p",
    name: "DYMO LabelManager 420P",
    brand: "DYMO",
    category: "printers",
    categoryLabel: PRINTERS,
    description:
      "Rechargeable professional label maker with 4-line backlit display and PC/Mac software.",
    longDescription:
      "The DYMO LabelManager 420P is a rechargeable professional label maker with a four-line backlit LCD and USB connection to DYMO Connect for Desktop. It prints barcodes, logos and batch labels on D1 tapes up to 19 mm and stores 15 frequently used labels.",
    image: "/products/dymo-lm-420p.jpg",
    features: [
      "4-line backlit LCD with on-screen label preview",
      "203 dpi thermal transfer printing",
      "D1 labels in 6, 9, 12 and 19 mm widths",
      "Rechargeable lithium-ion battery pack",
      "USB connection with DYMO Connect for Desktop",
      "Prints barcodes, logos and batch labels",
    ],
    specs: {
      "Printing Method": "Thermal transfer",
      "Print Resolution": "203 dpi",
      "Print Speed": "Approx. 12.7 mm/sec (0.5 in/sec)",
      "Keyboard Layout": "ABC style keyboard",
      Display: "4-line backlit LCD",
      "Supported Tapes": "D1 labels in 6, 9, 12 and 19 mm",
      Connectivity: "USB connection for PC and Mac",
      "Power Supply": "Rechargeable lithium-ion battery pack",
      Memory: "Stores up to 15 frequently-used labels",
      "Software Compatibility": "DYMO Connect for Desktop",
      "Dimensions (HxWxD)": "8.46 in x 4.06 in x 2.24 in",
      Weight: "1.06 kg (2.33 lbs)",
    },
    featured: false,
  },

  /* ---------------- Consumables ---------------- */
  {
    id: "brother-tze-tapes",
    name: "Brother TZe Laminated Tapes",
    brand: "Brother",
    category: "consumables",
    categoryLabel: CONSUMABLES,
    description:
      "Genuine Brother TZe laminated tape cassettes in 6-24 mm widths, resistant to heat, water and abrasion.",
    longDescription:
      "Brother TZe laminated tape cassettes protect printed text between layers of tough laminate, keeping labels legible in demanding environments. Available in widths from 6 mm to 24 mm and a wide choice of colour combinations, including strong adhesive and flexible ID variants.",
    image: "/products/brother-tze-tapes.jpg",
    features: [
      "Widths from 6 mm to 24 mm",
      "Laminated construction for long life",
      "Temperature, water and fade resistant",
      "Abrasion and chemical resistant",
      "Strong adhesive versions available",
      "Genuine Brother consumable",
    ],
    specs: {
      Type: "Laminated tape cassette",
      "Available Widths": "6, 9, 12, 18, 24 mm",
      Properties: "Temperature, water, fade, abrasion and chemical resistant",
      Compatibility: "Brother P-touch TZe compatible printers",
    },
    featured: false,
  },
  {
    id: "brother-ink-ribbon",
    name: "Brother Ink Ribbon Cassette",
    brand: "Brother",
    category: "consumables",
    categoryLabel: CONSUMABLES,
    description:
      "Genuine Brother black thermal transfer ink ribbon cassette for consistent, smudge-proof marking.",
    longDescription:
      "Genuine Brother ink ribbon cassettes deliver dense black printing with reliable feed and no smudging. Designed for Brother tube and label printing systems, each cassette drops in without adjustment for uninterrupted production.",
    image: "/products/brother-ink-ribbon.jpg",
    features: [
      "Genuine Brother consumable",
      "Dense black thermal transfer print",
      "Drop-in cassette, no adjustment required",
      "Smudge and fade resistant output",
      "Consistent feed with no wrinkling",
    ],
    specs: {
      Type: "Thermal transfer ink ribbon cassette",
      Colour: "Black",
      Compatibility: "Brother tube and label printing systems",
    },
    featured: false,
  },
  {
    id: "brother-dk-rolls",
    name: "Brother DK Label Rolls",
    brand: "Brother",
    category: "consumables",
    categoryLabel: CONSUMABLES,
    description:
      "DK continuous and die-cut paper label rolls for the Brother QL desktop label printer range.",
    longDescription:
      "Brother DK rolls supply the QL series with continuous-length and die-cut labels for address, shipping, filing and asset labelling. Continuous rolls such as the DK-22210 let you print any label length up to the roll capacity.",
    image: "/products/brother-dk-roll.jpg",
    features: [
      "Continuous length and die-cut options",
      "DK-22210 continuous paper tape, black on white",
      "Up to 30.48 m per continuous roll",
      "Fits Brother QL-800, QL-810W and QL-820NWB",
      "Clean, jam-free automatic cutting",
    ],
    specs: {
      Type: "DK continuous / die-cut label roll",
      Example: "DK-22210 continuous length paper tape (black on white)",
      Compatibility: "Brother QL series label printers",
    },
    featured: false,
  },
  {
    id: "max-ink-ribbon",
    name: "MAX LETATWIN Ink Ribbon",
    brand: "MAX",
    category: "consumables",
    categoryLabel: CONSUMABLES,
    description:
      "Genuine MAX LETATWIN black ink ribbon for LM series ferrule and tube printing machines.",
    longDescription:
      "Genuine MAX LETATWIN ink ribbons are engineered for the LM series of tube and ferrule printers. Supplied in packs of five, they produce sharp, durable black markings on PVC tube, heat shrink tube and tape.",
    image: "/products/max-ink-ribbon.jpg",
    features: [
      "Genuine MAX LETATWIN consumable",
      "Colour: black",
      "Supplied in packs of 5",
      "For LETATWIN LM series machines",
      "Durable, smudge-resistant marking",
    ],
    specs: {
      Type: "Thermal transfer ink ribbon",
      Colour: "Black",
      "Pack Size": "5 pieces",
      Compatibility: "MAX LETATWIN LM series lettering machines",
    },
    featured: false,
  },
  {
    id: "supvan-ink-ribbon",
    name: "SUPVAN Ink Ribbon",
    brand: "SUPVAN",
    category: "consumables",
    categoryLabel: CONSUMABLES,
    description:
      "SUPVAN thermal transfer ink ribbon cartridges in black, white and red for TP series tube printers.",
    longDescription:
      "SUPVAN ink ribbon cartridges are made for the TP-70E and TP-76E tube printers. Choose black (100 m), white (80 m) or red (80 m) to suit your cable identification standard, with reliable ribbon tightening for clean prints.",
    image: "/products/supvan-ink-ribbon.jpg",
    features: [
      "Available in black, white and red",
      "Ribbon lengths: black 100 m, white 80 m, red 80 m",
      "Drop-in cartridge design",
      "Automatic ribbon tightening compatible",
      "For SUPVAN TP-70E and TP-76E",
    ],
    specs: {
      Type: "Thermal transfer ink ribbon cartridge",
      Colours: "Black, White, Red",
      Length: "Black 100 m; White 80 m; Red 80 m",
      Compatibility: "SUPVAN TP-70E, TP-76E",
    },
    featured: false,
  },
  {
    id: "supvan-label-tape",
    name: "SUPVAN Label Tape",
    brand: "SUPVAN",
    category: "consumables",
    categoryLabel: CONSUMABLES,
    description:
      "SUPVAN label tape cassettes in 6, 9 and 12 mm widths for TP series tube and label printers.",
    longDescription:
      "SUPVAN label tape cassettes provide durable adhesive labels for panels, terminals and equipment. Supplied in 6, 9 and 12 mm widths, they load directly into the TP-70E and TP-76E for switching between tube and label printing.",
    image: "/products/supvan-label-tape.jpg",
    features: [
      "Widths: 6 mm, 9 mm and 12 mm",
      "Durable adhesive backing",
      "Quick-change cassette",
      "For SUPVAN TP-70E and TP-76E",
      "White and other colour options",
    ],
    specs: {
      Type: "Label tape cassette",
      Widths: "6 mm, 9 mm, 12 mm",
      Compatibility: "SUPVAN TP-70E, TP-76E",
    },
    featured: false,
  },
  {
    id: "casio-label-tapes",
    name: "CASIO Label Tapes",
    brand: "CASIO",
    category: "consumables",
    categoryLabel: CONSUMABLES,
    description:
      "CASIO XR tape cartridges up to 24 mm wide in multiple colour combinations for EZ-Label printers.",
    longDescription:
      "CASIO XR series tape cartridges fit the EZ-Label printer range including the KL-820 and KL-HD1. Available in widths up to 24 mm and colour combinations such as black on yellow, each cartridge carries 8 m of durable adhesive tape.",
    image: "/products/casio-label-tape.jpg",
    features: [
      "XR series tape cartridges",
      "Widths up to 24 mm, 8 m length",
      "Colour options including black on yellow",
      "Strong adhesive backing",
      "For CASIO EZ-Label printers",
    ],
    specs: {
      Type: "XR tape cartridge",
      Widths: "6, 9, 12, 18, 24 mm",
      Length: "8 m",
      Compatibility: "CASIO KL-820, KL-HD1 and other EZ-Label printers",
    },
    featured: false,
  },
  {
    id: "puty-ink-ribbon",
    name: "PUTY Ink Ribbon",
    brand: "PUTY",
    category: "consumables",
    categoryLabel: CONSUMABLES,
    description:
      "PUTY PT-IR50BH black ink ribbon, 12 mm x 110 m, also compatible with MAX LM-5XX machines.",
    longDescription:
      "PUTY PT-IR50BH ink ribbons deliver long-run black printing for tube and ferrule marking. Each 12 mm x 110 m ribbon fits PUTY machines and is also compatible with MAX LM-5XX series cable marking machines.",
    image: "/products/puty-ink-ribbon.jpg",
    features: [
      "Model PT-IR50BH, colour black",
      "12 mm width x 110 m length",
      "Long run capacity for batch marking",
      "Fits PUTY tube printers",
      "Also compatible with MAX LM-5XX machines",
    ],
    specs: {
      Model: "PT-IR50BH",
      Colour: "Black",
      Size: "12 mm x 110 m",
      Compatibility: "PUTY tube printers; MAX LM-5XX cable marking machines",
    },
    featured: false,
  },
  {
    id: "canon-ink-ribbon",
    name: "Canon Ink Ribbon Cassette",
    brand: "Canon",
    category: "consumables",
    categoryLabel: CONSUMABLES,
    description:
      "Genuine Canon ink ribbon cassette for MK series cable ID printers.",
    longDescription:
      "Genuine Canon ink ribbon cassettes are designed for the MK-3000 and MK-5000 cable ID printers. The sealed cassette loads in seconds and produces sharp, durable 300 dpi markings on tube and tape media.",
    image: "/products/canon-ink-ribbon.jpg",
    features: [
      "Genuine Canon consumable",
      "For MK series cable ID printers",
      "Sealed drop-in cassette",
      "Sharp 300 dpi output",
      "Durable, abrasion-resistant marking",
    ],
    specs: {
      Type: "Ink ribbon cassette",
      Colour: "Black",
      Compatibility: "Canon MK-3000, MK-5000 cable ID printers",
    },
    featured: false,
  },
  {
    id: "canon-label-tape",
    name: "Canon Label Tape Cassette",
    brand: "Canon",
    category: "consumables",
    categoryLabel: CONSUMABLES,
    description:
      "Canon label tape cassettes in 6, 9 and 12 mm widths for MK series cable ID printers.",
    longDescription:
      "Canon label tape cassettes supply adhesive labels for the MK-3000 and MK-5000 cable ID printers. Available in 6, 9 and 12 mm widths and several colours, including yellow for high-visibility electrical identification.",
    image: "/products/canon-label-tape.jpg",
    features: [
      "Widths: 6 mm, 9 mm and 12 mm",
      "Colour options including yellow and white",
      "Genuine Canon consumable",
      "Quick-load cassette",
      "For MK-3000 and MK-5000",
    ],
    specs: {
      Type: "Label tape cassette",
      Widths: "6 mm, 9 mm, 12 mm",
      Compatibility: "Canon MK-3000, MK-5000 cable ID printers",
    },
    featured: false,
  },
  {
    id: "ferrule-printing-sleeves",
    name: "Ferrule Printing Sleeves (PVC Tube)",
    brand: "A Leaf",
    category: "consumables",
    categoryLabel: CONSUMABLES,
    description:
      "Soft PVC ferrule sleeves in yellow and white for wire end marking on ferrule printing machines.",
    longDescription:
      "Flexible PVC ferrule printing sleeves used for wire and cable end identification in control panels and wire harnesses. Supplied in continuous coils that feed directly into MAX, Canon, SUPVAN and PUTY tube printers, giving clean, permanent thermal transfer marking on every conductor.",
    image: "/products/ferrule-printing-sleeves.jpg",
    features: [
      "Soft PVC tubing for wire end ferrule marking",
      "Available in yellow and white",
      "Compatible with MAX, Canon, SUPVAN and PUTY tube printers",
      "Supplied in continuous coils for automatic feeding",
      "Smooth surface for sharp, smudge-free print",
    ],
    specs: {
      Type: "PVC ferrule printing sleeve",
      Colours: "Yellow, White",
      Application: "Wire and cable end identification",
      Compatibility: "Ferrule / tube printing machines",
    },
    featured: false,
  },
  {
    id: "heat-shrink-sleeves",
    name: "Heat Shrink Sleeves",
    brand: "A Leaf",
    category: "consumables",
    categoryLabel: CONSUMABLES,
    description:
      "Printable heat shrink sleeves in assorted colours and diameters for insulation and cable identification.",
    longDescription:
      "Heat shrink sleeves provide insulation, strain relief and permanent identification for cables and terminals. Available in multiple diameters and colours, and printable on tube printers such as the MAX LETATWIN, Canon MK series, SUPVAN and PUTY machines for durable marking that will not rub off.",
    image: "/products/heat-shrink-sleeves.jpg",
    features: [
      "Assorted colours: black, red, yellow, blue and more",
      "Wide range of diameters for cables and terminals",
      "Printable on ferrule and tube printing machines",
      "Shrinks tightly for insulation and strain relief",
      "Flame retardant and abrasion resistant",
    ],
    specs: {
      Type: "Heat shrink sleeve / tube",
      Colours: "Black, Red, Yellow, Blue and assorted",
      Application: "Insulation and cable identification",
      Compatibility: "Tube printing machines and hot air guns",
    },
    featured: false,
  },
  {
    id: "cable-ties",
    name: "Cable Ties (Nylon)",
    brand: "A Leaf",
    category: "consumables",
    categoryLabel: CONSUMABLES,
    description:
      "Nylon cable ties in black and white, available in a full range of lengths and widths for cable bundling.",
    longDescription:
      "Self-locking nylon cable ties for bundling, routing and securing cables in panels, machinery and installations. Supplied in black (UV resistant) and natural white in an extensive range of lengths and widths, in bulk packs for contractors and OEMs.",
    image: "/products/cable-ties.jpg",
    features: [
      "Self-locking nylon 66 construction",
      "Black (UV resistant) and natural white",
      "Wide range of lengths and widths",
      "High tensile strength for secure bundling",
      "Bulk packs available",
    ],
    specs: {
      Material: "Nylon 66",
      Colours: "Black, Natural white",
      Application: "Cable bundling, routing and securing",
      Packing: "Bulk packs",
    },
    featured: false,
  },

  /* ---------------- Agricultural products (SAMSON) ---------------- */
  {
    id: "samson-battery-sprayer-green",
    name: "SAMSON Battery Operated Knapsack Sprayer",
    brand: "SAMSON",
    category: "agriculture",
    categoryLabel: AGRICULTURE,
    description:
      "Rechargeable battery knapsack sprayer with charger, nozzle set and padded shoulder straps.",
    longDescription:
      "A battery operated knapsack sprayer from SAMSON Agro Equipment for spraying pesticides, herbicides and disinfectants. The rechargeable battery gives long, effortless spraying without manual pumping, and the kit is supplied complete with charger, spray lance, assorted nozzles and padded shoulder straps.",
    image: "/products/samson-battery-sprayer-green.jpg",
    features: [
      "Rechargeable battery operation - no manual pumping",
      "Complete with charger and spray lance",
      "Assorted nozzle set included",
      "Padded adjustable shoulder straps",
      "Durable moulded chemical-resistant tank",
    ],
    specs: {
      Type: "Battery operated knapsack sprayer",
      Operation: "Rechargeable battery",
      Accessories: "Charger, lance, nozzle set, shoulder straps",
      Application: "Agriculture, horticulture, disinfection",
    },
    featured: false,
  },
  {
    id: "samson-battery-sprayer-yellow",
    name: "SAMSON Battery cum Manual Knapsack Sprayer",
    brand: "SAMSON",
    category: "agriculture",
    categoryLabel: AGRICULTURE,
    description:
      "Dual-mode knapsack sprayer that works on rechargeable battery or manual hand lever operation.",
    longDescription:
      "This SAMSON knapsack sprayer can be operated on its rechargeable battery or switched to the manual hand lever pump, so spraying continues even when the battery runs down. Supplied with charger, spray lance, nozzle set and shoulder straps for comfortable all-day field use.",
    image: "/products/samson-battery-sprayer-yellow.jpg",
    features: [
      "Battery and manual hand lever operation",
      "Continues working when battery is discharged",
      "Charger, lance and nozzle set included",
      "Padded adjustable shoulder straps",
      "Chemical-resistant moulded tank",
    ],
    specs: {
      Type: "Battery cum manual knapsack sprayer",
      Operation: "Rechargeable battery or manual lever",
      Accessories: "Charger, lance, nozzle set, shoulder straps",
      Application: "Agriculture, horticulture, disinfection",
    },
    featured: false,
  },
  {
    id: "samson-sam-708",
    name: "SAMSON SAM-708 (4 Stroke) Knapsack Power Sprayer",
    brand: "SAMSON",
    category: "agriculture",
    categoryLabel: AGRICULTURE,
    description:
      "Petrol 4-stroke engine knapsack power sprayer for high-pressure spraying over large areas.",
    longDescription:
      "The SAMSON SAM-708 knapsack power sprayer is driven by a 4-stroke petrol engine for high-pressure, high-volume spraying in orchards, plantations and field crops. The back-mounted tank and engine assembly delivers strong, consistent pressure with lower fuel consumption and less smoke than 2-stroke units.",
    image: "/products/samson-sam-708.jpg",
    features: [
      "4-stroke petrol engine for cleaner, quieter running",
      "High-pressure spraying for tall crops and orchards",
      "Back-mounted knapsack design",
      "Robust engine frame and pump assembly",
      "Suitable for large area coverage",
    ],
    specs: {
      Model: "SAM-708 (4 Stroke)",
      Type: "Knapsack power sprayer",
      Engine: "4-stroke petrol engine",
      Application: "Field crops, orchards and plantations",
    },
    featured: false,
  },
  {
    id: "samson-sam-pt-808",
    name: "SAMSON SAM-PT 808 Knapsack Power Sprayer",
    brand: "SAMSON",
    category: "agriculture",
    categoryLabel: AGRICULTURE,
    description:
      "Engine-driven power sprayer unit with brass triple-piston pump mounted in a protective frame.",
    longDescription:
      "The SAMSON SAM-PT 808 is an engine-driven power sprayer unit built around a heavy-duty brass triple-piston pump, mounted in a tubular protective frame for site handling. It delivers the pressure required for spraying tall crops, orchards, pest control and washdown duties.",
    image: "/products/samson-sam-pt-808.jpg",
    features: [
      "Brass triple-piston high-pressure pump",
      "Petrol engine driven",
      "Tubular protective carry frame",
      "Suitable for spraying and washdown duties",
      "Heavy-duty construction for continuous use",
    ],
    specs: {
      Model: "SAM-PT 808",
      Type: "Knapsack power sprayer unit",
      Pump: "Brass triple-piston high-pressure pump",
      Application: "Orchards, plantations, pest control, washdown",
    },
    featured: false,
  },
  {
    id: "samson-fogging-machine",
    name: "SAMSON Thermal Fogging Machine",
    brand: "SAMSON",
    category: "agriculture",
    categoryLabel: AGRICULTURE,
    description:
      "Pulse-jet thermal fogger with twin chemical tanks for pest control and large-area disinfection.",
    longDescription:
      "A pulse-jet thermal fogging machine that converts chemical solution into a dense fog for rapid coverage of large areas. Used for mosquito and insect control, warehouse and poultry-shed treatment, greenhouse spraying and public health disinfection. Twin tanks allow chemical and fuel to be carried together for extended running.",
    image: "/products/samson-fogging-machine.jpg",
    features: [
      "Pulse-jet thermal fogging for dense fog output",
      "Twin tank design for extended operation",
      "Stainless steel barrel with protective guard",
      "Rapid coverage of large indoor and outdoor areas",
      "For mosquito control, disinfection and crop protection",
    ],
    specs: {
      Type: "Thermal fogging machine",
      Technology: "Pulse-jet",
      Application: "Pest control, disinfection, greenhouse and poultry sheds",
      Operation: "Petrol fuelled, portable",
    },
    featured: false,
  },
  {
    id: "samson-mini-fogger",
    name: "SAMSON Portable Mini Fogging Machine",
    brand: "SAMSON",
    category: "agriculture",
    categoryLabel: AGRICULTURE,
    description:
      "Compact hand-held fogger for killing mosquitoes, flies, cockroaches and other insects indoors.",
    longDescription:
      "A compact, light hand-held fogging machine designed for indoor and small-area treatment. Effective against mosquitoes, black flies, deer flies, cockroaches, moths and wasps, it is easy to carry and operate around homes, shops, offices, godowns and cattle sheds.",
    image: "/products/samson-mini-fogger.jpg",
    features: [
      "Compact, light hand-held design",
      "Kills mosquitoes, flies, cockroaches, moths and wasps",
      "Ideal for indoor and small-area treatment",
      "Simple operation with detachable chemical bottle",
      "Supplied in retail packaging",
    ],
    specs: {
      Type: "Portable mini fogging machine",
      Application: "Homes, shops, godowns, cattle sheds",
      Targets: "Mosquitoes, black flies, deer flies, cockroaches, moths, wasps",
      Handling: "Hand-held, portable",
    },
    featured: false,
  },
  {
    id: "samson-htp-pump",
    name: "SAMSON HTP Power Sprayer Pump",
    brand: "SAMSON",
    category: "agriculture",
    categoryLabel: AGRICULTURE,
    description:
      "High-pressure triple-piston HTP pump with pressure gauge and pulley drive for sprayer systems.",
    longDescription:
      "A high-tech pressure (HTP) triple-piston sprayer pump with brass head, pressure gauge and regulator. Pulley driven from an electric motor or engine, it is used for orchard and field spraying, whitewashing and high-pressure washing installations.",
    image: "/products/samson-htp-pump.jpg",
    features: [
      "Triple-piston brass pump head",
      "Built-in pressure gauge and regulator",
      "Pulley drive for motor or engine coupling",
      "Stainless pressure chamber",
      "For orchard spraying, whitewashing and washing",
    ],
    specs: {
      Type: "HTP triple-piston power sprayer pump",
      Drive: "Pulley driven by electric motor or engine",
      Fittings: "Pressure gauge, regulator, pressure chamber",
      Application: "Orchard and field spraying, high-pressure washing",
    },
    featured: false,
  },
  {
    id: "samson-sprayer-spares",
    name: "SAMSON Sprayer Spares & Accessories",
    brand: "SAMSON",
    category: "agriculture",
    categoryLabel: AGRICULTURE,
    description:
      "Replacement nozzles, discs, seals, trolley frames and fittings for SAMSON sprayers and foggers.",
    longDescription:
      "A full range of genuine spares and accessories to keep SAMSON sprayers and fogging machines in service, including spray nozzles, nozzle discs, seals and washers, hose fittings, lances and trolley frames. Stocked and supplied by A Leaf Electricals & Electronics.",
    image: "/products/samson-sprayer-spares.jpg",
    features: [
      "Spray nozzles and nozzle discs",
      "Seals, washers and O-rings",
      "Hose fittings and spray lances",
      "Trolley frames and mounting hardware",
      "Genuine SAMSON replacement parts",
    ],
    specs: {
      Type: "Spares and accessories",
      Includes: "Nozzles, discs, seals, fittings, lances, trolley frames",
      Compatibility: "SAMSON sprayers and fogging machines",
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

export const brands = Array.from(new Set(products.map((p) => p.brand))).sort();
