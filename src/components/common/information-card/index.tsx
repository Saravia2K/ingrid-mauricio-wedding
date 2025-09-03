import { type PropsWithChildren } from "react";
import Image, { type StaticImageData } from "next/image";
import StripedBackground from "../striped-background";

import styles from "./information-card.module.scss";
import star from "@/assets/images/arrangements/Estrella_Verde_musgo.svg";

export default function InformationCard({
  children,
  stamp,
  icon,
}: InformationCardProps) {
  return (
    <StripedBackground lines={10}>
      <div
        className={styles.stamp}
        style={{
          width: stamp.width,
          height: stamp.height,
          backgroundImage: `url(${stamp.src})`,
        }}
      >
        <div className={styles["stamp-body"]}>
          <Image src={icon} alt="" className={styles.icon} />
          <div className={styles.stars_container}>
            <Image src={star} alt="" />
            <Image src={star} alt="" />
          </div>
          {children}
        </div>
      </div>
    </StripedBackground>
  );
}

type InformationCardProps = PropsWithChildren<{
  stamp: StaticImageData;
  icon: StaticImageData;
}>;
