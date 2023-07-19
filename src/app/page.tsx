import GridGallery from "@/components/GridGallery";
import { Metadata } from "next";
import { Photo } from "./interfaces/photo";

export const metadata: Metadata = {
  title: "Open the door production - Accueil",
  description:
    "Des shootings photo et vidéos captivants. Donnez vie à vos moments uniques avec notre expertise. Clip, mariage ou événement, notre équipe talentueuse réalise des contenus visuels de qualité supérieure.",
};

export const revalidate = 0;

async function getPhotos(): Promise<Photo[]> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/photos`, {
    method: "GET",
  });
  const photos = await data.json();

  return photos;
}

export default async function Home() {
  const photos = await getPhotos();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GridGallery photos={photos} />
    </main>
  );
}
