import GridGallery from "@/components/GridGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open the door production - Accueil",
  description:
    "Des shootings photo et vidéos captivants. Donnez vie à vos moments uniques avec notre expertise. Clip, mariage ou événement, notre équipe talentueuse réalise des contenus visuels de qualité supérieure.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GridGallery />
    </main>
  );
}
