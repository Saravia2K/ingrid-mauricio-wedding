"use client";

import Image from "next/image";
import clsx from "clsx";
import useIsTablet from "@/hooks/useIsTablet";

import HistoryFlowerArrangement from "./history-flower-arrangement";

import styles from "./history.module.scss";
import flowers from "@/assets/images/Flores.svg";
import mossGreenStar from "@/assets/images/arrangements/Estrella_Verde_musgo.svg";
import papel from "@/assets/images/arrangements/papel-318x56.svg";

export default function History({ history }: HistoryProps) {
  const isTablet = useIsTablet();

  return (
    <div className={styles.history}>
      <div className={styles.title}>
        <span>
          Nuestra <span className={styles["italic-dark-beige"]}>historia,</span>
        </span>
        <Image src={flowers} alt="" className={styles.flowers} />
      </div>
      <div className={clsx(styles.title, styles["second-line"])}>
        {Array.from({ length: isTablet ? 2 : 1 }, (_, i) => (
          <Image
            key={i}
            src={mossGreenStar}
            alt=""
            className={styles["moss-green-star"]}
          />
        ))}{" "}
        <span>
          contada con el{" "}
          <span className={styles["italic-dark-beige"]}>corazón.</span>
        </span>
      </div>
      <div className={styles["history-text-container"]}>
        <HistoryFlowerArrangement position="l" />
        <p className={styles["history-text"]}>{history}</p>
        <HistoryFlowerArrangement position="r" />
      </div>
      <div className={styles["quote-container"]}>
        <div
          className={styles.quote}
          style={{ backgroundImage: `url(${papel.src})` }}
        >
          <span>
            "Porque el mejor destino es el que elegimos caminar de la mano"
          </span>
        </div>
      </div>
    </div>
  );
}

type HistoryProps = {
  history: string;
};
