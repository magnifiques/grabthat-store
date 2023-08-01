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

type Props = {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    genderId: string;
  };
};

const CategoryPage = async ({ params, searchParams }: Props) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    genderId: searchParams.genderId,
    colorId: searchParams.colorId,
  });

  const gender = await getGender();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="">
      <Billboard data={category.billboard} />
      <Container>
        <div className="mt-8 px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 mt-4">
            {/* Mobile Filters */}
            <MobileFilter gender={gender} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="genderId" data={gender} name="Gender" />
              <Filter valueKey="colorId" data={colors} name="Colors" />
            </div>
            <div className="ml-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <Card key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default CategoryPage;
