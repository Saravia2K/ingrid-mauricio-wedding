"use client";

import Image from "next/image";
import StripedBackground from "@/components/common/striped-background";
import { Button } from "@mui/material";

import styles from "./reminder.module.scss";
import stamp from "@/assets/images/arrangements/papel-304x172.svg";
import bell from "@/assets/images/arrangements/Icono_Campana.svg";
import star from "@/assets/images/arrangements/Estrella_Verde_musgo.svg";

export default function Reminder() {
  return (
    <section className={styles.reminder}>
      <StripedBackground lines={10}>
        <div
          className={styles.stamp}
          style={{ backgroundImage: `url(${stamp.src})` }}
        >
          <Image src={bell} alt="" className={styles.bell} />
          <div className={styles.stars_container}>
            <Image src={star} alt="" />
            <Image src={star} alt="" />
          </div>
          <p className={styles.stamp_text}>
            Un sueño que compartimos contigo. Guarda esta fecha y sé parte de
            nuestra historia de amor.
          </p>
          <StablishReminderButton />
        </div>
      </StripedBackground>
    </section>
  );
}

const StablishReminderButton = () => (
  <Button
    variant="contained"
    onClick={() =>
      window.open(
        "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+Ingrid+y+Mauricio&dates=20251129T170000/20251130T000000&details=¡Vamos+a+celebrar+la+boda+de+Ingrid+y+Mauricio!+Debo+empezar+a+alistar+mi+outfit&location=Hacienda+San+Antonio,+X6RF%2BRP7,+Atiquizaya,+El+Salvador&reminder=1440",
        "_blank"
      )
    }
    sx={{
      textTransform: "none",
      backgroundColor: "var(--moss-green)",
      fontFamily: "Playfair Display",
      fontWeight: 100,
      zIndex: 20,
    }}
  >
    Establecer recordatorio
  </Button>
);
