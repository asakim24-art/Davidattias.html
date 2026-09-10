import Link from "next/link";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-white font-semibold mb-3">קניות</h3>
          <ul className="space-y-2">
            <li><Link href="/products" className="hover:text-white">כל המוצרים</Link></li>
            <li><Link href="/products?deal=1" className="hover:text-white">מבצעים חמים</Link></li>
            <li><Link href="/cart" className="hover:text-white">עגלת קניות</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">קטגוריות</h3>
          <ul className="space-y-2">
            {categories.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link href={`/products?category=${c.slug}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">שירות לקוחות</h3>
          <ul className="space-y-2">
            <li>משלוחים והחזרות</li>
            <li>מדיניות פרטיות</li>
            <li>תנאי שימוש</li>
            <li>צור קשר</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">תשלום מאובטח</h3>
          <p className="mb-3">כל התשלומים מעובדים באופן מאובטח דרך Stripe.</p>
          <div className="flex gap-2 text-xs">
            <span className="bg-slate-800 rounded px-2 py-1">VISA</span>
            <span className="bg-slate-800 rounded px-2 py-1">Mastercard</span>
            <span className="bg-slate-800 rounded px-2 py-1">Apple Pay</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Pick Them Pay. כל הזכויות שמורות.
      </div>
    </footer>
  );
}
