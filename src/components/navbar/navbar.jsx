
import { Handbag, Heart, Repeat2, Search, UserRound } from "lucide-react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "@/components/ui/button";
import Menubar from "./menubar";
import MobileMenuToggleBtn from "./mobileMenuToggleButton";
import Link from "next/link";

export default function Navbar() {
  
  return (
    <header className=" sticky top-0 border-b  bg-white z-50">
        <div className="flex  mx-auto max-w-7xl py-5 px-2 justify-between items-center">
          <div className="block lg:hidden">
            <MobileMenuToggleBtn/>
          </div>
          <div>
            <Image src="/logo.png" alt="logo" width={150} height={50} />
          </div>
          <div className="border rounded-md overflow-hidden justify-between gap-2 lg:flex items-center hidden w-[500px]">
            <div className="text-xs">
              <input
                className="outline-0 w-[250px] border-r-1 pl-3 py-2"
                placeholder="Search Product...."
                type="text"
              />
            </div>
            <div className="">
              <Select>
                <SelectTrigger className="py-0 rounded-none w-[150px] border-none shadow-none text-xs outline-none focus:outline-none focus:ring-0">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button className={'rounded-none'} >
                <Search/> 
              </Button>
            </div>
          </div>
          <div className="flex space-x-4">
            <Repeat2 className="cursor-pointer w-6 h-6 hidden lg:block text-gray-600" />
            <Link href={"/wishlist"}><Heart className="cursor-pointer w-6 h-6 hidden lg:block text-gray-600" /></Link>
            <Link href={"/cart"}><Handbag className="cursor-pointer w-6 h-6 text-gray-600" /></Link>
            <Link href={"/dashboard"}><UserRound className="cursor-pointer hidden lg:block w-6 h-6 text-gray-600" /></Link>
          </div>
        </div>
        <Menubar />
    </header>
  );
}
