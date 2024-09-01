import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  classname?: string;
  to?: any;
};

export const NavItem = ({ children, classname, to, ...props }: Props) => {
  return (
    <ul className="text-slate-950 text-base font-normal hover:font-semibold hover:text-brand-primary-900  transition-all ">
      <LinkRouter
        to={to}
        className={`py-2 px-2 inline-block ${classname}`}
        {...props}
      >
        {children}
      </LinkRouter>
    </ul>
  );
};

export const NavScroll = ({ children, classname, to, ...props }: Props) => {
  return (
    <ul className="text-slate-950 text-base font-normal hover:font-semibold hover:text-brand-primary-900  transition-all ">
      <LinkScroll
        {...props}
        to={to}
        activeClass="active"
        spy={true}
        smooth="easeInOutCubic"
        offset={-50}
        duration={500}
        className={`py-2 px-2 inline-block ${classname}`}
        {...props}
      >
        {children}
      </LinkScroll>
    </ul>
  );
};
