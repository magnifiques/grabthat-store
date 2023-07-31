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
    <div className="border-b bg-black">
      <Container>
        <div className="flex item-center justify-center">
          <Link href="/home" className="">
            <p className="font-gloock py-4 text-5xl text-white">Vampfire</p>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white mt-2 font-tinos text-2xl">
            All Dreams Real.
          </p>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
