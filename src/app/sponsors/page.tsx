'use client';

import OtherPageHeader from '@components/common/PageHeaderAnimation';
import { FooterNavigation } from '@components/home/FooterNavigation';
import { motion } from 'framer-motion';

export default function SponsorsPage() {
  return (
    <>
      <div className="flex flex-col min-h-dvh items-center">
        <OtherPageHeader label="Our Sponsors!" />
        <motion.div
          className="grid place-items-center size-full grow min-h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="relative flex flex-col w-full py-16 items-center mb-8">
            <div className="absolute inset-1/2  size-[150%] [translate:-50%_-50%] -z-[9999]">
              <Grainy />
            </div>
            <h3 className="text-3xl font-bold mb-4">Silver Sponsors</h3>
            <img
              src="assets/svg/sponsors/JaneStreetLogo.svg"
              className="min-w-[250px] max-h-[250px] max-w-[400px] hover:saturate-150 hover:brightness-150 p-8 bg-[radial-gradient(hsl(var(--background),1),hsl(var(--background),0.4),#fff0,#fff0)] transition-all"
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
    <div className="dottedmask brightness-200 pointer-events-none grid place-items-center absolute size-full inset-0 -z-10">
      <motion.div style={{ maskImage: 'radial-gradient(#fff,#fff, #fff0,#fff0)' }} className="size-2/3">
        <motion.div
          className="grainy size-full "
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
        />
      </motion.div>
    </div>
  );
};
