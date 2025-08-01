import BorderStarsDecoration from "@/components/common/border-stars-decoration";

import styles from "./datetime.module.scss";

export default function Datetime() {
  return (
    <div className={styles.datetime}>
      <div className={styles.day}>Sábado</div>
      <BorderStarsDecoration className={styles["date-month"]}>
        <span className={styles.date}>23</span>
        <span className={styles.month}>Septiembre</span>
      </BorderStarsDecoration>
      <div className={styles.time}>10:00 am</div>
    </div>
  );
}
