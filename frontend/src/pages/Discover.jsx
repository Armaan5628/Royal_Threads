import React from "react";
import Header from "../components/Header";
import { useCart } from "./CartContext"; // ✅ Cart Context
import { useWishlist } from "./WishlistContext"; // ✅ Wishlist Context
import { FaHeart } from "react-icons/fa"; // ✅ Heart Icon

export default function Discover() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const products = [
    {
      id: 1,
      title: "Behind the Craft",
      desc: "Explore how our artisans handcraft each piece with precision and luxury fabrics.",
      price: 129,
      img: "/assets/images/Handcraft.jpg",
    },
    {
      id: 2,
      title: "Trending Now",
      desc: "See the latest runway-inspired looks tailored for timeless elegance.",
      price: 159,
      img: "/assets/images/Trending.jpg",
    },
    {
      id: 3,
      title: "Royal Inspirations",
      desc: "Fashion inspired by royalty — styles that make you feel like a queen or king.",
      price: 199,
      img: "/assets/images/RP.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔹 Global Header */}
      <Header />

      {/* 🔹 Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/DL.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-5xl md:text-6xl font-serif font-bold text-white z-10 drop-shadow-lg">
          Discover Luxury
        </h1>
      </section>

      {/* 🔹 Discover Collection */}
      <section className="py-16 px-6 md:px-20 bg-brand-mist flex-1">
        <h2 className="text-3xl font-serif font-bold text-brand-navy text-center">
          Stories & Inspirations
        </h2>
        <p className="text-center mt-2 text-brand-charcoal/80 max-w-2xl mx-auto">
          Dive into the world of elegance — fashion stories, trends, and behind-the-scenes craftsmanship.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-luxe overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-navy">{item.title}</h3>
                <p className="text-brand-charcoal/80 mt-2 text-sm">{item.desc}</p>
                <p className="text-brand-gold font-bold mt-3">${item.price}.00</p>

                {/* ✅ Buttons Row */}
                <div className="flex justify-between gap-3 mt-4">
                  {/* 🛒 Add to Cart */}
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 py-2 rounded-lg bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-charcoal transition"
                  >
                    Add to Cart
                  </button>

                  {/* ❤️ Add to Wishlist */}
                  <button
                    onClick={() => addToWishlist(item)}
                    className="p-2 rounded-full border border-brand-gold hover:bg-brand-gold hover:text-white transition"
                  >
                    <FaHeart className="text-pink-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-gold text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Join Our Luxury Journal
        </h2>
        <p className="text-lg mb-6">
          Subscribe to get exclusive stories, styling tips, and royal inspirations.
        </p>
        <a
          href="/signup"
          className="px-8 py-3 bg-white text-brand-navy font-semibold rounded-2xl shadow-luxe hover:bg-brand-ivory hover:text-brand-gold transition"
        >
          Subscribe Now
        </a>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-brand-navy text-brand-ivory py-8 text-center">
        <p className="text-sm">© 2025 MyClothing. All rights reserved.</p>
      </footer>
    </div>
  );
}
