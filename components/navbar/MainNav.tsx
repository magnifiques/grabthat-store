"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Image from "next/image";
import { AlignJustify, X } from "lucide-react";
type Props = {
  data: Category[];
};

const MainNav = ({ data }: Props) => {
  const pathName = usePathname();
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName === `/category/${route.id}`,
  }));
  return (
    <div>
      <nav className="mx-6  flex justify-center items-center space-x-4 lg:space-x-6 ">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm lg:text-xl hidden md:block font-medium font-domine transition-colors hover:text-white",
              route.active ? "text-white" : "text-gray-400"
            )}
          >
            {route.label}
          </Link>
        ))}

        <div className="md:hidden ">
          <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">
            {!toggleNavbar ? (
              <AlignJustify
                color="white"
                width={30}
                height={30}
                onClick={() => setToggleNavbar(true)}
              />
            ) : (
              <X
                width={30}
                height={30}
                color="white"
                onClick={() => setToggleNavbar(false)}
              />
            )}
          </button>
          {toggleNavbar && (
            <div className="absolute z-30 top-15 text-2xl text-white bg-black flex flex-col mt-2 p-6 rounded-b-lg space-y-7">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setToggleNavbar(false)}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
