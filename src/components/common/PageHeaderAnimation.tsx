import { motion } from 'framer-motion';

const OtherPageHeader = ({ label }: { label: string }) => {
  return (
    <>
      <motion.div
        className="absolute top-0 text-lg mt-4"
        initial={{ scale: 2, top: '50%' }}
        animate={{ scale: 1, top: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
      >
        <p>{label}</p>
      </motion.div>
      <motion.div
        className="pt-16 w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}
          className="w-full mb-12"
        />
      </motion.div>
    </>
  );
};

export default OtherPageHeader;
