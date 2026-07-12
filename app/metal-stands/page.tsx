"use client";

import { useState } from "react";
import { useCart } from "@/components/CartContext";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { pots, type Pot } from "@/data/products";

export default function MetalStandsPage() {
  const [selected, setSelected] = useState<Pot | null>(null);
  const [search, setSearch] = useState("");
  const [activeInvalidSelectionId, setActiveInvalidSelectionId] = useState<string | null>(null);

  const metalStands = pots.filter((pot) => pot.category === "metal-stands");

  const filtered = metalStands.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-brand-green sm:text-3xl">
          Metal Stands
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Stylish metal stands for pots and planters, available in a range of
          sizes and finishes.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:items-center sm:justify-between">
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
            placeholder="Search metal stands..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 text-center text-gray-400">
          <p className="text-lg">No metal stands found</p>
          <button
            onClick={() => setSearch("")}
            className="mt-2 text-sm text-brand-gold hover:underline"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((stand) => (
            <ProductCard
              key={stand.id}
              item={stand}
              onClick={() => setSelected(stand)}
              isActiveWarning={activeInvalidSelectionId === stand.id}
              onInvalidColorSelection={() => setActiveInvalidSelectionId(stand.id)}
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
