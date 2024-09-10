import { FakeLoadingScreen } from "@components/home/LoadingScreen";
import { Hero } from "@components/sections/Hero";



export default function Home() {
  return (
    <div className="max-w-dvw noise relative flex min-h-dvh flex-col items-center overflow-x-hidden">
        <FakeLoadingScreen />
        <Hero className="mt-24 sm:mt-36" />
    </div>
  );
}
