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
                    <h3>Logistics </h3>
                    <p>A nationwide fleet management company needed a more accurate solution to predict tire wear, optimize maintenance, and enhance safety. Traditional methods, like manual inspections and mileage-based predictions, were often inaccurate, time-consuming, and led to either costly premature replacements or dangerous delays in tire maintenance.</p>
                    <p>By implementing Shodat eOps™, the manufacturer is aiming to enhance their tire wear prediction capabilities.
                    </p>
                </div>
                <div className={`${styles.resultBox}`}>
                    <h3>Results</h3>
                    <div className={`${styles.resultText}`}>Achieving 88% accuracy in tire wear predictions, enhancing maintenance planning. Proactive maintenance based on accurate predictions is resulting in a 15% reduction in overall maintenance costs.
                    </div>
                </div>
            </div>
        </div>
    )
}