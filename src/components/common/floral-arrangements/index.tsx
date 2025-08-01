import { type PropsWithChildren } from "react";
import Image from "next/image";
import clsx from "clsx";

import styles from "./flora-arrangements.module.scss";
import lFlower from "@/assets/images/arrangements/Flores_Izquierda.svg";
import rFlower from "@/assets/images/arrangements/Flores_Derecha.svg";

export default function FloralArrangements(props: FloralArrangementsProps) {
  const { children, containerClassName, flowers } = props;

  return (
    <div
      className={clsx(
        containerClassName,
        styles["floral-arrangements-container"]
      )}
    >
      {flowers.map((f, i) => {
        const flower = f.position == "l" ? lFlower : rFlower;

        return (
          <div
            key={i}
            className={clsx(styles.flower, {
              [`${styles.l}`]: f.position == "l",
              [`${styles.r}`]: f.position == "r",
            })}
            data-m-x={f.mobile?.x || 0}
            data-m-y={f.mobile?.y}
            data-t-x={f.tablet?.x || 0}
            data-t-y={f.tablet?.y}
          >
            <Image src={flower} alt="Flower" />
          </div>
        );
      })}
      {children}
    </div>
  );
}

type FloralArrangementsProps = PropsWithChildren<{
  containerClassName?: string;
  flowers: {
    position: "l" | "r";
    mobile?: FloralArrangementsCords;
    tablet?: FloralArrangementsCords;
  }[];
}>;

type FloralArrangementsCords = {
  x?: number;
  y: number;
};
