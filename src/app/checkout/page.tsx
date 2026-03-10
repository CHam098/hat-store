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
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold">Order confirmed</h1>
          <p className="text-neutral-500 mt-2 text-sm">
            Thank you for your purchase. Your hats are on their way.
          </p>
          <Link
            href="/"
            className="inline-block mt-8 text-sm text-neutral-500 hover:text-black transition-colors"
          >
            &larr; Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold">Your cart is empty</h1>
        <Link
          href="/"
          className="inline-block mt-4 text-sm text-neutral-500 hover:text-black transition-colors"
        >
          &larr; Back to shop
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
      <Link href="/" className="text-sm text-neutral-500 hover:text-black transition-colors">
        &larr; Back to shop
      </Link>

      <h1 className="text-3xl font-semibold mt-8">Checkout</h1>

      <div className="mt-8 grid md:grid-cols-5 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6">
          <div>
            <h2 className="text-sm font-medium mb-4">Contact</h2>
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <h2 className="text-sm font-medium mb-4">Shipping</h2>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First name"
                required
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="text"
                placeholder="Last name"
                required
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              required
              className="mt-3 w-full border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
            />
            <div className="grid grid-cols-3 gap-3 mt-3">
              <input
                type="text"
                placeholder="City"
                required
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="text"
                placeholder="State"
                required
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="text"
                placeholder="ZIP"
                required
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium mb-4">Payment</h2>
            <input
              type="text"
              placeholder="Card number"
              required
              className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
            />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <input
                type="text"
                placeholder="MM / YY"
                required
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="text"
                placeholder="CVC"
                required
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            Place Order &mdash; ${totalPrice}
          </button>
        </form>

        {/* Order Summary */}
        <div className="md:col-span-2">
          <h2 className="text-sm font-medium mb-4">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.color}`}
                className="flex gap-3"
              >
                <div className="w-16 h-16 bg-neutral-100 rounded-lg flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.product.name}</p>
                  <p className="text-xs text-neutral-500">
                    {item.color} &middot; Qty {item.quantity}
                  </p>
                </div>
                <p className="text-sm">
                  ${item.product.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-neutral-200">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Shipping</span>
              <span className="text-neutral-500">Free</span>
            </div>
            <div className="flex justify-between font-semibold mt-4 pt-4 border-t border-neutral-200">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
