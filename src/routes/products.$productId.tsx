import { createFileRoute, Link } from "@tanstack/react-router";
import { notFound } from "@tanstack/react-router";
import { getProductById, type Product } from "../lib/products";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = getProductById(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} | A Leaf Electricals & Electronics` },
          {
            name: "description",
            content: loaderData.product.description,
          },
          {
            property: "og:title",
            content: `${loaderData.product.name} | A Leaf Electricals & Electronics`,
          },
          {
            property: "og:description",
            content: loaderData.product.description,
          },
        ]
      : [],
  }),
  notFoundComponent: ProductNotFound,
  component: ProductDetailPage,
});

function ProductNotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold text-foreground">Product Not Found</h1>
      <p className="mt-4 text-muted-foreground">
        The product you are looking for does not exist or has been removed.
      </p>
      <Link
        to="/products"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Products
      </Link>
    </div>
  );
}

function ProductDetailPage() {
  const { product } = Route.useLoaderData() as { product: Product };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/products" className="hover:text-primary">
          Products
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-xl border border-border bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            {product.categoryLabel}
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {product.longDescription}
          </p>

          {/* Features */}
          <div className="mt-8">
            <h2 className="font-display text-lg font-semibold text-foreground">
              Key Features
            </h2>
            <ul className="mt-4 space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request a Quote
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className="mt-16">
        <h2 className="font-display text-2xl font-bold text-foreground">
          Technical Specifications
        </h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <tbody>
              {Object.entries(product.specs).map(([key, value], index) => (
                <tr
                  key={key}
                  className={
                    index % 2 === 0 ? "bg-card" : "bg-secondary/20"
                  }
                >
                  <th className="w-1/3 px-6 py-4 font-medium text-foreground">
                    {key}
                  </th>
                  <td className="px-6 py-4 text-muted-foreground">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
