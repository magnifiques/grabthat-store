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

  let hoodies: Product[] = [];
  products.forEach((product) => {
    if (product.name.includes("Hoodie")) {
      hoodies.push(product);
    }
  });

  let jackets: Product[] = [];

  products.forEach((product) => {
    if (product.name.includes("Jacket")) {
      jackets.push(product);
    }
  });

  let coats: Product[] = [];
  products.forEach((product) => {
    if (product.name.includes("Coat")) {
      coats.push(product);
    }
  });

  let tees: Product[] = [];
  products.forEach((product) => {
    if (product.name.includes("Tee")) {
      tees.push(product);
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
          {hoodies.length > 0 && (
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 mt-4">
              <div className="lg:col-span-4 lg:mt-4">
                <h1 className=" lg:text-2xl text-lg font-bold font-robotoSerif mb-3">
                  Hoodies:
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {hoodies.map((item) => (
                    <Card key={item.id} data={item} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {jackets.length > 0 && (
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 mt-4">
              <div className="lg:col-span-4 lg:mt-4">
                <h1 className=" lg:text-2xl text-lg font-bold font-robotoSerif mb-3">
                  Jackets:
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {jackets.map((item) => (
                    <Card key={item.id} data={item} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {coats.length > 0 && (
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 mt-4">
              <div className="lg:col-span-4 lg:mt-4">
                <h1 className=" lg:text-2xl text-lg font-bold font-robotoSerif mb-3">
                  Coats:
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {coats.map((item) => (
                    <Card key={item.id} data={item} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {tees.length > 0 && (
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 mt-4">
              <div className="lg:col-span-4 lg:mt-4">
                <h1 className=" lg:text-2xl text-lg font-bold font-robotoSerif mb-3">
                  Tees:
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {tees.map((item) => (
                    <Card key={item.id} data={item} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {hoodies.length === 0 &&
            jackets.length === 0 &&
            coats.length === 0 &&
            tees.length === 0 && <NoResults />}
        </div>
      </Container>
    </div>
  );
};
export default AccessoryPage;
