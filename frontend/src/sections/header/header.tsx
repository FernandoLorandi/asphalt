import { Home, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import NavItem from "./navItem";
import SheetMenu from "./sheetMenu";

const Header = () => {
  return (
    <div>
      <div className="hidden md:flex bg-brand-primary-50 text-sm font-normal text-brand-primary-950 border-b border-slate-200">
        <div className="container py-3">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center">
              <Home strokeWidth={1} className=" w-4 h-4 mr-2" />
              <a href="#">
                Rua Marechal Deodoro, nº 893, 2º andar, sala 12,
                Prudentópolis/Pr
              </a>
            </div>
            <Separator
              orientation="vertical"
              className=" h-4 bg-brand-primary-950 "
            />
            <div className="flex items-center">
              <Mail strokeWidth={1} className="w-4 h-4 mr-2" />
              <a href="#"> asphaltpavimentacao@hotmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <header className=" bg-white border-b border-slate-200 py-6 ">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between md:justify-between lg:justify-between gap-3">
            <img
              src="/img/logo-invert.png"
              alt="Logotipo Asphalt"
              className="w-36 md:w-48 h-full object-contain"
            />
            <div className="lg:hidden xl:hidden">
              <SheetMenu></SheetMenu>
            </div>
            <nav className=" hidden md:hidden lg:flex">
              <ul className="flex flex-wrap items-center justify-center  py-2 px-4">
                <li className="flex flex-wrap items-center justify-center gap-2 py-2 px-4">
                  <NavItem to="/home">Início</NavItem>
                  <NavItem to="/empresa">Empresa</NavItem>
                  <NavItem>Serviços</NavItem>
                  <NavItem>Compliance</NavItem>
                  <NavItem>Blog</NavItem>
                  <NavItem>Contato</NavItem>
                </li>
              </ul>
            </nav>
            <Button className=" hidden md:hidden lg:flex lg:font-medium bg-brand-primary-900 hover:bg-brand-primary-950">
              Entrar em contato
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
