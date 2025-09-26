"use client";

import { Button } from "@mui/material";
import InformationCard from "@/components/common/information-card";

import styles from "./reminder.module.scss";
import stamp from "@/assets/images/arrangements/papel-304x172.svg";
import bell from "@/assets/images/arrangements/Icono_Campana.svg";

import DATA from "@/assets/json/data.json";

export default function Reminder() {
  return (
    <section className={styles.reminder}>
      <InformationCard stamp={stamp} icon={bell}>
        <p>
          Un sueño que compartimos contigo. Guarda esta fecha y sé parte de
          nuestra historia de amor.
        </p>
        <StablishReminderButton />
      </InformationCard>
    </section>
  );
}

const StablishReminderButton = () => (
  <Button
    variant="contained"
    onClick={() => window.open(DATA.calendarUrl, "_blank")}
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
