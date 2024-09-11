import Link from 'next/link';
import HeroBlur from '@components/home/HeroBlur';
import { FakeLoadingScreen } from '@components/home/LoadingScreen';
import { FooterLogos } from '@components/home/LogosFooter';
import { Hero } from '@components/sections/Hero';
import { Asterisk, AtSign, Blocks, Cable, Merge, Network } from 'lucide-react';

type NavigationProps = {
  href: string;
  label: string;
};
export const navigation: NavigationProps[] = [
  { href: 'gallery', label: 'Gallery' },
  { href: 'team', label: 'Meet the Team' },
  { href: 'link', label: 'Link' },
  { href: 'sponsors', label: 'Sponsors' },
];

export default function Home() {
  return (
    <>
      <div className="max-w-dvw relative flex min-h-dvh flex-col items-center overflow-x-hidden">
        <FakeLoadingScreen off />
        {/* navigation */}
        <nav className="h-[70px] my-4 pr-16 w-full flex items-center justify-end gap-8 text-lg text-white">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href}>
              <p>{label}</p>
            </Link>
          ))}
        </nav>
        {/* content */}
        {/* <Hero className="h-full" /> */}
        <div className=" mt-12 min-h-[400px] w-full grid place-items-center">
          <HeroBlur />
          <div className="flex flex-col items-center">
            <h3 className="text-3xl sm:text-5xl font-bold w-[350px] sm:w-[600px] flex-wrap flex justify-center">
              <p className="text-blue-400 flex">
                <AtSign className="size-10 self-center" /> University of Auckland
              </p>
              Computer Science Society
            </h3>
            <hr className="border-foreground w-4/6 mt-4" />
            <h3 className="text-2xl text-center mt-6 font-bold *:flex gap-8 *:gap-2 *:items-center flex items-center">
              <span>
                Connect
                <Cable />
              </span>
              <span>
                Collaborate
                <Merge />
              </span>
              <span>
                Network
                <Network />
              </span>
              <span>
                Develop
                <Blocks />
              </span>
            </h3>
          </div>
          <button className="bg-white text-black p-2 px-12 rounded-full whitespace-nowrap select-none cursor-pointer">
            Join us!
          </button>
        </div>
        <h3 className="text-lg">Who are we? and what do we do?</h3>
      </div>
      <FooterLogos />
    </>
  );
}
