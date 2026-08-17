import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { products, brands, type ProductCategory } from "../lib/products";
import { ChevronRight, Filter } from "lucide-react";
import { Reveal } from "../components/Reveal";

const SITE_URL = "https://aleafelectricals.lovable.app";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products | A Leaf Electricals & Electronics" },
      {
        name: "description",
        content:
          "Browse ferrule printing machines, label printers and consumables from Brother, MAX, Canon, CASIO, DYMO, SUPVAN and PUTY.",
      },
      {
        property: "og:title",
        content: "Products | A Leaf Electricals & Electronics",
      },
      {
        property: "og:description",
        content:
          "Browse ferrule printing machines, label printers and consumables from Brother, MAX, Canon, CASIO, DYMO, SUPVAN and PUTY.",
      },
      { property: "og:url", content: `${SITE_URL}/products` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Products | A Leaf Electricals & Electronics",
          url: `${SITE_URL}/products`,
          description:
            "Catalogue of ferrule printing machines, industrial label printers, consumables and agricultural spraying equipment.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: products.length,
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: `${SITE_URL}/products/${p.id}`,
            })),
          },
        }),
      },
    ],
  }),
  component: ProductsPage,
});

const filters: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "All Products" },
  { key: "machines", label: "Ferrule Machines" },
  { key: "printers", label: "Label Printers" },
  { key: "consumables", label: "Consumables" },
  { key: "agriculture", label: "Agricultural Equipment" },

];

function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<ProductCategory | "all">("all");
  const [activeBrand, setActiveBrand] = useState<string>("all");

  const filtered = products.filter(
    (p) =>
      (activeFilter === "all" || p.category === activeFilter) &&
      (activeBrand === "all" || p.brand === activeBrand),
  );


  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Our Products
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Precision-engineered equipment and supplies for industrial marking, cable management, and wire harness operations.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeFilter === f.key
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Brand filters */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {["all", ...brands].map((b) => (
          <button
            key={b}
            onClick={() => setActiveBrand(b)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              activeBrand === b
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {b === "all" ? "All Brands" : b}
          </button>
        ))}
      </div>




      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, i) => (
          <Reveal key={product.id} delay={(i % 3) * 80}>
          <div
            className="glass glow-hover group h-full overflow-hidden rounded-2xl"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2">
                <span className="rounded border border-border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground">
                  {product.brand}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {product.categoryLabel}
                </span>
              </div>

              <h2 className="mt-1 font-display text-lg font-semibold text-foreground">
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

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-muted-foreground">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
