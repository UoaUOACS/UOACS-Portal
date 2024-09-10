import Link from 'next/link';
import { FakeLoadingScreen } from '@components/home/LoadingScreen';
import { Hero } from '@components/sections/Hero';

type NavigationProps = {
  href: string;
  label: string;
};
const navigation: NavigationProps[] = [
  { href: 'gallery', label: 'Gallery' },
  { href: 'team', label: 'Meet the Team' },
  { href: 'link', label: 'Link' },
  { href: 'sponsors', label: 'Sponsors' },
];

export default function Home() {
  return (
    <div className="max-w-dvw noise relative flex min-h-dvh flex-col items-center overflow-x-hidden">
      <FakeLoadingScreen />

      <nav className="h-[70px] my-4 pr-16 w-full flex items-center justify-end gap-8 text-lg text-white">
        {navigation.map(({ href, label }) => (
          <Link key={href} href={href}>
            <p>{label}</p>
          </Link>
        ))}
        <p>Join us!</p>
      </nav>
      <Hero className="" />
    </div>
  );
}
