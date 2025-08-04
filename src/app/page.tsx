import MainBanner from "@/components/main-banner";
import Date from "@/components/date";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <MainBanner />
      <Date />
    </div>
  );
}
