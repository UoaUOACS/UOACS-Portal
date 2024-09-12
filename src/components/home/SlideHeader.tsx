import { motion, Variant, VariantLabels } from 'framer-motion';

import { cn } from '@/libs/utils';

type SlideHeaderProps = {
  label: string;
  direction: 'left' | 'right';
};

const SlideHeader = ({ label, direction }: SlideHeaderProps) => {
  return (
    <motion.h1
      className={cn('text-6xl sm:text-8xl w-min', direction === 'left' ? 'self-start' : 'self-end')}
      initial={{ translateX: direction === 'left' ? '-100%' : '100%' }}
      whileInView={{ translateX: '0%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {label}
    </motion.h1>
  );
};

export default SlideHeader;
