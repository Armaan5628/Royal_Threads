import React from "react";
import Header from "../components/Header";
import { useCart } from "./CartContext";   // ✅ Cart Context
import { useWishlist } from "./WishlistContext"; // ✅ Wishlist Context
import { FaHeart } from "react-icons/fa"; // ✅ Heart Icon

export default function Signature() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const products = [
    { id: 1, title: "Royal Designer Suit", price: 799, img: "/assets/images/signature_suit.jpg" },
    { id: 2, title: "Luxury Evening Gown", price: 899, img: "/assets/images/signature_gown.jpg" },
    { id: 3, title: "Premium Saree", price: 699, img: "/assets/images/signature_saree.jpg" },
    { id: 4, title: "Exclusive Sherwani", price: 999, img: "/assets/images/signature_sherwani.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔹 Global Header */}
      <Header />

      {/* 🔹 Hero Section */}
      <section className="py-20 text-center bg-gradient-to-b from-brand-gold/20 to-white">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-navy mb-4">
          The Signature Collection
        </h1>
        <p className="text-lg text-brand-charcoal/80 max-w-2xl mx-auto">
          Handpicked luxury pieces that define sophistication and timeless elegance.
        </p>
      </section>

      {/* 🔹 Product Grid */}
      <section className="px-6 md:px-20 py-16 bg-brand-mist flex-1">
        <h2 className="text-3xl font-bold text-center text-brand-navy mb-10">
          Exclusive Signature Styles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl2 shadow-luxe overflow-hidden hover:scale-105 transition-transform duration-300"
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
                    className="flex-1 py-2 px-4 rounded-lg bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-charcoal transition-colors"
                  >
                    Add to Cart
                  </button>

                  {/* ❤️ Add to Wishlist */}
                  <button
                    onClick={() => addToWishlist(item)}
                    className="px-4 py-2 rounded-lg border border-brand-gold text-brand-navy hover:bg-brand-gold hover:text-white transition-colors"
                  >
                    <FaHeart />
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
