import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/getProducts";
import Gallery from "@/components/gallery/Gallery";
import Info from "@/components/Info";
import ProductsList from "@/components/ProductsList";
import Container from "@/components/ui/Container";
import React from "react";

type Props = {
  params: { productId: string };
};

const ProductPage = async ({ params }: Props) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category.id,
  });

  const relatedItems = suggestedProducts.filter(
    (product) => product.id !== params.productId
  );

  const reversed = product?.images?.reverse();

  const brand = product.name.trim().split("By ")[1];

  return (
    <div className="bg-white py-5">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 gap-y-2">
            <Gallery images={reversed} />
            <div className="mt-8">
              <Info data={product} brand={brand} />
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <ProductsList title="Related Items" items={relatedItems} />
      </Container>
    </div>
  );
};

export default ProductPage;
