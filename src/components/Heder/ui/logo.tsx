import { memo } from "react";
import Link from "next/link";
import { Gift } from "lucide-react";

interface LogoProps {
  onClick?: () => void;
}

export const Logo = memo(({ onClick }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-2 group" onClick={onClick}>
      <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-300">
        <Gift className="w-6 h-6 text-white" />
      </div>
      <span className="hidden md:block text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        GiftGenius
      </span>
    </Link>
  );
});

Logo.displayName = "Logo";
