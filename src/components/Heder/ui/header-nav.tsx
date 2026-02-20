import { memo } from "react";
import { NavLinkProps } from "../model/types";
import { NavLink } from "./navLink";

const HeaderNav = memo(({ data }: { data: NavLinkProps[] }) => {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {data.map((item) => (
        <NavLink key={item.href} {...item} />
      ))}
    </nav>
  );
});

export { HeaderNav };
