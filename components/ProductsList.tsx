import { Product } from "@/types";
import React from "react";
import NoResults from "./ui/NoResults";
import Card from "./ui/Card";

type Props = {
  title: string;
  items: Product[];
};

const ProductsList = ({ title, items }: Props) => {
  return (
    <div className="space-y-4 p-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
