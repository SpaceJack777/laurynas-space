"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/animate-ui/components/radix/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

const links: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
  {
    label: "LinkedIn",
    href: "http://linkedin.com/in/laurynas-mi%C5%A1kinis-aa75875b/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/SpaceJack777",
    external: true,
  },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/55">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            className="rounded-full grayscale hover:grayscale-0"
            width={32}
            height={32}
          />
        </Link>

        <div className="hidden md:flex">
          <DesktopNav />
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function DesktopNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        {links.map((l) => {
          const isActive = !l.external && pathname === l.href;
          const isExternal = !!l.external;

          return (
            <NavigationMenuItem key={l.label}>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground",
                  isActive && "bg-accent text-foreground",
                )}
              >
                <Link
                  href={l.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-1"
                >
                  {l.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground hover:bg-accent"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[320px] sm:w-[360px] border-l border-border bg-background p-0"
      >
        <SheetHeader className="px-6 py-4">
          <SheetTitle className="text-left text-base">Menu</SheetTitle>
        </SheetHeader>

        <Separator />

        <nav className="flex flex-col p-2">
          {links.map((l) => {
            const isActive = !l.external && pathname === l.href;
            const isExternal = !!l.external;

            return (
              <SheetClose asChild key={l.label}>
                <Link
                  href={l.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-md px-4 py-2 text-sm font-medium",
                    "text-muted-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground focus:outline-none",
                    isActive && "bg-accent text-foreground",
                  )}
                >
                  <span>{l.label}</span>
                  {isExternal ? (
                    <ExternalLink className="h-4 w-4 opacity-70" />
                  ) : null}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="px-6 pb-6 pt-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Laurynas Miškinis
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
