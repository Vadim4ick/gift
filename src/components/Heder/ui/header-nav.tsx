import { NavLinkProps } from "../model/types";
import { NavLink } from "./navLink";

type MobileNavProps = {
  data: NavLinkProps[];
  onClose: () => void;
  pathname?: string;
};

const HeaderNav = ({ data, onClose, pathname }: MobileNavProps) => {
  const navItems = data || [];
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navItems.map((item) => NavLink({ href: item.href, label: item.label }))}
    </nav>
  );
};

export { HeaderNav };
