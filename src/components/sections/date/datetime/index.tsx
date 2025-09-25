import BorderStarsDecoration from "@/components/common/border-stars-decoration";
import moment from "moment-timezone";

import DATA from "@/assets/json/data.json";
import "moment/locale/es";

import styles from "./datetime.module.scss";

const { date, hour } = DATA;
moment.locale("es");
export default function Datetime() {
  const m = moment.tz(`${date}T${hour}`, "America/El_Salvador");

  const weekDay = m.format("dddd");
  const day = m.format("D");
  const month = m.format("MMMM");
  const fullHour = m.format("h:mm a");
  return (
    <div className={styles.datetime}>
      <div className={styles.day}>{weekDay}</div>
      <BorderStarsDecoration className={styles["date-month"]}>
        <span className={styles.date}>{day}</span>
        <span className={styles.month}>{month}</span>
      </BorderStarsDecoration>
      <div className={styles.time}>{fullHour}</div>
    </div>
  );
}
