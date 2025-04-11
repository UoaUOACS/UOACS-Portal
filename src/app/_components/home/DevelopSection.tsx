import React from "react";
import SlideHeader from "@components/home/SlideHeader";

import { developData } from "../../_data/developData";

export const DevelopSection = () => {
  return (
    <div className="flex flex-col place-items-center px-8 pb-24" id="develop">
      <SlideHeader label={developData.title} direction={developData.direction} />
      <hr className="w-2/5 self-end border-foreground" />
      <p className="mt-12 max-w-screen-sm text-center text-lg">{developData.content}</p>
    </div>
  );
};
