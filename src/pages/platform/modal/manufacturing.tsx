import React from "react";
import styles from "../platform.module.css";
import ExportedImage from "next-image-export-optimizer";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";

export default function Manufacturing(props: any) {
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
            <ExportedImage
              src={`/img/platform/platform-page-imgs/casestudies-ev-img3.jpg`}
              alt="evCharging"
              height={554}
              width={547}
            />
          </div>
          <div className={`${styles.modalRight}`}>
            <div className={`${styles.modalRightContent}`}>
              <h2>Manufacturing</h2>
              <p>
                A leader in the manufacturing industry needed an effective
                solution for detecting and addressing structural cracks in
                product components. Traditional inspection methods were
                labour-intensive, error-prone, and time-consuming. To enhance
                their crack detection capabilities, the company implemented the
                Shodat eOps™platform.
              </p>
              <div className={`${styles.result} ${styles.desktop}`}>
                <h4>Result</h4>
                <div className={`${styles.resultBox}`}>
                  <p>
                    Achieved a 30% improvement in crack detection accuracy due
                    to Precision Detection Beyond the Human Eye with advanced
                    machine learning models and real-time data integration which
                    was earlier Time-consuming, inconsistent, and prone to human
                    error.
                  </p>
                  <p>
                    By leveraging Shodat eOps, the client was able to identify
                    and address potential hazards before they escalated,
                    resulting in a 32 % decrease in high severity incidents.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.result} ${styles.mobile}`}>
            <h4>Result</h4>
            <div className={`${styles.resultBox}`}>
              <p>
                Achieved a 30% improvement in crack detection accuracy due to
                Precision Detection Beyond the Human Eye with advanced machine
                learning models and real-time data integration which was earlier
                Time-consuming, inconsistent, and prone to human error.
              </p>
              <p>
                By leveraging Shodat eOps, the client was able to identify and
                address potential hazards before they escalated, resulting in a
                32 % decrease in high severity incidents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
