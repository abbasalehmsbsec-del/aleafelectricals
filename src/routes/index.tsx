import { createFileRoute, Link } from "@tanstack/react-router";
import {
  getFeaturedProducts,
  getProductsByCategory,
  type ProductCategory,
} from "../lib/products";
import { Printer, ChevronRight, Zap, Sprout, ShieldCheck, Sparkles, Headset } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { CountUp } from "../components/CountUp";
import { TiltBadge } from "../components/TiltBadge";
import { Testimonials } from "../components/Testimonials";
import { QuoteBuilder } from "../components/QuoteBuilder";
import { BrandMarquee } from "../components/BrandMarquee";

const SITE_URL = "https://aleafelectricals.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ferrule Printers & Label Machines | A Leaf" },
      {
        name: "description",
        content:
          "Leading supplier of ferrule printing machines, industrial label printers, and consumables for wire harness and cable management.",
      },
      {
        property: "og:title",
        content: "Ferrule Printers & Label Machines | A Leaf",
      },
      {
        property: "og:description",
        content:
          "Leading supplier of ferrule printing machines, industrial label printers, and consumables for wire harness and cable management.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "A Leaf Electricals & Electronics",
          url: SITE_URL,
          image: `${SITE_URL}/favicon.png`,
          description:
            "Supplier of ferrule printing machines, industrial label printers, consumables and agricultural spraying equipment.",
          telephone: ["+919177752786", "+916302174819"],
          email: "aleafelectricals@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Behind Anjiyah Complex, Old Bhoiguda",
            addressLocality: "Secunderabad",
            addressRegion: "Telangana",
            postalCode: "500003",
            addressCountry: "IN",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "10:00",
              closes: "20:00",
            },
          ],
        }),
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
    description: "Ferrule sleeves, heat shrink sleeves, thermal ribbons, label tapes and cable ties.",
    icon: ChevronRight,
  },
  {
    key: "agriculture",
    title: "Agricultural Equipment",
    description: "SAMSON knapsack sprayers, power sprayers, fogging machines, HTP pumps and spares.",
    icon: Sprout,
  },
];

const badges = [
  { icon: ShieldCheck, label: "Authorized Dealer" },
  { icon: Sparkles, label: "Genuine Products" },
  { icon: Headset, label: "Expert Support" },
];







const metrics = [
  { to: 40, suffix: "+", label: "Product models stocked" },
  { to: 7, suffix: "", label: "Global brands represented" },
  { to: 15, suffix: "+", label: "Years serving industry" },
  { to: 24, suffix: "h", label: "Typical quote turnaround" },
];

function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="hero-aura relative overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-40" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url(/hero-bg.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <Reveal>
              <TiltBadge>
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Authorized dealer · Brother · MAX · Canon · CASIO
              </TiltBadge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Precision Marking
                <br />
                for <span className="shimmer-text">Industrial Systems</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Ferrule printing machines, industrial label printers, and consumables trusted by electrical contractors, OEMs, and wire harness manufacturers.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                >
                  Browse Products
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <a
                  href="#quote"
                  className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
                >
                  Build a Quote
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-y border-border/60 bg-card/60">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.label} delay={i * 90}>
                <div className="flex items-center justify-center gap-3 text-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-base font-bold text-foreground">
                    {b.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80}>
              <div className="glass glow-hover rounded-2xl p-6 text-center">
                <p className="font-display text-4xl font-extrabold text-primary">
                  <CountUp to={m.to} suffix={m.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Categories — bento */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What We Offer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Complete solutions for wire harness marking, cable identification, and industrial labeling.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => {
            const count = getProductsByCategory(cat.key).length;
            const Icon = cat.icon;
            return (
              <Reveal key={cat.key} delay={i * 80} className={i === 0 ? "sm:col-span-2" : ""}>
                <Link
                  to="/products"
                  className="glass glow-hover group flex h-full flex-col rounded-2xl p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-primary group-hover:underline">
                    {count} products <ChevronRight className="h-3 w-3" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
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
          {featured.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 90}>
              <div className="glass glow-hover group h-full overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Quote builder */}
      <section id="quote" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Build Your Quote
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Pick a category, tell us what you need, and get a tailored price in one business day.
          </p>
        </div>
        <div className="mt-10">
          <QuoteBuilder />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="hero-aura relative overflow-hidden rounded-3xl border border-border/60 px-6 py-16 text-center sm:px-12">
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
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
              >
                Contact Us
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
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
