"use client";

import { cn } from "@/shared/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { Container } from "../../shared/ui/Container";
import { navItemList } from "./model/nav-link-items";
import { HeaderNav } from "./ui/header-nav";
import { Logo } from "./ui/logo";
import { MobileNav } from "./ui/mobile-nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100 h-(--header-height)">
      <Container className="py-4 flex items-center justify-between">
        <Logo />

        <HeaderNav data={navItemList} />

        <div
          className={cn(
            "bg-background fixed inset-0 z-40 max-w-full transform pt-20 transition-all duration-500 md:w-137.5",
            "md:hidden",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <MobileNav
            data={navItemList}
            onClose={handleClose}
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
