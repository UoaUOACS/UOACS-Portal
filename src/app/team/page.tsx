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
          <div className="flex flex-col items-center mb-16">
            <h3 className="text-3xl font-bold">UOACS 2024 Executives</h3>
            <div className="flex gap-8 mt-8">
              <ExecProfile name="Joshua Li" roleid={0} />
              <ExecProfile name="Chris Chiem" roleid={1} />
              <ExecProfile name="Ben MacSweeney" roleid={2} />
            </div>
            <div className="flex gap-8 mt-8">
              <ExecProfile name="Zach Taylor" roleid={3} />
              <ExecProfile name="Jenny Lu" roleid={4} />
              <ExecProfile name="Chanasit Jitsawatpaiboon" roleid={4} />
              <ExecProfile name="Koutaro yumiba" roleid={4} />
            </div>
            <div className="flex gap-8 mt-8">
              <ExecProfile name="Sanskriti Roy" roleid={5} />
              <ExecProfile name="Dhiren Patel" roleid={6} />
              <ExecProfile name="Sooji Noh" roleid={6} />
              <ExecProfile name="Casey Ryan" roleid={6} />
            </div>
            <div className="flex gap-8 mt-8">
              <ExecProfile name="Jed Gannaban" roleid={7} />
              <ExecProfile name="Josh Lin" roleid={8} />
              <ExecProfile name="Narin Lane" roleid={8} />
              <ExecProfile name="Satoi Miyamoto" roleid={8} />
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
const roles = [
  'President',
  'Vice President',
  'Tresurer',
  'Tech Lead',
  'Tech Exec',
  'Marketing Lead',
  'Marketing Exec',
  'Event Lead',
  'Event Exec',
];
const ExecProfile = ({ name, roleid, image, links }: ExecType) => {
  const role = roles[roleid];
  return (
    <div className="w-32 flex flex-col items-center">
      <div className="bg-white size-32 rounded-full"></div>
      <p className="truncate">{name}</p>
      <p>{role}</p>
    </div>
  );
};
