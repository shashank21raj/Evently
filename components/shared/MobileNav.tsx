import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className=" md:hidden">
      <Sheet>
        <SheetTrigger className=" align-middle ">
          <Image
            src="/assets/icons/menu.svg"
            width={24}
            height={24}
            className=" cursor-pointer"
            alt=""
          />
        </SheetTrigger>
        <SheetContent className=" flex flex-col bg-white gap-6 md:hidden">
          <SheetHeader>
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={128}
              height={128}
            />
            <Separator className=" border border-gray-50" />
            <NavItems/>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
