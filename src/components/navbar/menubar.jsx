"use client"

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Navmenu } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menubar = () => {
  const pathname = usePathname(); 

  return (
    <div className="bg-[#276680] hidden lg:block">
      <div className="flex items-center justify-between mx-auto max-w-7xl py-3 px-2">
        {/* Navigation Menu */}
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {Navmenu.map((item, index) => {
              if (item?.subMenu) {
                // Dropdown with submenu
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="flex items-center gap-2 text-white">
                      {item.mainManu}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-10">
                      <ul className="w-[220px] p-2 space-y-1">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.subhref[subIndex]}
                                className="p-2 hover:bg-accent hover:text-accent-foreground rounded-md"
                              >
                                {subItem}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              } else {
                // Normal menu link
                return (
                  <NavigationMenuItem key={index}>
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 text-white 
                        after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 
                        after:bg-white  after:transition-all after:duration-300 
                        hover:after:w-full
                        ${
                          pathname === item.href ? "after:w-full" : ""
                        }`}
                    >
                      {item.mainManu}
                    </Link>
                  </NavigationMenuItem>
                );
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side */}
        <Button variant={"outline"} className="bg-[#22657d] text-white  border-white">
          Login <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default Menubar;
