import React from "react";
import Header from "../components/Header";
import { useCart } from "./CartContext";   // ✅ Cart Context
import { useWishlist } from "./WishlistContext"; // ✅ Wishlist Context

export default function WomenSarees() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const products = [
    { id: 1, title: "Kanjivaram Silk Saree", price: 499, img: "https://picsum.photos/id/311/500/500" },
    { id: 2, title: "Banarasi Gold Saree", price: 579, img: "https://picsum.photos/id/312/500/500" },
    { id: 3, title: "Modern Chiffon Saree", price: 389, img: "https://picsum.photos/id/313/500/500" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* 🔹 Hero Section */}
      <section className="py-20 text-center bg-brand-mist">
        <h1 className="text-5xl font-serif font-bold text-brand-navy">Luxury Sarees</h1>
        <p className="mt-4 text-lg text-brand-charcoal/80">
          Grace and tradition redefined in every drape.
        </p>
      </section>

      {/* 🔹 Products Grid */}
      <section className="px-6 md:px-20 py-16 flex-1 bg-brand-mist">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl2 shadow-luxe overflow-hidden hover:scale-105 transition"
            >
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-brand-gold font-bold mt-2">${item.price}.00</p>

                {/* ✅ Buttons Row */}
                <div className="flex gap-3 mt-4 justify-center">
                  {/* Add to Cart */}
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 py-2 px-4 rounded-lg bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-charcoal transition"
                  >
                    Add to Cart
                  </button>

                  {/* Add to Wishlist */}
                  <button
                    onClick={() => addToWishlist(item)}
                    className="px-4 py-2 rounded-lg border border-brand-gold text-brand-navy hover:bg-brand-gold hover:text-white transition"
                  >
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-brand-navy text-brand-ivory py-8 text-center">
        <p className="text-sm">© 2025 MyClothing. All rights reserved.</p>
      </footer>
    </div>
  );
}
