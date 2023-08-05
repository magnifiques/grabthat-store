export const revalidate = 0;

import getCategory from "@/actions/getCategory";
import getColors from "@/actions/getColors";
import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/getProducts";
import getGender from "@/actions/getGender";
import Billboard from "@/components/Billboard";
import Filter from "@/components/Filter";
import MobileFilter from "@/components/MobileFilter";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import NoResults from "@/components/ui/NoResults";
import React from "react";
import { Product } from "@/types";

type Props = {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    genderId: string;
  };
};

const AccessoryPage = async ({ params, searchParams }: Props) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    genderId: searchParams.genderId,
    colorId: searchParams.colorId,
  });

  let brands: string[] = [];
  products.forEach((product) => {
    brands.push(product.name.trim().split("By ")[1]);
  });

  brands = brands.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  const gender = await getGender();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  if (products.length === 0) {
    return (
      <div className="">
        <Billboard data={category.billboard} />
        <Container>
          <div className="mt-8 px-4 sm:px-6 lg:px-8 pb-24">
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 mt-4">
              <div className="lg:col-span-4 lg:mt-4">
                <NoResults />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  let bags: Product[] = [];
  products.forEach((product) => {
    if (product.name.includes("Bag")) {
      bags.push(product);
    }
  });

  let scarfs: Product[] = [];

  products.forEach((product) => {
    if (product.name.includes("Scarf")) {
      scarfs.push(product);
    }
  });

  let sunglasses: Product[] = [];
  products.forEach((product) => {
    if (product.name.includes("Sunglasses")) {
      sunglasses.push(product);
    }
  });

  let perfumes: Product[] = [];
  products.forEach((product) => {
    if (product.name.includes("Perfume")) {
      perfumes.push(product);
    }
  });

  let hats: Product[] = [];
  products.forEach((product) => {
    if (product.name.includes("Hat")) {
      hats.push(product);
    }
  });

  return (
    <div className="">
      <Billboard data={category.billboard} />
      <Container>
        <div className="mt-8 px-4 sm:px-6 lg:px-8 pb-24">
          {/* Mobile Filters */}

          <MobileFilter gender={gender} />

          <div className="hidden lg:block ">
            <Filter valueKey="genderId" data={gender} name="Gender" />
          </div>
          {bags.length > 0 && (
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 mt-4">
              <div className="lg:col-span-4 lg:mt-4">
                <h1 className=" lg:text-2xl text-lg font-bold font-robotoSerif mb-3">
                  Hand Bags:
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {bags.map((item) => (
                    <Card key={item.id} data={item} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {scarfs.length > 0 && (
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 mt-4">
              <div className="lg:col-span-4 lg:mt-4">
                <h1 className=" lg:text-2xl text-lg font-bold font-robotoSerif mb-3">
                  Scarfs:
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {scarfs.map((item) => (
                    <Card key={item.id} data={item} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {sunglasses.length > 0 && (
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 mt-4">
              <div className="lg:col-span-4 lg:mt-4">
                <h1 className=" lg:text-2xl text-lg font-bold font-robotoSerif mb-3">
                  Sunglasses:
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {sunglasses.map((item) => (
                    <Card key={item.id} data={item} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {perfumes.length > 0 && (
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 mt-4">
              <div className="lg:col-span-4 lg:mt-4">
                <h1 className=" lg:text-2xl text-lg font-bold font-robotoSerif mb-3">
                  Perfumes:
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {perfumes.map((item) => (
                    <Card key={item.id} data={item} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {hats.length > 0 && (
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 mt-4">
              <div className="lg:col-span-4 lg:mt-4">
                <h1 className=" lg:text-2xl text-lg font-bold font-robotoSerif mb-3">
                  Hats:
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {hats.map((item) => (
                    <Card key={item.id} data={item} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
export default AccessoryPage;
