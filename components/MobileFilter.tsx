"use client";

import { Color, Gender } from "@/types";
import React, { useCallback, useState } from "react";
import Button from "./ui/Button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "./ui/IconButton";
import Filter from "./Filter";

type Props = {
  gender: Gender[];
  colors?: Color[];
};

const MobileFilter = ({ gender, colors }: Props) => {
  const [open, setOpen] = useState(false);

  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button
        className="flex items-center mb-5 space-y-6 lg:hidden"
        onClick={() => onOpen()}
      >
        Filters
        <Dialog
          open={open}
          as="div"
          className="relative z-40 lg:hidden"
          onClose={() => onClose()}
        >
          {/* Background */}
          <div className="fixed inset-0 bg-black bg-opacity-25" />

          <div className="fixed inset-0 z-10 flex">
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              <div className="flex items-center justify-end px-4">
                <IconButton icon={<X size={15} />} onClick={() => onClose()} />
              </div>

              <div className="p-4">
                <Filter valueKey="genderId" data={gender} name="Gender" />

                {/* <Filter valueKey="colorId" data={colors} name="Colors" /> */}
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Button>
    </>
  );
};

export default MobileFilter;
