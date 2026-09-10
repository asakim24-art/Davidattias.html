import { notFound } from "next/navigation";
import Link from "next/link";
import ProductTile from "@/components/ProductTile";
import ProductCard from "@/components/ProductCard";
import ProductActions from "@/components/ProductActions";
import {
  getProductById,
  getRelatedProducts,
  getCategoryBySlug,
  formatPrice,
  discountPercent,
  products,
} from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: `${product.name} - Pick Them Pay`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product);
  const discount = discountPercent(product);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <nav className="text-xs text-gray-500 mb-4 flex gap-1">
        <Link href="/" className="hover:text-rose-600">בית</Link>
        <span>/</span>
        <Link href={`/products?category=${category.slug}`} className="hover:text-rose-600">
          {category.name}
        </Link>
      </nav>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative rounded-2xl overflow-hidden aspect-square">
          <ProductTile product={product} className="w-full h-full" />
          {discount > 0 && (
            <span className="absolute top-3 start-3 bg-rose-600 text-white text-sm font-bold px-3 py-1 rounded-full">
              חיסכון של {discount}%
            </span>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="text-amber-500 font-medium">★ {product.rating}</span>
            <span>נמכרו {product.sold.toLocaleString("he-IL")} יחידות</span>
          </div>

          <div className="bg-rose-50 rounded-xl p-4 flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-rose-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <ProductActions productId={product.id} />

          <div className="border-t border-gray-100 pt-4 mt-2 grid grid-cols-2 gap-3 text-sm text-gray-600">
            <span>🚚 משלוח מהיר עד הבית</span>
            <span>🔒 תשלום מאובטח</span>
            <span>↩️ 30 יום להחזרה</span>
            <span>✅ אחריות יבואן רשמי</span>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold mb-4">מוצרים נוספים שיעניינו אתכם</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
