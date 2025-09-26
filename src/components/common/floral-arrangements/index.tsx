"use client";

import { type PropsWithChildren } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Box, useTheme } from "@mui/material";

import styles from "./flora-arrangements.module.scss";
import lFlower from "@/assets/images/arrangements/Flores_Izquierda.svg";
import rFlower from "@/assets/images/arrangements/Flores_Derecha.svg";

export default function FloralArrangements(props: FloralArrangementsProps) {
  const theme = useTheme();
  const tabletMediaQuery = theme.breakpoints.up(768);

  const { children, containerClassName, flowers } = props;

  const getFlowerSize = (size?: number | string) =>
    size == undefined
      ? undefined
      : `${typeof size == "number" ? `${size}%` : size} !important`;

  return (
    <div
      className={clsx(
        containerClassName,
        styles["floral-arrangements-container"]
      )}
    >
      {flowers.map((f, i) => {
        const flower = f.position == "l" ? lFlower : rFlower;
        const cssPosition = { l: "left", r: "right" }[f.position];

        return (
          <Box
            key={i}
            className={styles.flower}
            sx={{
              top: `${f.mobile?.y || 0}rem`,
              [`${cssPosition}`]: `${f.mobile?.x || 0}rem`,
              width: getFlowerSize(f.mobile?.size),
              [`${tabletMediaQuery}`]: {
                top: `${f.tablet?.y || f.mobile?.y || 0}rem`,
                [`${cssPosition}`]: `${f.tablet?.x || 0}rem`,
                width: getFlowerSize(f.tablet?.size),
              },
            }}
          >
            <Image src={flower} alt="Flower" priority />
          </Box>
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
  size?: number | string;
};
