"use client";

import React from "react";

import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import GalleryTab from "./GalleryTab";
import Image from "next/image";

type Props = {
  images: ImageType[];
};

const Gallery = ({ images }: Props) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 w-full max-w-3xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image, index) => (
            <GalleryTab key={index} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg ">
              <Image
                fill
                src={image.url}
                alt="image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
