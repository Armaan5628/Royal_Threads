import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useCart } from "./CartContext";   // ✅ Cart Context
import { useWishlist } from "./WishlistContext"; // ✅ Wishlist Context

export default function Women() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  // ✅ Featured categories (just links)
  const categories = [
    { title: "Casual Wear", image: "/assets/images/Casualwear.jpg", link: "/women/casual" },
    { title: "Evening Gowns", image: "/assets/images/Evening_Gowns.jpg", link: "/women/evening" },
    { title: "Jewelry & Accessories", image: "/assets/images/JewelryA.jpg", link: "/women/jewelry" },
    { title: "Bridal Collection", image: "/assets/images/Bridal_collection_converted.jpg", link: "/women/bridal" },
    { title: "Signature Series", image: "/assets/images/Signature_Series.jpg", link: "/signature" },
    { title: "Luxury Sarees", image: "/assets/images/Luxury_sarees_c.jpg", link: "/women/sarees" },
  ];

  // ✅ Example products (for homepage display)
  const products = [
    { id: 1, title: "Designer Kurti", price: 79, img: "https://picsum.photos/id/501/400/400" },
    { id: 2, title: "Luxury Saree", price: 129, img: "https://picsum.photos/id/502/400/400" },
    { id: 3, title: "Bridal Jewelry", price: 199, img: "https://picsum.photos/id/503/400/400" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔹 Global Header */}
      <Header />

      {/* 🔹 Hero Section */}
      <section className="py-20 text-center bg-gradient-to-b from-brand-mist to-white">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-navy mb-6">
          Women’s Royal Collection
        </h1>
        <p className="text-lg text-brand-charcoal/80 max-w-2xl mx-auto">
          Discover elegant styles, from everyday essentials to timeless couture.
        </p>
      </section>

      {/* 🔹 Featured Categories */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-center text-brand-navy mb-10">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <Link
                  to={item.link}
                  className="inline-block px-6 py-2 rounded-lg border border-brand-gold text-brand-navy font-medium hover:bg-brand-gold hover:text-white transition"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Featured Products */}
      <section className="px-6 md:px-20 py-16 bg-brand-mist">
        <h2 className="text-3xl font-bold text-center text-brand-navy mb-10">
          Featured Products
        </h2>
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

                {/* ✅ Buttons */}
                <div className="flex gap-3 mt-4 justify-center">
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 py-2 px-4 rounded-lg bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-charcoal transition"
                  >
                    Add to Cart
                  </button>
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

      {/* 🔹 CTA Section */}
      <section className="bg-brand-navy text-brand-ivory py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Royalty Awaits You
        </h2>
        <p className="text-lg mb-6">
          Sign up today and receive{" "}
          <span className="text-brand-gold font-bold">20% off</span> your first order.
        </p>
        <Link
          to="/signup"
          className="px-8 py-3 bg-brand-gold text-brand-navy font-semibold rounded-xl2 shadow-luxe hover:bg-brand-ivory hover:text-brand-navy transition"
        >
          Join Now
        </Link>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-brand-navy text-brand-ivory py-8 text-center">
        <p className="text-sm">© 2025 MyClothing. All rights reserved.</p>
      </footer>
    </div>
  );
}
