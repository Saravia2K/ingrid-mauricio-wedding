import fs from "fs";
import path from "path";

import MainBanner from "@/components/sections/main-banner";
import Date from "@/components/sections/date";
import SongPlayer from "@/components/sections/song-player";
import History from "@/components/sections/history";
import VideoPlayer from "@/components/sections/video-player";
import Gallery from "@/components/sections/gallery";
import Details from "@/components/sections/details";
import Reminder from "@/components/sections/reminder";
import Agenda from "@/components/sections/agenda";
import GiftsAdvice from "@/components/sections/gifts-advice";
import ChildrenAdvice from "@/components/sections/children-advice";
import Confirmation from "@/components/sections/confirmation";

import DATA from "@/assets/json/data.json";

import styles from "./index.module.scss";

const { song, videoUrl } = DATA;
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
      <SongPlayer songSrc={song.url} name={song.name} author={song.author} />
      <History history={history} />
      <VideoPlayer videoSrc={videoUrl} />
      <Gallery />
      <Details />
      <Reminder />
      <Agenda />
      <GiftsAdvice />
      <ChildrenAdvice />
      <Confirmation />
    </div>
  );
}
