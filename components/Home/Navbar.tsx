"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavRoutes {
  name: string;
  href: string;
}

const navRoutes: NavRoutes[] = [
  {
    name: "About CAISRO",
    href: "/",
  },
  {
    name: "What We Assess",
    href: "/what-we-assess",
  },
  {
    name: "Engagement Type",
    href: "/engagement-type",
  },
  {
    name: "How We Work",
    href: "/how-we-work",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <div className="upper-navbar flex gap-4 items-center justify-center w-full py-4 sm:py-5.75 px-4 bg-[#101010]/72">
        <Image
          src="/images/white-logo.svg"
          alt="logo"
          width={269}
          height={56}
          className="max-md:w-[180px] max-md:h-[40px] hidden sm:block"
        />
        <div className="w-0.5 h-10.25 bg-primary-blue hidden sm:block" />
        <Image
          src="/images/navbar-right.svg"
          alt="logo"
          width={309}
          height={42}
          className="max-sm:w-[200px] max-sm:h-[30px] max-md:w-[290px] max-md:h-[38px]"
        />
      </div>
      <div className="bg-primary-blue w-full py-2 px-4 m-0!">
        <div className="flex items-center justify-between gap-4">
          <Image
            src="/images/white-logo.svg"
            alt="logo"
            width={100}
            height={36}
            className="block sm:hidden"
          />
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden block text-white"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        <div className="hidden sm:flex items-center justify-center gap-8">
          {navRoutes.map((route, index) => (
            <div key={index} className="relative">
              <Link
                className={`main-navbar ${route.href === pathname ? "font-medium" : ""}`}
                href={route.href}
              >
                {route.name}
              </Link>
              {route.href === pathname && (
                <div className="absolute -bottom-2 left-0 w-2/3 h-px bg-[#D9D9D9]" />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out bg-primary-blue ${
          isOpen ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navRoutes.map((route, index) => (
            <Link
              key={index}
              onClick={() => setIsOpen(false)}
              className={`text-white text-[16px] ${
                route.href === pathname
                  ? "font-bold underline underline-offset-8"
                  : "font-normal"
              }`}
              href={route.href}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
