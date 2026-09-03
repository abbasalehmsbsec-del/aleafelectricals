import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Landmark, Navigation } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | A Leaf Electricals & Electronics" },
      {
        name: "description",
        content:
          "Get in touch with A Leaf Electricals & Electronics for quotes, demos, product support, and sales inquiries.",
      },
      {
        property: "og:title",
        content: "Contact Us | A Leaf Electricals & Electronics",
      },
      {
        property: "og:description",
        content:
          "Get in touch with A Leaf Electricals & Electronics for quotes, demos, product support, and sales inquiries.",
      },
      { property: "og:url", content: "https://aleafelectricals.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://aleafelectricals.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 91777 52786",
    href: "tel:+919177752786",
  },
  {
    icon: Phone,
    label: "Alternate Phone",
    value: "+91 63021 74819",
    href: "tel:+916302174819",
  },
  {
    icon: Mail,
    label: "Email",
    value: "aleafelectricals@gmail.com",
    href: "mailto:aleafelectricals@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "# 4-3-243 & 244/1, 1st Floor, Andal Plaza, Old Bhoiguda, Secunderabad - 3, T.S. 500003",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Sat: 10:00 AM – 8:00 PM IST",
    href: undefined,
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Request a quote, schedule a demo, or speak with our technical sales team. We respond within one business day.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Get in Touch
            </h2>
            <div className="mt-6 space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-bold text-foreground">
                  Message Sent
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Thank you for reaching out. Our team will review your inquiry and get back to you within one business day.
                </p>
                <Link
                  to="/"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="productInterest"
                      className="block text-sm font-medium text-foreground"
                    >
                      Product Interest
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select a product category</option>
                      <option value="ferrule-machines">Ferrule Printing Machines</option>
                      <option value="label-printers">Label Printers</option>
                      <option value="consumables">Consumables & Accessories</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map & Landmarks */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Find Us in Old Bhoiguda, Secunderabad
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Walk in for demos and purchases, or coordinate local dispatch and pickups at our store.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div className="overflow-hidden rounded-xl border border-border lg:col-span-2">
              <iframe
                title="A Leaf Electricals & Electronics — Old Bhoiguda, Secunderabad"
                src="https://maps.google.com/maps?q=Old%20Bhoiguda%2C%20Secunderabad%2C%20Telangana%20500003&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-[380px] w-full sm:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                <Landmark className="h-5 w-5 text-primary" />
                Nearby Landmarks
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  { name: "Secunderabad Railway Station", hint: "Major rail hub — approx. 2 km" },
                  { name: "Secunderabad Clock Tower", hint: "Central landmark — approx. 1.5 km" },
                  { name: "SP Road electronics market", hint: "Approx. 2 km" },
                  { name: "Paradise Circle", hint: "Approx. 2.5 km" },
                  { name: "MG Bus Station (Imlibun)", hint: "Across the Musi — approx. 5 km" },
                ].map((l) => (
                  <li key={l.name} className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{l.name}</p>
                      <p className="text-xs text-muted-foreground">{l.hint}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Old+Bhoiguda,+Secunderabad,+Telangana+500003"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
              <p className="mt-4 text-xs text-muted-foreground">
                Call ahead for dispatch coordination or bulk pickups: +91 91777 52786.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
