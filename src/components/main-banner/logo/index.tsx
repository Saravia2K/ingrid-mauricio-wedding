import Image from "next/image";
import BorderStarsDecoration from "@/components/common/border-stars-decoration";

import styles from "./logo.module.scss";
import logoImg from "@/assets/images/logo.svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles["logo-container"]}>
        <Image src={logoImg} alt="Logo" />
      </div>
      <BorderStarsDecoration className={styles.footer}>
        <div className={styles.year}>2025</div>
      </BorderStarsDecoration>
    </div>
  );
}
