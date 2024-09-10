import { type ButtonHTMLAttributes } from 'react';
import { motion, type Transition } from 'framer-motion';

import { cn } from '@/libs/utils';

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  containerClassName?: string;
  className?: string;
  background?: string;
  transition?: Transition;
  link?: string;
  label?: string;
  rounded?: number;
}

// const defaultBackground: string = '#f29163,#000000,#9198e5';
// const defaultBackground: string = '#4bc49c,#000000,#5e2ec7';
const defaultBackground: string = '#f29163,#000000,#9198e5';
const defaultTransition: Transition = {
  ease: 'easeInOut',
  repeat: Infinity,
  duration: 5,
};

const GlowButton = ({
  className,
  background = defaultBackground,
  transition = defaultTransition,
  containerClassName,
  link,
  label,
  ...props
}: GlowButtonProps) => {
  return (
    <motion.div
      className={cn('relative rounded-3xl p-0.5', containerClassName)}
      initial={{
        background: `linear-gradient(0turn,${background})`,
      }}
      animate={{ background: `linear-gradient(1turn,${background})` }}
      transition={transition}
    >
      <a href={link}>
        <button className={cn('rounded-[22px] bg-black p-6', className)} {...props}>
          {label}
        </button>
      </a>
    </motion.div>
  );
};

export default GlowButton;
