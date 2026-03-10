export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-sm font-semibold tracking-tight">HATWELL</p>
            <p className="text-xs text-neutral-500 mt-1">
              Minimalist hats, maximum style.
            </p>
          </div>
          <div className="flex gap-12 text-xs text-neutral-500">
            <div className="space-y-2">
              <p className="text-black font-medium">Shop</p>
              <p>All Hats</p>
              <p>Casual</p>
              <p>Formal</p>
              <p>Outdoor</p>
            </div>
            <div className="space-y-2">
              <p className="text-black font-medium">Info</p>
              <p>Shipping</p>
              <p>Returns</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-neutral-400 mt-12">
          &copy; {new Date().getFullYear()} Hatwell. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
