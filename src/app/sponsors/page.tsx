'use client';

import OtherPageHeader from '@components/common/PageHeaderAnimation';
import { FooterNavigation } from '@components/home/FooterNavigation';
import { motion } from 'framer-motion';

export default function SponsorsPage() {
  return (
    <>
      <div className="flex flex-col min-h-dvh items-center px-2">
        <OtherPageHeader label="Our Sponsors!" />
        <motion.div
          className="grid place-items-center size-full flex-grow min-h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Silver Sponsors</h3>
            <img src="assets/svg/sponsors/JaneStreetLogo.svg" className="w-[300px] max-h-[250px]" />
          </div>
        </motion.div>
      </div>
      <FooterNavigation />
    </>
  );
}
