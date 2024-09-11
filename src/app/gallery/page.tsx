'use client';

import OtherPageHeader from '@components/common/PageHeaderAnimation';
import { FooterNavigation } from '@components/home/FooterNavigation';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  return (
    <>
      <div className="flex flex-col min-h-dvh items-center px-2">
        <OtherPageHeader label="Gallery" />
        <motion.div
          className="size-full flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex">
            <div className=" whitespace-nowrap min-w-[220px] mr-2 flex-col min-h-full flex items-center">
              <p className="text-4xl font-bold sticky top-[64px] bg-background">2024 S2</p>
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
      <FooterNavigation />
    </>
  );
}
