"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

import { navigation } from "@/data/navigation";
import { cn } from "@/libs/utils";

const logos = ["/assets/images/UOACSLogo.svg"];

export const FooterNavigation = ({ className }: { className?: string }) => {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-125, 0]);

  return (
    <footer className={cn("Card-shadow relative mt-auto w-full overflow-hidden bg-black", className)} ref={container}>
      <motion.div style={{ y }} className="flex h-full flex-col items-center justify-center gap-2 py-10">
        <div className="flex flex-wrap justify-center gap-2">
          {navigation.map(({ href, label }, i) => {
            if (href === pathname) return;
            return (
              <Link
                className="whitespace-nowrap rounded-full border-2 border-slate-300 bg-white p-1 px-4 text-background transition-colors hover:border-secondary hover:text-secondary"
                key={i}
                href={href}
              >
                <p>{label}</p>
              </Link>
            );
          })}
        </div>
        {logos.map((image, i) => {
          return <img key={i} alt="logo" className="w-[150px]" src={image} />;
        })}
      </motion.div>
    </footer>
  );
};
