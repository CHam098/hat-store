"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-4xl">Order confirmed</h1>
          <p className="text-muted mt-4 text-sm leading-relaxed">
            Thank you for your purchase. Each piece is prepared with care and on
            its way to you.
          </p>
          <Link
            href="/"
            className="inline-block mt-10 text-[11px] uppercase tracking-[0.25em] text-muted hover:text-primary transition-colors"
          >
            &larr; Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-4xl">Your selection is empty</h1>
        <Link
          href="/"
          className="inline-block mt-6 text-[11px] uppercase tracking-[0.25em] text-muted hover:text-primary transition-colors"
        >
          &larr; Return to collection
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="text-[11px] uppercase tracking-[0.25em] text-muted hover:text-primary transition-colors"
      >
        &larr; Return to collection
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl mt-8">Checkout</h1>

      <div className="mt-12 grid md:grid-cols-5 gap-16">
        {/* Form */}
        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-8">
          <div>
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-accent mb-5">
              Contact
            </h2>
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full bg-transparent border border-border px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-accent mb-5">
              Shipping
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First name"
                required
                className="bg-transparent border border-border px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="text"
                placeholder="Last name"
                required
                className="bg-transparent border border-border px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              required
              className="mt-3 w-full bg-transparent border border-border px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            />
            <div className="grid grid-cols-3 gap-3 mt-3">
              <input
                type="text"
                placeholder="City"
                required
                className="bg-transparent border border-border px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="text"
                placeholder="State"
                required
                className="bg-transparent border border-border px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="text"
                placeholder="ZIP"
                required
                className="bg-transparent border border-border px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-accent mb-5">
              Payment
            </h2>
            <input
              type="text"
              placeholder="Card number"
              required
              className="w-full bg-transparent border border-border px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <input
                type="text"
                placeholder="MM / YY"
                required
                className="bg-transparent border border-border px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="text"
                placeholder="CVC"
                required
                className="bg-transparent border border-border px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-accent transition-colors"
          >
            Place Order &mdash; ${totalPrice}
          </button>
        </form>

        {/* Order Summary */}
        <div className="md:col-span-2">
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-accent mb-5">
            Order Summary
          </h2>
          <div className="space-y-5">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.color}`}
                className="flex gap-3"
              >
                <div className="w-16 h-16 bg-surface flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-serif text-base">{item.product.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-1">
                    {item.color} &middot; Qty {item.quantity}
                  </p>
                </div>
                <p className="text-sm">
                  ${item.product.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-5 border-t border-border">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-muted">Shipping</span>
              <span className="text-muted">Complimentary</span>
            </div>
            <div className="flex justify-between mt-5 pt-5 border-t border-border">
              <span className="text-[11px] uppercase tracking-[0.25em] text-muted self-center">
                Total
              </span>
              <span className="font-serif text-2xl">${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
