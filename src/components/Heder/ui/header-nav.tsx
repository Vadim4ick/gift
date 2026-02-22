import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { NavLinkProps } from "../model/types";

const HeaderNav = memo(({ data }: { data: NavLinkProps[] }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-5 lg:gap-8">
      {data.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-lg text-gray-700 hover:text-purple-600 transition-colors ${
              isActive
                ? "font-bold bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
                : ""
            } `}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
});

export { HeaderNav };
