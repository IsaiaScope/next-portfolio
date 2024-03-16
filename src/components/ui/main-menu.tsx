"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/libraries/tailwindcss/twMerge-clsx-utility-class";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/shadcn-ui/navigation-menu";
import { Switch } from "@/components/shadcn-ui/switch";
import { Label } from "@/components/shadcn-ui/label";
import { Separator } from "@/components/shadcn-ui/separator";
import LanguageChanger from "./language-changer";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { DarkModeToggle } from "./dark-mode-toggle";

import {
  HomeIcon,
  PersonIcon,
  GearIcon,
  DotsHorizontalIcon,
  RocketIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { ROUTES } from "@/routes/routes";
import { Button } from "../shadcn-ui/button";
import { AllValues } from "@/types/utility/object-keys-or-values";
import { Prettify } from "@/types/utility/prettify";

function MainMenuLink({
  href,
  children,
}: {
  href: AllValues<typeof ROUTES>;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenuItem>
      <Link href={`/${href}`} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(`${navigationMenuTriggerStyle()}`, "mx-1 h-auto")}
        >
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

export function MainMenu() {
  return (
    <section className="absolute bottom-2 md  left-1/2 -translate-x-1/2 transform rounded-lg bg-primary px-5 py-2">
      <NavigationMenu>
        <NavigationMenuList>
          <MainMenuLink href={ROUTES.HOME}>
            <HomeIcon className="h-12 w-12" />
            <Label htmlFor='boh'>home</Label>
          </MainMenuLink>
          <MainMenuLink href={ROUTES.ABOUT}>
            <PersonIcon className="h-12 w-12" />
          </MainMenuLink>
          <MainMenuLink href={ROUTES.PORTFOLIO}>
            <RocketIcon className="h-12 w-12" />
          </MainMenuLink>
          <MainMenuLink href={ROUTES.MORE}>
            <DotsHorizontalIcon className="h-12 w-12" />
          </MainMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
}
