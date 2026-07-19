import type { Pot, PotVariant, Plant } from "@/data/products";
import { getPotSlug, getPlantSlug } from "@/data/products";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leafandlifenursery.com";

function productOffers(product: Pot | Plant) {
  if ("variants" in product) {
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

  // Plant (no variants)
  if (product.price === null || typeof product.price === "undefined") return undefined;
  return {
    "@type": "Offer",
    name: product.name,
    url: new URL(`/plants/${getPlantSlug(product)}`, SITE_URL).toString(),
    price: product.price,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
  };
}

/** Product JSON-LD is rendered on a single, crawlable product-detail page. */
export default function ProductJsonLd({ product }: { product: Pot | Plant }) {
  const isPot = "variants" in product;
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: "Leaf & Life Nursery" },
    category: product.category ?? undefined,
    image: new URL(product.images?.[0] ?? product.image, SITE_URL).toString(),
    url: new URL(isPot ? `/pots/${getPotSlug(product as Pot)}` : `/plants/${getPlantSlug(product as Plant)}`, SITE_URL).toString(),
    description:
      product.description ??
      (isPot
        ? `${product.name} from Leaf & Life Nursery, available in ${product.category} styles and sizes.`
        : `${product.name} from Leaf & Life Nursery.`),
    sku: isPot ? (product as Pot).code : undefined,
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
