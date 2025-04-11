import React from "react";
import SlideHeader from "@components/home/SlideHeader";
import { motion } from "framer-motion";

import { carouselImages } from "../../_data/carouselImages";
import { connectData } from "../../_data/connectData";

interface CarouselProps {
  Items: React.ReactNode;
}

interface CarouselImage {
  src: string;
  alt: string;
}

const Carousel = ({ Items }: CarouselProps) => {
  return (
    <motion.div
      className="absolute flex w-max gap-4 pr-4 *:h-[240px]"
      initial={{ translateX: "0%" }}
      animate={{ translateX: "-50%" }}
      transition={{ duration: 16, ease: "linear", repeat: Infinity }}
    >
      {Items}
      {Items}
    </motion.div>
  );
};

export const ConnectSection = () => {
  return (
    <div className="flex flex-col place-items-center px-8 pb-24" id="connect">
      <SlideHeader label={connectData.title} direction={connectData.direction} />
      <hr className="w-2/5 self-start border-foreground" />
      <div className="mt-12 max-w-screen-sm text-center text-lg">{connectData.content}</div>
      <div className="relative mt-8 h-[300px] w-full max-w-[1200px] overflow-hidden sm:w-3/4">
        <Carousel
          Items={
            <>
              {carouselImages.map((image: CarouselImage, index: number) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </>
          }
        />
      </div>
    </div>
  );
};
