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
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-3xl">Piece not found</h1>
        <Link
          href="/"
          className="text-[11px] uppercase tracking-[0.25em] text-muted mt-6 inline-block hover:text-primary transition-colors"
        >
          &larr; Return to collection
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
      <Link
        href="/"
        className="text-[11px] uppercase tracking-[0.25em] text-muted hover:text-primary transition-colors"
      >
        &larr; Return to collection
      </Link>

      <div className="mt-10 grid md:grid-cols-2 gap-16">
        <div className="aspect-square bg-surface">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-full object-contain p-16"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="rule-flourish text-[10px] uppercase tracking-[0.35em] text-accent">
            {product.category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl mt-5 leading-tight text-balance">
            {product.name}
          </h1>
          <p className="font-serif text-2xl mt-4">${product.price}</p>
          <p className="text-sm text-muted mt-6 leading-relaxed max-w-md text-pretty">
            {product.description}
          </p>

          <div className="mt-10">
            <p className="text-[10px] font-medium text-muted uppercase tracking-[0.3em] mb-4">
              Colour
            </p>
            <div className="flex flex-wrap gap-2.5">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] border transition-colors ${
                    color === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-foreground/80 hover:border-accent hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="mt-10 bg-primary text-primary-foreground py-4 px-10 text-[11px] uppercase tracking-[0.3em] hover:bg-accent transition-colors self-start"
          >
            {added ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
