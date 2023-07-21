"use client";
import { Category } from "@/app/interfaces/category";
import { Photo } from "@/app/interfaces/photo";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { wrap } from "popmotion";
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
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL);
  const [[page, direction], setPage] = useState([0, 0]);

  const getPhotosByCategory = (id: string) => {
    setSelectedCategory(id);
    if (id === ALL) {
      setPhotos(props.photos);
    } else {
      const photosFiltered = props.photos.filter(
        (photo) => photo.category.id === id
      );
      setPhotos(photosFiltered);
    }
    setSelectedPhoto(null);
    setSelectedPhotoIndex(0);
  };

  const handleImageClick = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setSelectedPhotoIndex(index);
  };

  const handleCloseOverlay = () => {
    setSelectedPhoto(null);
  };

  const handlePrevImage = (e: React.MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
    paginate(-1);
  };

  const handleNextImage = (e: React.MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
    console.log("next");
    paginate(1);
  };

  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyUp);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyUp);
  //   };
  // }, []);

  // const handleKeyUp = (e: KeyboardEvent) => {
  //   if (e.key === "ArrowLeft") {
  //     handlePrevImage(e);
  //   } else if (e.key === "ArrowRight") {
  //     handleNextImage(e);
  //   }
  // };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const getUrlImage = (index: number) => {
    const url = photos[imageIndex].url;
    return `${process.env.NEXT_PUBLIC_URL_PHOTO}${url}`;
  };
  const imageIndex = wrap(0, photos.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
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
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className={`relative overflow-hidden mb-4 ${
              selectedCategory !== ALL && photo.category.id !== selectedCategory
                ? "hidden"
                : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
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
                onClick={() => handleImageClick(photo, index)}
              >
                <Icon icon="full-screen" color="#FFFFFF" size="3em" />
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full opacity-0 transition-opacity duration-700 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:opacity-50"></div>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-gray-500 overflow-hidden bg-opacity-75 z-25 transition-opacity"
          onClick={handleCloseOverlay}
        >
          <div className="fixed inset-0 z-30 overflow-y-auto">
            <div className="flex min-h-full items-end items-center justify-center p-4 text-center sm:items-center sm:p-0 flex-col">
              <div className=" flex justify-center items-center">
                <div
                  className="cursor-pointer bg-white text-black hidden lg:inline rounded-full p-2 mr-2 opacity-75 hover:opacity-100"
                  onClick={handlePrevImage}
                >
                  <Icon icon="caret-left" color="#000000" size="1.5em" />
                </div>
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    custom={direction}
                    key={page}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                  >
                    <Image
                      key={photos[imageIndex].id}
                      src={getUrlImage(imageIndex)}
                      alt={photos[imageIndex].description}
                      width={550}
                      height={550}
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                <div
                  className="cursor-pointer hidden lg:inline bg-white text-black rounded-full p-2 opacity-75 hover:opacity-100"
                  onClick={handleNextImage}
                >
                  <Icon icon="caret-right" color="#000000" size="1.5em" />
                </div>
              </div>

              <div
                className="absolute cursor-pointer font-bold text-xl top-4 right-4"
                onClick={handleCloseOverlay}
              >
                <Icon icon="x" color="#FFFFFF" size="2.5em" />
              </div>
              <div className="flex mt-4 w-[400px] justify-between"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridGallery;
