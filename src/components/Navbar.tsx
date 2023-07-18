import Image from "next/image";
import { Icon } from "./Icon";

export const Navbar = () => {
  return (
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
  );
};
