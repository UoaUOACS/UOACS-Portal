import type { ReactNode } from "react";

export const connectData = {
  title: "Connect",
  direction: "left" as const,
  content: (
    <>
      Computer science students are known to be slightly more on the antisocial end of the spectrum and as a club, we
      hope to break that stereotype. <br />
      University life can be daunting at times and we hope to serve as the catalyst between lifelong friendships. We do
      this through our mix of social, industry, educational and competitive events.
    </>
  ) as ReactNode,
};
