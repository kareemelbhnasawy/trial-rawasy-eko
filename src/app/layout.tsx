import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/plugins.css";
import "../../public/assets/css/style.css";

import { CartProvider } from "../components/header/CartContext";
import { WishlistProvider } from "../components/header/WishlistContext";
import { CompareProvider } from "../components/header/CompareContext";
import { OrderProvider } from "../components/header/OrderContext";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rawasy (رواسي) - Construction Materials B2B/B2C Marketplace",
  description: "Leading B2B/B2C marketplace for construction materials, tools, and equipment. Shop building materials, cement, steel, tools, and more.",
  icons: {
    icon: [
      {
        url: "/assets/images/fav.png",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} rtl-support`}>
        <CompareProvider>
          <WishlistProvider>
            <CartProvider>
              <OrderProvider>
                {children}
                <ToastContainer position="top-right" autoClose={3000} />
              </OrderProvider>
            </CartProvider>
          </WishlistProvider>
        </CompareProvider>
      </body>
    </html>
  );
}
