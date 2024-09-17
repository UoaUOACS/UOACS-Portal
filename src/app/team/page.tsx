'use client';

import { useState } from 'react';
import OtherPageHeader from '@components/common/PageHeaderAnimation';
import { FooterNavigation } from '@components/home/FooterNavigation';
import { easeIn, motion, Variants } from 'framer-motion';

export default function TeamPage() {
  return (
    <>
      <div className="flex flex-col min-h-dvh items-center  px-2">
        <OtherPageHeader label="Meet our execs" />
        <motion.div
          className="grid place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col mb-16">
            <h3 className="text-3xl font-bold text-center">UOACS 2024 Executives</h3>
            <div className="*:md:gap-8 *:sm:gap-4 mt-4 md:mt-8 *:flex *:justify-center">
              <div>
                <ExecProfile image="assets/images/execs/exec1.png" name="Joshua Li" roleid={0} />
                <ExecProfile image="assets/images/execs/exec2.png" name="Chris Chiem" roleid={1} />
                <ExecProfile image="assets/images/execs/exec3.png" name="Ben MacSweeney" roleid={2} />
              </div>
              <div className="*:md:gap-8 sm:flex-col *:gap-4 mt-4 md:mt-8 *:flex *:justify-center">
                <div className="flex flex-col sm:flex-row">
                  <ExecProfile image="assets/images/execs/exec4.png" name="Zach Taylor" roleid={3} />
                  <ExecProfile image="assets/images/execs/exec5.png" name="Jenny Lu" roleid={4} />
                  <ExecProfile image="assets/images/execs/exec6.png" name="Chanasit Jitsawatpaiboon" roleid={4} />
                  <ExecProfile image="assets/images/execs/exec7.jpg" name="Koutaro Yumiba" roleid={4} />
                </div>
                <div className="flex flex-col sm:flex-row">
                  <ExecProfile image="assets/images/execs/exec8.png" name="Sanskriti Roy" roleid={5} />
                  <ExecProfile image="assets/images/execs/exec9.png" name="Dhiren Patel" roleid={6} />
                  <ExecProfile image="assets/images/execs/exec10.png" name="Sooji Noh" roleid={6} />
                  <ExecProfile image="assets/images/execs/exec11.jpg" name="Casey Ryan" roleid={6} />
                </div>
                <div className="flex flex-col sm:flex-row">
                  <ExecProfile image="assets/images/execs/exec12.png" name="Jed Gannaban" roleid={7} />
                  <ExecProfile image="assets/images/execs/exec13.png" name="Josh Lin" roleid={8} />
                  <ExecProfile image="assets/images/execs/exec14.png" name="Narin Lane" roleid={8} />
                  <ExecProfile image="assets/images/execs/exec15.jpg" name="Satoi Miyamoto" roleid={8} />
                </div>
              </div>
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
  socials?: {
    icon: React.ReactNode;
    link: string;
  };
};
const roles = [
  { rolename: 'President', rolecolor: 'excPresident' },
  { rolename: 'Vice President', rolecolor: 'excPresident' },
  { rolename: 'Tresurer', rolecolor: 'excPresident' },
  { rolename: 'Tech Lead', rolecolor: 'excTech' },
  { rolename: 'Tech Exec', rolecolor: 'excTech' },
  { rolename: 'Marketing Lead', rolecolor: 'excMarketing' },
  { rolename: 'Marketing Exec', rolecolor: 'excMarketing' },
  { rolename: 'Event Lead', rolecolor: 'excEvent' },
  { rolename: 'Event Exec', rolecolor: 'excEvent' },
];

const execMenuVariants: Variants = {
  open: {
    height: 400,
  },
  close: {
    height: 0,
  },
};

const ExecProfile = ({ name, roleid, image, socials: links }: ExecType) => {
  const [open, setopen] = useState(false);
  const handleOpen = () => {
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };

  const role = roles[roleid];
  return (
    <>
      {open && (
        <>
          <div className="fixed bg-black/70 w-dvw h-dv inset-0" onClick={handleClose}></div>
          <motion.div
            className="bg-background whitespace-nowrap min-w-[325px] origin-top rounded-lg fixed size-min top-1/2 left-1/2 [translate:-50%_-50%] p-8"
            variants={execMenuVariants}
            initial="close"
            animate="open"
            exit="close"
            transition={{ ease: 'easeInOut' }}
          >
            {name}
          </motion.div>
        </>
      )}
      <div className="w-32 flex flex-col items-center" onClick={handleOpen}>
        <img
          src={image}
          className="bg-white sm:size-32 cursor-pointer size-24 rounded-full border-4"
          style={{ borderColor: `hsl(var(--${roles[roleid].rolecolor}),0.5)` }}
        />
        <p className="text-xs sm:text-base truncate">{name}</p>
        <p>{role.rolename}</p>
      </div>
    </>
  );
};
