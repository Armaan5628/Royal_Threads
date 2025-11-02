import React from "react";
import Header from "../components/Header";
import { useCart } from "./CartContext";   // ✅ Cart Context
import { useWishlist } from "./WishlistContext"; // ✅ Wishlist Context
import { FaHeart } from "react-icons/fa"; // ✅ Heart Icon

export default function Jewelry() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const products = [
    { id: 17, title: "Diamond Necklace", price: 199, img: "https://picsum.photos/id/217/400/400" },
    { id: 18, title: "Gold Earrings", price: 149, img: "https://picsum.photos/id/218/400/400" },
    { id: 19, title: "Pearl Bracelet", price: 129, img: "https://picsum.photos/id/219/400/400" },
    { id: 20, title: "Royal Ring", price: 99, img: "https://picsum.photos/id/220/400/400" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* 🔹 Hero Section */}
      <section className="py-20 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy">
          Jewelry Collection
        </h1>
        <p className="mt-4 text-gray-600">Elegant pieces crafted just for you.</p>
      </section>

      {/* 🔹 Product Grid */}
      <section className="py-16 px-6 md:px-20 bg-brand-mist flex-1">
        <h2 className="text-3xl font-bold text-center text-brand-navy mb-10">
          Sparkle with Elegance
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl2 shadow-luxe overflow-hidden hover:scale-105 transition"
            >
              {/* Product Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-brand-gold font-bold mt-2">${item.price}.00</p>

                {/* ✅ Buttons Row */}
                <div className="flex justify-center gap-3 mt-4">
                  {/* 🛒 Add to Cart */}
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 py-2 px-4 rounded-lg bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-charcoal transition"
                  >
                    Add to Cart
                  </button>

                  {/* ❤️ Add to Wishlist */}
                  <button
                    onClick={() => addToWishlist(item)}
                    className="px-4 py-2 rounded-lg border border-brand-gold text-brand-navy hover:bg-brand-gold hover:text-white transition"
                  >
                    <FaHeart className="text-pink-500" />
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
