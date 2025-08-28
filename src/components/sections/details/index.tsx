import Image from "next/image";
import StageInformation from "@/components/common/stage-information";
import FloralArrangements from "@/components/common/floral-arrangements";

import styles from "./details.module.scss";
import mossGreenStar from "@/assets/images/arrangements/Estrella_Verde_musgo.svg";
import haciendaImg from "@/assets/images/hacienda.jpg";

export default function Details() {
  return (
    <section className={styles.details}>
      <FloralArrangements
        flowers={[
          {
            position: "l",
            mobile: { y: 0, x: -3.5 },
            tablet: { y: 0, size: 35 },
          },
          {
            position: "r",
            mobile: { y: 0, x: -3.5 },
            tablet: { y: 0, size: 35 },
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
          hour="10:00 AM"
          placeName="Hacienda San Antonio"
          address={{
            firstLine: "Calle al Agua Caliente, cantón Lomas de Alarcón",
            secondLine: "A 2.5 km de Atiquizaya",
          }}
          mapsLinks={{
            googleMaps: "https://maps.app.goo.gl/wB4FFwsZvFm7pjzx8?g_st=ipc",
            waze: "https://ul.waze.com/ul?place=ChIJdUVYLIqXYo8R0XVGQRaRBBo&ll=13.99204900%2C-89.77570130&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
          }}
        />
      </FloralArrangements>
    </section>
  );
}
