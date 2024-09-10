import Link from 'next/link';
import { FakeLoadingScreen } from '@components/home/LoadingScreen';
import { Hero } from '@components/sections/Hero';

type NavigationProps = {
  href: string;
  label: string;
};
const navigation: NavigationProps[] = [
  { href: 'Link', label: 'Link' },
  { href: 'team', label: 'Meet the Team' },
];

export default function Home() {
  return (
    <div className="max-w-dvw noise relative flex min-h-dvh flex-col items-center overflow-x-hidden">
      <FakeLoadingScreen />

      <nav className="h-[70px] my-4 pr-16 w-full flex items-center justify-end gap-8 ">
        {navigation.map(({ href, label }) => (
          <Link key={href} href={href} className="text-lg text-white">
            {label}
          </Link>
        ))}
      </nav>
      <Hero className="" />
    </div>
  );
}
