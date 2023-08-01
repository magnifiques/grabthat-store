import getBillboards from "@/actions/getBillboards";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductsList from "@/components/ProductsList";
import Container from "@/components/ui/Container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboards = await getBillboards(
    "ec3d2694-932d-46d4-a788-40ffa08cbaa5"
  );

  const products = await getProducts({ isFeatured: true });
  return (
    <div>
      <Billboard data={billboards} />
      <Container>
        <div className="space-y-10 pb-10 mt-12">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductsList title="Featured Items" items={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
