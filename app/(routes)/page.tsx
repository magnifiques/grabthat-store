import getBillboards from "@/actions/getBillboards";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductsList from "@/components/ProductsList";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/Container";
import React from "react";

type Props = {};

export const revalidate = 0;

const HomePage = async (props: Props) => {
  const billboards = await getBillboards(
    "1db4c8b6-49a0-49fb-9473-fdfb970a16eb"
  );

  const products = await getProducts({ isFeatured: true });
  return (
    <div>
      <Billboard data={billboards} />
      <Container>
        <div className="space-y-10 pb-10 mt-8">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductsList title="Featured Items" items={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
