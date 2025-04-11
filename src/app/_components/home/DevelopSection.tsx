import React from "react";
import SlideHeader from "@components/home/SlideHeader";

export const DevelopSection = () => {
  return (
    <div className="flex flex-col place-items-center px-8 pb-24" id="develop">
      <SlideHeader label="Develop" direction="right" />
      <hr className="w-2/5 self-end border-foreground" />
      <p className="mt-12 max-w-screen-sm text-center text-lg">
        Another core element of being a Computer Science student is the technical skills that we acquire throughout our
        degree. As a club, we aspire to be a source of help that can fill in the gaps that lectures and labs might
        leave. Our executive team also has a specific division dedicated for the development of our peers through
        competitive activities like hackathons and consulting case cracks.
      </p>
    </div>
  );
};
