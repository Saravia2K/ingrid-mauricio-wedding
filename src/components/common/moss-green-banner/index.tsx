import { type PropsWithChildren } from "react";
import Image from "next/image";
import StripedBackground from "../striped-background";
import DecorationStars from "./decoration-stars";

import styles from "./moss-green-banner.module.scss";
import flower from "@/assets/images/arrangements/Flor_Franja_Tiempo.svg";

export default function MossGreenBanner(props: MossGreenBannerProps) {
  const { children, flowerBgStriped, secondaryText } = props;

  return (
    <div className={styles["moss-green-banner"]}>
      <StripedBackground lines={6} invisibleLines={!flowerBgStriped}>
        <Image src={flower} alt="Flower" className={styles.flower} />
      </StripedBackground>
      <div className={styles["content-container"]}>
        <DecorationStars />
        {children}
      </div>
      {secondaryText && (
        <StripedBackground lines={secondaryText.lines || 11}>
          {secondaryText.text && (
            <div className={styles["text-post-content"]}>
              {secondaryText.text}
            </div>
          )}
        </StripedBackground>
      )}
    </div>
  );
}

type MossGreenBannerProps = PropsWithChildren<{
  flowerBgStriped?: boolean;
  secondaryText?: {
    text?: string;
    lines?: number;
  };
}>;
