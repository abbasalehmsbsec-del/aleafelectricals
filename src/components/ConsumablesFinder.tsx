import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowUpRight, Cable, Check, Info, Ruler, Search } from "lucide-react";
import { products } from "../lib/products";

const machines = products.filter(
  (product) => product.category === "machines" || product.category === "printers",
);

const compatibility: Record<
  string,
  { productIds: string[]; note: string }
> = {
  "max-lm-550a-pc": {
    productIds: [
      "max-ink-ribbon",
      "puty-ink-ribbon",
      "ferrule-printing-sleeves",
      "heat-shrink-sleeves",
    ],
    note: "Ribbons are listed for MAX LM-series machines; sleeves should be matched to the tube diameter and media setting.",
  },
  "canon-mk-3000": {
    productIds: [
      "canon-ink-ribbon",
      "canon-label-tape",
      "ferrule-printing-sleeves",
      "heat-shrink-sleeves",
    ],
    note: "Canon cassettes are listed for the MK series. Confirm tube diameter and sleeve size before ordering generic media.",
  },
  "canon-mk-5000": {
    productIds: [
      "canon-ink-ribbon",
      "canon-label-tape",
      "ferrule-printing-sleeves",
      "heat-shrink-sleeves",
    ],
    note: "Canon cassettes are listed for the MK series. Confirm tube diameter and sleeve size before ordering generic media.",
  },
  "supvan-tp-70e": {
    productIds: [
      "supvan-ink-ribbon",
      "supvan-label-tape",
      "ferrule-printing-sleeves",
      "heat-shrink-sleeves",
    ],
    note: "SUPVAN ribbons and tapes are listed for the TP-70E; PVC and heat-shrink media should match the supported diameter range.",
  },
  "supvan-tp-76e": {
    productIds: [
      "supvan-ink-ribbon",
      "supvan-label-tape",
      "ferrule-printing-sleeves",
      "heat-shrink-sleeves",
    ],
    note: "SUPVAN ribbons and tapes are listed for the TP-76E; PVC and heat-shrink media should match the supported diameter range.",
  },
  "puty-pt-1010": {
    productIds: [
      "puty-ink-ribbon",
      "ferrule-printing-sleeves",
      "heat-shrink-sleeves",
    ],
    note: "The PUTY ribbon is listed for PUTY tube printers. Confirm sleeve diameter and material before ordering.",
  },
  "puty-p-900": {
    productIds: [
      "puty-ink-ribbon",
      "ferrule-printing-sleeves",
      "heat-shrink-sleeves",
    ],
    note: "The PUTY ribbon is listed for PUTY tube printers. Confirm sleeve diameter and material before ordering.",
  },
  "brother-pt-e850tkw": {
    productIds: ["brother-tze-tapes", "heat-shrink-sleeves"],
    note: "Brother TZe and HSe media are listed for this model; the heat-shrink option should be confirmed against the required diameter.",
  },
  "brother-pt-e110vp": {
    productIds: ["brother-tze-tapes", "heat-shrink-sleeves"],
    note: "Brother TZe and HSe media are listed for this model; the heat-shrink option should be confirmed against the required diameter.",
  },
  "brother-pt-e550wvp": {
    productIds: ["brother-tze-tapes", "heat-shrink-sleeves"],
    note: "Brother TZe and HSe media are listed for this model; the heat-shrink option should be confirmed against the required diameter.",
  },
  "brother-pt-d610bt": {
    productIds: ["brother-tze-tapes"],
    note: "Brother TZe tape is the listed media family for this P-touch printer.",
  },
  "brother-pt-h105": {
    productIds: ["brother-tze-tapes"],
    note: "Brother TZe tape is the listed media family for this P-touch printer.",
  },
  "brother-pt-d210": {
    productIds: ["brother-tze-tapes"],
    note: "Brother TZe tape is the listed media family for this P-touch printer.",
  },
  "brother-pt-p900w": {
    productIds: ["brother-tze-tapes"],
    note: "Brother TZe tape is the listed media family for this P-touch printer.",
  },
  "brother-ql-800": {
    productIds: ["brother-dk-rolls"],
    note: "Brother DK rolls are listed for the QL-800 series.",
  },
  "brother-ql-810w": {
    productIds: ["brother-dk-rolls"],
    note: "Brother DK rolls are listed for the QL-810W series.",
  },
  "brother-ql-820nwb": {
    productIds: ["brother-dk-rolls"],
    note: "Brother DK rolls are listed for the QL-820NWB series.",
  },
  "casio-kl-820": {
    productIds: ["casio-label-tapes"],
    note: "CASIO XR tapes are listed for the KL-820 and other EZ-Label printers.",
  },
  "casio-kl-hd1": {
    productIds: ["casio-label-tapes"],
    note: "CASIO XR tapes are listed for the KL-HD1 and other EZ-Label printers.",
  },
};

