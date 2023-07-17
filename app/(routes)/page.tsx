import getBillboards from "@/actions/getBillboards";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductsList from "@/components/ProductsList";
import Container from "@/components/ui/Container";
import React from "react";

type Props = {};

export const revalidate = 0;

const HomePage = async (props: Props) => {
  const billboards = await getBillboards(
    "9d51f532-9e9e-4b48-b8e3-915495b84eef"
  );

  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductsList title="Featured Items" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
