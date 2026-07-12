"use client";

import { useState } from "react";
import Link from "next/link";
import { pots, POT_CATEGORIES, type Pot } from "@/data/products";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";

export default function PotsPage() {
  const [category, setCategory] = useState<string | null>(null);
  const [selected, setSelected] = useState<Pot | null>(null);
  const [search, setSearch] = useState("");
  const [size, setSize] = useState<string | null>(null);
  const [activeInvalidSelectionId, setActiveInvalidSelectionId] = useState<string | null>(null);

  const availablePots = category
    ? pots.filter((pot) => pot.category === category)
    : pots;

  const sizes = Array.from(
    new Set(availablePots.flatMap((pot) => pot.variants.map((variant) => variant.size)))
  );

  const handleCategorySelect = (value: string | null) => {
    setCategory(value);
    const newAvailablePots = value
      ? pots.filter((pot) => pot.category === value)
      : pots;

    if (size && !newAvailablePots.some((pot) => pot.variants.some((variant) => variant.size === size))) {
      setSize(null);
    }
  };

  const filtered = pots.filter((p) => {
    if (category && p.category !== category) return false;
    if (size && !p.variants.some((variant) => variant.size === size))
      return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-brand-green sm:text-3xl">
          Garden Pots & Planters for Chennai Homes
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Plastic &bull; Ceramic &bull; Roto Moulded &bull; Iron &bull; Metal Plant Stands
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
          Shop a premium range of garden pots and planters designed for indoor and outdoor use in Chennai. From designer ceramic pots to sturdy plastic planters and space-saving metal plant stands, Leaf & Life Nursery has the perfect pot for every plant in your home or balcony.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:items-center sm:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
          <CategoryFilter
            categories={POT_CATEGORIES}
            selected={category}
            onSelect={handleCategorySelect}
          />
          <label htmlFor="size-filter" className="sr-only">
            Filter by size
          </label>
          <select
            id="size-filter"
            value={size ?? ""}
            onChange={(e) => setSize(e.target.value || null)}
            className="min-w-[180px] rounded-full border border-gray-200 bg-white py-2 px-4 text-sm text-brand-green focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
          >
            <option value="">All sizes</option>
            {sizes.map((sizeOption) => (
              <option key={sizeOption} value={sizeOption}>
                {sizeOption}
              </option>
            ))}
          </select>
        </div>

        <div className="relative max-w-md">
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
            placeholder="Search pots..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
          />
        </div>
      </div>

      <section className="mt-10 rounded-3xl border border-brand-green/10 bg-brand-cream p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-brand-green">
              Pair Pots with Perfect Plants
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
              Choose the right plants to showcase in your new planters. Explore our indoor plant collection for low-light, flowering, and balcony-friendly greens in Chennai.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/plants"
              className="rounded-full border border-brand-green/50 bg-white px-4 py-2 text-sm font-semibold text-brand-green transition hover:bg-brand-green/5"
            >
              Browse Indoor Plants
            </Link>
            <Link
              href="/plant-care"
              className="rounded-full border border-brand-green/50 bg-white px-4 py-2 text-sm font-semibold text-brand-green transition hover:bg-brand-green/5"
            >
              Browse Plant Care
            </Link>
          </div>
        </div>
      </section>

      {filtered.length === 0 ? (
        <div className="mt-16 text-center text-gray-400">
          <p className="text-lg">No pots found</p>
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
          {filtered.map((pot) => (
            <ProductCard
              key={pot.id}
              item={pot}
              onClick={() => setSelected(pot)}
              isActiveWarning={activeInvalidSelectionId === pot.id}
              onInvalidColorSelection={() => setActiveInvalidSelectionId(pot.id)}
              onColorSelected={() => setActiveInvalidSelectionId(null)}
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
