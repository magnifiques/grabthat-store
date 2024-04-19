import { Billboard as BillboardType } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  data: BillboardType;
};

const Billboard = ({ data }: Props) => {
  console.log(data);
  return (
    <div className="">
      <Image
        src={data?.imageUrl}
        alt="billboard"
        className="object-cover w-full h-full object-center "
        width={100}
        height={100}
        unoptimized
      />
      {/* <div
        className=" object-center object-cover"
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
        }}
      > */}
      {/* <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data?.label}
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Billboard;
