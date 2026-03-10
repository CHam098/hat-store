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
        className="fixed inset-0 bg-black/30 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl flex flex-col">
        <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-neutral-400 hover:text-black text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-neutral-400 text-sm">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.color}`}
                  className="flex gap-4"
                >
                  <div className="w-20 h-20 bg-neutral-100 rounded-lg flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {item.color}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.color,
                              item.quantity - 1
                            )
                          }
                          className="w-6 h-6 border border-neutral-300 rounded text-xs flex items-center justify-center hover:bg-neutral-100"
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
                          className="w-6 h-6 border border-neutral-300 rounded text-xs flex items-center justify-center hover:bg-neutral-100"
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
                          className="text-neutral-400 hover:text-black text-xs"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-neutral-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total</span>
                <span className="text-lg font-semibold">${totalPrice}</span>
              </div>
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full bg-black text-white text-center py-3 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
