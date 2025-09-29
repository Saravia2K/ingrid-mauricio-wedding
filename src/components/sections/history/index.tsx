"use client";

import Image from "next/image";
import clsx from "clsx";

import HistoryFlowerArrangement from "./history-flower-arrangement";

import styles from "./history.module.scss";
import mossGreenStar from "@/assets/images/arrangements/Estrella_Verde_musgo.svg";
import papel from "@/assets/images/arrangements/papel-318x56.svg";

export default function History({ history }: HistoryProps) {
  return (
    <div className={styles.history}>
      <div className={styles.title}>
        <span>
          Nuestra <span className={styles["italic-dark-beige"]}>historia,</span>{" "}
          contada
        </span>
      </div>
      <div className={clsx(styles.title, styles["second-line"])}>
        <Image
          src={mossGreenStar}
          alt=""
          className={styles["moss-green-star"]}
        />
        <span>
          con el <span className={styles["italic-dark-beige"]}>corazón.</span>
        </span>{" "}
        <Image
          src={mossGreenStar}
          alt=""
          className={styles["moss-green-star"]}
        />
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
            &quot;Porque el mejor destino es el que elegimos caminar de la
            mano&quot;
          </span>
        </div>
      </div>
    </div>
  );
}

type HistoryProps = {
  history: string;
};
