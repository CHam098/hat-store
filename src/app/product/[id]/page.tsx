"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <Link href="/" className="text-sm text-neutral-500 mt-4 inline-block hover:text-black">
          &larr; Back to shop
        </Link>
      </div>
    );
  }

  const color = selectedColor || product.colors[0];

  const handleAdd = () => {
    addItem(product, color);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link href="/" className="text-sm text-neutral-500 hover:text-black transition-colors">
        &larr; Back to shop
      </Link>

      <div className="mt-8 grid md:grid-cols-2 gap-12">
        <div className="aspect-square bg-neutral-100 rounded-xl">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-full object-contain p-16"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs text-neutral-400 uppercase tracking-widest">
            {product.category}
          </p>
          <h1 className="text-3xl font-semibold mt-2">{product.name}</h1>
          <p className="text-2xl mt-2">${product.price}</p>
          <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-3">
              Color
            </p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                    color === c
                      ? "border-black bg-black text-white"
                      : "border-neutral-300 hover:border-neutral-500"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="mt-8 bg-black text-white py-3 px-8 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            {added ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
