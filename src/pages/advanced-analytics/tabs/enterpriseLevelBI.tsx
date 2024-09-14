import React from "react";
import Image from "next/image";
import styles from './tabs.module.css';
export default function EnterpriseLevelBI() {
    return (
        <>
            <div className={`${styles.imageThumbnail}`}>
                <Image
                    src="/img/advancedAnalytics/reactangle.png"
                    alt="dummy-image"
                    height={357}
                    width={624}
                />
                <span>Enterprise-Level BI</span>
            </div>
            <div className={`${styles.infoText}`}>
                <div className={`${styles.textRow}`}>
                    <p><strong>Composite Models:</strong> Combine direct query and import data models for greater flexibility.</p>
                </div>
                <div className={`${styles.textRow}`}>
                    <p><strong>Aggregations:</strong> Optimize performance for large datasets with aggregations and pre-calculated tables.</p>
                </div>
            </div>
        </>
    )
}