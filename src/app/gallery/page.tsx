'use client';

import OtherPageHeader from '@components/common/PageHeaderAnimation';
import ImageImporter from '@components/gallery/ImageImporter';
import { FooterNavigation } from '@components/home/FooterNavigation';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  return (
    <>
      <div className="flex flex-col min-h-dvh items-center px-2">
        <OtherPageHeader label="Gallery" />
        <motion.div
          className="size-full flex flex-col mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex">
            <div className=" whitespace-nowrap min-w-[220px] mr-2 flex-col min-h-full flex items-center">
              <p className="text-4xl font-bold sticky top-[64px] bg-background">2024 S2</p>
              <div className="w-[1px] h-full bg-foreground" />
            </div>
            <div className="flex flex-col gap-4 items-center w-full">
              <GalleryImageHeader Title="Launch Night" />
              <GalleryImageContent numberOfImages={20} path="/assets/images/launchnight/LN_" />
              <GalleryImageHeader Title="Esport Night" />
              <GalleryImageContent numberOfImages={14} path="/assets/images/esportnight2024/ESPN_" />
            </div>
          </div>
          <p className="text-4xl self-start min-w-[220px] text-center">now</p>
        </motion.div>
      </div>
      <FooterNavigation />
    </>
  );
}

const GalleryImageHeader = ({ Title }: { Title: string }) => {
  return (
    <div className="flex  w-full justify-center h-full items-center whitespace-nowrap">
      <hr className="w-full" />
      <h3 className="text-3xl font-bold px-2">{Title}</h3>
      <hr className="w-full" />
    </div>
  );
};

const GalleryImageContent = ({ numberOfImages, path }: { numberOfImages: number; path: string }) => {
  return (
    <div className="flex gap-4 flex-wrap *:h-[200px] justify-center">
      {new Array(numberOfImages).fill('').map((_, i) => {
        return <img src={`${path}${i}.png`} />;
      })}
    </div>
  );
};
