"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import moment from "moment";

import DecorationStars from "./decoration-stars";

import styles from "./countdown.module.scss";

const LABELS = ["Días", "Horas", "Minutos", "Segundos"];
export default function Countdown() {
  const [counterData, setCounterData] = useState<CounterData>();
  const targetDate = useRef(moment(new Date("2025-09-23 10:00")));
  const counterInterval = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    // First coutdown on initial render
    const initialCounterData = getCountdown();
    setCounterData(initialCounterData);

    // Not initializing countdown if its a past date
    if (hasCountdownFinished(initialCounterData)) return;

    // Initializing counter
    counterInterval.current = setInterval(() => {
      const countdownData = getCountdown();
      setCounterData(countdownData);

      if (hasCountdownFinished(countdownData)) {
        clearInterval(counterInterval.current);
      }
    }, 1000);

    return () => clearInterval(counterInterval.current);
  }, []);

  /**
   * Check if countdown has not time left. It first base the calculation
   * on newCounterData param, but if it's not provided, it takes the state counterData
   */
  function hasCountdownFinished(newCounterData?: CounterData) {
    const hasFinished = (data: CounterData) =>
      Object.values(data).every((d) => d <= 0);

    if (newCounterData) return hasFinished(newCounterData);

    return counterData && hasFinished(counterData);
  }

  /**
   * Get data for countdown to work. This returns days, hours, minutes and seconds
   * from targetDate to current datetime
   */
  const getCountdown = useCallback(() => {
    const now = moment();
    const duration = moment.duration(targetDate.current.diff(now));

    return {
      days: Math.max(0, Math.floor(duration.asDays())),
      hours: Math.max(0, duration.hours()),
      minutes: Math.max(0, duration.minutes()),
      seconds: Math.max(0, duration.seconds()),
    };
  }, []);

  return (
    <div className={styles["countdown-container"]}>
      <DecorationStars />
      <div className={styles.countdown}>
        {counterData &&
          Object.values(counterData).map((c, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.number}>
                {c.toString().padStart(2, "0")}
              </span>
              <span className={styles.label}>{LABELS[i]}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

type CounterData = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
