"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          HATWELL
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-neutral-600 hover:text-black transition-colors"
          >
            Shop
          </Link>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-sm text-neutral-600 hover:text-black transition-colors"
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
