"use client";

import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";

import styles from "./video-player.module.scss";
import overlayImg from "@/assets/images/photos/9X1C6064.jpg";

const VIDEO_SRC = "assets/videos/proposal.mp4";
export default function VideoPlayer() {
  const [firstPlay, setFirstPlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayOverlayClick = () => {
    if (!firstPlay || !videoRef.current) return;

    setFirstPlay(false);
    videoRef.current.play();
  };

  return (
    <div className={styles["video-player"]}>
      {firstPlay && (
        <div
          className={styles.overlay}
          style={{ backgroundImage: `url(${overlayImg.src})` }}
          onClick={handlePlayOverlayClick}
        >
          <FaPlay className={styles["play-icon"]} />
        </div>
      )}
      <video controls={!firstPlay} ref={videoRef}>
        <source src={VIDEO_SRC} type="video/mp4" />
        Tu navegador no soporta videos
      </video>
    </div>
  );
}
