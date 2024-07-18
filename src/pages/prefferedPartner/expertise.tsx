import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./prefferedPartner.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Expertise() {
  return (
    <div className={`${styles.tabsContent} ${styles.expertise} ${styles.expertiseBG} expertiseSection`}>
      <div className={`${styles.contentLeft}`}>
        <h3>Benefit from our deep industry expertise</h3>
        <p>
          Our team comprises seasoned professionals with a wealth of experience,
          ensuring that our analytics solutions are tailored to meet the
          specific needs and challenges of your industry.
        </p>
        <p>
          We have the advantage of using proprietary network intelligence to
          enhance precision and quality above and beyond our clients’ own
          datasets.
        </p>
      </div>
      <div className={`${styles.contentRight}`}>
        <div className={`${styles.couonterRow}`}>
          <div className={`${styles.counterBox}`}>
            <h6>
              Early detection and prediction mechanisms reducing operational failures by
            </h6>
            <div className={`${styles.count}`}>35%</div>
          </div>
          <div className={`${styles.counterBox}`}>
            <h6>
              Product and process improvements + avoiding regulatory penalties
              bringing cost savings
            </h6>
            <div className={`${styles.count}`}>20%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
