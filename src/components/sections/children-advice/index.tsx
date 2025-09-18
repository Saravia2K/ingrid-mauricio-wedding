"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "./children-advice.module.scss";
import leftFlower from "@/assets/images/arrangements/Flores_Izquierda.svg";
import rightFlower from "@/assets/images/arrangements/Flores_Derecha.svg";
import mossGreenStar from "@/assets/images/arrangements/Estrella_Verde_musgo.svg";

export default function ChildrenAdvice() {
  const [starsContainerWidth, setStarsContainerWidth] = useState(0);
  const importantContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = importantContainerRef.current;
    if (!div) return;

    setStarsContainerWidth(div.getBoundingClientRect().width);
  }, []);

  return (
    <section className={styles["children-advice"]}>
      <div className={styles.important} ref={importantContainerRef}>
        <Image src={mossGreenStar} alt="" className={styles["green-stars"]} />
        <span>Importante</span>
        <Image src={mossGreenStar} alt="" className={styles["green-stars"]} />
      </div>
      <div className={styles["flowers-container"]}>
        <Image src={leftFlower} alt="" />
        <Image src={rightFlower} alt="" />
      </div>
      <p className={styles.advice}>
        Aunque adoramos a los pequeños, esta celebración será exclusivamente
        para adultos
      </p>
      <div
        className={styles["bottom-stars"]}
        style={{ width: starsContainerWidth }}
      >
        <Image src={mossGreenStar} alt="" className={styles["green-stars"]} />
        <Image src={mossGreenStar} alt="" className={styles["green-stars"]} />
      </div>
    </section>
  );
}
