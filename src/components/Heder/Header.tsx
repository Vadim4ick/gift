"use client";

import { Gift, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { Container } from "../../shared/ui/Container";
import { navItemList } from "./model/nav-link-items";
import { HeaderNav } from "./ui/header-nav";
import { useState } from "react";
import { MobileNav } from "./ui/mobile-nav";
import { cn } from "@/shared/lib/utils";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log("pathname ==> ", pathname);
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100 h-(--header-height)">
      <Container className="py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-300">
            <Gift className="w-6 h-6 text-white" />
          </div>
          <span className="hidden md:block text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            GiftGenius
          </span>
        </Link>

        <HeaderNav data={navItemList} onClose={() => setIsOpen(false)} />

        <div
          className={cn(
            "bg-background fixed inset-0 z-40 max-w-full transform pt-20 transition-all duration-500 md:w-137.5",
            "md:hidden",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <MobileNav
            data={navItemList}
            onClose={() => setIsOpen(false)}
            pathname={pathname}
          />
        </div>
        <button
          className="z-50 p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </Container>
    </header>
  );
};

export { Header };
