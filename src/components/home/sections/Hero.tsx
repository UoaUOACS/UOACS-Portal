"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { Blocks, Cable, Merge, Network } from "lucide-react";

import { cn } from "@/libs/utils";
import HeroBlur from "../HeroBlur";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeroSection = ({ ...props }: HeroProps) => {
  const lenis = useLenis();

  type targetProps = string | number | HTMLElement;
  const handleScrollTo = (target: targetProps) => {
    lenis?.scrollTo(target, {
      immediate: false,
      duration: 1.5,
    });
  };

  return (
    <div {...props} className={cn("grid min-h-[400px] w-full place-items-center sm:mt-12", props.className)}>
      <HeroBlur />
      <div className="flex flex-col items-center">
        <h3 className="flex min-w-[350px] flex-wrap justify-center text-2xl font-bold sm:w-[600px] sm:text-5xl">
          <p className="text-blue-400">University of Auckland</p>
          Computer Science Society
        </h3>
        <hr className="mt-4 w-4/6 border-foreground" />
        <h3 className="mt-6 flex flex-wrap items-center justify-center gap-2 text-center text-xl font-bold *:flex *:items-center *:gap-2">
          <LocalNavigation OnClick={() => handleScrollTo("#connect")}>
            Connect
            <Cable />
          </LocalNavigation>
          <LocalNavigation OnClick={() => handleScrollTo("#collaborate")}>
            Collaborate
            <Merge />
          </LocalNavigation>
          <LocalNavigation OnClick={() => handleScrollTo("#network")}>
            Network
            <Network />
          </LocalNavigation>
          <LocalNavigation OnClick={() => handleScrollTo("#develop")}>
            Develop
            <Blocks />
          </LocalNavigation>
        </h3>
      </div>
    </div>
  );
};

const LocalNavigation = ({ children, OnClick }: { children: React.ReactNode; OnClick: () => void }) => {
  return (
    <button
      onClick={OnClick}
      className="rounded-full border p-2 px-4 text-xl transition-colors hover:bg-white hover:text-secondary"
    >
      {children}
    </button>
  );
};
