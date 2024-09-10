'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { cn } from '@/libs/utils';

const logos = ['/assets/images/UOACSLogo.svg'];

export const FooterLogos = ({ className }: { className?: string }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-125, 0]);

  return (
    <div className={cn('Card-shadow relative h-[150px] w-full overflow-hidden bg-black', className)} ref={container}>
      <motion.div style={{ y }} className="flex h-full items-center justify-center gap-10 p-10">
        {logos.map((image, i) => {
          return <img key={i} className="w-[150px]" src={image} />;
        })}
      </motion.div>
    </div>
  );
};
