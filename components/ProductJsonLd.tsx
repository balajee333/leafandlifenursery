import type { Pot, PotVariant } from "@/data/products";
import { getPotSlug } from "@/data/products";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leafandlifenursery.com";

function productOffers(product: Pot) {
  const offers = product.variants.flatMap((variant: PotVariant) => {
    if (variant.price === null) return [];

    return [{
      "@type": "Offer",
      name: `${product.name} — ${variant.size}`,
      url: new URL(`/pots/${getPotSlug(product)}#size-${encodeURIComponent(variant.size)}`, SITE_URL).toString(),
      price: variant.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    }];
  });

  if (offers.length === 0) return undefined;
  return offers.length === 1 ? offers[0] : offers;
}

/** Product JSON-LD is rendered on a single, crawlable product-detail page. */
export default function ProductJsonLd({ product }: { product: Pot }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.code,
    brand: { "@type": "Brand", name: "Leaf & Life Nursery" },
    category: product.category,
    image: new URL(product.image, SITE_URL).toString(),
    url: new URL(`/pots/${getPotSlug(product)}`, SITE_URL).toString(),
    description:
      product.description ??
      `${product.name} from Leaf & Life Nursery, available in ${product.category} styles and sizes.`,
    offers: productOffers(product),
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
