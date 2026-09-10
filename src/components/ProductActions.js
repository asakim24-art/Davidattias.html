"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function ProductActions({ productId }) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const router = useRouter();

  function inc() {
    setQty((q) => Math.min(99, q + 1));
  }
  function dec() {
    setQty((q) => Math.max(1, q - 1));
  }

  function handleBuyNow() {
    addItem(productId, qty);
    router.push("/cart");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">כמות</span>
        <div className="flex items-center border border-gray-300 rounded-full">
          <button
            type="button"
            onClick={dec}
            className="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-rose-600"
            aria-label="הפחת כמות"
          >
            −
          </button>
          <span className="w-8 text-center">{qty}</span>
          <button
            type="button"
            onClick={inc}
            className="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-rose-600"
            aria-label="הוסף כמות"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => addItem(productId, qty)}
          className="flex-1 border-2 border-rose-600 text-rose-600 font-semibold rounded-full py-3 hover:bg-rose-50 transition-colors"
        >
          הוספה לעגלה
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full py-3 transition-colors"
        >
          קנייה מיידית
        </button>
      </div>
    </div>
  );
}
