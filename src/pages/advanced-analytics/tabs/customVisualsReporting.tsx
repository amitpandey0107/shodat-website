import React from "react";
import Image from "next/image";
import styles from './tabs.module.css';
export default function CustomVisualsReporting() {
    return (
        <>
            <div className={`${styles.imageThumbnail}`}>
                <Image
                    src="/img/advancedAnalytics/reactangle.png"
                    alt="dummy-image"
                    height={357}
                    width={624}
                />
                <span>Custom Visuals and Reporting</span>
            </div>
            <div className={`${styles.infoText}`}>
                <div className={`${styles.textRow}`}>
                    <p><strong>Custom Visualizations:</strong> Build and import custom visuals & Reports tailored to specific needs.</p>
                </div>
                <div className={`${styles.textRow}`}>
                    <p><strong>R and Python Integration:</strong> Use R and Python scripts for advanced data manipulation and visualizations.</p>
                </div>
            </div>
        </>
    )
}