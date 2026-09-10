"use client";

import { useState } from "react";
import Link from "next/link";
import ProductTile from "@/components/ProductTile";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const { lines, ready, updateQty, removeItem, subtotal, totalQty } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const shipping = subtotal >= 99 || subtotal === 0 ? 0 : 19.9;
  const total = subtotal + shipping;

  async function handleCheckout() {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: lines.map((l) => ({ id: l.id, qty: l.qty })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "אירעה שגיאה ביצירת התשלום");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  if (!ready) {
    return <div className="max-w-4xl mx-auto px-4 py-16 text-center text-gray-500">טוען עגלה...</div>;
  }

  if (lines.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center flex flex-col items-center gap-4">
        <span className="text-5xl">🛒</span>
        <h1 className="text-xl font-bold">העגלה שלכם ריקה</h1>
        <p className="text-gray-500">התחילו לקנות ומצאו מוצרים במחירים מדהימים.</p>
        <Link
          href="/products"
          className="bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full px-6 py-3"
        >
          לכל המוצרים
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">עגלת קניות ({totalQty} פריטים)</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-3">
          {lines.map((line) => (
            <div
              key={line.id}
              className="flex gap-4 bg-white rounded-xl p-3 shadow-sm border border-gray-100"
            >
              <Link href={`/products/${line.id}`} className="w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                <ProductTile product={line.product} className="w-full h-full" />
              </Link>
              <div className="flex-1 flex flex-col gap-2 min-w-0">
                <Link href={`/products/${line.id}`} className="text-sm text-gray-800 line-clamp-2 hover:text-rose-600">
                  {line.product.name}
                </Link>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center border border-gray-300 rounded-full">
                    <button
                      type="button"
                      onClick={() => updateQty(line.id, line.qty - 1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-rose-600"
                      aria-label="הפחת כמות"
                    >
                      −
                    </button>
                    <span className="w-7 text-center text-sm">{line.qty}</span>
                    <button
                      type="button"
                      onClick={() => updateQty(line.id, line.qty + 1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-rose-600"
                      aria-label="הוסף כמות"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-bold text-rose-600">
                    {formatPrice(line.product.price * line.qty)}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeItem(line.id)}
                className="text-gray-400 hover:text-rose-600 self-start"
                aria-label="הסר מהעגלה"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 h-fit flex flex-col gap-3">
          <h2 className="font-bold text-lg mb-1">סיכום הזמנה</h2>
          <div className="flex justify-between text-sm text-gray-600">
            <span>סכום ביניים</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>משלוח</span>
            <span>{shipping === 0 ? "חינם" : formatPrice(shipping)}</span>
          </div>
          {shipping > 0 && (
            <p className="text-xs text-emerald-600">
              הוסיפו עוד {formatPrice(99 - subtotal)} למשלוח חינם!
            </p>
          )}
          <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-lg">
            <span>סה&quot;כ לתשלום</span>
            <span className="text-rose-600">{formatPrice(total)}</span>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="button"
            onClick={handleCheckout}
            disabled={loading}
            className="mt-2 w-full bg-rose-600 hover:bg-rose-700 disabled:opacity-60 text-white font-semibold rounded-full py-3 transition-colors"
          >
            {loading ? "מעביר לתשלום..." : "מעבר לתשלום מאובטח 🔒"}
          </button>
          <p className="text-xs text-gray-400 text-center">התשלום מעובד באופן מאובטח על ידי Stripe</p>
        </div>
      </div>
    </div>
  );
}
