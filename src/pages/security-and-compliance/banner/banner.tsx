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
              Transforming Data into <br />
              Actionable Insights
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing <br />
              and typesetting industry.
            </p>
            {/* <Link href="#" className={`${styles.btnGetStarted}`}>
                            <span>Get Started</span>
                            <ExportedImage
                                src="/img/arrowRight.svg"
                                alt="arrow right"
                                height={20}
                                width={20}
                            />
                        </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
