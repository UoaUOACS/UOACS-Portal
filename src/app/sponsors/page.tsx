import OtherPageHeader from "@components/common/PageHeaderAnimation";
import { FooterNavigation } from "@components/home/FooterNavigation";
import * as motion from "framer-motion/client";

import GrantThornton from "./assets/sponsors/gtlogo3.png";
import JaneStreet from "./assets/sponsors/JaneStreetLogo.png";
import Sandfield from "./assets/sponsors/Logo_Sandfield_GetanEdge_White.png";
import Potentia from "./assets/sponsors/Potentia.svg";
import UoA from "./assets/sponsors/UoA-Logo-Primary-RGB-Reversed-Small.png";
import { Sponsor } from "./Sponsor";

export default function SponsorsPage() {
  return (
    <>
      <div className="flex min-h-dvh flex-col items-center">
        <OtherPageHeader label="Our Sponsors!" />
        <motion.div
          className="grid size-full min-h-full grow place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="relative mb-8 flex w-full flex-col items-center py-16">
            <h3 className="mt-16 text-4xl font-bold text-blue-400">Diamond Sponsor</h3>
            <div className="flex flex-col gap-16">
              <Sponsor image={UoA} />
            </div>
            <h3 className="mt-16 text-4xl font-bold text-yellow-400">Gold Sponsor</h3>
            <div className="flex flex-col gap-16">
              <Grainy />
              <Sponsor image={Potentia} />
            </div>
            <h3 className="mt-16 text-4xl font-bold">Silver Sponsors</h3>
            <div className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row sm:gap-16">
                <Sponsor image={JaneStreet} />
                <Sponsor image={Sandfield} />
              </div>
              <Sponsor image={GrantThornton} />
            </div>
          </div>
        </motion.div>
      </div>
      <FooterNavigation />
    </>
  );
}

const Grainy = () => {
  return (
    <div className="dottedmask pointer-events-none absolute inset-0 -z-10 grid size-full place-items-center brightness-200">
      <div style={{ maskImage: "radial-gradient(#fff,#fff, #fff0,#fff0)" }} className="size-full">
        <div className="grainy scale-animation size-full" />
      </div>
    </div>
  );
};
