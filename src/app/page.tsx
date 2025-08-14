import MainBanner from "@/components/sections/main-banner";
import Date from "@/components/sections/date";
import SongPlayer from "@/components/sections/song-player";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <MainBanner />
      <Date />
      <SongPlayer />
    </div>
  );
}
