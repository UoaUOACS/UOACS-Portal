'use client';

import { useLenis } from '@studio-freight/react-lenis';
import { Blocks, Cable, Merge, Network } from 'lucide-react';

import { cn } from '@/libs/utils';
import HeroBlur from '../HeroBlur';

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
    <div {...props} className={cn('sm:mt-12 min-h-[400px] w-full grid place-items-center', props.className)}>
      <HeroBlur />
      <div className="flex flex-col items-center">
        <h3 className="text-2xl sm:text-5xl font-bold min-w-[350px] sm:w-[600px] flex-wrap flex justify-center">
          <p className="text-blue-400">University of Auckland</p>
          Computer Science Society
        </h3>
        <hr className="border-foreground w-4/6 mt-4" />
        <h3 className="text-xl text-center mt-6 font-bold *:flex gap-2 *:gap-2 *:items-center flex items-center flex-wrap justify-center">
          <LocalNavigation OnClick={() => handleScrollTo('#connect')}>
            Connect
            <Cable />
          </LocalNavigation>
          <LocalNavigation OnClick={() => handleScrollTo('#collaborate')}>
            Collaborate
            <Merge />
          </LocalNavigation>
          <LocalNavigation OnClick={() => handleScrollTo('#network')}>
            Network
            <Network />
          </LocalNavigation>
          <LocalNavigation OnClick={() => handleScrollTo('#develop')}>
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
      className="text-xl hover:text-secondary hover:bg-white border px-4 p-2 rounded-full transition-colors"
    >
      {children}
    </button>
  );
};
