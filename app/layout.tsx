import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini Project – Product Catalog",
  description: "aplikasi kecil product katalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        antialiased min-h-screen bg-gray-50 text-gray-900`}
      >
        <header className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold text-blue-600">Mini Project – Product Catalog</h1>
                <nav className="space-x-4">
                    <Link
                        href="/products/"
                        className="text-gray-700 hover:text-blue-600 transition">
                        Products
                    </Link>
                </nav>
            </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-6">{children}</main>
      </body>
    </html>
  );
}
