import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavItem, NavScroll } from "./navItems";
import { Separator } from "@/components/ui/separator";

const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="default"
          className="font-medium bg-brand-primary-900 hover:bg-brand-primary-950 gap-4"
        >
          Menu
          <Menu size={16} className="text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left pl-2">Menu</SheetTitle>
          <SheetDescription className="text-left pl-2">
            {" "}
            Selecione abaixo a opção que deseja acessar
          </SheetDescription>
          <Separator className="opacity-50" />
        </SheetHeader>
        <ul className=" items-center justify-center">
          <li className="items-center justify-center gap-2">
            <NavItem
              to="Home"
              classname="hover:bg-brand-primary-50 w-full rounded-md"
            >
              Início
            </NavItem>
            <NavItem
              to="Empresa"
              classname="hover:bg-brand-primary-50 w-full rounded-md"
            >
              Empresa
            </NavItem>
            <NavScroll
              to="servicos"
              classname="hover:bg-brand-primary-50 w-full rounded-md"
            >
              Serviços
            </NavScroll>
            <NavScroll
              to="compliance"
              classname="hover:bg-brand-primary-50 w-full rounded-md"
            >
              Compliance
            </NavScroll>
            <NavItem
              to="Blog"
              classname="hover:bg-brand-primary-50 w-full rounded-md"
            >
              Blog
            </NavItem>
            <NavScroll
              to="contato"
              classname="hover:bg-brand-primary-50 w-full rounded-md"
            >
              Contato
            </NavScroll>
          </li>
        </ul>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="font-medium bg-brand-primary-950 hover:bg-brand-primary-900 mt-6">
              Entrar em contato
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu;
