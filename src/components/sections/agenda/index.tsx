import Image from "next/image";
import clsx from "clsx";

import styles from "./agenda.module.scss";
import coupleImg from "@/assets/images/photos/IMG_0072.jpg";
import star from "@/assets/images/arrangements/Estrella_Beige_Degradado.svg";
import wallFlowers from "@/assets/images/arrangements/Ramo_Flores_Pared.svg";
import agenda from "@/assets/images/agenda.svg";

export default function Agenda() {
  return (
    <section className={styles.agenda}>
      <div
        className={styles.cover}
        style={{ backgroundImage: `url(${coupleImg.src})` }}
      >
        <div className={styles["agenda-text"]}>
          <Image src={star} alt="" className={clsx(styles.star, styles.left)} />
          <span>Agenda</span>
          <Image
            src={star}
            alt=""
            className={clsx(styles.star, styles.right)}
          />
        </div>
      </div>
      <div className={styles.timeline}>
        <Image src={wallFlowers} alt="" className={styles.flowers} />
        <div className={styles["agenda-container"]}>
          <Image src={agenda} alt="Agenda" className={styles["agenda-img"]} />
        </div>
      </div>
    </section>
  );
}
