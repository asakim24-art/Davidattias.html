"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ productId, qty = 1, className = "" }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(productId, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        className ||
        "w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full py-3 transition-colors"
      }
    >
      {added ? "✓ נוסף לעגלה" : "הוספה לעגלה"}
    </button>
  );
}
