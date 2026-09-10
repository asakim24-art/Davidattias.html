import { Heebo } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

export const metadata = {
  title: "Pick Them Pay - קניות אונליין במחירים מטורפים",
  description: "אלפי מוצרים במחירים הכי משתלמים - אלקטרוניקה, אופנה, בית וגינה ועוד. משלוח מהיר ותשלום מאובטח.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
