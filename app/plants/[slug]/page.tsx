import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PurchasePanel from "@/components/PurchasePanel";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import ProductJsonLd from "@/components/ProductJsonLd";
import { getPlantBySlug, getPlantSlug, plants } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

function priceDisplay(price: number | null | undefined) {
  if (price === null || typeof price === "undefined") return "Contact for price";
  return `₹${price.toLocaleString("en-IN")}`;
}

export function generateStaticParams() {
  return plants.map((plant) => ({ slug: getPlantSlug(plant) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) return {};

  const title = `${plant.name} | Leaf & Life Nursery Chennai`;
  const description = plant.description ?? `Buy ${plant.name} at Leaf & Life Nursery in Chennai.`;
  const url = `/plants/${getPlantSlug(plant)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [plant.image] },
  };
}

export default async function PlantDetailPage({ params }: Props) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) notFound();

  const images = plant.images ?? [plant.image];

  return (
    <article className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <ProductJsonLd product={plant} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <Link href="/plants" className="hover:text-brand-green">Plants</Link>
        <span aria-hidden="true"> / </span>
        <span>{plant.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <ProductImageCarousel images={images} alt={`${plant.name} | Leaf & Life Nursery Chennai`} />

        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-brand-gold">{(plant.category ?? "").replace(/-/g, " ")}</p>
            <h1 className="mt-2 text-3xl font-bold text-brand-green sm:text-4xl">{plant.name}</h1>
            {plant.quantity && <p className="mt-2 text-sm text-gray-500">Quantity: {plant.quantity}</p>}
            <p className="mt-5 text-2xl font-bold text-brand-gold">{priceDisplay(plant.price)}</p>
            <p className="mt-5 leading-relaxed text-gray-600">{plant.description ?? `${plant.name} is available from Leaf & Life Nursery.`}</p>
          </div>

          <div className="lg:mt-4">
            <PurchasePanel item={plant} />
          </div>
        </div>
      </div>
    </article>
  );
}
