import Link from "next/link";
import { NavLinkProps } from "../model/types";
import { memo } from "react";

export const NavLink = memo(({ href, label }: NavLinkProps) => (
  <Link
    key={href}
    href={href}
    className="text-gray-700 hover:text-purple-600 transition-colors"
  >
    {label}
  </Link>
));
