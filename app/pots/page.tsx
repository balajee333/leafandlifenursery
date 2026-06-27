"use client";

import { useState } from "react";
import { pots, POT_CATEGORIES, type Pot } from "@/data/products";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";

export default function PotsPage() {
  const [category, setCategory] = useState<string | null>(null);
  const [selected, setSelected] = useState<Pot | null>(null);
  const [search, setSearch] = useState("");
  const [size, setSize] = useState<string | null>(null);

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
          Pots & Planters
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Plastic &bull; Ceramic &bull; Roto Moulded &bull; Iron &bull; Metal
          Stands
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
