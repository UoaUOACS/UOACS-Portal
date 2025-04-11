"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { Scaling, X } from "lucide-react";

export const GalleryImageHeader = ({ Title, description }: { Title: string; description?: string }) => {
  return (
    <>
      <div className="flex size-full flex-wrap items-center justify-center whitespace-nowrap text-blue-400">
        <h3 className="whitespace-pre-wrap px-2 text-center text-3xl font-bold">{Title}</h3>
      </div>
      {description && <p className="w-2/3 text-center">{description}</p>}
    </>
  );
};

interface galleryImageProps {
  numberOfImages: number;
  path: string;
  alt: string;
  format?: string;
}

export const GalleryImageContent = ({ numberOfImages, path, alt, format = "png" }: galleryImageProps) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-4">
      {new Array(numberOfImages).fill("").map((_, i) => {
        return <ViewableImage path={`${path}${i}.${format}`} key={i} alt={`${alt}-image-no.${i}`} />;
      })}
    </div>
  );
};

const ViewableImage = ({ path, alt }: { path: string; alt: string }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex size-full select-none flex-col items-center justify-center gap-4 bg-black/60 p-4"
          onClick={handleClose}
        >
          <Image
            width={1600}
            height={1200}
            className="pointer-events-none max-h-[80%] w-full select-none rounded object-contain sm:max-w-[80%]"
            src={path}
            alt={alt}
            quality={100}
            priority
          />
          <X stroke="#FFF" className="cursor-pointer" />
        </div>
      )}
      <div
        className="group relative grid max-h-[200px] min-h-[200px] cursor-pointer place-items-center"
        onClick={handleOpen}
      >
        <Scaling className="absolute right-2 top-2 hidden group-hover:block" stroke="#FFF" />
        <Image
          fill
          sizes="300px"
          quality={30}
          className="!static !h-[200px] !w-min select-none rounded"
          src={path}
          alt={alt}
          loading="eager"
        />
      </div>
    </AnimatePresence>
  );
};
