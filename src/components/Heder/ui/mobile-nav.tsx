import Link from "next/link";
import { NavLinkProps } from "../model/types";
import { Gift } from "lucide-react";

type MobileNavProps = {
  data: NavLinkProps[];
  onClose: () => void;
  pathname?: string;
};

export const MobileNav = ({
  data: navItems,
  onClose,
  pathname,
}: MobileNavProps) => {
  return (
    <div className="flex-col gap-y-5">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-300">
          <Gift className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          GiftGenius
        </span>
      </Link>
      <nav className="bg-background flex h-dvh w-full flex-col space-y-2 px-4">
        {navItems.map((item) => {
          const isActive = pathname == item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`text-2xl ${isActive ? "font-bold bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
