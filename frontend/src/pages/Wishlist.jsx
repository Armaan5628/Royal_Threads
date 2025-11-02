import React from "react";
import Header from "../components/Header";
import { useWishlist } from "./WishlistContext"; // ✅ Import wishlist hook

export default function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔹 Global Header */}
      <Header />

      {/* 🔹 Wishlist Section */}
      <section className="py-16 px-6 md:px-20 bg-brand-mist flex-1">
        <h1 className="text-4xl font-serif font-bold text-center text-brand-navy mb-10">
          My Wishlist ❤️
        </h1>

        {wishlist.length === 0 ? (
          <p className="text-center text-lg text-brand-charcoal">
            Your wishlist is empty. Start adding some favorites!
          </p>
        ) : (
          <div>
            {/* Buttons Row */}
            <div className="flex justify-end mb-6">
              <button
                onClick={clearWishlist}
                className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Clear Wishlist
              </button>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-luxe overflow-hidden hover:scale-105 transition"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-brand-gold font-bold mt-2">
                      ${item.price}.00
                    </p>

                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="mt-3 px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
                    >
                      Remove ❌
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-brand-navy text-brand-ivory py-8 text-center">
        <p className="text-sm">© 2025 MyClothing. All rights reserved.</p>
      </footer>
    </div>
  );
}
