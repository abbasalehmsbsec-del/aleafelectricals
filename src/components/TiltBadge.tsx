import { useRef, type ReactNode } from "react";

export function TiltBadge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${(-py * 12).toFixed(2)}deg) rotateY(${(px * 14).toFixed(2)}deg) translateY(-3px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-foreground shadow-lg transition-[transform,box-shadow] duration-300 will-change-transform hover:shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--primary)_60%,transparent)] ${className}`}
    >
      {children}
    </div>
  );
}
