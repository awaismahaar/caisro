"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  return (
    <>
      <div className="upper-navbar flex gap-4 items-center justify-center w-full py-5.75 px-4 bg-[#101010]/72">
        <Image
          src="/images/white-logo.svg"
          alt="logo"
          width={269}
          height={56}
        />
        <div className="w-0.5 h-10.25 bg-primary-blue" />
        <Image
          src="/images/navbar-right.svg"
          alt="logo"
          width={309}
          height={42}
        />
      </div>
      <div className="bg-primary-blue w-full py-2 px-4 flex items-center justify-center gap-8">
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
    </>
  );
};

export default Navbar;
