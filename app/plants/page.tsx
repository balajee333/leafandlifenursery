"use client";

import { useState } from "react";
import Link from "next/link";
import { plants, PLANT_CATEGORIES, type Plant } from "@/data/products";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";

export default function PlantsPage() {
  const [category, setCategory] = useState<string | null>(null);
  const [selected, setSelected] = useState<Plant | null>(null);
  const [search, setSearch] = useState("");

  const filtered = plants.filter((p) => {
    if (category && p.category !== category) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-brand-green sm:text-3xl">
          Buy Indoor Plants in Kelambakkam, Chennai
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Premium Plants &bull; Indoor &bull; Balcony &bull; Succulents
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
          Discover a curated nursery collection of indoor plants near Kelambakkam with everything from low-light snake plants to flowering anthuriums. Leaf & Life Nursery makes it easy to buy plants online Chennai, with expert plant care advice, local delivery options, and the best indoor greenery for homes, balconies, offices and gifting.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter
          categories={PLANT_CATEGORIES}
          selected={category}
          onSelect={setCategory}
        />
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search plants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green sm:w-64"
          />
        </div>
      </div>

      <section className="mt-10 rounded-3xl border border-brand-green/10 bg-brand-cream p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-brand-green">
              Complete Your Indoor Garden
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
              Pair your new plants with matching pots, planters, and metal stands from our Chennai collection. Browse quality pots designed for indoor plant displays and balcony gardens.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pots"
              className="rounded-full border border-brand-green/50 bg-white px-4 py-2 text-sm font-semibold text-brand-green transition hover:bg-brand-green/5"
            >
              Browse Pots & Planters
            </Link>
            <Link
              href="/metal-stands"
              className="rounded-full border border-brand-green/50 bg-white px-4 py-2 text-sm font-semibold text-brand-green transition hover:bg-brand-green/5"
            >
              Browse Metal Stand Options
            </Link>
            <Link
              href="/designer-pots"
              className="rounded-full border border-brand-green/50 bg-white px-4 py-2 text-sm font-semibold text-brand-green transition hover:bg-brand-green/5"
            >
              Browse Designer Pots
            </Link>
          </div>
        </div>
      </section>

      {filtered.length === 0 ? (
        <div className="mt-16 text-center text-gray-400">
          <p className="text-lg">No plants found</p>
          <button
            onClick={() => {
              setCategory(null);
              setSearch("");
            }}
            className="mt-2 text-sm text-brand-gold hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((plant) => (
            <ProductCard
              key={plant.id}
              item={plant}
              onClick={() => setSelected(plant)}
            />
          ))}
        </div>
      )}

      {selected && (
        <ProductModal item={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
