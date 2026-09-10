import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import CountdownTimer from "@/components/CountdownTimer";
import { categories, deals, featured } from "@/data/products";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-10">
      {/* Hero */}
      <section className="rounded-2xl overflow-hidden bg-gradient-to-l from-rose-600 via-pink-600 to-orange-500 text-white p-8 sm:p-14 flex flex-col gap-4">
        <span className="inline-block w-fit bg-white/20 text-xs font-semibold px-3 py-1 rounded-full">
          🎉 מבצע פתיחת האתר
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight max-w-2xl">
          כל מה שאתם צריכים, במחירים שלא תמצאו בשום מקום אחר
        </h1>
        <p className="text-white/90 max-w-xl">
          אלפי מוצרים באלקטרוניקה, אופנה, בית ועוד — עד 70% הנחה ומשלוח חינם בהזמנה מעל ₪99.
        </p>
        <Link
          href="/products"
          className="w-fit bg-white text-rose-600 font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
        >
          לצפייה בכל המוצרים ←
        </Link>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-xl font-bold mb-4">קניות לפי קטגוריה</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products?category=${c.slug}`}
              className="group flex flex-col items-center gap-2 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center text-2xl group-hover:scale-105 transition-transform`}
              >
                {c.emoji}
              </div>
              <span className="text-xs text-center text-gray-700">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Flash deals */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span>⚡ מבצעי בזק</span>
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>מסתיים בעוד</span>
            <CountdownTimer />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {deals.slice(0, 10).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section>
        <h2 className="text-xl font-bold mb-4">🌟 מומלצים במיוחד</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {featured.slice(0, 10).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
