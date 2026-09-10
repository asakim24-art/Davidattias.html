"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";

export default function Header() {
  const router = useRouter();
  const { totalQty } = useCart();
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
  }

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="bg-gradient-to-l from-rose-600 to-orange-500 text-white text-xs sm:text-sm text-center py-1.5 px-4">
        🚚 משלוח חינם בהזמנה מעל ₪99 · 🔥 מבצעי פתיחה עד -70%
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 sm:gap-6">
        <Link href="/" className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Pick Them Pay" width={190} height={38} />
        </Link>

        <form onSubmit={handleSearch} className="flex-1 flex items-center">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="חפשו מוצרים, מותגים וקטגוריות..."
            className="w-full rounded-s-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <button
            type="submit"
            aria-label="חיפוש"
            className="rounded-e-full bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 text-sm font-medium"
          >
            חיפוש
          </button>
        </form>

        <Link
          href="/cart"
          className="relative flex items-center gap-1 shrink-0 text-gray-700 hover:text-rose-600 font-medium"
        >
          <span className="text-2xl">🛒</span>
          {totalQty > 0 && (
            <span className="absolute -top-2 -end-2 bg-rose-600 text-white text-[11px] leading-none rounded-full h-5 min-w-5 px-1 flex items-center justify-center">
              {totalQty}
            </span>
          )}
          <span className="hidden sm:inline">עגלה</span>
        </Link>
      </div>

      <nav className="border-t border-gray-100 overflow-x-auto">
        <ul className="max-w-7xl mx-auto px-4 flex gap-5 py-2 text-sm text-gray-600 whitespace-nowrap">
          <li>
            <Link href="/products" className="hover:text-rose-600 font-medium">
              כל המוצרים
            </Link>
          </li>
          {categories.map((c) => (
            <li key={c.slug}>
              <Link href={`/products?category=${c.slug}`} className="hover:text-rose-600">
                {c.emoji} {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
