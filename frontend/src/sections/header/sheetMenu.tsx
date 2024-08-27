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
import NavItem from "./navItem";
import { Separator } from "@/components/ui/separator";

const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="default"
          className="font-medium bg-brand-primary-950 hover:bg-brand-primary-900 gap-4"
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
            <NavItem classname="hover:bg-brand-primary-50 w-full rounded-md">
              Início
            </NavItem>
            <NavItem classname="hover:bg-brand-primary-50 w-full rounded-md">
              Empresa
            </NavItem>
            <NavItem classname="hover:bg-brand-primary-50 w-full rounded-md">
              Serviços
            </NavItem>
            <NavItem classname="hover:bg-brand-primary-50 w-full rounded-md">
              Compliance
            </NavItem>
            <NavItem classname="hover:bg-brand-primary-50 w-full rounded-md">
              Blog
            </NavItem>
            <NavItem classname="hover:bg-brand-primary-50 w-full rounded-md">
              Contato
            </NavItem>
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
