import Link from "next/link";
import ProductTile from "./ProductTile";
import { formatPrice, discountPercent } from "@/data/products";

export default function ProductCard({ product }) {
  const discount = discountPercent(product);

  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
    >
      <div className="relative aspect-square">
        <ProductTile product={product} className="w-full h-full" />
        {discount > 0 && (
          <span className="absolute top-2 start-2 bg-rose-600 text-white text-xs font-bold px-2 py-0.5 rounded">
            -{discount}%
          </span>
        )}
      </div>
      <div className="p-3 flex flex-col gap-1 flex-1">
        <p className="text-sm text-gray-700 line-clamp-2 min-h-10 group-hover:text-rose-600">
          {product.name}
        </p>
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-rose-600 font-bold text-lg">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-gray-400 text-xs line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <span className="text-amber-500">★ {product.rating}</span>
          <span>· נמכרו {product.sold.toLocaleString("he-IL")}</span>
        </div>
      </div>
    </Link>
  );
}
