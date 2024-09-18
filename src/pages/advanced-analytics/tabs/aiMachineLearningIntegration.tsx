import React from "react";
import Image from "next/image";
import styles from './tabs.module.css';
export default function AIMachineLearningIntegration() {
    return (
        <>
            <div className={`${styles.imageThumbnail}`}>
                <Image
                    src="/img/advancedAnalytics/reactangle.png"
                    alt="dummy-image"
                    height={357}
                    width={624}
                />
                <span>AI and Machine Learning Integration</span>
            </div>
            <div className={`${styles.infoText}`}>
                <div className={`${styles.textRow}`}>
                    <p><strong>Power Automate:</strong> Leverage AI features like text analytics, OCR and automated insights. </p>
                </div>
                <div className={`${styles.textRow}`}>
                    <p><strong>Integration with Auto ML:</strong> Use Azure Machine Learning models within Power BI for enhanced predictive analytics.</p>
                </div>
            </div>
        </>
    )
}