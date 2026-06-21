"use client";

import { useState } from "react";
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
          Plant Collections
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Premium Plants &bull; Indoor &bull; Balcony &bull; Succulents
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
