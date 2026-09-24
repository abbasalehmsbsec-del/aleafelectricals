import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Minus, Scale } from "lucide-react";
import { products } from "../lib/products";
import { Reveal } from "./Reveal";

interface CompareRow {
  label: string;
  values: (string | boolean)[];
  best?: number[]; // indexes highlighted as class-leading
}

interface CompareMachine {
  id: string;
  shortName: string;
  tagline: string;
  rows: CompareRow["values"]; // aligned with ROWS
}

const ROW_LABELS = [
  "Print Speed",
  "Tube / Ferrule Range",
  "Print Resolution",
  "PC Connectivity",
  "Cutter",
  "Media Types",
  "Display",
  "Memory",
  "Power",
  "Weight",
];

const MACHINES: CompareMachine[] = [
  {
    id: "max-lm-550a-pc",
    shortName: "MAX LM-550A",
    tagline: "The panel-shop workhorse",
    rows: [
      "40 mm/sec",
      "PVC tube Ø2.5–6.5 mm (≈0.5–10 mm² wire)",
      "300 dpi thermal transfer",
      true,
      "Auto half cut + manual full cut",
      "PVC tube, heat shrink, tape",
      "Backlit LCD 64×160 px",
      "250,000 chars / 50 files",
      "AC adapter + 4×AA battery",
      "2.4 kg",
    ],
  },
  {
    id: "canon-mk-5000",
    shortName: "Canon MK-5000",
    tagline: "Battery-powered flexibility",
    rows: [
      "40 mm/sec (high mode)",
      "PVC tube Ø2.5–6.5 mm (≈0.5–10 mm² wire)",
      "300 dpi thermal transfer",
      true,
      "Auto half cut",
      "PVC tube, heat shrink, 6/9/12 mm tape",
      "LCD display",
      "Internal file memory",
      "AC adapter + optional rechargeable battery",
      "≈2.1 kg",
    ],
  },
  {
    id: "supvan-tp-76e",
    shortName: "SUPVAN TP-76E",
    tagline: "Value PC-connected option",
    rows: [
      "35 mm/sec",
      "PVC tube Ø2.5–6.0 mm (≈0.5–10 mm² wire)",
      "300 dpi thermal transfer",
      true,
      "Auto half cut",
      "PVC tube, heat shrink, 6/9/12 mm tape",
      "Double-column LCD",
      "64 files",
      "AC adapter",
      "≈2.3 kg",
    ],
  },
  {
    id: "brother-pt-e850tkw",
    shortName: "Brother PT-E850TKW",
    tagline: "Fastest — tube + 36 mm labels",
    rows: [
      "60 mm/sec",
      "Heat shrink tube Ø3.5–10.5 mm (HSe)",
      "360 dpi thermal transfer",
      true,
      "Auto full & half cut (durable blade)",
      "Heat shrink tube + TZe tape up to 36 mm",
      "Backlit graphic LCD",
      "PC-linked + onboard templates",
      "AC adapter + optional battery base",
      "≈3.9 kg",
    ],
  },
];

// indexes of class-leading values per row (for highlight)
const BEST: number[][] = [
  [3], // speed
  [0, 1, 2], // tube range
  [3], // resolution
  [0, 1, 2, 3], // PC connectivity
  [3], // cutter
  [3], // media
  [],
  [0],
  [1, 3],
  [1],
];

function Cell({ value, highlight }: { value: string | boolean; highlight: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium">
        <Check className="h-4 w-4 text-emerald-500" /> Yes (USB)
      </span>
    ) : (
      <Minus className="h-4 w-4 text-muted-foreground" />
    );
  }
  return (
    <span
      className={
        highlight
          ? "text-sm font-semibold text-foreground"
          : "text-sm text-muted-foreground"
      }
    >
      {value}
    </span>
  );
}

export function MachineCompare() {
  const [selected, setSelected] = useState<string[]>(MACHINES.map((m) => m.id));

  const active = useMemo(
    () => MACHINES.filter((m) => selected.includes(m.id)),
    [selected]
  );

  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id)
        ? prev.length > 2
          ? prev.filter((x) => x !== id)
          : prev
        : prev.length < 4
          ? [...prev, id]
          : prev
    );

  const productById = useMemo(
    () => new Map(products.map((p) => [p.id, p])),
    []
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Scale className="h-4 w-4" /> Compare before you buy
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ferrule Machine Comparison
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Side-by-side specs of the four machines panel shops ask about
              most. Tap a machine to add or remove it from the table.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mb-6 flex flex-wrap gap-2">
          {MACHINES.map((m) => {
            const on = selected.includes(m.id);
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => toggle(m.id)}
                aria-pressed={on}
                className={
                  on
                    ? "rounded-full border border-primary/60 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition"
                    : "rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                }
              >
                {m.shortName}
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card/60 shadow-lg">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border/60">
                <th className="w-44 p-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Specification
                </th>
                {active.map((m) => (
                  <th key={m.id} className="p-4 align-top">
                    <Link
                      to="/products/$productId"
                      params={{ productId: m.id }}
                      className="group block"
                    >
                      <span className="block text-base font-bold text-foreground group-hover:text-primary">
                        {m.shortName}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {m.tagline}
                      </span>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROW_LABELS.map((label, r) => (
                <tr
                  key={label}
                  className="border-b border-border/40 last:border-0 odd:bg-background/40"
                >
                  <td className="p-4 text-sm font-medium text-foreground">
                    {label}
                  </td>
                  {active.map((m) => {
                    const globalIdx = MACHINES.findIndex((x) => x.id === m.id);
                    return (
                      <td key={m.id} className="p-4">
                        <Cell
                          value={m.rows[r]}
                          highlight={BEST[r]?.includes(globalIdx) ?? false}
                        />
                      </td>
                    );
                  })}
                </tr>
              ))}
              <tr>
                <td className="p-4" />
                {active.map((m) => {
                  const p = productById.get(m.id);
                  return (
                    <td key={m.id} className="p-4">
                      <Link
                        to="/products/$productId"
                        params={{ productId: m.id }}
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        View {p?.brand ?? ""} details →
                      </Link>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Bold values are class-leading for that row. Tube-to-wire size
          equivalence is approximate — confirm your exact ferrule and wire
          cross-section with us before ordering. Specifications are from
          manufacturer datasheets; call{" "}
          <a href="tel:+919177752786" className="text-primary hover:underline">
            +91 91777 52786
          </a>{" "}
          for a recommendation for your panel shop.
        </p>
      </Reveal>
    </section>
  );
}
