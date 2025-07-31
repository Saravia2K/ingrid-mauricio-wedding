import Image from "next/image";

import styles from "./logo.module.scss";
import logoImg from "@/assets/images/logo.svg";
import star from "@/assets/images/arrangements/Estrella_Beige_Degradado.svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles["logo-container"]}>
        <Image src={logoImg} alt="Logo" />
      </div>
      <div className={styles.footer}>
        <Image
          src={star}
          alt="Right star decoration"
          className={styles["l-star"]}
        />
        <div className={styles.year}>2025</div>
        <Image
          src={star}
          alt="Left star decoration"
          className={styles["r-star"]}
        />
      </div>
    </div>
  );
}
