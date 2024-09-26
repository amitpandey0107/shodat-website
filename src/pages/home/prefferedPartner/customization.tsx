import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./prefferedPartner.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Customization() {
  return (
    <div
      className={`${styles.tabsContent} ${styles.customization} ${styles.customizationBG} customizationSection`}
    >
      <div className={`${styles.contentLeft}`}>
        <div className={`${styles.contentBlock}`}>
          <h3>Customized AI Applications</h3>
          <p>
            No two businesses are the same. Our approach involves understanding
            the unique aspects of your business and crafting customized
            applications that align with your goals, giving you a competitive
            edge.
          </p>
        </div>
        <div className={`${styles.contentBlock} ${styles.mbzero}`}>
          <h3>Collaborative Partnership</h3>
          <p>
            We don&apos;t just deliver software, we build lasting partnerships.
            Our collaborative approach involves working closely with you at
            every stage, ensuring that our solutions evolve to meet the changing
            needs of your business.
          </p>
        </div>
      </div>
      <div className={`${styles.contentRight}`}>
        <div className={`${styles.contentBlock}`}>
          <h3>Exceptional Support</h3>
          <p>
            Your success is our priority. Our dedicated support team is ready to
            assist you with any queries or challenges you may encounter. We
            believe in providing exceptional support to ensure the seamless
            operation of our solutions.
          </p>
        </div>
        <div className={`${styles.couonterRow}`}>
          <div className={`${styles.counterBox}`}>
            <h6>
              Custom integrations make it seamless and reduce time to adopt
              analytics & AI strategies on an average by
            </h6>
            <div className={`${styles.count}`}>20%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
