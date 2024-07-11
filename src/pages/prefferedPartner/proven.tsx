import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./prefferedPartner.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Proven() {
  return (
    <div className={`${styles.tabsContent} ${styles.proven} ${styles.provenBG}`}>
      <div className={`${styles.contentLeft}`}>
        <h3>
          Shodat&apos;s experience in developing Analytics & AI technologies
          includes
        </h3>
        <ul>
          <li>
            Turnkey enterprise platforms for all data integration & analytics
            needs
          </li>
          <li>No implementation delays with critical customizations</li>
          <li>Seamless deployments & built for global scale</li>
          <li>Low/No code data ingestion, harmonization & ML features</li>
          <li>Industry-proven ML models</li>
        </ul>
      </div>
      <div className={`${styles.contentRight}`}>
        <div className={`${styles.couonterRow}`}>
          <div className={`${styles.counterBox}`}>
            <h6>
              Consistent <br />
              CSAT ratings
            </h6>
            <div className={`${styles.count}`}>97%</div>
          </div>
          <div className={`${styles.counterBox}`}>
            <h6>
              Renewal <br />
              ratio
            </h6>
            <div className={`${styles.count}`}>95%</div>
          </div>
        </div>
        <div className={`${styles.couonterRow}`}>
          <div className={`${styles.counterBox}`}>
            <h6>
              Successful <br />
              Implementations
            </h6>
            <div className={`${styles.count}`}>50+</div>
          </div>
          <div className={`${styles.counterBox}`}>
            <h6>
              Data volume <br />
              managed
            </h6>
            <div className={`${styles.count}`}>100 TB+</div>
          </div>
        </div>
      </div>
    </div>
  );
}
