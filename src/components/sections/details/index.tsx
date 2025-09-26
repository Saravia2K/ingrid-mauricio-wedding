import Image from "next/image";
import moment from "moment";
import StageInformation from "@/components/common/stage-information";
import FloralArrangements from "@/components/common/floral-arrangements";

import styles from "./details.module.scss";
import mossGreenStar from "@/assets/images/arrangements/Estrella_Verde_musgo.svg";
import haciendaImg from "@/assets/images/hacienda.jpg";

import DATA from "@/assets/json/data.json";

const { date, hour, address, maps } = DATA;
export default function Details() {
  const m = moment(`${date}T${hour}`);
  return (
    <section className={styles.details}>
      <FloralArrangements
        flowers={[
          {
            position: "l",
            mobile: { y: 0, x: -3.5 },
            tablet: { y: 0, x: -4.5, size: 35 },
          },
          {
            position: "r",
            mobile: { y: 0, x: -3.5 },
            tablet: { y: 0, x: -4.5, size: 35 },
          },
        ]}
      >
        <h2 className={styles.title}>
          <span>Detalles de</span>{" "}
          <div className={styles["decoration-stars-container"]}>
            <Image src={mossGreenStar} alt="" />
            <Image src={mossGreenStar} alt="" />
          </div>
          <span className={styles.alternative}>la boda</span>
        </h2>
        <StageInformation
          title="Ceremonia y recepción"
          backgroundImage={haciendaImg}
          hour={m.format("hh:mm a")}
          placeName="Hacienda San Antonio"
          address={{
            firstLine: address.firstLine,
            secondLine: address.secondLine,
          }}
          mapsLinks={{
            googleMaps: maps.google,
            waze: maps.waze,
          }}
        />
      </FloralArrangements>
    </section>
  );
}
