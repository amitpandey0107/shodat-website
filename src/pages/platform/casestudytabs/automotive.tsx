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
                    <h3>Automotive</h3>
                    <p>A leading automotive manufacturer faced challenges in predicting tire wear accurately, which impacted vehicle safety, maintenance schedules, and overall operational efficiency.</p>
                    <p>By implementing Shodat eOps™, the manufacturer is aiming to enhance their tire wear prediction capabilities. </p>
                </div>
                <div className={`${styles.resultBox}`}>
                    <h3>Results</h3>
                    <div className={`${styles.resultText}`}>Achieving 88% accuracy in tire wear predictions, enhancing maintenance planning.</div>
                    <div className={`${styles.resultText}`}>Proactive maintenance based on accurate predictions resulting in a 15% reduction in overall maintenance costs.</div>
                </div>
            </div>
        </div>
    )
}