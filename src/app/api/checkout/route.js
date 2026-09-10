import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getProductById } from "@/data/products";

const CURRENCY = process.env.STRIPE_CURRENCY || "ils";

export async function POST(request) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      {
        error:
          "התשלומים עדיין לא מוגדרים באתר. יש להוסיף STRIPE_SECRET_KEY בקובץ .env.local (ראו README).",
      },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "בקשה לא תקינה" }, { status: 400 });
  }

  const cartItems = Array.isArray(body?.items) ? body.items : [];
  if (cartItems.length === 0) {
    return NextResponse.json({ error: "העגלה ריקה" }, { status: 400 });
  }

  // Prices are always resolved server-side from the catalog, never trusted from the client.
  const lineItems = [];
  for (const item of cartItems) {
    const product = getProductById(item.id);
    const qty = Math.min(99, Math.max(1, Number(item.qty) || 1));
    if (!product) continue;
    lineItems.push({
      quantity: qty,
      price_data: {
        currency: CURRENCY,
        unit_amount: Math.round(product.price * 100),
        product_data: {
          name: product.name,
          description: product.description,
        },
      },
    });
  }

  if (lineItems.length === 0) {
    return NextResponse.json({ error: "לא נמצאו מוצרים תקינים בעגלה" }, { status: 400 });
  }

  const origin = request.nextUrl.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      shipping_address_collection: { allowed_countries: ["IL"] },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json({ error: err.message || "שגיאה ביצירת התשלום" }, { status: 500 });
  }
}
