"use client";

import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  icon: React.ReactElement;
};

const IconButton = ({ onClick, className, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
