"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { MenuIcon } from "./MenuIcon";
import { MenuOverlay } from "./MenuOverlay";

export const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 50;

      setIsNavbarVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 z-10 left-0 right-0 transition-opacity duration-300 ease-in-out ${
        isNavbarVisible ? "opacity-100" : "opacity-0 -translate-y-full"
      }`}
    >
      <div
        className={`flex w-full absolute justify-between px-5 lg:px-20 ${
          isNavbarVisible ? "bg-black" : ""
        }`}
      >
        <div className="flex gap-2 p-4 hidden sm:flex lg:flex">
          <Link href="https://www.facebook.com/OpenTheDoorProduction/">
            <Icon icon="facebook-logo" color="#FFFFFF" size="2em" />
          </Link>
          <Link href="https://www.instagram.com/openthedoor_prod/">
            <Icon icon="instagram-logo" color="#FFFFFF" size="2em" />
          </Link>
        </div>
        <div className="p-0 m-0">
          <Image
            src="/images/logo.png"
            alt="Logo of the company"
            width={70}
            height={70}
          />
        </div>
        <MenuIcon onClick={handleMenuToggle} isOpen={isMenuOpen} />
        {isMenuOpen && <MenuOverlay onClose={handleMenuToggle} />}
      </div>
    </nav>
  );
};
