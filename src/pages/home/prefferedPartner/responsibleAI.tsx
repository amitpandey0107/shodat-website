import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./prefferedPartner.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function ResponsibleAI() {
  return (
    <div
      className={`${styles.tabsContent} ${styles.responsibleAI} ${styles.responsibleAIBG} responsibleAISection`}
    >
      <div className={`${styles.contentLeft}`}>
        <div className={`${styles.contentBlock}`}>
          {/* <h3>Data Security and Privacy</h3> */}
          <p>
            At Shodat, we leverage advanced AI-driven security and compliance
            solutions to ensure the utmost protection of your data and adherence
            to regulatory standards
          </p>
          <p>
            We ensure top-tier data security with robust encryption, real-time
            threat monitoring, and compliance with global standards,
            safeguarding your sensitive information against all cyber threats.
          </p>
        </div>
      </div>
      <div className={`${styles.contentRight}`}>
        <div className={`${styles.contentBlock}`}>
          <div className={`${styles.couonterRow}`}>
            <div className={`${styles.counterBox}`}>
              <h6>
                Reduction in manual efforts by deploying automated compliance
                processes
              </h6>
              <div className={`${styles.count}`}>70%</div>
            </div>
            <div className={`${styles.counterBox}`}>
              <h6>
                Cost savings due to compliance management and avoiding potential
                penalties
              </h6>
              <div className={`${styles.count}`}>50%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
