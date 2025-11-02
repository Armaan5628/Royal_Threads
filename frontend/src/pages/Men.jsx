import React from "react";
import Header from "../components/Header";
import { useCart } from "../pages/CartContext";       // 🛒 Cart Context
import { useWishlist } from "../pages/WishlistContext"; // ❤️ Wishlist Context
import { FaHeart } from "react-icons/fa";             // ❤️ Icon

export default function Men() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const products = [
    { id: 1, title: "Jackets", price: 100, img: "/assets/images/Jackets.jpg" },
    { id: 2, title: "Jeans", price: 50, img: "/assets/images/Jeans.jpg" },
    { id: 3, title: "Shirts", price: 40, img: "/assets/images/Shirts.jpg" },
    { id: 4, title: "T-Shirts", price: 35, img: "/assets/images/T-Shirts.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔹 Header */}
      <Header />

      {/* 🔹 Hero Section */}
      <section className="py-20 text-center bg-gradient-to-b from-brand-mist to-white">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-navy mb-4">
          Men’s Royal Collection
        </h1>
        <p className="text-lg text-brand-charcoal/80 max-w-2xl mx-auto">
          Explore premium men’s wear — crafted for comfort, designed for elegance.
        </p>
      </section>

      {/* 🔹 Product Grid */}
      <section className="px-6 md:px-20 py-16 bg-brand-mist flex-1">
        <h2 className="text-3xl font-bold text-center text-brand-navy mb-10">
          Latest Men’s Styles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl2 shadow-luxe overflow-hidden hover:scale-105 transition"
            >
              {/* 🖼️ Product Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              {/* ℹ️ Product Info */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-brand-gold font-bold mt-2">
                  ${item.price}.00
                </p>

                {/* 🔘 Buttons */}
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
