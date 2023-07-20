"use client";
import { Category } from "@/app/interfaces/category";
import { Photo } from "@/app/interfaces/photo";
import Image from "next/image";
import { useState } from "react";
import { CategoryFilter } from "./CategoryFilter";
import { Icon } from "./Icon";

interface GridGalleryProps {
  photos: Photo[];
  categories: Category[];
}

const ALL = "all";

const GridGallery: React.FC<GridGalleryProps> = (props) => {
  const [photos, setPhotos] = useState<Photo[]>(props.photos);

  const getPhotosByCategory = (id: string) => {
    if (id === ALL) {
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
          <div key={photo.id} className="relative overflow-hidden mb-4">
            <div className="relative group">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL_PHOTO}${photo.url}`}
                alt={photo.description}
                width={500}
                height={500}
                className="transform transition-transform duration-700 cursor-pointer group-hover:scale-125"
              />

              <div className="absolute top-2 right-2 p-2 opacity-0 transition-opacity duration-700 z-10 ease-in-out group-hover:opacity-100">
                <Icon icon="full-screen" color="#FFFFFF" size="3em" />
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full opacity-0 transition-opacity duration-700 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:opacity-50"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridGallery;
