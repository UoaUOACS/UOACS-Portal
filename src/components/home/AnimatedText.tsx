"use client";

import { motion, Transition, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "../utils";

type AnimatedTextProps = {
  className?: string;

  type?: "word" | "letters";
  staggerChildren?: number;
  TextVariants: Variants;
  transition?: Transition;
  text: string;
  delayChild?: number;
};

const AnimatedText = ({
  className,
  text,
  TextVariants,
  type = "word",
  staggerChildren = type == "word" ? 0.175 : 0.05,
  transition,
  delayChild = 0,
}: AnimatedTextProps) => {
  let items: string | string[] = text;
  if (type == "word") {
    items = items.split(" ");
  } else {
    items = items.split("");
  }
  const ref = useRef(null);
  const InView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={cn("flex", className)}
      transition={{
        staggerChildren: staggerChildren,
        delayChildren: delayChild,
      }}
      initial="initial"
      animate={InView ? "animate" : "initial"}
    >
      {items.map((char, index) => {
        if (char == " ")
          return (
            <motion.span variants={TextVariants} transition={transition} key={index}>
              &nbsp;
            </motion.span>
          );
        return (
          <motion.span className="whitespace-nowrap" variants={TextVariants} transition={transition} key={index}>
            {char}
            {type == "word" && !!(index != items.length - 1) && <>&nbsp;</>}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default AnimatedText;
