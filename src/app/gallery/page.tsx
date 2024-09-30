'use client';

import OtherPageHeader from '@components/common/PageHeaderAnimation';
import { GalleryImageContent, GalleryImageHeader } from '@components/gallery/GalleryImage';
import { FooterNavigation } from '@components/home/FooterNavigation';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  return (
    <>
      <div className="flex flex-col min-h-dvh items-center px-2">
        <OtherPageHeader label="Gallery" />
        <motion.div
          className="size-full flex flex-col mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex h-max relative">
            {/* Sticky */}
            <div className="whitespace-nowrap min-w-[200px] mr-2 flex-col min-h-screen md:flex hidden items-center">
              <p className="text-4xl font-bold sticky top-16 bg-background z-10">2024 S2</p>
              <div className="w-px h-full bg-foreground" />
            </div>
            <div className="flex flex-col gap-4 items-center w-full">
              <GalleryImageHeader
                Title="Launch Night"
                description="We held our very first event in the short history of UOACS and it was a stellar success! With 90+
        attendees and 25+ new sign ups, our event was filled to the brim with energetic and expectant computer science
        students. It was a night of introduction and social activities accompanied with free food that left everyone
        satisfied in every way."
              />
              <GalleryImageContent numberOfImages={20} path="/assets/images/launchnight/LN_" alt="launch_night" />
              <GalleryImageHeader
                Title="UOACS x AUEC Valorant Tournament"
                description="Our collab with AUEC (Auckland Unviersity Esports Club) was another success. We saw 40 individual 
sign ups and played a knockout styleed tournament. We split the individual signups into teams of five and tried to fairly distribute the ranks. 
It was a huge success and got overwhelmingly positive reviews. Big thank you to AUEC and to Red Bull for their support!"
              />
              <GalleryImageContent numberOfImages={14} path="/assets/images/esportnight2024/ESPN_" alt="esport_night" />

              <GalleryImageHeader
                Title="Industry Night 2024"
                description="What an overwhelmingly successful night!! 🚀 
We are thrilled to announce that our UOACS Industry Night on Thursday was a massive success with 141 sign-ups! 🎉 
A huge thank you to School of Computer Science - University of Auckland and Jane Street for making this event possible and for supporting the next generation of tech leaders."
              />
              <GalleryImageContent
                numberOfImages={27}
                path="/assets/images/industrynight2024/Industry_"
                alt="industry_night"
                format="jpg"
              />
            </div>
          </div>
          <p className="text-4xl self-start min-w-[200px] text-center text-secondary hidden md:block">now</p>
        </motion.div>
      </div>
      <FooterNavigation />
    </>
  );
}
