import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  const categories = [
    { title: "Women", img: "https://picsum.photos/id/1011/600/800", link: "/women" },
    { title: "Men", img: "https://picsum.photos/id/1012/600/800", link: "/men" },
    { title: "Accessories", img: "https://picsum.photos/id/1013/600/800", link: "/accessories" },
    { title: "Jewelry", img: "https://picsum.photos/id/1014/600/800", link: "/jewelry" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔹 Global Header */}
      <Header />

      {/* 🔹 Hero Section */}
      <section className="py-16 text-center bg-gradient-to-b from-brand-mist to-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy">
          Discover Your Royal Style
        </h1>
        <p className="mt-4 text-lg text-brand-charcoal/80">
          Curated collections crafted for elegance.
        </p>
        <a
          href="#collections"
          className="inline-block mt-6 px-8 py-3 rounded-2xl bg-brand-gold text-brand-charcoal font-semibold shadow-luxe hover:bg-brand-navy hover:text-brand-ivory transition"
        >
          Shop Now
        </a>
      </section>

      {/* 🔹 Featured Collections */}
      <section id="collections" className="py-20 bg-white">
        <h2 className="text-3xl font-serif font-bold text-center text-brand-navy">
          Featured Collections
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {categories.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className="rounded-2xl overflow-hidden shadow-luxe hover:scale-105 transition-transform duration-300 block"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 object-cover"
              />
              <h3 className="text-xl font-semibold text-center py-4 text-brand-charcoal">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* 🔹 Trending Products */}
      <section className="py-20 bg-brand-mist">
        <h2 className="text-3xl font-serif font-bold text-center text-brand-navy">
          Trending Now
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-luxe overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`https://picsum.photos/id/10${id}/400/400`}
                alt={`Product ${id}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-brand-navy">
                  Product {id}
                </h3>
                <p className="text-brand-gold font-bold mt-2">$99.00</p>
                <button className="mt-4 w-full py-2 rounded-lg bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-charcoal transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Newsletter Signup */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-serif font-bold text-brand-navy">
          Stay in the Loop
        </h2>
        <p className="mt-2 text-brand-charcoal/80">
          Subscribe for updates, offers, and exclusive collections.
        </p>

        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg border border-gray-300 w-72 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
          <button className="px-6 py-2 rounded-r-lg bg-brand-gold text-brand-charcoal font-semibold hover:bg-brand-navy hover:text-white transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-brand-navy text-brand-ivory py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>Women</li>
              <li>Men</li>
              <li>Accessories</li>
              <li>Jewelry</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>Contact Us</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>Our Story</li>
              <li>Careers</li>
              <li>Sustainability</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm mt-6">
          © 2025 MyClothing. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
