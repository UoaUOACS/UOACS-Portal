import React from "react";
import SlideHeader from "@components/home/SlideHeader";

export const NetworkSection = () => {
  return (
    <div className="flex flex-col place-items-center px-8 pb-24" id="network">
      <SlideHeader label="Network" direction="left" />
      <hr className="w-2/5 self-start border-foreground" />
      <div className="flex">
        <p className="mt-12 max-w-screen-sm text-center text-lg">
          Most people in the industry would agree that the phrase,{" "}
          <span className="font-bold text-secondary">"Your network is your net worth"</span>, rings true. We also align
          ourselves with this phrase and we hope to cultivate an environment where people can expand their network and
          create opportunities for their futures. Whether this is with the faculty, industry or even just with one
          another.
        </p>
        <img src="" alt="" />
      </div>
    </div>
  );
};
