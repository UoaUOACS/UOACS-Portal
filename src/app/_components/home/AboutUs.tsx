import React from "react";

import { aboutUsData } from "../../_data/aboutUsData";

interface AboutUsItemProps {
  label?: string | React.ReactNode;
  children: React.ReactNode;
}

const AboutUsItem = ({ label, children }: AboutUsItemProps) => {
  return (
    <div className="w-full">
      <strong className="flex items-center gap-2 whitespace-nowrap">
        {label} <hr className="my-2 w-full border-foreground opacity-40" />
      </strong>
      <p>{children}</p>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <div className="flex max-w-screen-sm flex-col items-center text-center sm:w-4/5 sm:text-left">
      <h3 className="mb-2 text-lg font-bold">{aboutUsData.title}</h3>
      {aboutUsData.items.map((item, index) => (
        <AboutUsItem key={index} label={item.label}>
          {item.content}
        </AboutUsItem>
      ))}
    </div>
  );
};
