"use client";

import { Category } from "@/app/interfaces/category";
import { Photo } from "@/app/interfaces/photo";
import Image from "next/image";
import { useState } from "react";
import { CategoryFilter } from "./CategoryFilter";

interface GridGalleryProps {
  photos: Photo[];
  categories: Category[];
}

const GridGallery: React.FC<GridGalleryProps> = (props) => {
  const [photos, setPhotos] = useState<Photo[]>(props.photos);

  const getPhotosByCategory = (id: string) => {
    if (id === "all") {
      setPhotos(props.photos);
    } else {
      const photosFiltered = props.photos.filter(
        (photo) => photo.category.id === id
      );
      setPhotos(photosFiltered);
    }
  };

  return (
    <div className="mt-[-140px] z-10">
      <div className="flex w-full justify-center">
        <CategoryFilter
          categories={props.categories}
          getPhotosByCategory={getPhotosByCategory}
        />
      </div>
      <div className="columns-1 md:columns-3 lg:columns-3 max-w-7xl mt-4 px-4">
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
    </div>
  );
};

export default GridGallery;
