"use client";

import { useState } from "react";
import { plantCare, type Plant } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";

export default function PlantCarePage() {
  const [selected, setSelected] = useState<Plant | null>(null);
  const [search, setSearch] = useState("");

  const filtered = plantCare.filter((item) => {
    if (search && !item.name.toLowerCase().includes(search.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-brand-green sm:text-3xl">
          Plant Care & Nutrition Products
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Nourish, protect, and grow your home garden with our range of plant care sprays, organic boosters, and protective solutions.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
          Find the best plant care products in Chennai for healthy indoor plants and thriving gardens. Leaf & Life Nursery offers organic plant growth promoters, fertilizer sprays, pest protectors, and nutrient boosters for every plant owner in Kelambakkam. Buy plant care products online with WhatsApp ordering for fast local support.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="relative max-w-md w-full">
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
            placeholder="Search plant care products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 text-center text-gray-400">
          <p className="text-lg">No items found</p>
          <button
            onClick={() => setSearch("")}
            className="mt-2 text-sm text-brand-gold hover:underline"
          >
            Clear filter
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onClick={() => setSelected(item)}
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
