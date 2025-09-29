"use client";

import { type PropsWithChildren, useState } from "react";
import { Box } from "@mui/material";
import clsx from "clsx";

import styles from "./envelope.module.scss";

export default function Envelope({ children, name }: EnvelopeProps) {
  const [state, setState] = useState<
    "clicked" | "hovered" | "opened" | undefined
  >(undefined);

  if (state == "clicked")
    setTimeout(() => {
      setState("opened");
    }, 100);

  if (state == "opened") return children;
  return (
    <Box
      width="100%"
      height="100dvh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <div
        className={clsx(styles.wrapper, {
          [styles.hovered]: state && ["hovered", "clicked"].includes(state),
          [styles.clicked]: state == "clicked",
        })}
        onMouseOver={() => setState("hovered")}
        onMouseOut={() => setState(undefined)}
        onClick={() => state == "hovered" && setState("clicked")}
      >
        <div className={clsx(styles.lid, styles.one)}></div>
        <div className={clsx(styles.lid, styles.two)}></div>
        <div className={styles.envelope}></div>
        <div className={styles.letter}>
          Para:{" "}
          <span style={{ color: "var(--moss-green)", fontWeight: "bold" }}>
            {name}
          </span>
        </div>
        <div
          className={clsx(styles.instruction, {
            [styles.show]: state == "hovered",
          })}
        >
          Presiona para abrir la invitación
        </div>
      </div>
    </Box>
  );
}

type EnvelopeProps = PropsWithChildren<{
  name: string;
}>;
