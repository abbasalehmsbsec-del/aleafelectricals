import { useRouterState, useParams } from "@tanstack/react-router";
import { getProductById } from "../lib/products";

const PHONE_NUMBER = "919177752786";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.405h-.004c-3.019 0-5.502 2.483-5.502 5.502 0 1.188.371 2.32 1.073 3.28l.178.24-.754 2.748 2.82-.74.272.162c.895.53 1.913.809 2.956.809h.003c3.019 0 5.502-2.483 5.502-5.502s-2.483-5.502-5.502-5.502m0 1.5c2.208 0 4.002 1.794 4.002 4.002s-1.794 4.002-4.002 4.002c-.47 0-.93-.082-1.368-.242l-.2-.067-.227.06-1.735.455.488-1.778.06-.22-.103-.208c-.48-.975-.735-2.06-.735-3.202 0-2.208 1.794-4.002 4.002-4.002" />
    </svg>
  );
}

export function WhatsAppButton() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const params = useRouterState({ select: (s) => s.params }) as Record<string, string | undefined>;

  let message = "Hi A Leaf Electricals, I would like to inquire about your products";

  if (pathname.startsWith("/products/") && params.productId) {
    const product = getProductById(params.productId);
    if (product) {
      message = `Hi, I would like to request a quote/demo for ${product.name}.`;
    }
  }

  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-200 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background mb-[env(safe-area-inset-bottom)] mr-[env(safe-area-inset-right)]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
