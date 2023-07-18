"use client";
import Link from "next/link";
import { Icon } from "./Icon";
interface Page {
  path: string;
  name: string;
}
const PAGES: Page[] = [
  {
    path: "/",
    name: "Accueil",
  },
  {
    path: "/apropos",
    name: "A propos",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

interface MenuOverlayProps {
  onClose: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black z-10 transition-opacity transition-transform duration-300 ease-in-out">
      <div className="flex flex-col items-center justify-center h-full">
        {PAGES.map((page) => (
          <Link
            key={page.name}
            href={page.path}
            className="text-white text-xl mb-4"
          >
            {page.name}
          </Link>
        ))}
        <div
          className="absolute top-9 right-9 cursor-pointer"
          onClick={onClose}
        >
          <Icon icon="x" color="#FFFFFF" size="2.5em" />
        </div>
      </div>
    </div>
  );
};
