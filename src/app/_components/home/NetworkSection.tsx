import React from "react";
import SlideHeader from "@components/home/SlideHeader";

import { networkData } from "../../_data/networkData";

export const NetworkSection = () => {
  return (
    <div className="flex flex-col place-items-center px-8 pb-24" id="network">
      <SlideHeader label={networkData.title} direction={networkData.direction} />
      <hr className="w-2/5 self-start border-foreground" />
      <div className="flex">
        <p className="mt-12 max-w-screen-sm text-center text-lg">{networkData.content}</p>
        <img src="" alt="" />
      </div>
    </div>
  );
};
