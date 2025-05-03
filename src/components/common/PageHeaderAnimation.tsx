"use client";

import { useLayoutEffect } from "react";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const OtherPageHeader = ({ label, off }: { label: string; off?: boolean }) => {
  const lenis = useLenis();
  useLayoutEffect(() => {
    if (off) return;
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
        className="absolute top-0 mt-4 text-lg"
        initial={{ scale: 2, top: "50%" }}
        animate={{ scale: 1, top: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        onAnimationComplete={enableScroll}
      >
        <p>{label}</p>
      </motion.div>
      <motion.div
        className="flex w-full justify-center pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link href="/" className="group absolute left-4 top-4 flex items-center gap-4 text-xl">
          <ArrowLeft className="group-hover:stroke-secondary" />
          <span className="group-hover:text-secondary">home</span>
        </Link>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
          className="mb-12 w-full"
        />
      </motion.div>
    </>
  );
};

export default OtherPageHeader;
