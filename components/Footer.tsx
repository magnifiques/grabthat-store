import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black border-t py-4 mt-auto">
      <div className="mx-auto gap-y-4 flex flex-col items-center justify-center font-domine select-none">
        <p className="text-base text-white">
          &copy; {year} Vampfire Inc. All Rights Reserved.
        </p>

        <p className="text-base text-white">
          Dedicated to my favorite artists,{" "}
          <Link target="_blank" href="https://virgilabloh.com/free-game/">
            <span className="font-semibold text-red-500">Virgil Abloh</span>
          </Link>
          ,{" "}
          <Link
            target="_blank"
            href="https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x?si=rZe07YoiRjuwG0xm-Cl__A"
          >
            <span className="font-semibold text-blue-500">Kanye West</span>
          </Link>
          , and{" "}
          <Link
            target="_blank"
            href="https://us.louisvuitton.com/eng-us/magazine/articles/pharrell-williams"
          >
            <span className="font-semibold text-yellow-500">
              Pharrell Williams
            </span>
          </Link>
          .
        </p>
        <p className="text-white">
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
