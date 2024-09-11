import { useLayoutEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { motion } from 'framer-motion';

const OtherPageHeader = ({ label }: { label: string }) => {
  const lenis = useLenis();
  useLayoutEffect(() => {
    lenis?.scrollTo(0, {
      immediate: true,
    });
    lenis?.stop();
  });
  const enableScroll = () => {
    lenis?.start();
  };
  return (
    <>
      <motion.div
        className="absolute top-0 text-lg mt-4"
        initial={{ scale: 2, top: '50%' }}
        animate={{ scale: 1, top: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        onAnimationComplete={enableScroll}
      >
        <p>{label}</p>
      </motion.div>
      <motion.div
        className="pt-16 w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}
          className="w-full mb-12"
        />
      </motion.div>
    </>
  );
};

export default OtherPageHeader;