function needsSizeConfirmation(product: (typeof products)[number]) {
  const name = product.name.toLowerCase();
  const category = product.category.toLowerCase();
  return (
    category === "consumables" &&
    (name.includes("sleeve") ||
      name.includes("tube") ||
      name.includes("heat-shrink") ||
      name.includes("heat shrink") ||
      name.includes("pvc") ||
      name.includes("ferrule"))
  );
}

export function ConsumablesFinder() {
  const [selectedMachineId, setSelectedMachineId] = useState(machines[0]?.id ?? "");
  const selectedMachine = machines.find((machine) => machine.id === selectedMachineId);
  const match = selectedMachine ? compatibility[selectedMachine.id] : undefined;
  const matchedProducts = useMemo(
    () =>
      match
        ? match.productIds
            .map((productId) => products.find((product) => product.id === productId))
            .filter((product): product is (typeof products)[number] => Boolean(product))
        : [],
    [match],
  );

  return (
    <section
      id="consumables-finder"
      className="border-y border-border/60 bg-card/35"
      aria-labelledby="consumables-finder-title"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3 text-primary">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10">
                <Cable className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Compatibility finder
              </span>
            </div>
            <h2
              id="consumables-finder-title"
              className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Find Consumables for Your Machine
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Choose your printer or ferrule machine to see the ribbons, tapes and marking media currently listed for it.
            </p>

            <label
              htmlFor="machine-finder"
              className="mt-8 block text-sm font-semibold text-foreground"
            >
              Select your machine
            </label>
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <select
                id="machine-finder"
                value={selectedMachineId}
                onChange={(event) => setSelectedMachineId(event.target.value)}
                className="block w-full appearance-none rounded-xl border border-border bg-background/70 px-11 py-3.5 text-sm font-medium text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/25"
              >
                {machines.map((machine) => (
                  <option key={machine.id} value={machine.id}>
                    {machine.brand} — {machine.name}
                  </option>
                ))}
              </select>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Matches follow the compatibility information in our product catalogue. For sleeves and tubes, please confirm the required diameter and width with our team.
            </p>
          </div>

          <div aria-live="polite">
            {selectedMachine && match && matchedProducts.length > 0 ? (
              <>
                <div className="mb-5 flex items-start gap-3 rounded-xl border border-amber-500/25 bg-amber-500/10 p-4">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <p className="text-xs leading-relaxed text-foreground/90">
                    <span className="font-semibold">Compatibility disclaimer:</span>{" "}
                    These matches are based on the specifications listed in our catalogue. Ribbons and tapes are model-specific; sleeves, tubes and label rolls require the correct diameter, width and core size. Please verify the exact fit with our team before placing your order.
                  </p>
                </div>

                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Recommended for
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                      {selectedMachine.name}
                    </h3>
                  </div>
                  <span className="shrink-0 text-sm text-muted-foreground">
                    {matchedProducts.length} matches
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {matchedProducts.map((product) => (
                    <Link
                      key={product.id}
                      to="/products/$productId"
                      params={{ productId: product.id }}
                      className="glass glow-hover group relative flex gap-4 rounded-2xl p-4"
                    >
                      {needsSizeConfirmation(product) && (
                        <span className="absolute -right-1.5 -top-2 inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold text-amber-300 shadow-sm backdrop-blur-sm">
                          <Ruler className="h-3 w-3" />
                          Confirm size
                        </span>
                      )}
                      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                          {product.brand}
                        </p>
                        <h4 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-foreground">
                          {product.name}
                        </h4>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-primary">
                          View product <ArrowUpRight className="h-3 w-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-5 flex items-start gap-2 rounded-xl border border-brand/25 bg-brand/5 p-4 text-xs leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{match.note}</span>
                </div>
              </>
            ) : (
              <div className="glass rounded-2xl p-6">
                <div className="mb-4 flex items-start gap-3 rounded-xl border border-amber-500/25 bg-amber-500/10 p-4">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <p className="text-xs leading-relaxed text-foreground/90">
                    <span className="font-semibold">No match found.</span> We do not currently list a dedicated consumable for this model. Contact us to confirm the correct ribbon, tape or sleeve size before ordering.
                  </p>
                </div>
                <p className="text-sm font-semibold text-foreground">
                  No dedicated consumable is listed for this model yet.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Our team can confirm the correct ribbon or tape before you order.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Ask for a match <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}