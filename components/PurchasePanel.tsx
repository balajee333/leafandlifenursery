"use client";

import { useState } from "react";
import { useCart } from "@/components/CartContext";
import type { Plant, Pot, PotVariant, PotColor } from "@/data/products";
import { getColorName } from "@/data/products";

function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

interface Props {
  item: Plant | Pot;
}

export default function PurchasePanel({ item }: Props) {
  const { addItem } = useCart();
  const isPot = "variants" in item;
  const pot = isPot ? (item as Pot) : null;

  const [selectedSize, setSelectedSize] = useState(
    pot?.variants?.[0]?.size ?? ""
  );
  const [selectedColor, setSelectedColor] = useState<PotColor | null>(
    pot?.colors?.[0] ?? null
  );
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const selectedVariant =
    pot?.variants.find((v: PotVariant) => v.size === selectedSize) ??
    pot?.variants[0];

  const handleAddToCart = () => {
    if (pot?.colors && pot.colors.length > 1 && !selectedColor) {
      return; // require color selection
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
      unitPrice: selectedVariant?.price ?? (!isPot ? (item as Plant).price : null),
    });

    setTimeout(() => setIsAddingToCart(false), 600);
  };

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="space-y-3">
        {isPot ? (
          <>
            {pot?.colors && pot.colors.length > 0 && (
              <div>
                <label className="mb-2 block text-xs font-medium text-gray-500">Color</label>
                <div className="flex flex-wrap gap-2">
                  {pot.colors.map((color: PotColor) => (
                    <button
                      key={color.hex}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`relative w-8 h-8 rounded-full transition-all duration-200 cursor-pointer z-10 ${
                        color.hex === "#FFFFFF" ? "border-2 border-gray-300" : ""
                      } ${
                        selectedColor?.hex === color.hex ? "ring-2 ring-brand-green ring-offset-1" : "hover:scale-110"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={getColorName(color.hex)}
                    />
                  ))}
                </div>
              </div>
            )}

            {pot?.variants && pot.variants.length > 0 && (
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-500">Size</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-brand-green"
                >
                  {pot.variants.map((variant: PotVariant) => (
                    <option key={variant.size} value={variant.size}>
                      {variant.size}
                      {variant.price !== null ? ` - ${formatPrice(variant.price)}` : ""}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="text-lg font-bold text-brand-gold">
              {selectedVariant?.price !== null && selectedVariant?.price !== undefined
                ? formatPrice(selectedVariant.price)
                : "Contact for price"}
            </div>
          </>
        ) : (
          <>
            <div className="text-lg font-bold text-brand-gold">{(item as Plant).price !== null ? formatPrice((item as Plant).price!) : "Contact for price"}</div>
            {(item as Plant).quantity && <div className="text-sm text-gray-500">Quantity: {(item as Plant).quantity}</div>}
          </>
        )}

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={isAddingToCart}
          className={`mt-4 block w-full rounded-xl py-3 text-sm font-medium text-white text-center transition ${
            isAddingToCart ? "bg-brand-green scale-95 opacity-75" : "bg-brand-green hover:bg-opacity-90"
          }`}
        >
          {isAddingToCart ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
