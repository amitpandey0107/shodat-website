import React from "react";
import styles from "../platform.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";

export default function Financial(props: any) {
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
              src={`/img/platform/platform-page-imgs/financial-services.jpg`}
              alt="evCharging"
              height={554}
              width={547}
            />
          </div>
          <div className={`${styles.modalRight}`}>
            <div className={`${styles.modalRightContent}`}>
              <h2>Financial</h2>
              <p>
                A leading financial services firm faced significant challenges
                in managing compliance due to the complexity and dynamic nature
                of regulatory requirements. Manual processes and disparate
                systems resulted in inefficiencies and increased the risk of
                non-compliance. To address these challenges, the firm
                implemented Shodat eOps™ integrated with Generative AI to
                enhance their compliance management capabilities.
              </p>
              <div className={`${styles.result} ${styles.desktop}`}>
                <h4>Result</h4>
                <div className={`${styles.resultBox}`}>
                  <p>
                    Streamlined compliance processes, reducing the time and
                    effort required for compliance management by 40%.
                  </p>
                  <p>
                    Proactive alerting and monitoring allowed for better risk
                    management, decreasing the risk of non-compliance incidents
                    by 25%.
                  </p>
                  <p>
                    The enhanced efficiency and accuracy in compliance helped
                    the firm protecting their reputation, avoid huge penalties
                    and regulatory actions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.result} ${styles.mobile}`}>
            <h4>Result</h4>
            <div className={`${styles.resultBox}`}>
              <p>
                Streamlined compliance processes, reducing the time and effort
                required for compliance management by 40%.
              </p>
              <p>
                Proactive alerting and monitoring allowed for better risk
                management, decreasing the risk of non-compliance incidents by
                25%.
              </p>
              <p>
                The enhanced efficiency and accuracy in compliance helped the
                firm protecting their reputation, avoid huge penalties and
                regulatory actions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
