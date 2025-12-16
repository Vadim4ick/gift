"use client";

import { categories } from "@/shared/const/index.const";
import { useState } from "react";

const Categories = () => {
  const [hoveredCard, setHoveredCard] = useState<number>();

  return (
    <section id="categories" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-800">
            Подарки для{" "}
            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              любого случая
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            От романтики до бизнеса — найдем идеальный вариант
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 bg-white rounded-3xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(undefined)}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity`}
                ></div>
                <Icon
                  className={`w-12 h-12 mb-4 transition-all ${
                    hoveredCard === idx
                      ? "text-purple-600 scale-110"
                      : "text-gray-400"
                  }`}
                />
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {cat.title}
                </h3>
                <p className="text-gray-600">{cat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Categories };
