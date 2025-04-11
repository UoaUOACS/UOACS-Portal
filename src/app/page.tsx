"use client";

import { FooterNavigation } from "@components/home/FooterNavigation";
import { IconLoadingScreen } from "@components/home/LoadingScreen";
import { HeroSection } from "@components/home/sections/Hero";
import { Navigation } from "@components/home/sections/Navigation";

import { AboutUs } from "./_components/home/AboutUs";
import { CollaborateSection } from "./_components/home/CollaborateSection";
import { ConnectSection } from "./_components/home/ConnectSection";
import { DevelopSection } from "./_components/home/DevelopSection";
import { JoinUs } from "./_components/home/JoinUs";
import { NetworkSection } from "./_components/home/NetworkSection";

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
