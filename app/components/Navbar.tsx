"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-20 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <Link
          href="/home"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          Passaraous
        </Link>

        <div className="hidden flex-1 items-center md:flex">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex items-center gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/home">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/home">Sobre nós</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/home">Contato</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium hover:opacity-80"
          >
            <Image src="/logout.png" alt="Logout" width={20} height={20} />
            Logout
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col gap-4 px-4 py-4">
            <Link href="/home" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/home" onClick={() => setOpen(false)}>
              Sobre nós
            </Link>
            <Link href="/home" onClick={() => setOpen(false)}>
              Contato
            </Link>

            <hr />

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <Image src="/logout.png" alt="Logout" width={20} height={20} />
              Logout
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
