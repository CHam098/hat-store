export default function Footer() {
  return (
    <footer className="border-t border-border mt-28">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <p className="font-serif text-2xl tracking-[0.3em] pl-[0.3em]">
              HATWELL
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted mt-3 leading-relaxed">
              Heritage millinery, crafted by hand since day one.
            </p>
          </div>
          <div className="flex gap-16 text-[11px] uppercase tracking-[0.2em] text-muted">
            <div className="space-y-3">
              <p className="text-primary">Collection</p>
              <p>All Hats</p>
              <p>Casual</p>
              <p>Formal</p>
              <p>Outdoor</p>
            </div>
            <div className="space-y-3">
              <p className="text-primary">Maison</p>
              <p>Shipping</p>
              <p>Returns</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-14">
          &copy; {new Date().getFullYear()} Hatwell. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
