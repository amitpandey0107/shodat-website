import React from "react";
import styles from "../platform.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";

export default function Automotive(props: any) {
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
              src={`/img/platform/platform-page-imgs/casestudies-ev-img2.jpg`}
              alt="evCharging"
              height={554}
              width={547}
            />
          </div>
          <div className={`${styles.modalRight}`}>
            <div className={`${styles.modalRightContent}`}>
              <h2>Automotive</h2>
              <p>
                A leading automotive manufacturer faced challenges in predicting
                tire wear accurately, which impacted vehicle safety, maintenance
                schedules, and overall operational efficiency. By implementing
                Shodat eOps™, the manufacturer aimed to enhance their tire wear
                prediction capabilities.
              </p>
              <div className={`${styles.result} ${styles.desktop}`}>
                <h4>Result</h4>
                <div className={`${styles.resultBox}`}>
                  <p>
                    Achieved 88% accuracy in tire wear predictions, enhancing
                    maintenance planning.
                  </p>
                  <p>
                    Proactive maintenance based on accurate predictions resulted
                    in a 15% reduction in overall maintenance costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.result} ${styles.mobile}`}>
            <h4>Result</h4>
            <div className={`${styles.resultBox}`}>
              <p>
                Achieved 88% accuracy in tire wear predictions, enhancing
                maintenance planning.
              </p>
              <p>
                Proactive maintenance based on accurate predictions resulted in
                a 15% reduction in overall maintenance costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
