import React from "react";
import styles from "../platform.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
export default function WorkplaceSafety(props: any) {
    return (
        <div className={`${styles.mainContent} ${props.customClassName}`}>
            <div className={`${styles.imageContent}`}>
                <div className={`${styles.imageInner}`}>
                    <Image
                        src="/img/casestudy/case_5.png"
                        alt="Energy"
                        height={433}
                        width={499}
                    />
                </div>
            </div>
            <div className={`${styles.infoContent}`}>
                <div className={`${styles.contentBox}`}>
                    <h3>Workplace Safety</h3>
                    <p>A large manufacturing company faced significant challenges in maintaining workplace safety due to the complex and hazardous nature of its operations. Traditional safety monitoring methods were insufficient to prevent incidents and ensure regulatory compliance.
                    </p>
                    <p>To address these issues, the company is implementing Shodat eOps™, an advanced asset tracking and quality management platform.
                    </p>
                </div>
                <div className={`${styles.resultBox}`}>
                    <h3>Results</h3>
                    <div className={`${styles.resultText}`}>Improving incident response time by 30% through real-time alerts and actionable insights, like detection of high risk areas,environmental monitoring for Hazardous conditions,workplace injury reports and real-time data from wearable devices.
                    </div>
                    <div className={`${styles.resultText}`}>Ensuring continuous compliance with safety regulations like OSHA, ANSI & CCOHS, reducing the risk of regulatory penalties by 20%.
                    </div>
                </div>
            </div>
        </div>
    )
}