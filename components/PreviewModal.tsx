"use client";

import usePreviewModal from "@/hooks/usePreviewModal";
import React from "react";
import Modal from "./ui/Modal";
import Gallery from "./gallery/Gallery";
import Info from "./Info";

type Props = {};

const PreviewModal = (props: Props) => {
  const productPreview = usePreviewModal();
  const product = usePreviewModal((store) => store.data);

  if (!product) return null;

  const brand = product.name.trim().split("By ")[1];

  return (
    <>
      <Modal open={productPreview.isOpen} onClose={productPreview.onClose}>
        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
          <div className="sm:col-span-4 lg:col-span-5">
            <Gallery images={product.images} />
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <Info data={product} brand={brand} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PreviewModal;
