import { type ComponentProps } from "react";
import Image from "next/image";
import clsx from "clsx";

import styles from "./borders-stars-decoration.module.scss";
import starArrangement from "@/assets/images/arrangements/Estrella_Beige_Degradado.svg";

export default function BorderStarsDecoration({
  children,
  className,
  ...props
}: BorderStarsDecorationProps) {
  return (
    <div
      {...props}
      className={clsx(styles["border-stars-decoration"], className)}
    >
      <Image
        src={starArrangement}
        alt="Star decoration"
        className={clsx(styles.star, styles.left)}
      />
      {children}
      <Image
        src={starArrangement}
        alt="Star decoration"
        className={clsx(styles.star, styles.right)}
      />
    </div>
  );
}

type BorderStarsDecorationProps = ComponentProps<"div">;
