import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductJsonLd from "@/components/ProductJsonLd";
import { getPotBySlug, getPotSlug, pots } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

function priceDisplay(prices: number[]) {
  if (prices.length === 0) return "Contact for price";
  const low = Math.min(...prices);
  const high = Math.max(...prices);
  return low === high ? `₹${low.toLocaleString("en-IN")}` : `₹${low.toLocaleString("en-IN")} - ₹${high.toLocaleString("en-IN")}`;
}

export function generateStaticParams() {
  return pots.map((pot) => ({ slug: getPotSlug(pot) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pot = getPotBySlug(slug);
  if (!pot) return {};

  const title = `${pot.name} | Leaf & Life Nursery Chennai`;
  const description = pot.description ?? `Shop ${pot.name} at Leaf & Life Nursery in Chennai. Available in multiple sizes and colours.`;
  const url = `/pots/${getPotSlug(pot)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [pot.image] },
  };
}

export default async function PotDetailPage({ params }: Props) {
  const { slug } = await params;
  const pot = getPotBySlug(slug);
  if (!pot) notFound();

  const prices = pot.variants.flatMap((variant) => variant.price === null ? [] : [variant.price]);
  return (
    <article className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <ProductJsonLd product={pot} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <Link href="/pots" className="hover:text-brand-green">Pots</Link>
        <span aria-hidden="true"> / </span>
        <span>{pot.name}</span>
      </nav>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-square rounded-3xl bg-white shadow-sm">
          <Image src={pot.image} alt={`${pot.name} - Garden Pot | Leaf & Life Nursery Chennai`} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-8" />
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-brand-gold">{pot.category.replace(/-/g, " ")} planter</p>
          <h1 className="mt-2 text-3xl font-bold text-brand-green sm:text-4xl">{pot.name}</h1>
          <p className="mt-2 text-sm text-gray-500">Product code: {pot.code}</p>
          <p className="mt-5 text-2xl font-bold text-brand-gold">{priceDisplay(prices)}</p>
          <p className="mt-5 leading-relaxed text-gray-600">{pot.description ?? `${pot.name} is available from Leaf & Life Nursery in a selection of sizes${pot.colors?.length ? " and colours" : ""}.`}</p>
          <h2 className="mt-7 text-lg font-semibold text-brand-green">Available sizes and prices</h2>
          <ul className="mt-3 divide-y rounded-xl border border-gray-100">
            {pot.variants.map((variant) => <li key={variant.size} className="flex justify-between px-4 py-3 text-sm"><span>{variant.size}</span><span className="font-semibold text-brand-gold">{variant.price === null ? "Contact for price" : `₹${variant.price.toLocaleString("en-IN")}`}</span></li>)}
          </ul>
        </div>
      </div>
      <section className="mt-10 max-w-sm" aria-label="Purchase options">
        <ProductCard item={pot} includeSchema={false} />
      </section>
    </article>
  );
}
