"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartSlider() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-foreground/40 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col border-l border-border">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="font-serif text-2xl">Your Selection</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-muted hover:text-primary text-2xl leading-none transition-colors"
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted text-[11px] uppercase tracking-[0.25em]">
              Your selection is empty
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.color}`}
                  className="flex gap-4"
                >
                  <div className="w-20 h-20 bg-surface flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-0.5">
                      {item.color}
                    </p>
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.color,
                              item.quantity - 1
                            )
                          }
                          className="w-6 h-6 border border-border text-xs flex items-center justify-center hover:border-accent hover:text-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          &minus;
                        </button>
                        <span className="text-sm w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.color,
                              item.quantity + 1
                            )
                          }
                          className="w-6 h-6 border border-border text-xs flex items-center justify-center hover:border-accent hover:text-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm">
                          ${item.product.price * item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            removeItem(item.product.id, item.color)
                          }
                          className="text-[10px] uppercase tracking-[0.15em] text-muted hover:text-primary transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.25em] text-muted">
                  Total
                </span>
                <span className="font-serif text-2xl">${totalPrice}</span>
              </div>
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full bg-primary text-primary-foreground text-center py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-accent transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
