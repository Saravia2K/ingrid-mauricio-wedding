"use client";

import Image from "next/image";

import styles from "./gallery.module.scss";
import img1 from "@/assets/images/photos/IMG_9963.jpg";
import img2 from "@/assets/images/photos/IMG_0051.jpg";
import img3 from "@/assets/images/photos/IMG_0097.jpg";
import img4 from "@/assets/images/photos/IMG_0072.jpg";
import img5 from "@/assets/images/photos/IMG_0112.jpg";
import img6 from "@/assets/images/photos/IMG_0095.jpg";
import img7 from "@/assets/images/photos/9X1C6140.jpg";

const IMAGES_LINE1 = [img1, img2, img3];
const IMAGES_LINE2 = [img4, img5, img6, img7];
export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.preview}>
        <div className={`${styles.line} ${styles.line1}`}>
          {IMAGES_LINE1.map((img, i) => (
            <Image key={i} src={img} alt="" priority />
          ))}
        </div>
        <div className={`${styles.line} ${styles.line2}`}>
          {IMAGES_LINE2.map((img, i) => (
            <Image key={i} src={img} alt="" priority />
          ))}
        </div>
      </div>
    </section>
  );
}
