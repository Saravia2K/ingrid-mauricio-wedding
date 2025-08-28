import { type StaticImageData } from "next/image";
import { Button } from "@mui/material";
import FloralArrangements from "../floral-arrangements";

import styles from "./stage-information.module.scss";

export default function StageInformation(props: StageInformationProps) {
  const { title, backgroundImage, hour, placeName, address, mapsLinks } = props;

  return (
    <div className={styles["stage-information"]}>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        {title}
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
            <MapButton text="Google Maps" href={mapsLinks.googleMaps} />
            <MapButton text="Waze" href={mapsLinks.waze} />
          </div>
        </FloralArrangements>
      </div>
    </div>
  );
}

const MapButton = ({ text, href }: MapButtonProps) => (
  <Button
    href={href}
    target="_blank"
    variant="contained"
    sx={{
      textTransform: "none",
      backgroundColor: "#fff",
      color: "var(--brown)",
      fontFamily: "Playfair Display",
      borderRadius: "2px",
    }}
  >
    {text}
  </Button>
);

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

type MapButtonProps = {
  text: string;
  href: string;
};
