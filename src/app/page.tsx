"use client";

import { FooterNavigation } from "@components/home/FooterNavigation";
import { IconLoadingScreen } from "@components/home/LoadingScreen";
import { HeroSection } from "@components/home/sections/Hero";
import { Navigation } from "@components/home/sections/Navigation";

import {
  AboutUs,
  CollaborateSection,
  ConnectSection,
  DevelopSection,
  JoinUs,
  NetworkSection,
} from "./_components/home";

export default function Home() {
  return (
    <main className="max-w-dvw flex min-h-dvh flex-col overflow-hidden">
      <IconLoadingScreen />
      <div className="max-w-dvw relative mb-36 flex flex-col items-center overflow-hidden px-4 sm:px-8">
        <Navigation />
        <HeroSection />
        <AboutUs />
      </div>
      <ConnectSection />
      <CollaborateSection />
      <NetworkSection />
      <DevelopSection />
      <JoinUs />
      {/* Footer */}
      <FooterNavigation />
    </main>
  );
}
