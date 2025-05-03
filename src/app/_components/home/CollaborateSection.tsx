import React from "react";
import SlideHeader from "@components/home/SlideHeader";

import { collaborateData } from "../../_data/collaborateData";

export const CollaborateSection = () => {
  return (
    <div className="flex flex-col place-items-center px-8 pb-24" id="collaborate">
      <SlideHeader label={collaborateData.title} direction={collaborateData.direction} />
      <hr className="w-2/5 self-end border-foreground" />
      <div className="flex">
        <div className="mt-12 max-w-screen-sm text-center text-lg">
          <p>{collaborateData.content[0]}</p>
          <p className="m-4">
            {collaborateData.content[1]} <br />
          </p>
        </div>
      </div>
    </div>
  );
};
