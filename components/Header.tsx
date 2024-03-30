"use client";

import { MenuIcon, X } from "lucide-react";
import { Lobster } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

function Header() {
  const links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skill" },
    { id: 4, name: "Projects", link: "#projects" },
    { id: 5, name: "Contact", link: "#contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const pathname = usePathname();
  return (
    <header className="text-white p-5 xl:px-0 z-50 bg-black/90 fixed inset-x-0">
      <div className="container flex items-center justify-between">
        <Link href={"/"} className={`text-3xl ${lobster.className}`}>
          Vamsi<span className="text-orange-500">.</span>
        </Link>

        <nav
          className={
            mobileMenuOpen
              ? "fixed right-0 inset-y-0 w-full bg-black duration-300 flex flex-col p-8 space-y-5 z-10 lg:relative lg:inset-0 lg:flex-row lg:p-0 lg:bg-transparent"
              : "fixed -right-full inset-y-0 w-full bg-black duration-300 flex flex-col p-8 space-y-5 z-10 lg:w-auto lg:flex-row lg:right-0 lg:relative lg:p-0 lg:bg-transparent"
          }
        >
          <div className="flex items-center justify-center h-screen w-full flex-col space-y-8 lg:h-auto lg:flex-row lg:space-y-0 lg:space-x-10">
            <div className="lg:hidden" onClick={handleMenu}>
              <X
                className="w-7 h-7 text-white absolute top-10 right-10 cursor-pointer"
                aria-hidden="true"
              />
            </div>
            {links.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={
                  pathname === item.link
                    ? "text-orange-500 font-medium underline text-lg"
                    : "text-white text-lg hover:text-orange-500 hover:underline"
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <div onClick={handleMenu} className="lg:hidden inline-block">
          <MenuIcon
            className="w-7 h-7 cursor-pointer text-white"
            aria-hidden="true"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
