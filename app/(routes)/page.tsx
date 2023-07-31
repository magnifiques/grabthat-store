import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const revalidate = 0;

const HomePage = async (props: Props) => {
  return (
    <div className="">
      <div className="grid grid-row-2 lg:grid-cols-2 justify-items-center">
        <div className="relative flex flex-col m-6 bg-black text-white p-6 rounded-xl">
          <p className="font-gloock pt-2 text-5xl text-white text-center">
            Vampfire
          </p>

          <hr className="text-white my-4" />
          <p className="lg:text-lg pt-2 pb-2 font-robotoSerif">
            Ever since I was a kid, I was fascinated by 2 things:{" "}
            <span className="font-normal text-violet-500">Music</span> and{" "}
            <span className="font-normal text-lime-500">Fashion</span>.
          </p>
          <p className="lg:text-lg pb-3 font-robotoSerif">
            I remember watching music videos on television and getting
            fascinated by the clothes, and shoes that were worn by the artists.
            I tried to find the same shoes in my nearby stores that those
            artists wore in those music videos, spending tons of time
            customizing the characters in the &quot;Customize your
            Character&quot; menu of my favorite video games to match all of my
            character&apos;s clothes with each other.
          </p>

          <p className="lg:text-lg pb-3 font-robotoSerif">
            In this project, I have gathered all of my favorite fashion
            collections and displayed them in their respective categories. This
            includes every iconic shoe I know, a beautiful season collection
            released by truly talented fashion artists, noteworthy collections
            by streetwear brands that I think people should check out, and most
            importantly, hip-hop fashion, which has influenced my overall
            wardrobe and fashion choices.
          </p>

          <p className="lg:text-lg pb-3 font-robotoSerif">
            <span className="font-semibold">Vampfire</span>, is the perfect
            destination for you to discover and observe the best art of fashion
            that the world has ever witnessed.
          </p>

          <div className="mt-4 mb-4 text-center lg:text-left font-normal">
            <button className="bg-white text-xl text-black p-2 rounded-lg hover:bg-violet-600 hover:text-white transition-all">
              <Link href="/home">Discover Vampfire</Link>
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/yandhi.jpg"
            alt="billboard"
            className="object-cover w-full  h-full object-center "
            width={100}
            height={100}
            unoptimized
          />
          {/* <p>
            Artwork by{" "}
            <Link
              href="https://www.instagram.com/p/Cd1BUqyMtKW/?img_index=1"
              target="_blank"
            >
              jhgfx
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
