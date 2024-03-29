"use client";

import React, { useCallback, useEffect } from "react";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import useCart from "@/hooks/useCart";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

type Props = {};

const Summary = (props: Props) => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const router = useRouter();

  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = useCallback(async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  }, [items]);

  useEffect(() => {
    if (searchParams.get("Success")) {
      toast.success("Payment has been successfully completed");
      removeAll();
      router.refresh();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong!");
    }
  }, [searchParams, removeAll, router]);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
