"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import { FaPlay, FaBackward, FaForward, FaPause } from "react-icons/fa";

import styles from "./song-player.module.scss";
import banner from "@/assets/images/Pareja.svg";
import viniloDisk from "@/assets/images/Disco_Vinilo.svg";

const AUDIO_SRC = "/assets/audios/all-my-love--coldplay.mp3";
export default function SongPlayer() {
  const [songPlaying, setSongPlaying] = useState(false);
  const [songCurrentTime, setSongCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    const interval = setInterval(async () => {
      if (audio.paused) {
        try {
          audio.volume = 0.5;
          await audio.play();

          setSongPlaying(true);
          clearInterval(interval);
        } catch (error) {
          console.log("Retrying to play the song...");
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [audioRef.current]);

  //#region Handlers
  const handlePauseClick = () => {
    audioRef.current?.pause();
    setSongPlaying(false);
  };

  const handlePlayClick = () => {
    audioRef.current?.play();
    setSongPlaying(true);
  };

  const handleBackwardClick = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime -= 10;
  };

  const handleForwardClick = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime += 10;
  };

  const handleSongEnded = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
    }
  };
  //#endregion

  //#region Common functions
  const formatSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const _seconds = Math.floor(seconds % 60);
    const timeFormat = (number: number) => number.toString().padStart(2, "0");

    return `${timeFormat(minutes)}:${timeFormat(_seconds)}`;
  };

  const getAdvancedPercentage = () => {
    if (!audioRef.current) return 0;

    const totalDuration = audioRef.current.duration;
    return Math.trunc((songCurrentTime * 100) / totalDuration);
  };
  //#endregion

  return (
    <div className={styles["song-player"]}>
      <audio
        src={AUDIO_SRC}
        ref={audioRef}
        onTimeUpdate={() =>
          setSongCurrentTime(audioRef.current?.currentTime || 0)
        }
        onEnded={handleSongEnded}
      />
      <div className={styles["song-player-banner"]}>
        <Image src={banner} alt="" priority />
      </div>
      <div className={styles["song-footer"]}>
        <div className={styles["song-controls-disk"]}>
          <Image
            src={viniloDisk}
            alt="Disco de vinilo"
            className={clsx(styles["vinilo-disk"], {
              [`${styles.playing}`]: songPlaying,
            })}
          />
          <div className={styles["song-controls"]}>
            <FaBackward onClick={handleBackwardClick} />
            {songPlaying ? (
              <FaPause onClick={handlePauseClick} />
            ) : (
              <FaPlay onClick={handlePlayClick} />
            )}
            <FaForward onClick={handleForwardClick} />
          </div>
        </div>
        <div className={styles["song-info"]}>
          <span className={styles["song-name"]}>Me cambiaste la vida</span>
          <span className={styles["song-author"]}>Río Roma</span>
          <div className={styles["song-times"]}>
            <span>{formatSeconds(songCurrentTime)}</span>
            <span>{formatSeconds(audioRef.current?.duration || 0)}</span>
          </div>
          <div
            className={styles.timeline}
            style={{ width: `${getAdvancedPercentage()}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
