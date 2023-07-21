import { Billboard as BillboardType } from "@/types";
import React from "react";

type Props = {
  data: BillboardType;
};

const Billboard = ({ data }: Props) => {
  return (
    <div className="">
      <div
        className="relative aspect-square lg:h-[95vh] lg:w-full "
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
          backgroundSize: "cover",
        }}
      >
        {/* <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data?.label}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Billboard;
