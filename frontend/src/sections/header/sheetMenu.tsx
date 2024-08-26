import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
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
        <Button variant="outline">
          <Menu size={16} className="text-brand-primary-900" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
          <Separator className="opacity-50" />
        </SheetHeader>
        <ul className=" items-center justify-center">
          <li className="items-center justify-center gap-2">
            <NavItem classname="pl-0">Início</NavItem>
            <NavItem classname="pl-0">Empresa</NavItem>
            <NavItem classname="pl-0">Serviços</NavItem>
            <NavItem classname="pl-0">Compliance</NavItem>
            <NavItem classname="pl-0">Blog</NavItem>
            <NavItem classname="pl-0">Contato</NavItem>
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
