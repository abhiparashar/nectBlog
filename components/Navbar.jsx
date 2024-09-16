import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <nav className="p-4 sticky top-0 border-b backdrop-blur">
      <div className="container flex justify-between mx-auto items-center">
        <div className="font-bold text-lg text-white">HarryBlog</div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link className="hover:font-bold" href="/">
            Home
          </Link>
          <Link className="hover:font-bold" href="/">
            About
          </Link>
          <Link className="hover:font-bold" href="/">
            Contact
          </Link>
          <div className="flex items-center">
            <Button className="mx-1" variant="outline">
              Signup
            </Button>
            <Button className="mx-1" variant="outline">
              Signin
            </Button>
            <ModeToggle />
          </div>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <HamburgerMenuIcon className="text-white cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 items-center">
                <Link className="hover:font-bold" href="/">
                  Home
                </Link>
                <Link className="hover:font-bold" href="/">
                  About
                </Link>
                <Link className="hover:font-bold" href="/">
                  Contact
                </Link>
                <Button className="mx-1" variant="outline">
                  Signup
                </Button>
                <Button className="mx-1" variant="outline">
                  Signin
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
