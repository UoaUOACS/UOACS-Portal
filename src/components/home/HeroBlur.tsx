"use client";

import { motion } from "framer-motion";

const HeroBlur = () => {
  return (
    <>
      <div className="bg-blur pointer-events-none absolute -z-10" />
      <div className="dottedmask pointer-events-none absolute -z-10 grid size-full place-items-center brightness-200">
        <motion.div style={{ maskImage: "radial-gradient(#fff, #fff0,#fff0)" }} className="size-2/3">
          <motion.div
            className="grainy size-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default HeroBlur;
