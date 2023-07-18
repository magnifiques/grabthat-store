"use client";
import { Product } from "@/types";
import Image from "next/image";
import React, { useCallback, MouseEventHandler } from "react";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/usePreviewModal";

type Props = {
  data: Product;
};

const Card = ({ data }: Props) => {
  const router = useRouter();

  const previewModal = usePreviewModal();

  const handleClick = useCallback(
    () => router.push(`/product/${data.id}`),
    [data.id, router]
  );

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };
  return (
    <div
      onClick={() => handleClick()}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="image"
          src={data?.images?.[data.images.length - 1].url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-gray-500 text-sm">{data?.category.name}</p>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default Card;
