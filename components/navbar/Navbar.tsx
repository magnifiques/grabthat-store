import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
import MainNav from "./MainNav";
import getCategories from "@/actions/getCategories";
import NavbarActions from "./NavbarActions";

type Props = {};

export const revalidate = 0;

const Navbar = async (props: Props) => {
  const categories = await getCategories();

  return (
    <div className="border-b bg-pink-100">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">GRAB THAT</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
