import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import { products, getCategoryBySlug } from "@/data/products";

export const metadata = {
  title: "כל המוצרים - Pick Them Pay",
};

function sortProducts(list, sort) {
  const sorted = [...list];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "sold":
      return sorted.sort((a, b) => b.sold - a.sold);
    default:
      return sorted;
  }
}

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const q = (params.q || "").toLowerCase().trim();
  const categorySlug = params.category || "";
  const dealOnly = params.deal === "1";
  const sort = params.sort || "relevance";

  let list = products;
  if (q) {
    list = list.filter((p) => p.name.toLowerCase().includes(q));
  }
  if (categorySlug) {
    list = list.filter((p) => p.category === categorySlug);
  }
  if (dealOnly) {
    list = list.filter((p) => p.deal);
  }
  list = sortProducts(list, sort);

  const category = categorySlug ? getCategoryBySlug(categorySlug) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">
        {category ? `${category.emoji} ${category.name}` : "כל המוצרים"}
      </h1>

      <Suspense fallback={<div className="h-9" />}>
        <ProductFilters resultCount={list.length} />
      </Suspense>

      {list.length === 0 ? (
        <p className="text-gray-500 py-16 text-center">לא נמצאו מוצרים תואמים לחיפוש שלך.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
