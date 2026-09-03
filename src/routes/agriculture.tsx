import { createFileRoute, Link } from "@tanstack/react-router";
import { getProductsByCategory } from "../lib/products";
import { Sprout, ChevronRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

const SITE_URL = "https://aleafelectricals.lovable.app";

export const Route = createFileRoute("/agriculture")({
  head: () => ({
    meta: [
      {
        title: "Agricultural Sprayers & Equipment | A Leaf Electricals",
      },
      {
        name: "description",
        content:
          "SAMSON knapsack sprayers, power sprayers, fogging machines, HTP pumps and genuine spares — dealer in Secunderabad, Hyderabad, Telangana.",
      },
      {
        property: "og:title",
        content: "Agricultural Sprayers & Equipment | A Leaf Electricals",
      },
      {
        property: "og:description",
        content:
          "SAMSON knapsack sprayers, power sprayers, fogging machines, HTP pumps and genuine spares in Secunderabad, Hyderabad.",
      },
      { property: "og:url", content: `${SITE_URL}/agriculture` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/agriculture` }],
  }),
  component: AgriculturePage,
});

function AgriculturePage() {
  const products = getProductsByCategory("agriculture");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          <Sprout className="h-3.5 w-3.5" />
          SAMSON Agro Equipments
        </span>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Agricultural Equipment
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Knapsack and power sprayers, fogging machines, HTP pumps and genuine
          spares for farms, pest control and sanitation work.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={(i % 3) * 80}>
            <div className="glass glow-hover group h-full overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="rounded border border-border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground">
                  {product.brand}
                </span>
                <h2 className="mt-2 font-display text-lg font-semibold text-foreground">
                  {product.name}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Link
                    to="/products/$productId"
                    params={{ productId: product.id }}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    View Details <ChevronRight className="h-3 w-3" />
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="hero-aura relative mt-16 overflow-hidden rounded-3xl border border-border/60 px-6 py-12 text-center sm:px-12">
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Need Spares or Bulk Supply?
          </h2>
          <p className="mt-3 text-muted-foreground">
            We stock genuine SAMSON spares and offer dealer pricing for bulk
            orders across Telangana.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
          >
            Contact Us
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
