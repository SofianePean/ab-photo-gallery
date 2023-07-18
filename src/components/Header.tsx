import Image from "next/image";
import { Icon } from "./Icon";

export const Header = () => {
  return (
    <div className="w-full h-[750px] lg:h-[730px] md:w-3/3 relative">
      <Image
        src="/images/ab-banner.jpg"
        fill
        style={{ objectFit: "cover" }}
        alt="Picture of the author"
      />
      <div className="">
        <div className="flex w-full absolute flex justify-between">
          <div className="flex gap-2 p-4 hidden sm:flex lg:flex">
            <Icon icon="twitter-logo" color="#FFFFFF" size="1.53em" />
            <Icon icon="instagram-logo" color="#FFFFFF" size="1.53em" />
          </div>
          <div className="p-0 m-0">
            <Image
              src="/images/logo.png"
              alt="Logo of the company"
              width={100}
              height={100}
            />
          </div>
          <div className="p-4">
            <Icon icon="list" color="#FFFFFF" size="1.53em" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full lg:w-auto px-6">
          <h1 className="text-white text-4xl font-bold mt-4">
            Open The Door Production
          </h1>
          <p className="font-bold text-white mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt
            sit sequi odio omnis eaque ad at non quod optio officiis, dolore
            necessitatibus veritatis vel laboriosam suscipit nulla odit
            dignissimos.
          </p>
        </div>
      </div>
    </div>
  );
};
