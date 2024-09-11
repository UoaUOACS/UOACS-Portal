'use client';

import Link from 'next/link';
import HeroBlur from '@components/home/HeroBlur';
import { FakeLoadingScreen } from '@components/home/LoadingScreen';
import { FooterLogos } from '@components/home/LogosFooter';
import { HeroSection } from '@components/home/sections/Hero';
import { Navigation } from '@components/home/sections/Navigation';
import { Lightbulb } from 'lucide-react';

import { navigation } from '@/data/navigation';

// import { motion } from 'framer-motion';

type NavigationProps = {
  href: string;
  label: string;
};

export default function Home() {
  return (
    <>
      <div className="max-w-dvw relative flex min-h-dvh flex-col items-center overflow-x-hidden px-8">
        <FakeLoadingScreen off />
        {/* navigation */}
        <Navigation />
        {/* content */}
        <HeroSection />
        <div className="max-w-[640px] w-4/5 flex items-center flex-col">
          <h3 className="text-lg font-bold mb-2">Who are we? and what do we do?</h3>
          <AboutUsItem label="The Idea">
            UOACS was founded in 2023 by Joshua Li and Chris Chiem, and serves as the student body for computer science
            students. The idea was birthed on a table in Kate Edgar Level 0 while studying for CS120 and contemplating
            what our future would look like.
          </AboutUsItem>
          <AboutUsItem>
            We realized that other practices had their own societies and associations while we were struggling to find
            like minded individuals. So we did what no one else was doing, and created this club.
          </AboutUsItem>
        </div>
      </div>
      <FooterLogos>
        <div className="flex gap-2">
          {navigation.map(({ href, label }) => (
            <Link className="bg-white p-1 px-4 rounded-full text-background" key={href} href={href}>
              <p>{label}</p>
            </Link>
          ))}
        </div>
      </FooterLogos>
    </>
  );
}

const AboutUsItem = ({ label, children }: { label?: string | React.ReactNode; children: React.ReactNode }) => {
  return (
    <div>
      <strong className="flex whitespace-nowrap gap-2 items-center">
        {label} <hr className=" w-full border-foreground opacity-40 my-2" />
      </strong>
      <p>{children}</p>
    </div>
  );
};
