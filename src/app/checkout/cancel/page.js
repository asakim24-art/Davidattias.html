import Link from "next/link";

export const metadata = { title: "התשלום בוטל - Pick Them Pay" };

export default function CheckoutCancelPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center flex flex-col items-center gap-4">
      <span className="text-5xl">🛑</span>
      <h1 className="text-2xl font-bold">התשלום בוטל</h1>
      <p className="text-gray-600">לא בוצע חיוב. העגלה שלכם עדיין שמורה ותוכלו להשלים את ההזמנה בכל רגע.</p>
      <Link
        href="/cart"
        className="mt-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full px-6 py-3"
      >
        חזרה לעגלה
      </Link>
    </div>
  );
}
