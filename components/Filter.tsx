"use client";
import { Color, Gender } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import qs from "query-string";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

type Props = {
  data?: (Gender | Color)[];
  name: string;
  valueKey: string;
  brands?: string[] | [];
};

const Filter = ({ data, name, valueKey, brands }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  console.log(brands);
  const selectionValue = searchParams.get(valueKey);

  const handleClick = useCallback(
    (id: string) => {
      const current = qs.parse(searchParams.toString());

      const query = {
        ...current,
        [valueKey]: id,
      };

      if (current[valueKey] == id) query[valueKey] = null;

      const url = qs.stringifyUrl(
        { url: window.location.href, query },
        { skipNull: true }
      );
      router.push(url);
    },

    [searchParams, valueKey, router]
  );

  const handleBrand = useCallback((brand: string) => {
    console.log(brand);
  }, []);
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data?.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                `rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300`,
                selectionValue === filter.id && "bg-black text-white"
              )}
              onClick={() => handleClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
        {brands?.map((brand, key) => (
          <div key={key} className="flex items-center">
            <Button
              className={cn(
                `rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300`,
                selectionValue === brand && "bg-black text-white"
              )}
              onClick={() => handleBrand(brand)}
            >
              {brand}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
