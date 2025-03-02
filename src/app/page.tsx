"use client";

import { FooterNavigation } from "@components/home/FooterNavigation";
import { IconLoadingScreen } from "@components/home/LoadingScreen";
import { HeroSection } from "@components/home/sections/Hero";
import { Navigation } from "@components/home/sections/Navigation";
import SlideHeader from "@components/home/SlideHeader";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="max-w-dvw overflow-hidden">
      <IconLoadingScreen />
      <div className="max-w-dvw relative mb-36 flex flex-col items-center overflow-hidden px-4 sm:px-8">
        {/* navigation */}
        <Navigation />
        {/* Header Hero - Section 1 */}
        <HeroSection />
        <AboutUs />
      </div>
      {/*Sections*/}
      <ConnectSection />
      <CollaborateSection />
      <NetworkSection />
      <DevelopSection />
      <JoinUs />
      {/* Footer */}
      <FooterNavigation />
    </div>
  );
}

const AboutUs = () => {
  return (
    <div className="flex max-w-screen-sm flex-col items-center text-center sm:w-4/5 sm:text-left">
      <h3 className="mb-2 text-lg font-bold">Who are we? and what do we do?</h3>
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
    <div className="flex flex-col place-items-center px-8 pb-24" id="connect">
      <SlideHeader label="Connect" direction="left" />
      <hr className="w-2/5 self-start border-foreground" />
      <div className="mt-12 max-w-screen-sm text-center text-lg">
        Computer science students are known to be slightly more on the antisocial end of the spectrum and as a club, we
        hope to break that stereotype. <br />
        University life can be daunting at times and we hope to serve as the catalyst between lifelong friendships. We
        do this through our mix of social, industry, educational and competitive events.
      </div>
      <div className="relative mt-8 h-[300px] w-full max-w-[1200px] overflow-hidden sm:w-3/4">
        <Carousel
          Items={
            <>
              <img src="assets/images/launchnight/LN_0.png" alt="launch night image" />
              <img src="assets/images/launchnight/LN_4.png" alt="launch night image" />
              <img src="assets/images/launchnight/LN_8.png" alt="launch night image" />
              <img src="assets/images/launchnight/LN_10.png" alt="launch night image" />
              <img src="assets/images/launchnight/LN_13.png" alt="launch night image" />
            </>
          }
        />
      </div>
    </div>
  );
};

const Carousel = ({ Items }: { Items: React.ReactNode }) => {
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

const CollaborateSection = () => {
  return (
    <div className="flex flex-col place-items-center px-8 pb-24" id="collaborate">
      <SlideHeader label="Collaborate" direction="right" />
      <hr className="w-2/5 self-end border-foreground" />
      <div className="flex">
        <div className="mt-12 max-w-screen-sm text-center text-lg">
          <p>
            Our degree can be quite challenging at times and we believe that as a society, we have an obligation to do
            our best to help out one another. Whilst maintaining academic integrity and abiding by UOA’s rules, we
            collaborate with one another to achieve better results and ultimately, a better education.
          </p>
          <p className="m-4">
            We firmly believe in the phrase: <br />
            <strong className="text-2xl font-bold text-secondary">Iron sharpens iron.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

const NetworkSection = () => {
  return (
    <div className="flex flex-col place-items-center px-8 pb-24" id="network">
      <SlideHeader label="Network" direction="left" />
      <hr className="w-2/5 self-start border-foreground" />
      <div className="flex">
        <p className="mt-12 max-w-screen-sm text-center text-lg">
          Most people in the industry would agree that the phrase,{" "}
          <span className="font-bold text-secondary">“Your network is your net worth”</span>, rings true. We also align
          ourselves with this phrase and we hope to cultivate an environment where people can expand their network and
          create opportunities for their futures. Whether this is with the faculty, industry or even just with one
          another.
        </p>
        <img src="" alt="" />
      </div>
    </div>
  );
};

const DevelopSection = () => {
  return (
    <div className="flex flex-col place-items-center px-8 pb-24" id="develop">
      <SlideHeader label="Develop" direction="right" />
      <hr className="w-2/5 self-end border-foreground" />
      <p className="mt-12 max-w-screen-sm text-center text-lg">
        Another core element of being a Computer Science student is the technical skills that we acquire throughout our
        degree. As a club, we aspire to be a source of help that can fill in the gaps that lectures and labs might
        leave. Our executive team also has a specific division dedicated for the development of our peers through
        competitive activities like hackathons and consulting case cracks.
      </p>
    </div>
  );
};

const JoinUs = () => {
  return (
    <div className="relative flex flex-col place-items-center pb-24 sm:pb-16" id="Join us">
      <a
        href="https://forms.gle/wE4YkHsPvyQ8Jx6YA"
        className="grid select-none place-items-center rounded-full border px-24 py-6 text-center text-4xl font-bold transition-colors duration-200 hover:bg-white hover:text-secondary sm:py-12 sm:text-5xl"
      >
        Join Us for <br />
        2025!
      </a>
    </div>
  );
};

const AboutUsItem = ({ label, children }: { label?: string | React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <strong className="flex items-center gap-2 whitespace-nowrap">
        {label} <hr className="my-2 w-full border-foreground opacity-40" />
      </strong>
      <p>{children}</p>
    </div>
  );
};
