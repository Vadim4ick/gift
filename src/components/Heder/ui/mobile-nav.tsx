"use client";

import Link from "next/link";
import { memo } from "react";
import { NavLinkProps } from "../model/types";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";

type MobileNavProps = {
  data: NavLinkProps[];
  onClose: () => void;
};

export const MobileNav = memo(({ data: navItems, onClose }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      <div className="px-6 py-4 border-b border-purple-50 flex-none">
        <Logo onClick={onClose} />
      </div>

      <nav className="flex flex-col flex-1 p-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`text-2xl py-3 transition-all duration-200 active:scale-95 ${
                isActive
                  ? "font-bold bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
});

MobileNav.displayName = "MobileNav";
