export const GalleryImageHeader = ({ Title, description }: { Title: string; description?: string }) => {
  return (
    <>
      <div className="flex size-full text-blue-400 justify-center flex-wrap items-center whitespace-nowrap">
        <h3 className="text-3xl font-bold px-2 whitespace-pre-wrap text-center ">{Title}</h3>
      </div>
      {description && <p className="text-center w-2/3">{description}</p>}
    </>
  );
};

interface galleryImageProps {
  numberOfImages: number;
  path: string;
}
export const GalleryImageContent = ({ numberOfImages, path }: galleryImageProps) => {
  return (
    <div className="flex gap-4 flex-wrap *:h-[200px] justify-center mb-8">
      {new Array(numberOfImages).fill('').map((_, i) => {
        return <img src={`${path}${i}.png`} key={i} />;
      })}
    </div>
  );
};
