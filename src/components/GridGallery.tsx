"use client";

import Image from "next/image";

interface Photo {
  id: number;
  src: string;
  description: string;
}

const GridGallery: React.FC = () => {
  return (
    <div className="absolute columns-1 md:columns-3 lg:columns-3 max-w-7xl lg:mt-[-150px] z-10 px-4">
      <img alt="" className="mb-4" src="/images/grid/image1.jpg" />
      <Image
        width={500}
        height={500}
        alt=""
        className="mb-4"
        src="/images/grid/image2.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        className="mb-4"
        src="/images/grid/image3.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        className="mb-4"
        src="/images/grid/image4.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        className="mb-4"
        src="/images/grid/image5.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        className="mb-4"
        src="/images/grid/image6.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        className="mb-4"
        src="/images/grid/image7.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        className="mb-4"
        src="/images/grid/image8.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        className="mb-4"
        src="/images/grid/image10.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        className="mb-4"
        src="/images/grid/image11.jpg"
      />
    </div>
  );
};

export default GridGallery;
