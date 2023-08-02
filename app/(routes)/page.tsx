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
            Ever since I was a kid, I&apos;ve been absolutely obsessed with two
            things that have shaped my identity:{" "}
            <span className="font-normal text-violet-500">Music</span> and{" "}
            <span className="font-normal text-lime-500">Fashion</span>.
          </p>
          <p className="lg:text-lg pb-3 font-robotoSerif">
            I remember watching music videos on television and getting
            fascinated by the clothes, and shoes that were worn by the artists.
            I&apos;d go on wild scavenger hunts around local stores, trying to
            find the exact same shoes those musicians rocked in their videos.
            Not to mention, I&apos;d spend countless hours perfecting the
            outfits of my characters in video games, ensuring they had the
            coolest look that matched my own style.
          </p>

          <p className="lg:text-lg pb-3 font-robotoSerif">
            For this project, I&apos;ve poured my heart and soul into curating
            all my favorite fashion collections, organizing them into neat
            categories. From iconic shoes that have left an indelible mark, to
            breathtaking seasonal collections from talented fashion artists, and
            even highlighting the streetwear brands that deserve recognition -
            it&apos;s all here! But perhaps the most influential aspect is my
            exploration of hip-hop fashion, which has had a massive impact on my
            personal wardrobe choices.
          </p>

          <p className="lg:text-lg pb-3 font-robotoSerif">
            <span className="font-semibold">Vampfire</span>, is the perfect
            destination for you to discover and observe the best art of fashion
            that the world has ever witnessed.
          </p>

          <div className="mt-4 mb-4 text-center lg:text-left font-normal">
            <button className="bg-white text-2xl font-domine text-black p-4 rounded-lg hover:bg-violet-600 hover:text-white transition-all">
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
