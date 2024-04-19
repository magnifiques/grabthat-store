export const revalidate = 0;

import getBillboards from "@/actions/getBillboards";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductsList from "@/components/ProductsList";
import Container from "@/components/ui/Container";
import React from "react";

const HomePage = async () => {
  const billboards = await getBillboards(
    "14ee2d34-f159-457e-bb1f-705758d64e5f"
  );

  const products = await getProducts({ isFeatured: true });

  const sortedProducts = products.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <Billboard data={billboards} />
      <Container>
        <div className="space-y-10 pb-10 mt-12">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductsList title="Featured Items" items={sortedProducts} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
