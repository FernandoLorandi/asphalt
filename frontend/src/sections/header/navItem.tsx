import { Link } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const NavItem = ({ children }: Props) => {
  return (
    <li className="text-slate-950 text-base font-normal hover:font-semibold  transition-all ">
      <Link to="to" className="py-2 px-2 inline-block">
        {children}
      </Link>
    </li>
  );
};
export default NavItem;
