import React from "react";
import styles from "../platform.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
export default function Financial(props: any) {
    return (
        <div className={`${styles.mainContent} ${props.customClassName}`}>
            <div className={`${styles.imageContent}`}>
                <div className={`${styles.imageInner}`}>
                    <Image
                        src="/img/casestudy/case_4.png"
                        alt="Financial"
                        height={433}
                        width={499}
                    />
                </div>
            </div>
            <div className={`${styles.infoContent}`}>
                <div className={`${styles.contentBox}`}>
                    <h3>Finance</h3>
                    <p>A leading financial services firm faced significant challenges in managing compliance due to the complexity and dynamic nature of regulatory requirements. Manual processes and disparate systems resulted in inefficiencies and increased the risk of non-compliance.</p>
                    <p>To address these challenges, the firm is implementing Shodat eOps™ integrated with Generative AI to enhance their compliance management capabilities.</p>
                </div>
                <div className={`${styles.resultBox}`}>
                    <h3>Results</h3>
                    <div className={`${styles.resultText}`}>Streamlining compliance processes, reducing the time and effort required for compliance management by 40%.</div>

                    <div className={`${styles.resultText}`}>Proactive alerting and monitoring allowed for better risk management, decreasing the risk of non-compliance incidents by 25%.</div>

                    <div className={`${styles.resultText}`}>The enhanced efficiency and accuracy in compliance is helping the firm protecting their reputation, avoid huge penalties and regulatory actions.</div>
                </div>
            </div>
        </div>
    )
}