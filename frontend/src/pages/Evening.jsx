import React from "react";
import Header from "../components/Header";

export default function WomenEvening() {
  const gowns = [
    {
      id: 1,
      title: "Velvet Evening Gown",
      price: 399,
      img: "https://picsum.photos/id/302/500/500",
    },
    {
      id: 2,
      title: "Silk Embellished Dress",
      price: 459,
      img: "https://picsum.photos/id/303/500/500",
    },
    {
      id: 3,
      title: "Royal Blue Gown",
      price: 429,
      img: "https://picsum.photos/id/304/500/500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔹 Global Header */}
      <Header />

      {/* 🔹 Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://picsum.photos/id/301/1600/800')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-5xl md:text-6xl font-serif font-bold text-white z-10 drop-shadow-lg">
          Evening Gowns
        </h1>
      </section>

      {/* 🔹 Product Section */}
      <section className="py-16 px-6 md:px-20 bg-brand-mist flex-1">
        <h2 className="text-3xl font-serif font-bold text-brand-navy text-center mb-10">
          Elegance for Every Occasion
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {gowns.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-luxe overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg text-brand-navy">
                  {item.title}
                </h3>
                <p className="text-brand-gold font-bold mt-2">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
