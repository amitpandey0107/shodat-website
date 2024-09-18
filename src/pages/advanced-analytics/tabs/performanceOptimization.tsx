import React from "react";
import Image from "next/image";
import styles from './tabs.module.css';
export default function PerformanceOptimization() {
    return (
        <>
            <div className={`${styles.imageThumbnail}`}>
                <Image
                    src="/img/advancedAnalytics/reactangle.png"
                    alt="dummy-image"
                    height={357}
                    width={624}
                />
                <span>Performance Optimization</span>
            </div>
            <div className={`${styles.infoText}`}>
                <div className={`${styles.textRow}`}>
                    <p><strong>Performance Analyzer:</strong> Use the Performance Analyzer to identify and troubleshoot performance issues in reports. </p>
                </div>
                <div className={`${styles.textRow}`}>
                    <p><strong>Incremental Refresh:</strong> Enable incremental refresh to keep data updated without full dataset reloads.</p>
                </div>
            </div>
        </>
    )
}