'use client';

import { useLayoutEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { motion } from 'framer-motion';

interface FakeLoadingScreenProps {
  off?: boolean;
}

const bgVariant = {
  initial: { background: '#000' },
  animate: { background: '#0000' },
};

const logoVariant = {
  initial: { scale: 2.5, top: '50%', translate: '-50% -50%', filter: 'blur(300px)' },
  animate: { scale: 1, top: '16px', left: '32px', translate: '0% 0%', filter: 'blur(0px)' },
};
let played = false;

export const IconLoadingScreen = ({ off }: FakeLoadingScreenProps) => {
  // i hope i don't need this in the future :smile:
  const lenis = useLenis();
  useLayoutEffect(() => {
    if (!off && !played) {
      lenis?.scrollTo(0, {
        immediate: true,
      });
      lenis?.stop();
      played = true;
    }
  });
  const enableScroll = () => {
    lenis?.start();
  };
  return (
    <>
      <motion.div
        className="pointer-events-none absolute z-[999] flex h-dvh w-dvw justify-center bg-black"
        initial={off ? 'animate' : 'initial'}
        animate="animate"
        variants={bgVariant}
        transition={{ duration: 0.5, delay: 1.2 }}
        onAnimationComplete={enableScroll}
      >
        <motion.img
          src="assets/images/UOACSLogo.svg"
          className="absolute top-[50%] left-[50%] h-[70px] opacity-0 md:opacity-100"
          variants={logoVariant}
          transition={{
            duration: 0.5,
            delay: 1,
            ease: 'easeInOut',
            filter: { delay: 0, duration: 0.75 },
          }}
        />
      </motion.div>
    </>
  );
};
