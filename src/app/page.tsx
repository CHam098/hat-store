import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Hats, refined.
        </h1>
        <p className="mt-4 text-neutral-500 max-w-md mx-auto">
          A curated collection of quality hats. Simple designs, lasting craft.
        </p>
      </section>

      {/* Featured */}
      <section>
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-6">
          Featured
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* All Products */}
      <section className="mt-16">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-6">
          All Hats
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
