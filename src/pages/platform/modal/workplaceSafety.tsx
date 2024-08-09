import React from "react";
import styles from "../platform.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";

export default function WorkplaceSafety(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`caseStudyModal ${styles.caseStudyModal}`}
      id
    >
      <div className={`${styles.modalContent}`}>
        <Modal.Header closeButton className="closeButton"></Modal.Header>

        <div className={`${styles.modalContentInner}`}>
          <div className={`${styles.modalLeft}`}>
            <Image
              src={`/img/platform/platform-page-imgs/workplace-safety.jpg`}
              alt="evCharging"
              height={554}
              width={547}
            />
          </div>
          <div className={`${styles.modalRight}`}>
            <div className={`${styles.modalRightContent}`}>
              <h2>Workplace Safety</h2>
              <p>
                A large manufacturing company faced significant challenges in
                maintaining workplace safety due to the complex and hazardous
                nature of its operations. Traditional safety monitoring methods
                were insufficient to prevent incidents and ensure regulatory
                compliance. To address these issues, the company implemented
                Shodat eOps™, an advanced asset tracking and quality management
                platform.
              </p>
              <div className={`${styles.result} ${styles.desktop}`}>
                <h4>Result</h4>
                <div className={`${styles.resultBox}`}>
                  <p>
                    Improved incident response time by 30% through real-time
                    alerts and actionable insights, like detection of high risk
                    areas,environmental monitoring for Hazardous
                    Conditions,workplace injury reports and real-time data from
                    wearable devices.
                  </p>
                  <p>
                    Ensured continuous compliance with safety regulations like
                    OSHA, ANSI & CCOHS, reducing the risk of regulatory
                    penalties by 20%.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.result} ${styles.mobile}`}>
            <h4>Result</h4>
            <div className={`${styles.resultBox}`}>
              <p>
                Improved incident response time by 30% through real-time alerts
                and actionable insights, like detection of high risk
                areas,environmental monitoring for Hazardous
                Conditions,workplace injury reports and real-time data from
                wearable devices.
              </p>
              <p>
                Ensured continuous compliance with safety regulations like OSHA,
                ANSI & CCOHS, reducing the risk of regulatory penalties by 20%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
