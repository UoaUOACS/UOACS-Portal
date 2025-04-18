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
            <div className="mt-32 grid w-dvw grid-cols-[auto,minmax(auto,1200px),auto] place-items-center px-4">
              <div className="col-start-2 flex w-full flex-col items-center justify-center gap-16 px-4 text-center *:mx-auto *:w-full *:justify-center">
                <h1 className="text-5xl font-semibold">Admin Team</h1>
                <div className="exec-row grid w-min justify-center gap-8">
                  {team.slice(0, 5).map((member) => (
                    <ExecProfile key={member.name} {...member} />
                  ))}
                </div>
                <h1 className="text-5xl font-semibold">Design Team</h1>
                <div className="exec-row grid gap-8">
                  {team.slice(10, 12).map((member) => (
                    <ExecProfile key={member.name} {...member} />
                  ))}
                </div>
                <h1 className="text-5xl font-semibold">Marketing Team</h1>
                <div className="exec-row grid gap-8">
                  {team.slice(12, 14).map((member) => (
                    <ExecProfile key={member.name} {...member} />
                  ))}
                </div>
                <h1 className="text-5xl font-semibold">Tech Team</h1>
                <div className="exec-row grid gap-8">
                  {team.slice(5, 10).map((member) => (
                    <ExecProfile key={member.name} {...member} />
                  ))}
                </div>
                <h1 className="text-5xl font-semibold">Event Team</h1>
                <div className="exec-row grid gap-8">
                  {team.slice(14).map((member) => (
                    <ExecProfile key={member.name} {...member} />
                  ))}
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
