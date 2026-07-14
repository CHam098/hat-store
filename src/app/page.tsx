import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="rule-flourish text-[11px] uppercase tracking-[0.4em] text-accent">
          Est. Heritage Millinery
        </span>
        <h1 className="mt-8 font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-balance">
          The art of the
          <br />
          <span className="italic">refined</span> silhouette
        </h1>
        <p className="mt-6 text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed text-pretty">
          A considered collection of finely crafted hats — shaped by hand,
          finished with intention, and made to be worn for a lifetime.
        </p>
        <div className="mt-10">
          <a
            href="#collection"
            className="inline-block bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.3em] px-10 py-4 hover:bg-accent transition-colors"
          >
            Explore the Collection
          </a>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between border-b border-border pb-4 mb-10">
          <h2 className="font-serif text-2xl md:text-3xl">The Signature Edit</h2>
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted">
            Curated
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* All Products */}
      <section id="collection" className="max-w-6xl mx-auto px-6 mt-24">
        <div className="flex items-end justify-between border-b border-border pb-4 mb-10">
          <h2 className="font-serif text-2xl md:text-3xl">The Full Collection</h2>
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted">
            {products.length} Styles
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
