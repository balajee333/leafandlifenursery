"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/CartContext";
import type { Plant, Pot, PotVariant } from "@/data/products";

function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

function getPriceDisplay(
  item: Plant | Pot
): string {
  if ("variants" in item) {
    const prices = item.variants
      .map((v: PotVariant) => v.price)
      .filter((p): p is number => p !== null);
    if (prices.length === 0) return "Contact for price";
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    if (min === max) return formatPrice(min);
    return `${formatPrice(min)} - ${formatPrice(max)}`;
  }
  if (item.price === null) return "Contact for price";
  return formatPrice(item.price);
}

interface ProductCardProps {
  item: Plant | Pot;
  onClick?: () => void;
}

export default function ProductCard({ item, onClick }: ProductCardProps) {
  const { addItem } = useCart();
  const isPot = "variants" in item;
  const pot = isPot ? (item as Pot) : null;
  const [selectedSize, setSelectedSize] = useState(
    pot?.variants[0]?.size ?? ""
  );

  const selectedVariant =
    pot?.variants.find((variant) => variant.size === selectedSize) ??
    pot?.variants[0];

  const handleAddToCart = () => {
    addItem({
      productId: item.id,
      name: item.name,
      type: isPot ? "Pot" : "Plant",
      code: pot?.code,
      image: item.image,
      variantSize: selectedVariant?.size,
      unitPrice:
        selectedVariant?.price ?? (!isPot ? (item as Plant).price : null),
    });
  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-green/5">
      <div
        className="relative aspect-square cursor-pointer overflow-hidden bg-white"
        onClick={onClick}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-brand-green text-sm sm:text-base leading-tight">
          {item.name}
        </h3>

        {isPot && (
          <p className="mt-1 text-xs text-gray-400">{(item as Pot).code}</p>
        )}

        <p className="mt-2 text-base font-bold text-brand-gold">
          {getPriceDisplay(item)}
        </p>

        {pot && pot.variants.length > 0 && (
          <div className="mt-3">
            <label
              htmlFor={`size-${item.id}`}
              className="mb-1 block text-xs font-medium text-gray-500"
            >
              Size
            </label>
            <select
              id={`size-${item.id}`}
              value={selectedSize}
              onChange={(event) => setSelectedSize(event.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-brand-green focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            >
              {pot.variants.map((variant: PotVariant) => (
                <option key={variant.size} value={variant.size}>
                  {variant.size}
                  {variant.price !== null
                    ? ` - ${formatPrice(variant.price)}`
                    : ""}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green py-2.5 text-sm font-medium text-white hover:bg-brand-green-light transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
