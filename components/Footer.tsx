import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black border-t py-4 mt-auto sticky top-[100vh]">
      <div className="mx-auto gap-y-4 flex flex-col items-center justify-center font-domine select-none">
        <p className="text-sm lg:text-base text-white">
          &copy; {year} Vampfire Inc. All Rights Reserved.
        </p>

        <div className="px-4 text-sm lg:text-base text-white text-center">
          Dedicated to my favorite artists,{" "}
          <Link
            target="_blank"
            href="https://virgilabloh.com/free-game/"
            className="font-semibold text-red-500"
          >
            Virgil Abloh
          </Link>
          ,{" "}
          <Link
            target="_blank"
            href="https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x?si=rZe07YoiRjuwG0xm-Cl__A"
            className="font-semibold text-blue-500"
          >
            Kanye West
          </Link>
          , and{" "}
          <Link
            target="_blank"
            href="https://us.louisvuitton.com/eng-us/magazine/articles/pharrell-williams"
            className="font-semibold text-yellow-500"
          >
            Pharrell Williams
          </Link>
          .
        </div>
        <p className="text-white text-sm lg:text-base">
          Made with 💚. by{" "}
          <Link target="_blank" href="https://github.com/magnifiques">
            <span className="font-semibold underline text-pink-500">
              magnifiques
            </span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
