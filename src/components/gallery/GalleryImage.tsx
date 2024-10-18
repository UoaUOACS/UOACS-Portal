import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { Scaling, X } from 'lucide-react';

export const GalleryImageHeader = ({ Title, description }: { Title: string; description?: string }) => {
  return (
    <>
      <div className="flex size-full text-blue-400 justify-center flex-wrap items-center whitespace-nowrap">
        <h3 className="text-3xl font-bold px-2 whitespace-pre-wrap text-center ">{Title}</h3>
      </div>
      {description && <p className="text-center w-2/3">{description}</p>}
    </>
  );
};

interface galleryImageProps {
  numberOfImages: number;
  path: string;
  alt: string;
  format?: string;
}

export const GalleryImageContent = ({ numberOfImages, path, alt, format = 'png' }: galleryImageProps) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center mb-8">
      {new Array(numberOfImages).fill('').map((_, i) => {
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
          className="fixed size-full p-4 inset-0 flex items-center justify-center flex-col gap-4 select-none bg-black/60 z-[9999]"
          onClick={handleClose}
        >
          <Image
            width={1600}
            height={1200}
            className="sm:max-w-[80%] w-full max-h-[80%] object-contain rounded select-none pointer-events-none"
            src={path}
            alt={alt}
            quality={100}
            priority
          />
          <X stroke="#FFF" className="cursor-pointer" />
        </div>
      )}
      <div
        className="grid group relative min-h-[200px] max-h-[200px] place-items-center cursor-pointer"
        onClick={handleOpen}
      >
        <Scaling className="absolute group-hover:block hidden top-2 right-2" stroke="#FFF" />
        <Image
          fill
          sizes="300px"
          quality={30}
          className="rounded select-none !static !w-min !h-[200px]"
          src={path}
          alt={alt}
          loading="eager"
        />
      </div>
    </AnimatePresence>
  );
};
