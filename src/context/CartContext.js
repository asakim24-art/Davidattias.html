"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getProductById } from "@/data/products";

const CartContext = createContext(null);
const STORAGE_KEY = "davidshop-cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // One-time hydration of persisted cart state from localStorage on mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore corrupt storage
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore quota / private-mode errors
    }
  }, [items, ready]);

  const addItem = useCallback((productId, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === productId);
      if (existing) {
        return prev.map((i) => (i.id === productId ? { ...i, qty: i.qty + qty } : i));
      }
      return [...prev, { id: productId, qty }];
    });
  }, []);

  const removeItem = useCallback((productId) => {
    setItems((prev) => prev.filter((i) => i.id !== productId));
  }, []);

  const updateQty = useCallback((productId, qty) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((i) => i.id !== productId);
      return prev.map((i) => (i.id === productId ? { ...i, qty } : i));
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const lines = useMemo(
    () =>
      items
        .map((i) => {
          const product = getProductById(i.id);
          if (!product) return null;
          return { ...i, product };
        })
        .filter(Boolean),
    [items]
  );

  const totalQty = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines]);
  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty * l.product.price, 0),
    [lines]
  );

  const value = { items, lines, ready, addItem, removeItem, updateQty, clearCart, totalQty, subtotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
