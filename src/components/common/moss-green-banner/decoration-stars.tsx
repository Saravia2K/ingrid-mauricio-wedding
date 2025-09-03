import Image from "next/image";
import clsx from "clsx";

import styles from "./moss-green-banner.module.scss";
import star from "@/assets/images/arrangements/Estrella_Beige_Degradado.svg";

export default function DecorationStars() {
  return (
    <>
      <Image
        src={star}
        alt="Decoration star"
        className={clsx(styles["decoration-star"], styles.top, styles.left)}
      />
      <Image
        src={star}
        alt="Decoration star"
        className={clsx(styles["decoration-star"], styles.top, styles.right)}
      />
      <Image
        src={star}
        alt="Decoration star"
        className={clsx(styles["decoration-star"], styles.bottom, styles.right)}
      />
      <Image
        src={star}
        alt="Decoration star"
        className={clsx(styles["decoration-star"], styles.bottom, styles.left)}
      />
    </>
  );
}
