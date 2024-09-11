'use client';

import Link from 'next/link';
import { FakeLoadingScreen } from '@components/home/LoadingScreen';
import { FooterLogos } from '@components/home/LogosFooter';
import { HeroSection } from '@components/home/sections/Hero';
import { Navigation } from '@components/home/sections/Navigation';
import { AnimatePresence, motion } from 'framer-motion';

import { navigation } from '@/data/navigation';

export default function Home() {
  return (
    <>
      <div className="max-w-dvw relative flex min-h-dvh flex-col items-center overflow-x-hidden px-8">
        <FakeLoadingScreen off />
        {/* navigation */}
        <Navigation />
        {/* Header Hero - Section 1 */}
        <HeroSection />
        <AboutUs />
        {/* Connect - Section 2 */}
      </div>
      {/* Footer */}
      <ConnectSection />
      <CollaborateSection />
      <FooterLogos>
        <div className="flex gap-2">
          {navigation.map(({ href, label }, i) => (
            <Link className="bg-white p-1 px-4 rounded-full text-background" key={i} href={href}>
              <p>{label}</p>
            </Link>
          ))}
        </div>
      </FooterLogos>
    </>
  );
}

const AboutUs = () => {
  return (
    <div className="max-w-[640px] w-4/5 flex items-center flex-col">
      <h3 className="text-lg font-bold mb-2">Who are we? and what do we do?</h3>
      <AboutUsItem label="The Idea">
        UOACS was founded in 2023 by Joshua Li and Chris Chiem, and serves as the student body for computer science
        students. The idea was birthed on a table in Kate Edgar Level 0 while studying for CS120 and contemplating what
        our future would look like.
      </AboutUsItem>
      <AboutUsItem>
        We realized that other practices had their own societies and associations while we were struggling to find like
        minded individuals. So we did what no one else was doing, and created this club.
      </AboutUsItem>
      <AboutUsItem>
        The core foundations of what we do and who we are are the following: <br />
        <strong className="text-secondary">Connect, collaborate, network and develop.</strong>
      </AboutUsItem>
    </div>
  );
};

const ConnectSection = () => {
  return (
    <div className=" pb-24 px-8 flex flex-col place-items-center">
      <motion.h1
        className="text-8xl w-min self-start"
        initial={{ translateX: '-100%' }}
        whileInView={{ translateX: '0%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        Connect
      </motion.h1>
      <hr className=" border-foreground w-2/5 self-start" />
      <div className="mt-12 max-w-screen-sm text-center text-lg">
        Computer science students are known to be slightly more on the antisocial end of the spectrum and as a club, we
        hope to break that stereotype. <br />
        University life can be daunting at times and we hope to serve as the catalyst between lifelong friendships. We
        do this through our mix of social, industry, educational and competitive events.
      </div>
      <div className="w-3/4 overflow-hidden mt-8">
        <motion.div
          className="h-[240px] flex gap-8"
          initial={{ translateX: '0%' }}
          animate={{ translateX: '-100%' }}
          transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
        >
          <div className="bg-white min-w-[240px] h-full"></div>
          <div className="bg-white min-w-[240px] h-full"></div>
          <div className="bg-white min-w-[240px] h-full"></div>
          <div className="bg-white min-w-[240px] h-full"></div>
          <div className="bg-white min-w-[240px] h-full"></div>
          <div className="bg-white min-w-[240px] h-full"></div>
          <div className="bg-white min-w-[240px] h-full"></div>
          <div className="bg-white min-w-[240px] h-full"></div>
          <div className="bg-white min-w-[240px] h-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

const CollaborateSection = () => {
  return (
    <div className=" pb-24 px-8 flex flex-col place-items-center">
      <motion.h1
        className="text-8xl w-min self-start"
        initial={{ translateX: '-100%' }}
        whileInView={{ translateX: '0%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        Collaborate
      </motion.h1>
      <hr className=" border-foreground w-2/5 self-start" />
    </div>
  );
};

const AboutUsItem = ({ label, children }: { label?: string | React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <strong className="flex whitespace-nowrap gap-2 items-center">
        {label} <hr className=" w-full border-foreground opacity-40 my-2" />
      </strong>
      <p>{children}</p>
    </div>
  );
};
