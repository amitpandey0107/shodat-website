import React from "react";
import styles from "../platform.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";

export default function Energy(props:any) {
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
              src={`/img/platform/platform-page-imgs/casestudies-ev-img1.jpg`}
              alt="evCharging"
              height={554}
              width={547}
            />
          </div>
          <div className={`${styles.modalRight}`}>
            <div className={`${styles.modalRightContent}`}>
              <h2>Energy</h2>
              <p>
                A prominent manufacturer of Energy faced significant challenges
                in predicting battery life accurately. Inconsistent performance
                data, variations in usage patterns, and environmental factors
                made it difficult to provide reliable predictions. To address
                these issues, the manufacturer implemented Shodat eOps™, an
                advanced asset tracking and quality management platform, to
                enhance their battery life prediction capabilities.
              </p>
              <div className={`${styles.result} ${styles.desktop}`}>
                <h4>Result</h4>
                <div className={`${styles.resultBox}`}>
                  <p>
                    The implementation of Shodat eOps™ led to a significant
                    improvement in the accuracy of battery life predictions,
                    with accuracy rates close to 93%.
                  </p>
                  <p>
                  Proactive alerting and predictive maintenance strategies resulting in a 25% reduction in maintenance costs by preventing unexpected battery failures.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.result} ${styles.mobile}`}>
            <h4>Result</h4>
            <div className={`${styles.resultBox}`}>
              <p>
                The implementation of Shodat eOps™ led to a significant
                improvement in the accuracy of battery life predictions, with
                accuracy rates close to 93%.
              </p>
              <p>
              Proactive alerting and predictive maintenance strategies resulting in a 25% reduction in maintenance costs by preventing unexpected battery failures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
