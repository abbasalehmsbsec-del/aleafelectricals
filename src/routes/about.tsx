import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Factory, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | MarkPro Industrial" },
      {
        name: "description",
        content:
          "Learn about MarkPro Industrial — our mission, expertise, and commitment to precision marking solutions.",
      },
      {
        property: "og:title",
        content: "About Us | MarkPro Industrial",
      },
      {
        property: "og:description",
        content:
          "Learn about MarkPro Industrial — our mission, expertise, and commitment to precision marking solutions.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { icon: Factory, value: "15+", label: "Years in Industry" },
  { icon: Users, value: "2,400+", label: "Clients Worldwide" },
  { icon: Award, value: "98%", label: "Customer Satisfaction" },
  { icon: Globe, value: "35+", label: "Countries Served" },
];

const values = [
  {
    title: "Precision First",
    description:
      "Every product we sell is tested for accuracy and repeatability. We believe that reliable marking is the foundation of safe electrical systems.",
  },
  {
    title: "Partnership Approach",
    description:
      "We do not just sell equipment — we build long-term relationships. Our technical team works with you from selection through installation and beyond.",
    },
  {
    title: "Continuous Innovation",
    description:
      "Industrial needs evolve, and so do we. We constantly evaluate new technologies to bring our customers faster, more efficient, and more durable solutions.",
  },
];

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About MarkPro Industrial
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            For over 15 years, we have been the trusted partner for electrical contractors, OEMs, and wire harness manufacturers who demand precision, reliability, and expert support.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-4 font-display text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Story */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  MarkPro Industrial was founded with a simple mission: make industrial marking easier, faster, and more reliable. What started as a small supply shop serving local electrical contractors has grown into a global distributor of precision marking equipment.
                </p>
                <p>
                  Today, we partner with leading manufacturers to bring our customers the best ferrule printing machines, label printers, and consumables on the market. Our team combines deep technical knowledge with hands-on industry experience to help you find the right solution for your operation.
                </p>
                <p>
                  Whether you are a solo electrician or a multi-site OEM, we treat every customer with the same dedication — because your marking process is only as strong as the tools behind it.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-md rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                <div className="flex h-full w-full items-center justify-center rounded-lg border border-border bg-card/50">
                  <Factory className="h-24 w-24 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
            What We Stand For
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((val, i) => (
            <div
              key={val.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <span className="font-display text-4xl font-bold text-primary/20">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {val.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
