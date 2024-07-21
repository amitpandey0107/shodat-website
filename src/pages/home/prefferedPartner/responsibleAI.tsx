import React, { useState, useEffect } from "react";
import Image from "next/image";
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
            At Shodat Inc., we leverage advanced AI-driven security and compliance solutions to ensure the utmost protection of your data and adherence to regulatory standards. Our cutting-edge AI algorithm provide 99.9% threat detection accuracy, enabling real-time monitoring and response to potential threats.
          </p>
        </div>
      </div>
      <div className={`${styles.contentRight}`}>
        <div className={`${styles.contentBlock}`}>
          <div className={`${styles.couonterRow}`}>
            <div className={`${styles.counterBox}`}>
              <h6>
                Reduction in manual efforts by  ensuring continuous compliance.
              </h6>
              <div className={`${styles.count}`}>70%</div>
            </div>
            <div className={`${styles.counterBox}`}>
              <h6>
                Cost Savings in Compliance Management
              </h6>
              <div className={`${styles.count}`}>50%</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}