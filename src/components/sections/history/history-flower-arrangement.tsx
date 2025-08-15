"use client";

import Image from "next/image";
import clsx from "clsx";
import useIsTablet from "@/hooks/useIsTablet";

import styles from "./history.module.scss";
import leftFlowerOpacityImg from "@/assets/images/arrangements/Flor_Izquierda_Opacidad.svg";
import rightFlowerOpactityImg from "@/assets/images/arrangements/Flor_Derecha_Opacidad.svg";

export default function HistoryFlowerArrangement({
  position,
}: HistoryFlowerArrangementProps) {
  const isTablet = useIsTablet();

  const { className, img } = {
    l: { className: styles.left, img: leftFlowerOpacityImg },
    r: { className: styles.right, img: rightFlowerOpactityImg },
  }[position];

  if (isTablet)
    return (
      <Image
        src={img}
        alt=""
        className={clsx(styles["single-arrangement-flower"], className)}
      />
    );

  return (
    <div className={clsx(styles["arrangement-flower-container"], className)}>
      {Array.from({ length: 2 }, (_, i) => (
        <Image key={i} src={img} alt="" />
      ))}
    </div>
  );
}

type HistoryFlowerArrangementProps = {
  position: "l" | "r";
};
