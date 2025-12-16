"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-20 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center px-4">
        <Link
          href="/home"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          Passaraous
        </Link>

        <div className="flex flex-1 items-center justify-between ms-[10%]">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-row items-center gap-4">
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

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium hover:opacity-80"
          >
            <Image src="/logout.png" alt="Logout" width={20} height={20} />
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
