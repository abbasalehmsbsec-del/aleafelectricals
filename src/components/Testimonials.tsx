import { useEffect, useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Their MAX LETATWIN setup transformed our panel shop. Ferrule marking that used to take a full shift now takes under two hours.",
    name: "Rakesh Kumar",
    role: "Production Head, Control Panel Manufacturer",
  },
  {
    quote:
      "Genuine Brother consumables, delivered on time, every time. The technical guidance before purchase saved us from buying the wrong model.",
    name: "S. Venkatesh",
    role: "Purchase Manager, Wire Harness OEM",
  },
  {
    quote:
      "We bought SAMSON sprayers and a fogging machine. Solid build, fair pricing and after-sales support that actually picks up the phone.",
    name: "Md. Imran",
    role: "Agri Equipment Dealer, Telangana",
  },
  {
    quote:
      "From label printers to heat shrink sleeves, A Leaf is our single window for identification supplies. Highly responsive team.",
    name: "Priya Nair",
    role: "Maintenance Lead, Process Plant",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="glass overflow-hidden rounded-3xl p-1">
        <div className="overflow-hidden rounded-[1.35rem]">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="w-full shrink-0 px-6 py-10 sm:px-12 sm:py-14"
              >
                <Quote className="h-8 w-8 text-primary" />
                <blockquote className="mt-5 text-lg leading-relaxed text-foreground sm:text-xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block text-sm font-semibold text-foreground">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="glass grid h-9 w-9 place-items-center rounded-full text-foreground transition-colors hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="glass grid h-9 w-9 place-items-center rounded-full text-foreground transition-colors hover:text-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
