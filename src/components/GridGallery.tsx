"use client";

import { Photo } from "@/app/interfaces/photo";
import Image from "next/image";

interface GridGalleryProps {
  photos: Photo[];
}

const GridGallery: React.FC<GridGalleryProps> = (props) => {
  const { photos } = props;

  return (
    <div className="absolute columns-1 md:columns-3 lg:columns-3 max-w-7xl lg:mt-[-150px] z-10 px-4">
      {photos.map((photo) => (
        <Image
          key={photo.id}
          width={500}
          height={500}
          alt={photo.description}
          className="mb-4"
          src={`${process.env.NEXT_PUBLIC_URL_PHOTO}${photo.url}`}
        />
      ))}
    </div>
  );
};

export default GridGallery;
