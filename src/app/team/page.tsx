"use client";

import OtherPageHeader from "@components/common/PageHeaderAnimation";
import { FooterNavigation } from "@components/home/FooterNavigation";
import { motion } from "framer-motion";

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
            <h3 className="text-center text-3xl font-bold">UOACS 2024 Executives</h3>
            <div className="mt-4 *:flex *:justify-center *:sm:gap-4 md:mt-8 *:md:gap-8">
              <div>
                <ExecProfile image="assets/images/execs/exec1.png" name="Joshua Li" roleid={0} />
                <ExecProfile image="assets/images/execs/exec2.png" name="Chris Chiem" roleid={1} />
                <ExecProfile image="assets/images/execs/exec3.png" name="Ben MacSweeney" roleid={2} />
              </div>
              <div className="mt-4 *:flex *:justify-center *:gap-4 sm:flex-col md:mt-8 *:md:gap-8">
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
  links?: {
    icon: React.ReactNode;
    link: string;
  };
};
const roles = [
  { rolename: "President", rolecolor: "excPresident" },
  { rolename: "Vice President", rolecolor: "excPresident" },
  { rolename: "Tresurer", rolecolor: "excPresident" },
  { rolename: "Tech Lead", rolecolor: "excTech" },
  { rolename: "Tech Exec", rolecolor: "excTech" },
  { rolename: "Marketing Lead", rolecolor: "excMarketing" },
  { rolename: "Marketing Exec", rolecolor: "excMarketing" },
  { rolename: "Event Lead", rolecolor: "excEvent" },
  { rolename: "Event Exec", rolecolor: "excEvent" },
];
const socialLinks: { [id: string]: string } = {
  "Joshua Li": "https://www.linkedin.com/in/joshua-li-92b87926a/",
  "Chris Chiem": "https://www.linkedin.com/in/chris-chiem-uoa/",
  "Jed Gannaban": "https://www.linkedin.com/in/jedrex-gannaban-b35943296/",
  "Josh Lin": "https://www.linkedin.com/in/joshua-lin-55130a27a/",
  "Satoi Miyamoto": "https://www.linkedin.com/in/satoi-miyamoto-1a80422b8/",
  "Sanskriti Roy": "https://www.linkedin.com/in/sanskriti-roy-5s18s23/",
  "Sooji Noh": "https://www.linkedin.com/in/sooji-noh-909731293/",
  "Dhiren Patel": "https://www.linkedin.com/in/dhiren-patel-5a58832b7/",
  "Zach Taylor": "https://www.linkedin.com/in/zach-taylor-uoa/",
  "Casey Ryan": "https://www.linkedin.com/in/casey-absolum-aab7b8297/",
  "Jenny Lu": "https://www.linkedin.com/in/jenny-lu-762952233/",
  "Koutaro Yumiba": "https://www.linkedin.com/in/koutaro-yumiba-66aa32256/",
  "Narin Lane": "https://www.linkedin.com/in/narin-lane/",
  "Chanasit Jitsawatpaiboon": "https://www.linkedin.com/in/chanasit-jit/",
  "Ben MacSweeney": "https://www.linkedin.com/in/ben-macsweeney-765321204/",
};
const ExecProfile = ({ name, roleid, image, links }: ExecType) => {
  const role = roles[roleid];
  return (
    <div className="flex w-32 flex-col items-center">
      <a href={`${socialLinks[name]}`} target="_blank">
        <img
          src={image}
          className="size-24 rounded-full border-4 bg-white sm:size-32"
          style={{ borderColor: `hsl(var(--${roles[roleid].rolecolor}),0.5)` }}
        />
      </a>
      <p className="truncate text-xs sm:text-base">{name}</p>
      <p>{role.rolename}</p>
    </div>
  );
};
