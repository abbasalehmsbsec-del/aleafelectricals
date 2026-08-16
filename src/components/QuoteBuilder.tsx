import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight, CheckCircle2, Send } from "lucide-react";
import { products } from "../lib/products";

type Data = {
  category: string;
  product: string;
  quantity: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const categories = [
  { key: "machines", label: "Ferrule Printing Machines" },
  { key: "printers", label: "Label Printers" },
  { key: "consumables", label: "Consumables & Accessories" },
  { key: "agriculture", label: "Agricultural Equipment" },
];

const steps = ["Requirement", "Details", "Contact"];

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const phoneOk = (v: string) => /^[+]?[\d\s-]{10,15}$/.test(v.trim());

export function QuoteBuilder({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [data, setData] = useState<Data>({
    category: "",
    product: defaultProduct,
    quantity: "1",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const set = (k: keyof Data, v: string) => setData((d) => ({ ...d, [k]: v }));

  const options = useMemo(
    () => products.filter((p) => !data.category || p.category === data.category),
    [data.category],
  );

  const errors: Partial<Record<keyof Data, string>> = {};
  if (!data.category) errors.category = "Pick a category to continue";
  if (step >= 1 && (!data.quantity || Number(data.quantity) < 1))
    errors.quantity = "Enter a valid quantity";
  if (step >= 2) {
    if (data.name.trim().length < 2) errors.name = "Please enter your full name";
    if (!emailOk(data.email)) errors.email = "Enter a valid email address";
    if (!phoneOk(data.phone)) errors.phone = "Enter a valid phone number";
  }

  const stepValid =
    step === 0 ? !errors.category : step === 1 ? !errors.quantity : !errors.name && !errors.email && !errors.phone;

  const show = (k: keyof Data) => (touched[k] ? errors[k] : undefined);

  const waHref = () => {
    const lines = [
      "Hi A Leaf Electricals, I'd like a quote.",
      data.product ? `Product: ${data.product}` : `Category: ${categories.find((c) => c.key === data.category)?.label ?? ""}`,
      `Quantity: ${data.quantity}`,
      `Name: ${data.name}${data.company ? ` (${data.company})` : ""}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      data.message ? `Notes: ${data.message}` : "",
    ].filter(Boolean);
    return `https://wa.me/919177752786?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  if (submitted) {
    return (
      <div className="glass rounded-3xl p-8 text-center sm:p-12">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand/15 text-brand">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
          Quote request ready
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Send it straight to our sales desk on WhatsApp for the fastest response, or email us and we'll reply within one business day.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={waHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
          >
            Send on WhatsApp <Send className="h-4 w-4" />
          </a>
          <Link
            to="/products"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Keep browsing
          </Link>
        </div>
      </div>
    );
  }

  const inputCls =
    "mt-2 block w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      {/* progress */}
      <ol className="grid grid-cols-3 gap-3">
        {steps.map((s, i) => (
          <li key={s} className="min-w-0">
            <div className="flex items-center gap-2">
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold transition-colors ${
                  i < step
                    ? "bg-brand text-brand-foreground"
                    : i === step
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                }`}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </span>
              <span className="truncate text-xs font-medium text-muted-foreground sm:text-sm">
                {s}
              </span>
            </div>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-brand transition-all duration-500"
                style={{ width: i <= step ? "100%" : "0%" }}
              />
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 space-y-5">
        {step === 0 && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <p className="text-sm font-medium text-foreground">
              What are you looking for?
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {categories.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => {
                    set("category", c.key);
                    set("product", "");
                    setTouched((t) => ({ ...t, category: true }));
                  }}
                  className={`rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition-all duration-300 ${
                    data.category === c.key
                      ? "border-primary bg-primary/10 text-foreground shadow-[var(--shadow-glow)]"
                      : "border-border bg-background/40 text-muted-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            {show("category") && (
              <p className="mt-3 text-xs text-destructive">{errors.category}</p>
            )}
          </div>
        )}

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-2 grid gap-5 duration-500 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="qb-product" className="text-sm font-medium text-foreground">
                Product (optional)
              </label>
              <select
                id="qb-product"
                value={data.product}
                onChange={(e) => set("product", e.target.value)}
                className={inputCls}
              >
                <option value="">Not sure yet — recommend one</option>
                {options.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.brand} — {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="qb-qty" className="text-sm font-medium text-foreground">
                Quantity *
              </label>
              <input
                id="qb-qty"
                type="number"
                min={1}
                value={data.quantity}
                onBlur={() => setTouched((t) => ({ ...t, quantity: true }))}
                onChange={(e) => set("quantity", e.target.value)}
                className={inputCls}
              />
              {show("quantity") && (
                <p className="mt-2 text-xs text-destructive">{errors.quantity}</p>
              )}
            </div>
            <div>
              <label htmlFor="qb-company" className="text-sm font-medium text-foreground">
                Company (optional)
              </label>
              <input
                id="qb-company"
                value={data.company}
                onChange={(e) => set("company", e.target.value)}
                className={inputCls}
                placeholder="Your organisation"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-2 grid gap-5 duration-500 sm:grid-cols-2">
            <div>
              <label htmlFor="qb-name" className="text-sm font-medium text-foreground">
                Full name *
              </label>
              <input
                id="qb-name"
                value={data.name}
                onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                onChange={(e) => set("name", e.target.value)}
                className={inputCls}
                placeholder="Your name"
              />
              {show("name") && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="qb-phone" className="text-sm font-medium text-foreground">
                Phone *
              </label>
              <input
                id="qb-phone"
                type="tel"
                value={data.phone}
                onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                onChange={(e) => set("phone", e.target.value)}
                className={inputCls}
                placeholder="+91 90000 00000"
              />
              {show("phone") && <p className="mt-2 text-xs text-destructive">{errors.phone}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="qb-email" className="text-sm font-medium text-foreground">
                Email *
              </label>
              <input
                id="qb-email"
                type="email"
                value={data.email}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                onChange={(e) => set("email", e.target.value)}
                className={inputCls}
                placeholder="you@company.com"
              />
              {show("email") && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="qb-msg" className="text-sm font-medium text-foreground">
                Notes (optional)
              </label>
              <textarea
                id="qb-msg"
                rows={4}
                value={data.message}
                onChange={(e) => set("message", e.target.value)}
                className={inputCls}
                placeholder="Application, printing volume, delivery location…"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </button>
        <button
          type="button"
          onClick={() => {
            if (step < 2) {
              setTouched((t) => ({ ...t, category: true, quantity: true }));
              if (stepValid) setStep(step + 1);
            } else {
              setTouched((t) => ({ ...t, name: true, email: true, phone: true }));
              if (stepValid) setSubmitted(true);
            }
          }}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)] disabled:opacity-50"
          disabled={!stepValid}
        >
          {step === 2 ? "Get my quote" : "Continue"}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
