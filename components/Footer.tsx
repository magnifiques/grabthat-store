import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-pink-100 border-t py-4">
      <div className="mx-auto gap-y-4 flex flex-col items-center justify-center">
        <p className="text-base text-black">
          &copy; {year} Grab That Inc. All Rights Reserved.
        </p>
        <p>
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
