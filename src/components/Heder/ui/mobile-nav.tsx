"use client";

import Link from "next/link";
import { memo } from "react";
import { NavLinkProps } from "../model/types";
import { Logo } from "./logo";

type MobileNavProps = {
  data: NavLinkProps[];
  onClose: () => void;
  pathname?: string;
};

export const MobileNav = memo(
  ({ data: navItems, onClose, pathname }: MobileNavProps) => {
    return (
      <div className="flex flex-col bg-background">
        <div className="px-6 py-4 border-b border-purple-50">
          <Logo onClick={onClose} />
        </div>

        <nav className="flex flex-col h-dvh w-full space-y-4 p-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`text-2xl py-3 transition-all duration-200 active:scale-95 m-0 ${
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
  },
);

MobileNav.displayName = "MobileNav";
