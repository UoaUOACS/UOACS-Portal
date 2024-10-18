"use client";

import OtherPageHeader from "@components/common/PageHeaderAnimation";
import { GalleryImageContent, GalleryImageHeader } from "@components/gallery/GalleryImage";
import { FooterNavigation } from "@components/home/FooterNavigation";
import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <>
      <div className="flex min-h-dvh flex-col items-center px-2">
        <OtherPageHeader label="Gallery" />
        <motion.div
          className="mb-24 flex size-full flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="relative flex h-max">
            {/* Sticky */}
            <div className="mr-2 hidden min-h-screen min-w-[200px] flex-col items-center whitespace-nowrap md:flex">
              <p className="sticky top-16 z-10 bg-background text-4xl font-bold">2024 S2</p>
              <div className="h-full w-px bg-foreground" />
            </div>
            <div className="flex w-full flex-col items-center gap-4">
              <GalleryImageHeader
                Title="UOACS x GDSC x ASPA Pool Night"
                description="2024 was capped with an event that turned out to be a blast!
Google Developer Student Club, Auckland Student Pool Association and our club came together to present a Social Pool Night.
We packed out Orange Pool Club on City Road with over 70+ attendees, almost exceeding our booking space, and had a great night of healthy competition. 
Thank you all for coming and making our last event one for 2024 one to remember."
              />
              <GalleryImageContent
                numberOfImages={46}
                path="/assets/images/poolnight2024/Pool_"
                alt="industry_night"
                format="JPG"
              />
              {/*  */}
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
                format="JPG"
              />
              {/*  */}
              <GalleryImageHeader
                Title="UOACS x AUEC Valorant Tournament"
                description="Our collab with AUEC (Auckland Unviersity Esports Club) was another success. We saw 40 individual 
sign ups and played a knockout styleed tournament. We split the individual signups into teams of five and tried to fairly distribute the ranks. 
It was a huge success and got overwhelmingly positive reviews. Big thank you to AUEC and to Red Bull for their support!"
              />
              <GalleryImageContent numberOfImages={14} path="/assets/images/esportnight2024/ESPN_" alt="esport_night" />
              {/*  */}
              <GalleryImageHeader
                Title="Launch Night"
                description="We held our very first event in the short history of UOACS and it was a stellar success! With 90+
        attendees and 25+ new sign ups, our event was filled to the brim with energetic and expectant computer science
        students. It was a night of introduction and social activities accompanied with free food that left everyone
        satisfied in every way."
              />
              <GalleryImageContent numberOfImages={20} path="/assets/images/launchnight/LN_" alt="launch_night" />
            </div>
          </div>
          <p className="hidden min-w-[200px] self-start text-center text-4xl text-secondary md:block">now</p>
        </motion.div>
      </div>
      <FooterNavigation />
    </>
  );
}
