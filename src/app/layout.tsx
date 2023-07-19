import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open the door production",
  description:
    "Des shootings photo et vidéos captivants. Donnez vie à vos moments uniques avec notre expertise. Clip, mariage ou événement, notre équipe talentueuse réalise des contenus visuels de qualité supérieure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full p-2 lg:p-5">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
