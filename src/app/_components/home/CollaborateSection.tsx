import React from "react";
import SlideHeader from "@components/home/SlideHeader";

export const CollaborateSection = () => {
  return (
    <div className="flex flex-col place-items-center px-8 pb-24" id="collaborate">
      <SlideHeader label="Collaborate" direction="right" />
      <hr className="w-2/5 self-end border-foreground" />
      <div className="flex">
        <div className="mt-12 max-w-screen-sm text-center text-lg">
          <p>
            Our degree can be quite challenging at times and we believe that as a society, we have an obligation to do
            our best to help out one another. Whilst maintaining academic integrity and abiding by UOA's rules, we
            collaborate with one another to achieve better results and ultimately, a better education.
          </p>
          <p className="m-4">
            We firmly believe in the phrase: <br />
            <strong className="text-2xl font-bold text-secondary">Iron sharpens iron.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
