"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
type Props = {
  data: Category[];
};

const MainNav = ({ data }: Props) => {
  const pathName = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName === `/category/${route.id}`,
  }));
  return (
    <div>
      <nav className="mx-6 flex justify-center items-center space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm lg:text-xl font-medium font-domine transition-colors hover:text-white",
              route.active ? "text-white" : "text-gray-400"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNav;
