"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Backdrop, CircularProgress } from "@mui/material";

import MossGreenBanner from "@/components/common/moss-green-banner";
import WhiteButton from "@/components/common/white-button";
import type { Guest } from "@/types/guest";

import styles from "./confirmation.module.scss";

export default function Confirmation({
  leader,
  companions,
}: ConfirmationProps) {
  const [confirmed, setConfirmed] = useState(leader.confirmed);
  const [openBrackdrop, setOpenBackdrop] = useState(false);

  const setGuestConfirmation = async (confirmed: boolean) => {
    setOpenBackdrop(true);

    const fetchResult = await fetch("/api/guest/confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        groupId: leader.groupId,
        confirmed,
      }),
    });

    if (!fetchResult.ok) {
      toast.error("Hubo un error procesando tu confirmación.");
    } else {
      const msg = confirmed
        ? "¡Gracias por confirmar! Los estaremos esperando con ansias."
        : "Puedes cambiar la respuesta en cualquier momento, ¡Esperamos verte con nosotros!";
      toast(msg);
      setConfirmed(confirmed);
    }

    setOpenBackdrop(false);
  };

  return (
    <section className={styles.confirmation}>
      <MossGreenBanner secondaryText={{ lines: 3 }}>
        <h2 className={styles.name}>{leader.name},</h2>
        <h4 className={styles["special-spot-msg"]}>
          tenemos un espacio especial para ti.
        </h4>
      </MossGreenBanner>
      <div className={styles["confirmation-container"]}>
        <p className={styles["confirmation-msg"]}>
          Reserva tu lugar{" "}
          {companions.length > 0 && (
            <>
              y el de hasta{" "}
              <span className={styles.companions}>
                {companions.length}{" "}
                {companions.length == 1 ? "acompañante" : "acompañantes"}
              </span>{" "}
            </>
          )}
          confirmando tu asistencia.
        </p>
        <div className={styles["confirmation-btns"]}>
          {confirmed != false && (
            <WhiteButton
              text="No podré asistir"
              onClick={() => setGuestConfirmation(false)}
            />
          )}
          {confirmed != true && (
            <WhiteButton
              text="Confirmar"
              onClick={() => setGuestConfirmation(true)}
            />
          )}
        </div>
      </div>
      <Backdrop open={openBrackdrop} sx={{ zIndex: 20, color: "var(--beige)" }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </section>
  );
}

type ConfirmationProps = {
  leader: Guest;
  companions: Guest[];
};
