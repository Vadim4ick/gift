import Link from "next/link";
import { NavLinkProps } from "../model/types";

export const NavLink = ({ href, label }: NavLinkProps) => (
  <Link
    key={href}
    href={href}
    className="text-gray-700 hover:text-purple-600 transition-colors"
  >
    {label}
  </Link>
);
