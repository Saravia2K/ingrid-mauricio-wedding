import MainBanner from "@/components/main-banner";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <MainBanner />
    </div>
  );
}
