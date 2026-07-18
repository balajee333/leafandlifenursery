import type { Pot, PotVariant } from "@/data/products";
import { getPotSlug } from "@/data/products";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leafandlifenursery.com";

function productOffer(variants: PotVariant[]) {
  const prices = variants
    .map((variant) => variant.price)
    .filter((price): price is number => price !== null);

  if (prices.length === 0) return undefined;

  const baseOffer = {
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
  };

  if (prices.length === 1) {
    return { "@type": "Offer", ...baseOffer, price: prices[0] };
  }

  return {
    "@type": "AggregateOffer",
    ...baseOffer,
    lowPrice: Math.min(...prices),
    highPrice: Math.max(...prices),
    offerCount: prices.length,
  };
}

/** Product JSON-LD is rendered once per catalog card and its detail page. */
export default function ProductJsonLd({ product }: { product: Pot }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.code,
    category: product.category,
    image: new URL(product.image, SITE_URL).toString(),
    url: new URL(`/pots/${getPotSlug(product)}`, SITE_URL).toString(),
    description:
      product.description ??
      `${product.name} from Leaf & Life Nursery, available in ${product.category} styles and sizes.`,
    offers: productOffer(product.variants),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
