import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { products, type ProductCategory } from "../lib/products";
import { ChevronRight, Filter } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | MarkPro Industrial" },
      {
        name: "description",
        content:
          "Browse our full range of ferrule printing machines, industrial label printers, and consumables.",
      },
      {
        property: "og:title",
        content: "Products | MarkPro Industrial",
      },
      {
        property: "og:description",
        content:
          "Browse our full range of ferrule printing machines, industrial label printers, and consumables.",
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
];

function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<ProductCategory | "all">("all");

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

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

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
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
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                {product.categoryLabel}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                {product.name}
              </h3>
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
                  className="rounded-md bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
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
