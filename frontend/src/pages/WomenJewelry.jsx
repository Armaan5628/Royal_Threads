import React from "react";
import Header from "../components/Header";
import { useCart } from "./CartContext";   // ✅ Cart Context
import { useWishlist } from "./WishlistContext"; // ✅ Wishlist Context

export default function WomenJewelry() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const products = [
    { id: 1, title: "Gold Necklace", price: 199, img: "https://picsum.photos/id/306/500/500" },
    { id: 2, title: "Diamond Earrings", price: 249, img: "https://picsum.photos/id/307/500/500" },
    { id: 3, title: "Pearl Bracelet", price: 149, img: "https://picsum.photos/id/308/500/500" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* 🔹 Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://picsum.photos/id/305/1600/800')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-5xl font-serif font-bold text-white z-10">
          Jewelry & Accessories
        </h1>
      </section>

      {/* 🔹 Products */}
      <section className="py-16 px-6 md:px-20 bg-brand-mist flex-1">
        <h2 className="text-3xl font-serif font-bold text-center text-brand-navy">
          Sparkle with Elegance
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
