import { type ComponentProps } from "react";
import clsx from "clsx";

import styles from "./striped-background.module.scss";

export default function StripedBackground({
  lines = 7,
  ...props
}: StripedBackgroundProps) {
  const { className, ...divProps } = props;
  return (
    <div className={styles["striped-background"]}>
      {Array.from({ length: lines }, (_, i) => (
        <div key={i} className={styles.line}></div>
      ))}
      <div {...divProps} className={clsx(className, styles.content)}></div>
    </div>
  );
}

type StripedBackgroundProps = ComponentProps<"div"> & {
  lines?: number;
};
