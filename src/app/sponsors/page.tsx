"use client";

import OtherPageHeader from "@components/common/PageHeaderAnimation";
import { FooterNavigation } from "@components/home/FooterNavigation";
import { motion } from "framer-motion";

export default function SponsorsPage() {
  return (
    <>
      <div className="flex min-h-dvh flex-col items-center">
        <OtherPageHeader label="Our Sponsors!" />
        <motion.div
          className="grid size-full min-h-full grow place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="relative mb-8 flex w-full flex-col items-center py-16">
            <div className="absolute inset-1/2 -z-[9999] size-[150%] [translate:-50%_-50%]">
              <Grainy />
            </div>
            <h3 className="mb-4 text-3xl font-bold">Silver Sponsors</h3>
            <img
              src="assets/svg/sponsors/JaneStreetLogo.svg"
              className="max-h-[250px] min-w-[250px] max-w-[400px] bg-[radial-gradient(hsl(var(--background),1),hsl(var(--background),0.5),#fff0,#fff0)] p-8 transition-all hover:brightness-150 hover:saturate-150"
              alt="Silver sponsor, Jane Street Logo"
            />
          </div>
        </motion.div>
      </div>
      <FooterNavigation />
    </>
  );
}

const Grainy = () => {
  return (
    <div className="dottedmask pointer-events-none absolute inset-0 -z-10 grid size-full place-items-center brightness-200">
      <motion.div style={{ maskImage: "radial-gradient(#fff,#fff, #fff0,#fff0)" }} className="size-2/3 sm:w-1/3">
        <motion.div
          className="grainy size-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
};
