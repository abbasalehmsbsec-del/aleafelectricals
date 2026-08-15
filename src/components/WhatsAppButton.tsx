import { useRouterState, useParams } from "@tanstack/react-router";
import { getProductById } from "../lib/products";
import whatsappLogoAsset from "../assets/whatsapp-logo.png.asset.json";

const PHONE_NUMBER = "919177752786";

export function WhatsAppButton() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const params = useParams({ strict: false }) as Record<string, string | undefined>;

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
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform duration-200 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background mb-[env(safe-area-inset-bottom)] mr-[env(safe-area-inset-right)]"
    >
      <img
        src={whatsappLogoAsset.url}
        alt="WhatsApp"
        className="h-8 w-8 object-contain"
        aria-hidden="true"
      />
    </a>
  );
}
