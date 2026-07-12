"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/components/CartContext";
import type { Plant, Pot, PotVariant, PotColor } from "@/data/products";
import { getColorName } from "@/data/products";

function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

interface ProductModalProps {
  item: Plant | Pot;
  onClose: () => void;
}

export default function ProductModal({ item, onClose }: ProductModalProps) {
  const { addItem } = useCart();
  const isPot = "variants" in item;
  const pot = isPot ? (item as Pot) : null;
  const [selectedSize, setSelectedSize] = useState(
    pot?.variants[0]?.size ?? ""
  );
  const [selectedColor, setSelectedColor] = useState<PotColor | null>(
    pot?.colors?.[0] ?? null
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
      variantColor: selectedColor?.hex
        ? getColorName(selectedColor.hex)
        : undefined,
      variantColorHex: selectedColor?.hex,
      unitPrice:
        selectedVariant?.price ?? (!isPot ? (item as Plant).price : null),
    });
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow hover:bg-white hover:text-gray-900 transition-colors"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative aspect-square bg-white">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 672px) 100vw, 672px"
            className="object-contain p-6"
            priority
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-brand-green">{item.name}</h2>

          {pot && <p className="mt-1 text-sm text-gray-400">{pot.code}</p>}

          {pot && pot.variants.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">
                Available Sizes & Prices
              </h4>
              <div className="rounded-xl border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-cream">
                      <th className="px-4 py-2 text-left font-medium text-brand-green">
                        Size
                      </th>
                      <th className="px-4 py-2 text-right font-medium text-brand-green">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pot.variants.map((v: PotVariant, i: number) => (
                      <tr
                          key={v.size}
                          className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          <td className="px-4 py-2">{v.size}</td>
                          <td className="px-4 py-2 text-right font-semibold text-brand-gold">
                            {v.price !== null ? (
                              v.compareAtPrice ? (
                                <div className="flex items-baseline justify-end gap-3">
                                  <span className="text-sm text-gray-500 line-through">
                                    {formatPrice(v.compareAtPrice)}
                                  </span>
                                  <span className="font-semibold text-brand-gold">
                                    {formatPrice(v.price)}
                                  </span>
                                </div>
                              ) : (
                                formatPrice(v.price)
                              )
                            ) : (
                              "Contact us"
                            )}
                          </td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {pot.colors && pot.colors.length > 0 && (
                <div className="mt-4">
                  <label className="mb-2 block text-sm font-semibold text-gray-600">
                    Select color for cart
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {pot.colors.map((color: PotColor) => (
                      <button
                        key={color.hex}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`relative w-9 h-9 rounded-full transition-all duration-200 ${
                          selectedColor?.hex === color.hex
                            ? "ring-2 ring-brand-green ring-offset-1"
                            : "hover:scale-110"
                        } ${color.hex === "#FFFFFF" ? "border border-gray-300" : ""}`}
                        style={{ backgroundColor: color.hex }}
                        title={getColorName(color.hex)}
                      >
                        {selectedColor?.hex === color.hex && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                              className={`w-4 h-4 drop-shadow-md ${
                                color.hex === "#FFFFFF"
                                  ? "text-brand-green"
                                  : "text-white"
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
              <label
                htmlFor={`modal-size-${item.id}`}
                className="mb-1 mt-4 block text-sm font-semibold text-gray-600"
              >
                Select size for cart
              </label>
              <select
                id={`modal-size-${item.id}`}
                value={selectedSize}
                onChange={(event) => setSelectedSize(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-brand-green focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
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

          {!isPot && (
            <p className="mt-3 text-xl font-bold text-brand-gold">
              {(item as Plant).price !== null
                ? formatPrice((item as Plant).price!)
                : "Contact for price"}
            </p>
          )}

          <button
            type="button"
            onClick={handleAddToCart}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green py-3 text-base font-semibold text-white hover:bg-brand-green-light transition-colors"
          >
            <svg
              className="h-5 w-5"
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
    </div>
  );
}
