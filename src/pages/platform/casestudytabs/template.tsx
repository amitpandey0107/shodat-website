import React from "react";
import styles from "../platform.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
export default function Energy() {
    return (
        <div className={`${styles.mainContent}`}>
            <div className={`${styles.imageContent}`}>
                <div className={`${styles.imageInner}`}>
                    <Image
                        src="/img/casestudy/case_study_1.jpg"
                        alt="Energy"
                        height={433}
                        width={499}
                    />
                </div>
            </div>
            <div className={`${styles.infoContent}`}>
                <div className={`${styles.contentBox}`}>
                    <h3>Energy</h3>
                    <p>A prominent manufacturer of Energy faced significant challenges in predicting battery life accurately. Inconsistent performance data, variations in usage patterns, and environmental factors made it difficult to provide reliable predictions. </p>
                    <p>To address these issues, the manufacturer implemented Shodat eOps™, an advanced asset tracking and quality management platform, to enhance their battery life prediction capabilities.</p>
                </div>
                <div className={`${styles.resultBox}`}>
                    <h3>Results</h3>
                    <div className={`${styles.resultText}`}>The implementation of Shodat eOps™ led to a significant improvement in the accuracy of battery life predictions, with accuracy rates close to 93%.</div>
                    <div className={`${styles.resultText}`}>Proactive alerting and predictive maintenance strategies resulting in a 25% reduction in maintenance costs by preventing unexpected battery failures.</div>
                </div>
            </div>
        </div>
    )
}