import React from "react";
import Link from "next/link";

import { formsData } from "@/data/forms";
import { joinUsData } from "../../_data/joinUsData";

export const JoinUs = () => {
  return (
    <div className="relative flex flex-col place-items-center pb-24 sm:pb-16" id="Join us">
      <Link
        href={formsData.url}
        target="_blank"
        className="grid select-none place-items-center rounded-full border px-24 py-6 text-center text-4xl font-bold transition-colors duration-200 hover:bg-white hover:text-secondary sm:py-12 sm:text-5xl"
      >
        {joinUsData.text}
      </Link>
    </div>
  );
};
