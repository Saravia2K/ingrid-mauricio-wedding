import fs from "fs";
import path from "path";

import MainBanner from "@/components/sections/main-banner";
import Date from "@/components/sections/date";
import SongPlayer from "@/components/sections/song-player";
import History from "@/components/sections/history";
import VideoPlayer from "@/components/sections/video-player";
import Gallery from "@/components/sections/gallery";
import Details from "@/components/sections/details";

import styles from "./index.module.scss";

export default function Home() {
  const historyPath = path.join(process.cwd(), "/src/history.txt");
  const history = fs.readFileSync(historyPath, {
    encoding: "utf-8",
    flag: "r",
  });
  return (
    <div className={styles.main}>
      <MainBanner />
      <Date />
      <SongPlayer />
      <History history={history} />
      <VideoPlayer />
      <Gallery />
      <Details />
    </div>
  );
}
