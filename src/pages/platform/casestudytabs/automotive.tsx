import React from "react";
import styles from "../platform.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
export default function Automotive(props: any) {
    return (
        <div className={`${styles.mainContent} ${props.customClassName}`}>
            <div className={`${styles.imageContent}`}>
                <div className={`${styles.imageInner}`}>
                    <Image
                        src="/img/casestudy/case_2.png"
                        alt="Automotive"
                        height={433}
                        width={499}
                    />
                </div>
            </div>
            <div className={`${styles.infoContent}`}>
                <div className={`${styles.contentBox}`}>
                    <h3>Transportation</h3>
                    <p>A prominent car rental company faced challenges in maintaining the quality and safety of their fleet due to undetected vehicle defects such as dents, scratches and crystallization on windows. These issues not only affected the customer experience but also led to increased maintenance costs and potential safety risks. The company sought to enhance their inspection process through an automated, accurate and efficient solution using computer vision technology.
                    </p>
                    <p>To enhance their crack detection capabilities, the company implemented the Shodat eOps™platform.</p>
                </div>
                <div className={`${styles.resultBox}`}>
                    <h3>Results</h3>
                    <div className={`${styles.resultText}`}>Achieving a 30% improvement in crack detection accuracy due to Precision Detection Beyond the human eye with advanced machine learning models and real-time data integration which was earlier Time-consuming, inconsistent and prone to human error.</div>
                    <div className={`${styles.resultText}`}>The automated defect detection system is not only improved operational efficiency but also ensured a higher standard of vehicle quality and safety, leading to greater customer satisfaction and cost savings.
                    </div>
                </div>
            </div>
        </div>
    )
}