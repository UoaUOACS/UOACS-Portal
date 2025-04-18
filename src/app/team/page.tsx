"use client";

import OtherPageHeader from "@components/common/PageHeaderAnimation";
import { FooterNavigation } from "@components/home/FooterNavigation";
import { motion } from "framer-motion";

import { ExecProfile } from "./_components/ExecProfile";
import team from "./_data/Exec2025.data";

export default function TeamPage() {
  return (
    <>
      <div className="flex min-h-dvh flex-col items-center px-2">
        <OtherPageHeader label="Meet our execs" />
        <motion.div
          className="grid place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="mb-16 flex flex-col">
            <h3 className="text-center text-3xl font-bold">UOACS 2025 Executives</h3>
            <div className="mt-4 *:flex *:justify-center *:sm:gap-4 md:mt-8 *:md:gap-8">
              <div>
                <ExecProfile {...team[0]} />
                <ExecProfile {...team[1]} />
                <ExecProfile {...team[2]} />
                <ExecProfile {...team[3]} />
                <ExecProfile {...team[4]} />
              </div>
              <div className="mt-4 *:flex *:justify-center *:gap-4 sm:flex-col md:mt-8 *:md:gap-8">
                <div className="flex flex-col sm:flex-row">
                  <ExecProfile {...team[5]} />
                  <ExecProfile {...team[6]} />
                  <ExecProfile {...team[7]} />
                  <ExecProfile {...team[8]} />
                  <ExecProfile {...team[9]} />
                </div>
                <div className="flex flex-col sm:flex-row">
                  <ExecProfile {...team[10]} />
                  <ExecProfile {...team[11]} />
                  <ExecProfile {...team[12]} />
                  <ExecProfile {...team[13]} />
                </div>
                <div className="flex flex-col sm:flex-row">
                  <ExecProfile {...team[14]} />
                  <ExecProfile {...team[15]} />
                  <ExecProfile {...team[16]} />
                  <ExecProfile {...team[17]} />
                </div>
                <div className="flex flex-col sm:flex-row">
                  <ExecProfile {...team[18]} />
                  <ExecProfile {...team[19]} />
                  <ExecProfile {...team[20]} />
                  <ExecProfile {...team[21]} />
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
