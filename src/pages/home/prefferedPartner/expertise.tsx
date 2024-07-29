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
        Our team comprises seasoned technologists and domain experts with a wealth of experience to ensure that our analytics solutions are tailored to meet specific needs and challenges of your industry
        </p>
        <p>
        We have the advantage of using our trusted network outreach to enhance precision and quality above and beyond our clients&pos; expectations consistently. 
        </p>
      </div>
      <div className={`${styles.contentRight}`}>
        <div className={`${styles.couonterRow}`}>
          <div className={`${styles.counterBox}`}>
            <h6>
            Demonstrated proficiency in implementing solutions accurately and cost-effectively result in savings of up to 
            </h6>
            <div className={`${styles.count}`}>25%</div>
          </div>
          <div className={`${styles.counterBox}`}>
            <h6>
            Across industries, our early detection and prediction mechanisms reduce operational failures on an average by 
            </h6>
            <div className={`${styles.count}`}>35%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
