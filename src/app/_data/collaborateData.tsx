import { ReactNode } from "react";

export const collaborateData = {
  title: "Collaborate",
  direction: "right" as const,
  content: [
    "Our degree can be quite challenging at times and we believe that as a society, we have an obligation to do our best to help out one another. Whilst maintaining academic integrity and abiding by UOA's rules, we collaborate with one another to achieve better results and ultimately, a better education.",
    <>
      We firmly believe in the phrase: <br />
      <strong className="text-2xl font-bold text-secondary">Iron sharpens iron.</strong>
    </>,
  ] as ReactNode[],
};
