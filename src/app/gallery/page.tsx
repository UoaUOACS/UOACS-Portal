'use client';

import { motion } from 'framer-motion';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-dvh items-center px-2">
      <motion.div
        className="absolute top-0 text-base mt-4"
        initial={{ scale: 2, top: '50%' }}
        animate={{ scale: 1, top: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
      >
        <p>Gallery</p>
      </motion.div>
      <hr className="w-full mt-12" />
      <motion.div
        className="size-full flex flex-col mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex">
          <div className=" whitespace-nowrap min-w-[220px] mr-2 flex-col min-h-full flex items-center">
            <p className="text-4xl font-bold">2024 S2</p>
            <p className="text-lg">April 26</p>
            <div className="w-[1px] h-full bg-foreground" />
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="h-[200px] bg-white aspect-square"></div>
            <div className="h-[200px] bg-white aspect-square"></div>
            <div className="h-[200px] bg-white aspect-square"></div>
            <div className="h-[200px] bg-white aspect-square"></div>
            <div className="h-[200px] bg-white aspect-square"></div>
          </div>
        </div>
        <p className="text-4xl self-start min-w-[220px] text-center">now</p>
      </motion.div>
    </div>
  );
}
