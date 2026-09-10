import Link from "next/link";
import { getStripe } from "@/lib/stripe";
import ClearCartOnMount from "@/components/ClearCartOnMount";

export const metadata = { title: "התשלום התקבל - Pick Them Pay" };

export default async function CheckoutSuccessPage({ searchParams }) {
  const { session_id: sessionId } = await searchParams;

  let paid = Boolean(sessionId);
  let email = null;
  let amountTotal = null;

  const stripe = getStripe();
  if (stripe && sessionId) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      paid = session.payment_status === "paid";
      email = session.customer_details?.email || null;
      amountTotal = session.amount_total != null ? session.amount_total / 100 : null;
    } catch {
      paid = false;
    }
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center flex flex-col items-center gap-4">
      <ClearCartOnMount />
      <span className="text-5xl">{paid ? "✅" : "⚠️"}</span>
      <h1 className="text-2xl font-bold">
        {paid ? "התשלום התקבל בהצלחה!" : "לא הצלחנו לאמת את התשלום"}
      </h1>
      <p className="text-gray-600">
        {paid
          ? "תודה על ההזמנה! נשלח אליכם אישור למייל ונעדכן אתכם ברגע שההזמנה תצא למשלוח."
          : "אם בוצע חיוב, פנו אלינו עם מספר האסמכתא ונטפל בכך בהקדם."}
      </p>
      {email && <p className="text-sm text-gray-500">אישור נשלח אל {email}</p>}
      {amountTotal != null && <p className="text-lg font-bold text-rose-600">₪{amountTotal.toFixed(2)}</p>}
      <Link
        href="/products"
        className="mt-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full px-6 py-3"
      >
        להמשך קניות
      </Link>
    </div>
  );
}
