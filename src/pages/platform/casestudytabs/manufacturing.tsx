import React from "react";
import styles from "../platform.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
export default function Manufacturing(props: any) {
    return (
        <div className={`${styles.mainContent} ${props.customClassName}`}>
            <div className={`${styles.imageContent}`}>
                <div className={`${styles.imageInner}`}>
                    <Image
                        src="/img/casestudy/case_3.png"
                        alt="Manufacturing"
                        height={433}
                        width={499}
                    />
                </div>
            </div>
            <div className={`${styles.infoContent}`}>
                <div className={`${styles.contentBox}`}>
                    <h3>Manufacturing</h3>
                    <p>A leader in the manufacturing industry needed an effective solution for detecting and addressing structural cracks in product components.</p>
                    <p>Traditional inspection methods were labour-intensive, error-prone, and time-consuming. To enhance their crack detection capabilities, the company implemented the Shodat eOps™platform.</p>
                </div>
                <div className={`${styles.resultBox}`}>
                    <h3>Results</h3>
                    <div className={`${styles.resultText}`}>Achieving a 30% improvement in crack detection accuracy due to Precision Detection Beyond the Human Eye with advanced machine learning models and real-time data integration which was earlier Time-consuming, inconsistent, and prone to human error. </div>
                    <div className={`${styles.resultText}`}>By leveraging Shodat eOps, the client was is able to identify and address potential hazards before they escalated, resulting in a 32 % decrease in high severity incidents.
                    </div>
                </div>
            </div>
        </div>
    )
}