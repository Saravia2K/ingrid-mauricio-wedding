"use client";

import { type StaticImageData } from "next/image";
import FloralArrangements from "../floral-arrangements";
import WhiteButton from "../white-button";

import styles from "./stage-information.module.scss";

export default function StageInformation(props: StageInformationProps) {
  const { title, backgroundImage, hour, placeName, address, mapsLinks } = props;

  const openMapLink = (href: string) => window.open(href, "_blank");

  return (
    <div className={styles["stage-information"]}>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <span>{title}</span>
      </div>
      <div className={styles["information-container"]}>
        <FloralArrangements
          containerClassName={styles.information}
          flowers={[
            {
              position: "l",
              mobile: { y: -4, x: -4.5 },
              tablet: { y: -8, x: -10.5, size: 50 },
            },
            {
              position: "r",
              mobile: { y: -4, x: -5 },
              tablet: { y: -8, x: -10.5, size: 50 },
            },
          ]}
        >
          <span className={styles.hour}>Hora: {hour}</span>
          <div className={styles.address}>
            <span>{placeName}</span>
            <span>{address.firstLine}</span>
            {address.secondLine && <span>{address.secondLine}</span>}
          </div>
          <div className={styles["maps-btns"]}>
            <WhiteButton
              text="Google Maps"
              onClick={() => openMapLink(mapsLinks.googleMaps)}
            />
            <WhiteButton
              text="Waze"
              onClick={() => openMapLink(mapsLinks.waze)}
            />
          </div>
        </FloralArrangements>
      </div>
    </div>
  );
}

type StageInformationProps = {
  title: string;
  backgroundImage: StaticImageData;
  hour: string;
  placeName: string;
  address: {
    firstLine: string;
    secondLine?: string;
  };
  mapsLinks: {
    googleMaps: string;
    waze: string;
  };
};
