import Image from "next/image";
import StripedBackground from "@/components/common/striped-background";
import Countdown from "./countdown";

import styles from "./counter.module.scss";
import flower from "@/assets/images/arrangements/Flor Tiempo.png";

export default function Counter() {
  return (
    <div className={styles.counter}>
      <StripedBackground>
        <Image src={flower} alt="Flower" className={styles.flower} />
      </StripedBackground>
      <Countdown />
      <StripedBackground lines={11}>
        <div className={styles["text-post-countdown"]}>
          Cada segundos nos acerca más a nuestro para siempre
        </div>
      </StripedBackground>
    </div>
  );
}
