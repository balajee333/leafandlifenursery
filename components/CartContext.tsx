"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface CartItem {
  key: string;
  productId: string;
  name: string;
  type: "Plant" | "Pot";
  code?: string;
  image: string;
  variantSize?: string;
  variantColor?: string;
  variantColorHex?: string;
  unitPrice: number | null;
  quantity: number;
}

interface AddToCartInput {
  productId: string;
  name: string;
  type: "Plant" | "Pot";
  code?: string;
  image: string;
  variantSize?: string;
  variantColor?: string;
  variantColorHex?: string;
  unitPrice: number | null;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  totalPrice: number;
  hasUnknownPrices: boolean;
  isCartOpen: boolean;
  addItem: (item: AddToCartInput) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CART_STORAGE_KEY = "leaf-and-life-cart";
const CartContext = createContext<CartContextValue | null>(null);

function makeCartKey(item: Pick<AddToCartInput, "productId" | "variantSize" | "variantColorHex" | "variantColor">) {
  return [
    item.productId,
    item.variantSize ?? "default",
    item.variantColorHex ?? item.variantColor ?? "default",
  ].join("__");
}

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setItems(readStoredCart());
      setHydrated(true);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [hydrated, items]);

  const addItem = useCallback((item: AddToCartInput) => {
    const key = makeCartKey(item);

    setItems((current) => {
      const existing = current.find((cartItem) => cartItem.key === key);
      if (existing) {
        return current.map((cartItem) =>
          cartItem.key === key
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...current, { ...item, key, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((key: string) => {
    setItems((current) => current.filter((item) => item.key !== key));
  }, []);

  const updateQuantity = useCallback((key: string, quantity: number) => {
    setItems((current) => {
      if (quantity <= 0) return current.filter((item) => item.key !== key);

      return current.map((item) =>
        item.key === key ? { ...item, quantity } : item
      );
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
      (sum, item) => sum + (item.unitPrice ?? 0) * item.quantity,
      0
    );
    const hasUnknownPrices = items.some((item) => item.unitPrice === null);

    return {
      items,
      itemCount,
      totalPrice,
      hasUnknownPrices,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
    };
  }, [
    addItem,
    clearCart,
    closeCart,
    isCartOpen,
    items,
    openCart,
    removeItem,
    updateQuantity,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
