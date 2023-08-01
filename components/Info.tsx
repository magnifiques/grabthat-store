"use client";
import { Product } from "@/types";
import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/useCart";

type Props = {
  data: Product;
};

const Info = ({ data }: Props) => {
  const cart = useCart();

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.stopPropagation();
      cart.addItem(data);
      setIsAddedToCart(true);
    },
    [cart, data]
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-800">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Gender:</h3>
          <span>{data.gender.name}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className="py-4 font-light leading-relaxed">{data.description}</div>
      <div className="mt-4 flex items-center justify-center md:justify-start gap-x-3">
        <Button
          className="flex items-center gap-x-4"
          disabled={isAddedToCart}
          onClick={onAddToCart}
        >
          ADD TO CART
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
