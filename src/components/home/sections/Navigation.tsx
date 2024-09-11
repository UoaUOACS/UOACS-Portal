'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

import { navigation } from '@/data/navigation';

export const Navigation = () => {
  return (
    <nav className="h-[70px] my-4 w-full flex items-center justify-between gap-4 text-lg text-white">
      <div className="w-16" />
      <div className="gap-4 flex">
        {navigation.map(({ href, label }) => (
          <NavigationLink href={href} label={label} key={href} />
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-white text-black p-2 px-8 rounded-full whitespace-nowrap select-none cursor-pointer"
      >
        Join us!
      </motion.button>
    </nav>
  );
};

export type NavigationLinkProps = {
  href: string;
  label: string;
};

const NavHovervariant: Variants = {
  initial: {
    width: 0,
  },
  hover: {
    width: '100%',
  },
};
export const NavigationLink = ({ href, label }: NavigationLinkProps) => {
  return (
    <Link key={href} href={href}>
      <motion.div
        className="px-4 relative whitespace-nowrap select-none"
        initial="initial"
        animate="initial"
        whileHover="hover"
      >
        <motion.div
          variants={NavHovervariant}
          className="bg-white pointer-events-none text-secondary overflow-hidden left-0 h-full w-full absolute"
        >
          <p className="mx-4 font-bold">{label}</p>
        </motion.div>
        <p>{label}</p>
      </motion.div>
    </Link>
  );
};
