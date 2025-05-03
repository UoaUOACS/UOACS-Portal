import Image, { StaticImageData } from "next/image";

export const Sponsor = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="relative aspect-[2/1] w-[300px]">
      <Image
        src={image}
        fill
        className="bg-[radial-gradient(hsl(var(--background),1),hsl(var(--background),0.5),#fff0,#fff0)] object-contain transition-all hover:brightness-150 hover:saturate-150"
        alt="Silver sponsor logo"
      />
    </div>
  );
};
