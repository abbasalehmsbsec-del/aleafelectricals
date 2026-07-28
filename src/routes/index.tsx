import { createFileRoute, Link } from "@tanstack/react-router";
import {
  getFeaturedProducts,
  getProductsByCategory,
  type ProductCategory,
} from "../lib/products";
import {
  Printer,
  Shield,
  HeadphonesIcon,
  Truck,
  ChevronRight,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Leaf Electricals & Electronics | Ferrule Printing & Labeling Solutions" },
      {
        name: "description",
        content:
          "Leading supplier of ferrule printing machines, industrial label printers, and consumables for wire harness and cable management.",
      },
      {
        property: "og:title",
        content: "A Leaf Electricals & Electronics | Ferrule Printing & Labeling Solutions",
      },
      {
        property: "og:description",
        content:
          "Leading supplier of ferrule printing machines, industrial label printers, and consumables for wire harness and cable management.",
      },
    ],
  }),
  component: HomePage,
});

const categories: { key: ProductCategory; title: string; description: string; icon: typeof Printer }[] = [
  {
    key: "machines",
    title: "Ferrule Printing Machines",
    description: "Automated and semi-automatic systems for precise ferrule marking on wire end sleeves.",
    icon: Printer,
  },
  {
    key: "printers",
    title: "Label Printers",
    description: "Desktop and portable thermal transfer printers for cable labels, asset tags, and safety signage.",
    icon: Zap,
  },
  {
    key: "consumables",
    title: "Consumables & Accessories",
    description: "Ferrule sleeves, thermal ribbons, label stock, and replacement parts to keep operations running.",
    icon: ChevronRight,
  },
];


function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Precision Marking
              <br />
              for{" "}
              <span className="text-primary">Industrial</span> Systems
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Ferrule printing machines, industrial label printers, and consumables trusted by electrical contractors, OEMs, and wire harness manufacturers worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Browse Products
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-accent"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What We Offer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Complete solutions for wire harness marking, cable identification, and industrial labeling.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const count = getProductsByCategory(cat.key).length;
            const Icon = cat.icon;
            return (
              <Link
                key={cat.key}
                to="/products"
                className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-card/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                  {count} products <ChevronRight className="h-3 w-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>


      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-2 text-muted-foreground">
              Our most popular solutions for industrial marking.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View all products <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
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
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    View Details
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
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 px-6 py-16 text-center sm:px-12">
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Upgrade Your Marking Process?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Get a personalized quote, schedule a demo, or speak with our technical sales team.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contact Us
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-accent"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
