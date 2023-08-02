"use client";
import React from "react";
import { ClockLoader } from "react-spinners";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <ClockLoader size={150} color={"black"} />
    </div>
  );
};

export default Loader;
