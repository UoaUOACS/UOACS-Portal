'use client';

import { motion } from 'framer-motion';

import { cn } from '@/libs/utils';
import GlowButton from '../home/GlowButton';
import HeroBlur from '../home/HeroBlur';
import AnimatedText from '../team/AnimatedText';

const textVariant = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const textTansition = { duration: 0.25, ease: 'easeInOut' };

const HEROSTAGGER = 0.05;
const HEROTEXT = ['Connect,', 'Collaborate,', 'Network,', 'Develop'];
const HERODELAY = HEROTEXT.map((text) => text.length * HEROSTAGGER + 0.2);

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Hero = ({ ...props }: HeroProps) => {
  return (
    <div {...props} className={cn('relative flex h-full w-dvw justify-center xl:w-desktop', props.className)}>
      <HeroBlur />
      asd
    </div>
  );
};
