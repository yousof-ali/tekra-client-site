"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  House,
  ShoppingCart,
  PackageSearch,
  ReceiptText,
  LogIn,
  ShieldCheck,
  CircleQuestionMark,
  ScrollText,
  Layout,
  HeartIcon,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navmenu } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";

export default function MobileMenu({ isOpen, onClose }) {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const pathname = usePathname();

  const menuIcon = [
    House,
    PackageSearch,
    ShoppingCart,
    ReceiptText,
    HeartIcon,
    Layout,
    LogIn,
  ];
  const submenuIcon = [ShieldCheck, ScrollText, CircleQuestionMark];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white z-50 transform 
        transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex p-4 justify-between items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={120}
            height={50}
            quality={100}
          />
          <Button onClick={onClose}>
            <X />
          </Button>
        </div>

        <hr />

        {/* Main Menu */}
        <div className="w-full font-medium px-0">
          {Navmenu.map((category, index) => {
            const isMenuOpen = openSubmenuIndex === index;
            const Icon = menuIcon[index];

            const toggleSubmenu = () => {
              setOpenSubmenuIndex((prev) => (prev === index ? null : index));
            };

            if (category.subMenu) {
              return (
                <div key={index}>
                  <div
                    onClick={toggleSubmenu}
                    className="flex duration-300 cursor-pointer text-sm text-gray-500 w-full py-3 px-4 justify-between items-center hover:bg-[#276680] hover:text-white"
                  >
                    <p>{category.mainManu}</p>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        isMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Submenu */}
                  {isMenuOpen &&
                    category.subMenu.map((single, idx) => {
                      const SubIcon = submenuIcon[idx];
                      const isActive = pathname === category.subhref[idx];

                      return (
                        <Link
                          key={idx}
                          href={category.subhref[idx]}
                          className={`flex w-full gap-2 text-sm py-3 px-6 items-center 
                            ${
                              isActive
                                ? "bg-[#276680] text-white"
                                : "hover:bg-[#276680] hover:text-white"
                            }`}
                        >
                          <SubIcon className="w-4 h-4" />
                          <p>{single}</p>
                        </Link>
                      );
                    })}
                </div>
              );
            }

            const isActive = pathname === category.href;

            return (
              <Link
                key={index}
                href={category.href}
                className={`flex duration-300 cursor-pointer text-sm w-full py-3 px-4 gap-2 items-center 
                  ${
                    isActive
                      ? "bg-[#276680] text-white"
                      : "hover:bg-[#276680] hover:text-white"
                  }`}
              >
                <Icon className="w-4" />
                <p>{category.mainManu}</p>
              </Link>
            );
          })}
        </div>

        {/* Bottom Button */}
        <div className="mx-2 mt-14 flex justify-end">
          <Link className="w-full" href={"/login"}>
            <Button size="lg" className="w-full rounded-none">
              Log In <LogIn />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
