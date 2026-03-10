export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  colors: string[];
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "classic-fedora",
    name: "Classic Fedora",
    price: 89,
    description:
      "Timeless wool felt fedora with a grosgrain ribbon band. A refined choice for any occasion.",
    image: "/hats/fedora.svg",
    category: "Formal",
    colors: ["Black", "Charcoal", "Navy"],
    featured: true,
  },
  {
    id: "canvas-baseball-cap",
    name: "Canvas Baseball Cap",
    price: 34,
    description:
      "Washed cotton canvas cap with an adjustable brass buckle closure. Relaxed, everyday style.",
    image: "/hats/baseball.svg",
    category: "Casual",
    colors: ["Khaki", "Black", "Olive", "Navy"],
    featured: true,
  },
  {
    id: "straw-panama",
    name: "Straw Panama",
    price: 120,
    description:
      "Hand-woven toquilla straw panama hat. Lightweight and breathable for warm-weather elegance.",
    image: "/hats/panama.svg",
    category: "Formal",
    colors: ["Natural", "White"],
    featured: true,
  },
  {
    id: "wool-beanie",
    name: "Merino Wool Beanie",
    price: 42,
    description:
      "Soft merino wool knit beanie with a folded cuff. Warm, simple, and versatile.",
    image: "/hats/beanie.svg",
    category: "Casual",
    colors: ["Charcoal", "Cream", "Burgundy", "Forest"],
    featured: false,
  },
  {
    id: "wide-brim-sun",
    name: "Wide Brim Sun Hat",
    price: 68,
    description:
      "Packable wide-brim sun hat with UPF 50+ protection. Function meets minimalist style.",
    image: "/hats/sunhat.svg",
    category: "Outdoor",
    colors: ["Natural", "Black", "Tan"],
    featured: true,
  },
  {
    id: "leather-flat-cap",
    name: "Leather Flat Cap",
    price: 95,
    description:
      "Genuine leather flat cap with a satin lining. A modern take on heritage craftsmanship.",
    image: "/hats/flatcap.svg",
    category: "Formal",
    colors: ["Brown", "Black"],
    featured: false,
  },
  {
    id: "bucket-hat",
    name: "Cotton Bucket Hat",
    price: 38,
    description:
      "Lightweight cotton bucket hat with a short downsloping brim. Casual comfort redefined.",
    image: "/hats/bucket.svg",
    category: "Casual",
    colors: ["Black", "Olive", "Stone", "Navy"],
    featured: false,
  },
  {
    id: "trucker-cap",
    name: "Mesh Trucker Cap",
    price: 28,
    description:
      "Classic trucker cap with a structured front panel and mesh back. Snapback closure.",
    image: "/hats/trucker.svg",
    category: "Casual",
    colors: ["Black/White", "Navy/White", "Red/Black"],
    featured: false,
  },
];
