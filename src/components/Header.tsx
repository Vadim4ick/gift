"use client";

import { useState } from "react";
import { Gift, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Container } from "./Container";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100 h-(--header-height)">
      <Container className="py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-300">
            <Gift className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            GiftGenius
          </span>
        </Link>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#how"
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Как работает
          </Link>
          <Link
            href="#categories"
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Категории
          </Link>

          <Link href="/form">
            <Button>Начать</Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export { Header };
