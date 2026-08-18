import brotherLogo from "../assets/brother-logo.png.asset.json";
import maxLogo from "../assets/max-logo.png.asset.json";
import canonLogo from "../assets/canon-logo.png.asset.json";
import casioLogo from "../assets/casio-logo.png.asset.json";
import dymoLogo from "../assets/dymo-logo.png.asset.json";
import samsonLogo from "../assets/samson-logo.png.asset.json";
import supvanLogo from "../assets/supvan-logo.png.asset.json";
import putyLogo from "../assets/puty-logo.png.asset.json";

const brands = [
  { name: "Brother", src: brotherLogo.url },
  { name: "MAX LETATWIN", src: maxLogo.url },
  { name: "Canon", src: canonLogo.url },
  { name: "CASIO", src: casioLogo.url },
  { name: "DYMO", src: dymoLogo.url },
  { name: "SAMSON Agro Equipments", src: samsonLogo.url },
  { name: "SUPVAN", src: supvanLogo.url },
  { name: "PUTY", src: putyLogo.url },
];

export function BrandMarquee() {
  return (
    <section
      aria-label="Brands we are authorized to supply"
      className="border-y border-border/60 bg-card/40 py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Authorized brands we supply
        </p>
      </div>

      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="brand-track flex w-max items-center gap-8 pr-8 group-hover:[animation-play-state:paused] sm:gap-10 sm:pr-10">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 sm:gap-10" aria-hidden={dup === 1}>
              {brands.map((b) => (
                <span
                  key={`${dup}-${b.name}`}
                  className="flex h-16 shrink-0 items-center justify-center rounded-2xl bg-white px-5 shadow-sm transition duration-300 hover:scale-105 sm:h-20 sm:px-7"
                >
                  <img
                    src={b.src}
                    alt={`${b.name} logo`}
                    loading="lazy"
                    className="h-8 w-auto max-w-[140px] object-contain sm:h-10 sm:max-w-[170px]"
                  />
                </span>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
