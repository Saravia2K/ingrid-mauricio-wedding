"use client";

import MossGreenBanner from "@/components/common/moss-green-banner";
import WhiteButton from "@/components/common/white-button";
import type { Guest } from "@/types/guest";

import styles from "./confirmation.module.scss";

export default function Confirmation({
  leader,
  companions,
}: ConfirmationProps) {
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
          <WhiteButton
            text="No podré asistir"
            onClick={() => alert("No asistirá")}
          />
          <WhiteButton text="Confirmar" onClick={() => alert("Asistirá")} />
        </div>
      </div>
    </section>
  );
}

type ConfirmationProps = {
  leader: Guest;
  companions: Guest[];
};
