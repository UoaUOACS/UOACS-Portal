import { useState } from 'react';
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
          <img
            className="sm:max-w-[80%] w-full max-h-[80%] object-contain rounded select-none pointer-events-none"
            src={path}
            alt={alt}
          />
          <X stroke="#FFF" className="cursor-pointer" />
        </div>
      )}
      <div className="grid group relative place-items-center cursor-pointer" onClick={handleOpen}>
        <Scaling className="absolute group-hover:block hidden top-2 right-2" stroke="#FFF" />
        <img className="h-[200px] rounded select-none " src={path} loading="lazy" alt={alt} />
      </div>
    </AnimatePresence>
  );
};
