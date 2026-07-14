"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl tracking-[0.35em] pl-[0.35em]">
            HATWELL
          </span>
          <span className="text-[9px] uppercase tracking-[0.45em] text-muted mt-1 pl-[0.45em]">
            Maison de Chapellerie
          </span>
        </Link>
        <nav className="flex items-center gap-10">
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.25em] text-foreground/70 hover:text-primary transition-colors"
          >
            Collection
          </Link>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-[11px] uppercase tracking-[0.25em] text-foreground/70 hover:text-primary transition-colors"
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2.5 -right-5 bg-primary text-primary-foreground text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
