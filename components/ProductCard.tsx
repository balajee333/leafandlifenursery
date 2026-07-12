"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/CartContext";
import type { Plant, Pot, PotVariant, PotColor } from "@/data/products";
import { getColorName } from "@/data/products";

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
  isActiveWarning?: boolean;
  onInvalidColorSelection?: () => void;
  onColorSelected?: () => void;
}

export default function ProductCard({
  item,
  onClick,
  isActiveWarning = false,
  onInvalidColorSelection,
  onColorSelected,
}: ProductCardProps) {
  const { addItem } = useCart();
  const isPot = "variants" in item;
  const pot = isPot ? (item as Pot) : null;
  const [selectedSize, setSelectedSize] = useState(
    pot?.variants[0]?.size ?? ""
  );
  const [selectedColor, setSelectedColor] = useState<PotColor | null>(
    pot?.colors?.[0] ?? null
  );
  const [warningMessage, setWarningMessage] = useState("");

  const handleColorSelect = (color: PotColor) => {
    setSelectedColor(color);
    if (onColorSelected) {
      onColorSelected();
    } else {
      setWarningMessage("");
    }
  };

  const selectedVariant =
    pot?.variants.find((variant) => variant.size === selectedSize) ??
    pot?.variants[0];

  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const warningText = isActiveWarning
    ? "Please choose a color before adding to cart."
    : warningMessage;

  const handleAddToCart = () => {
    if (pot?.colors && pot.colors.length > 1 && !selectedColor) {
      if (onInvalidColorSelection) {
        onInvalidColorSelection();
      } else {
        setWarningMessage("Please choose a color before adding to cart.");
      }
      return;
    }

    if (!onInvalidColorSelection) {
      setWarningMessage("");
    }
    setIsAddingToCart(true);
    addItem({
      productId: item.id,
      name: item.name,
      type: isPot ? "Pot" : "Plant",
      code: pot?.code,
      image: item.image,
      variantSize: selectedVariant?.size,
      variantColor: selectedColor?.hex ? getColorName(selectedColor.hex) : undefined,
      variantColorHex: selectedColor?.hex,
      unitPrice:
        selectedVariant?.price ?? (!isPot ? (item as Plant).price : null),
    });
    setTimeout(() => setIsAddingToCart(false), 600);
  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-green/5">
      <div
        className="relative aspect-square cursor-pointer overflow-hidden bg-white"
        onClick={onClick}
      >
        <Image
          src={item.image}
          alt={`${item.name} - ${isPot ? "Garden Pot" : "Indoor Plant"} | Leaf & Life Nursery Chennai`}
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

        {isPot && pot?.category === "designer" && selectedVariant ? (
          <div className="mt-2 flex items-baseline gap-3">
            {selectedVariant.compareAtPrice ? (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(selectedVariant.compareAtPrice)}
              </span>
            ) : null}
            <span className="text-base font-bold text-brand-gold">
              {selectedVariant.price !== null ? formatPrice(selectedVariant.price) : "Contact for price"}
            </span>
          </div>
        ) : isPot ? (
          <p className="mt-2 text-base font-bold text-brand-gold">
            {getPriceDisplay(item)}
          </p>
        ) : (
          <div>
            {item.actualPrice ? (
              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(item.actualPrice)}
                </span>
                <span className="text-base font-bold text-brand-gold">
                  {item.price !== null ? formatPrice(item.price) : "Contact for price"}
                </span>
              </div>
            ) : (
              <p className="mt-2 text-base font-bold text-brand-gold">
                {getPriceDisplay(item)}
              </p>
            )}
            {item.quantity && (
              <p className="mt-1 text-sm text-gray-500">{item.quantity}</p>
            )}
          </div>
        )}

        {pot && pot.colors && pot.colors.length > 0 && (
          <div className="mt-3">
            <label className="mb-2 block text-xs font-medium text-gray-500">
              Color
            </label>
            <div className="flex flex-wrap gap-2">
              {pot.colors.map((color: PotColor) => (
                <button
                  key={color.hex}
                  type="button"
                  onClick={() => handleColorSelect(color)}
                  className={`relative w-8 h-8 rounded-full transition-all duration-200 cursor-pointer z-10 ${
                    color.hex === "#FFFFFF" ? "border-2 border-gray-300" : ""
                  } ${
                    selectedColor?.hex === color.hex
                      ? "ring-2 ring-brand-green ring-offset-1"
                      : "hover:scale-110"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={getColorName(color.hex)}
                >
                  {selectedColor?.hex === color.hex && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className={`w-4 h-4 drop-shadow-md ${
                          color.hex === "#FFFFFF" ? "text-brand-green" : "text-white"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
        {warningText && (
          <p className="mt-2 text-sm text-red-600">{warningText}</p>
        )}

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
          disabled={isAddingToCart}
          className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium text-white transition-all duration-200 ${
            isAddingToCart
              ? "bg-brand-green scale-95 opacity-75"
              : "bg-brand-green hover:bg-opacity-90 active:scale-95"
          }`}
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
              d={
                isAddingToCart
                  ? "M5 13l4 4L19 7"
                  : "M12 4v16m8-8H4"
              }
            />
          </svg>
          {isAddingToCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
