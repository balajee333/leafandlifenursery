"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  const handleOpenCart = () => {
    setMenuOpen(false);
    openCart();
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-green shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Leaf & Life"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-white leading-tight">
              Leaf & Life
            </h1>
            <p className="text-[11px] text-brand-gold tracking-wide">
              Add Life to Your Space
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-white/90 hover:text-brand-gold transition-colors"
          >
            Home
          </Link>
          <Link
            href="/plants"
            className="text-sm font-medium text-white/90 hover:text-brand-gold transition-colors"
          >
            Buy Indoor Plants
          </Link>
          <Link
            href="/pots"
            className="text-sm font-medium text-white/90 hover:text-brand-gold transition-colors"
          >
            Garden Pots & Planters
          </Link>
          <Link
            href="/plant-care"
            className="text-sm font-medium text-white/90 hover:text-brand-gold transition-colors"
          >
            Plant Care & Nutrition Products
          </Link>
          <Link
            href="/designer-pots"
            className="text-sm font-medium text-white/90 hover:text-brand-gold transition-colors"
          >
            Designer Pots
          </Link>
          <Link
            href="/metal-stands"
            className="text-sm font-medium text-white/90 hover:text-brand-gold transition-colors"
          >
            Metal Plant Stands
          </Link>
          <button
            type="button"
            onClick={handleOpenCart}
            className="relative flex items-center gap-2 rounded-full bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-green hover:bg-brand-gold-light transition-colors"
            aria-label={`Open cart with ${itemCount} items`}
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
                d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13 5.4 5M7 13l-2 5h14M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
              />
            </svg>
            Cart
            {itemCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-green px-1.5 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 px-4 pb-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm font-medium text-white/90 hover:text-brand-gold"
          >
            Home
          </Link>
          <Link
            href="/plants"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm font-medium text-white/90 hover:text-brand-gold"
          >
            Buy Indoor Plants
          </Link>
          <Link
            href="/pots"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm font-medium text-white/90 hover:text-brand-gold"
          >
            Garden Pots & Planters
          </Link>
          <Link
            href="/designer-pots"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm font-medium text-white/90 hover:text-brand-gold"
          >
            Designer Pots
          </Link>
          <Link
            href="/metal-stands"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm font-medium text-white/90 hover:text-brand-gold"
          >
            Metal Plant Stands
          </Link>
          <Link
            href="/plant-care"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm font-medium text-white/90 hover:text-brand-gold"
          >
            Plant Care & Nutrition Products
          </Link>
          <button
            type="button"
            onClick={handleOpenCart}
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-green"
            aria-label={`Open cart with ${itemCount} items`}
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
                d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13 5.4 5M7 13l-2 5h14M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
              />
            </svg>
            Cart
            {itemCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-green px-1.5 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </button>
        </nav>
      )}
    </header>
  );
}
