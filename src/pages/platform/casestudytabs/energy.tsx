import React from "react";
import styles from "../platform.module.css";
import "bootstrap/dist/css/bootstrap.css";
import ExportedImage from "next-image-export-optimizer";
export default function Energy(props: any) {
  return (
    <div className={`${styles.mainContent} ${props.customClassName}`}>
      <div className={`${styles.imageContent}`}>
        <div className={`${styles.imageInner}`}>
          <ExportedImage
            src="/img/casestudy/case_1.png"
            alt="Energy"
            height={433}
            width={499}
          />
        </div>
      </div>
      <div className={`${styles.infoContent}`}>
        <div className={`${styles.contentBox}`}>
          <h3>Energy</h3>
          <p>
            A leading EV ride sharing company faced significant challenges in
            predicting battery life accurately. Inconsistent performance data,
            variations in usage patterns and environmental factors made it
            difficult to provide reliable predictions.
          </p>
          <p>
            To address these issues, the ride sharing company is implementing
            Shodat eOps™, an advanced asset tracking and quality management
            platform, to enhance their battery life prediction capabilities.
          </p>
        </div>
        <div className={`${styles.resultBox}`}>
          <h3>Results</h3>
          <div className={`${styles.resultText}`}>
            The implementation of Shodat eOps™ is leading to a significant
            improvement in the accuracy of battery life predictions, with
            accuracy rates close to 93%.
          </div>
          <div className={`${styles.resultText}`}>
            Proactive alerting and predictive maintenance strategies are
            resulting in a 25% reduction in maintenance costs by preventing
            unexpected battery failures.
          </div>
        </div>
      </div>
    </div>
  );
}
