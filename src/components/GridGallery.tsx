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
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

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

  const handleImageClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseOverlay = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className={`mt-[-140px] ${selectedPhoto ? "z-30" : "z-10"}`}>
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

              <div
                className="absolute top-2 right-2 p-2 opacity-0 cursor-pointer transition-opacity duration-700 z-10 ease-in-out group-hover:opacity-100"
                onClick={() => handleImageClick(photo)}
              >
                <Icon icon="full-screen" color="#FFFFFF" size="3em" />
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full opacity-0 transition-opacity duration-700 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:opacity-50"></div>
            </div>
          </div>
        ))}
      </div>
      {selectedPhoto && (
        <div
          className="relative z-100"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          onClick={handleCloseOverlay}
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-25 transition-opacity"></div>

          <div className="fixed inset-0 z-30 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL_PHOTO}${selectedPhoto.url}`}
                  alt={selectedPhoto.description}
                  width={600}
                  height={600}
                  className="object-contain"
                />
              </div>
              <div
                className="absolute cursor-pointer font-bold text-xl top-4 right-4"
                onClick={handleCloseOverlay}
              >
                <Icon icon="x" color="#FFFFFF" size="2.5em" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridGallery;
