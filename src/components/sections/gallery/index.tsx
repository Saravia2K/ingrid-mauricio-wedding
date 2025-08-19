import path from "path";
import fs from "fs";
import GalleryClient from "./client";

export default async function Gallery() {
  const photosPath = path.join(process.cwd(), "/src/assets/images/photos");
  const photosNames = fs.readdirSync(photosPath);
  const photosLoaded = await Promise.all(
    photosNames.map(async (p) => await import(`@/assets/images/photos/${p}`))
  );
  return <GalleryClient photosUrls={photosLoaded.map((p) => p.default)} />;
}
