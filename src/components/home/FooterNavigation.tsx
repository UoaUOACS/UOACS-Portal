'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';

import { navigation } from '@/data/navigation';
import { cn } from '@/libs/utils';

const logos = ['/assets/images/UOACSLogo.svg'];

export const FooterNavigation = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-125, 0]);

  return (
    <div className={cn('Card-shadow relative h-[150px] w-full overflow-hidden bg-black', className)} ref={container}>
      <motion.div style={{ y }} className="flex h-full items-center flex-col justify-center gap-2 p-10">
        <div className="flex gap-2">
          {navigation.map(({ href, label }, i) => {
            if (href === pathname) return;
            return (
              <Link
                className="bg-white p-1 px-4 hover:text-secondary border-slate-300 border-2 hover:border-secondary rounded-full text-background transition-colors"
                key={i}
                href={href}
              >
                <p>{label}</p>
              </Link>
            );
          })}
        </div>
        {logos.map((image, i) => {
          return <img key={i} className="w-[150px]" src={image} />;
        })}
      </motion.div>
    </div>
  );
};
