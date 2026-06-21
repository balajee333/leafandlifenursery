"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";
import { useCart, type CartItem } from "@/components/CartContext";

const WHATSAPP_NUMBER = "919942093711";

function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

function getItemLabel(item: CartItem): string {
  const details = [item.code, item.variantSize].filter(Boolean).join(", ");
  return details ? `${item.name} (${details})` : item.name;
}

function getWhatsAppUrl(
  items: CartItem[],
  totalPrice: number,
  totalQuantity: number
): string {
  const lines = items.map((item, index) => {
    const price =
      item.unitPrice === null
        ? "Contact for price"
        : `${formatPrice(item.unitPrice)} each`;
    return `${index + 1}. ${getItemLabel(item)} x ${item.quantity} - ${price}`;
  });

  const knownTotal =
    totalPrice > 0 ? `\nKnown total: ${formatPrice(totalPrice)}` : "";
  const text = encodeURIComponent(
    `Hi! I would like to order these items:\n\n${lines.join(
      "\n"
    )}\n\nTotal quantity: ${totalQuantity}${knownTotal}\n\nPlease confirm availability and final price.`
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export default function CartDrawer() {
  const {
    items,
    itemCount,
    totalPrice,
    hasUnknownPrices,
    isCartOpen,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
  } = useCart();

  const whatsappUrl = useMemo(
    () => getWhatsAppUrl(items, totalPrice, itemCount),
    [itemCount, items, totalPrice]
  );

  useEffect(() => {
    if (!isCartOpen) return;

    document.body.style.overflow = "hidden";
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [closeCart, isCartOpen]);

  return (
    <>
      <button
        type="button"
        onClick={openCart}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-lg hover:bg-brand-green-light hover:scale-110 transition-all duration-200"
        aria-label={`Open cart with ${itemCount} items`}
      >
        <svg
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13 5.4 5M7 13l-2 5h14M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
          />
        </svg>
        {itemCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-gold px-1.5 text-xs font-bold text-brand-green">
            {itemCount}
          </span>
        )}
      </button>

      {isCartOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/50"
          onClick={closeCart}
        >
          <aside
            className="ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <div>
                <h2 className="text-lg font-bold text-brand-green">
                  Your Cart
                </h2>
                <p className="text-sm text-gray-500">
                  {itemCount} {itemCount === 1 ? "item" : "items"} selected
                </p>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                aria-label="Close cart"
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-cream text-brand-green">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13l-2 5h14"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-green">
                  Your cart is empty
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Add plants or pots, then send the full order on WhatsApp.
                </p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.key}
                        className="flex gap-3 rounded-xl border border-gray-100 p-3"
                      >
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-brand-cream">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="80px"
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex gap-2">
                            <div className="min-w-0 flex-1">
                              <h3 className="truncate text-sm font-semibold text-brand-green">
                                {item.name}
                              </h3>
                              <p className="mt-0.5 text-xs text-gray-500">
                                {[item.code, item.variantSize]
                                  .filter(Boolean)
                                  .join(" | ") || item.type}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.key)}
                              className="text-gray-400 hover:text-red-500"
                              aria-label={`Remove ${item.name}`}
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
                                  d="M6 18 18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>

                          <div className="mt-3 flex items-center justify-between gap-3">
                            <div className="flex items-center rounded-full border border-gray-200">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.key, item.quantity - 1)
                                }
                                className="px-3 py-1 text-brand-green"
                                aria-label={`Decrease ${item.name} quantity`}
                              >
                                -
                              </button>
                              <span className="min-w-6 text-center text-sm font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.key, item.quantity + 1)
                                }
                                className="px-3 py-1 text-brand-green"
                                aria-label={`Increase ${item.name} quantity`}
                              >
                                +
                              </button>
                            </div>
                            <p className="text-right text-sm font-bold text-brand-gold">
                              {item.unitPrice === null
                                ? "Contact"
                                : formatPrice(item.unitPrice * item.quantity)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 p-5">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold text-brand-green">
                        Total quantity
                      </p>
                      <p className="font-bold text-brand-green">{itemCount}</p>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-brand-green">Total</p>
                        {hasUnknownPrices && (
                          <p className="mt-0.5 text-xs text-gray-500">
                            Some items need price confirmation
                          </p>
                        )}
                      </div>
                      <p className="text-lg font-bold text-brand-gold">
                        {totalPrice > 0 ? formatPrice(totalPrice) : "Contact"}
                      </p>
                    </div>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 text-base font-semibold text-white hover:bg-green-600 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.532-1.474A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.557-.804-6.302-2.155l-.44-.348-2.874.935.957-2.834-.372-.466A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Order Now on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="mt-3 w-full rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-600 hover:border-red-200 hover:text-red-500"
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
