"use client";
import Image from "next/image";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="w-full h-[750px] lg:h-[850px] md:w-3/3 relative">
      <Image
        src="/images/banner.jpg"
        fill
        style={{ objectFit: "cover" }}
        alt="Picture of the author"
        className=""
      />
      <div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full lg:w-auto px-6">
          <h1 className="text-white text-4xl lg:text-5xl font-bold mt-4">
            Open The Door Production
          </h1>
          <p className="text-1xl lg:text-2xl text-white mt-12">
            Des shootings photo et vidéos captivants. Donnez vie à vos moments
            uniques avec notre expertise. Clip, mariage ou événement, notre
            équipe talentueuse réalise des contenus visuels de qualité
            supérieure.
          </p>
        </div>
      </div>
    </div>
  );
};
