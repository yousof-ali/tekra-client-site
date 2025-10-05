"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function NavbarFooterWrapper({ children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname === "/login" || pathname === "/register";

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
