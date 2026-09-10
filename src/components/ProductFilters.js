"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { categories } from "@/data/products";

export default function ProductFilters({ resultCount }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "relevance";
  const q = searchParams.get("q") || "";

  function updateParam(key, value) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
      <div className="text-sm text-gray-600">
        {q && (
          <span>
            תוצאות עבור <strong>&quot;{q}&quot;</strong> ·{" "}
          </span>
        )}
        נמצאו {resultCount} מוצרים
      </div>
      <div className="flex flex-wrap gap-2">
        <select
          value={category}
          onChange={(e) => updateParam("category", e.target.value)}
          className="border border-gray-300 rounded-full px-3 py-1.5 text-sm bg-white"
        >
          <option value="">כל הקטגוריות</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.emoji} {c.name}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => updateParam("sort", e.target.value)}
          className="border border-gray-300 rounded-full px-3 py-1.5 text-sm bg-white"
        >
          <option value="relevance">מיון: רלוונטיות</option>
          <option value="price-asc">מחיר: מהנמוך לגבוה</option>
          <option value="price-desc">מחיר: מהגבוה לנמוך</option>
          <option value="rating">דירוג הגבוה ביותר</option>
          <option value="sold">הכי נמכרים</option>
        </select>
      </div>
    </div>
  );
}
