import Image from "next/image";

import Logo from "./logo";
import FloralArrangements from "@/components/common/floral-arrangements";

import styles from "./main-banner.module.scss";
import banner from "@/assets/images/photos/IMG_0040.jpg";

export default function MainBanner() {
  return (
    <div className={styles["main-banner"]}>
      <div className={styles.banner}>
        <Image src={banner} alt="Main banner" priority />
      </div>
      <Logo />
      <FloralArrangements
        flowers={[
          { position: "l", mobile: { y: -12 }, tablet: { y: -25 } },
          { position: "r", mobile: { y: -13 }, tablet: { y: -25 } },
        ]}
      >
        <h1 className={styles.names}>
          <span>Ingrid</span>
          <span className={styles.ampersand}>&</span>
          <span>Mauricio</span>
        </h1>
        <p className={styles.paragraph}>
          Con el corazón lleno de gratitud por todo lo compartido y el amor que
          nos une, queremos celebrar este momento especial contigo. Tu presencia
          lo hará aún más feliz.
        </p>
      </FloralArrangements>
    </div>
  );
}
