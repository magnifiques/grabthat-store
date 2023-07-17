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
    "18f24b0e-4179-4139-a74d-1f6e70d548ab"
  );

  console.log(billboards);

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
