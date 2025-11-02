import React from "react";
import Header from "../components/Header";
import { useCart } from "../pages/CartContext";
import { useWishlist } from "../pages/WishlistContext";

export default function WomenCasual() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const products = [
    { id: 1, title: "Classic Denim Jacket", price: 79, img: "https://picsum.photos/id/201/500/500" },
    { id: 2, title: "Casual Cotton Dress", price: 65, img: "https://picsum.photos/id/202/500/500" },
    { id: 3, title: "Relaxed Fit T-Shirt", price: 29, img: "https://picsum.photos/id/203/500/500" },
    { id: 4, title: "Everyday Sneakers", price: 89, img: "https://picsum.photos/id/204/500/500" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 text-center bg-brand-navy text-white">
        <h1 className="text-5xl font-serif font-bold">Casual Collection</h1>
        <p className="mt-4 text-lg">Effortless everyday styles, perfect for comfort and class.</p>
      </section>

      <section className="px-6 md:px-20 py-16 flex-1 bg-brand-mist">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl2 shadow-luxe overflow-hidden hover:scale-105 transition"
            >
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-brand-gold font-bold mt-2">${item.price}.00</p>

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

      <footer className="bg-brand-navy text-brand-ivory py-8 text-center">
        <p className="text-sm">© 2025 MyClothing. All rights reserved.</p>
      </footer>
    </div>
  );
}
