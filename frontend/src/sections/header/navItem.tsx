import { Link } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  classname?: string;
  to?: any;
};

const NavItem = ({ children, classname, to, ...props }: Props) => {
  return (
    <ul className="text-slate-950 text-base font-normal hover:font-semibold hover:text-brand-primary-900  transition-all ">
      <Link
        to={to}
        className={`py-2 px-2 inline-block ${classname}`}
        {...props}
      >
        {children}
      </Link>
    </ul>
  );
};
export default NavItem;

// py-2 px-2 inline-block
