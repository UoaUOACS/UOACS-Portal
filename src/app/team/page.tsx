'use client';

import OtherPageHeader from '@components/common/PageHeaderAnimation';
import { FooterNavigation } from '@components/home/FooterNavigation';
import { motion } from 'framer-motion';

export default function TeamPage() {
  return (
    <>
      <div className="flex flex-col min-h-dvh items-center px-2">
        <OtherPageHeader label="Meet our execs" />
        <motion.div
          className="grid place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold">UOACS 2024 Executives</h3>
            <div className="flex gap-8 mt-8">
              <ExecProfile name="Joshua Li" roleid={1} />
              <ExecProfile name="Chris Chiem" roleid={2} />
              <ExecProfile name="Ben MacSweeney" roleid={3} />
            </div>
          </div>
        </motion.div>
      </div>
      <FooterNavigation />
    </>
  );
}

type ExecType = {
  name: string;
  roleid: number;
  image?: string;
  links?: {
    icon: React.ReactNode;
    link: string;
  };
};
const roles = ['President', 'Vice President', 'Tresurer', 'Tech Exec', 'Marketing Exec', 'Event Exec'];
const ExecProfile = ({ name, roleid, image, links }: ExecType) => {
  const role = roles[roleid];
  return (
    <div>
      <div className="bg-white size-32 rounded-full"></div>
      <p>{name}</p>
      <p>{role}</p>
    </div>
  );
};
