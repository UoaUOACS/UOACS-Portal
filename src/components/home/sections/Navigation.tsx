'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, type Variants } from 'framer-motion';

import { navigation } from '@/data/navigation';

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="h-[70px] my-4 mt-16 w-full flex items-center justify-end lg:justify-between gap-4 text-lg  ">
      <div className="w-16" />
      <div className=" sm:gap-4 sm:flex hidden ">
        {navigation.map(({ href, label }) => {
          if (href === pathname) return;
          return <NavigationLink href={href} label={label} key={href} />;
        })}
      </div>
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="https://forms.gle/kiLbz2N5WiqjxLoJ8"
        className="bg-white text-black p-2 sm:px-8 px-12 rounded-full whitespace-nowrap select-none cursor-pointer"
      >
        Join us!
      </motion.a>
      <div className="size-12 bg-white flex items-center justify-center gap-1 flex-col rounded-full">
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
      </div>
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
