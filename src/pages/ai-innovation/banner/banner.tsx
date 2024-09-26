import React from "react";
import styles from "./banner.module.css";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

export default function Banner() {
  return (
    <div className={`${styles.banner}`}>
      <div className={`${styles.bannerContent}`}>
        <div className={`${styles.bannerContentLeft}`}>
          <div className={`${styles.bannerInfo}`}>
            <h2 className={`${styles.bannerTitle}`}>
              Shaping Tomorrow <br />
              with AI
            </h2>
            <p>
              At Shodat, AI innovation is a continuous <br />
              journey, unlocking new possibilities for <br />
              the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
