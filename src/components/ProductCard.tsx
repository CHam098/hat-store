"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative aspect-square bg-surface overflow-hidden mb-4">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <span className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.25em] text-muted">
          {product.category}
        </span>
      </div>
      <div className="space-y-1 text-center">
        <h3 className="font-serif text-lg leading-snug group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
