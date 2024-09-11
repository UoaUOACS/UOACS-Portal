'use client';

import { motion } from 'framer-motion';
import { Blocks, Cable, Merge, Network } from 'lucide-react';

import { cn } from '@/libs/utils';
import HeroBlur from '../HeroBlur';

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeroSection = ({ ...props }: HeroProps) => {
  return (
    <div {...props} className={cn('mt-12 min-h-[400px] w-full grid place-items-center', props.className)}>
      <HeroBlur />
      <div className="flex flex-col items-center">
        <h3 className="text-3xl sm:text-5xl font-bold w-[400px] sm:w-[600px] flex-wrap flex justify-center">
          <p className="text-blue-400">University of Auckland</p>
          Computer Science Society
        </h3>
        <hr className="border-foreground w-4/6 mt-4" />
        <h3 className="text-xl text-center mt-6 font-bold *:flex gap-2 *:gap-2 *:items-center flex items-center">
          <LocalNavigation>
            Connect
            <Cable />
          </LocalNavigation>
          <LocalNavigation>
            Collaborate
            <Merge />
          </LocalNavigation>
          <LocalNavigation>
            Network
            <Network />
          </LocalNavigation>
          <LocalNavigation>
            Develop
            <Blocks />
          </LocalNavigation>
        </h3>
      </div>
    </div>
  );
};

const LocalNavigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="text-xl border px-4 p-2 rounded-full hover:text-secondary hover:border-secondary">
      {children}
    </button>
  );
};
