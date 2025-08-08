import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trident Panipat - Premium Residential Plots in Sector 19A, Panipat",
  description:
    "Discover Trident Panipat - Premium residential plots in Sector 19A, Panipat. NH-44 proximity, modern amenities, secure gated community. Starting from ₹2 Cr+. Call +91 9138331357",
  keywords:
    "Trident Panipat, Residential Plots Panipat, Sector 19A Panipat, NH-44 Property, Panipat Real Estate, Trident Realty",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  verification: {
    google: "ivT9k1Q-2Tf_znvxnZ3x7ZUg-eIC9qQYzhNly_oWZpg",
  },
  openGraph: {
    title: "Trident Panipat - Premium Residential Plots",
    description:
      "Premium residential plots in Sector 19A, Panipat with NH-44 proximity and modern amenities.",
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
