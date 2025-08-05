import MainBanner from "@/components/sections/main-banner";
import Date from "@/components/sections/date";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <MainBanner />
      <Date />
    </div>
  );
}
