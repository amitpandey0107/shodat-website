import React from "react";
import ExportedImage from "next-image-export-optimizer";
import styles from "./tabs.module.css";
export default function EnhancedDataConnectivity() {
  return (
    <>
      <div className={`${styles.imageThumbnail}`}>
        <ExportedImage
          src="/img/advancedAnalytics/reactangle.png"
          alt="dummy-image"
          height={357}
          width={624}
        />
        <span>Enhanced Data Connectivity</span>
      </div>
      <div className={`${styles.infoText}`}>
        <div className={`${styles.textRow}`}>
          <p>
            <strong>Dataflows:</strong> Create reusable data preparation logic
            across multiple reports and datasets.{" "}
          </p>
        </div>
        <div className={`${styles.textRow}`}>
          <p>
            <strong>Connectivity:</strong> Connect to a wide range of data
            sources, including cloud-based and on-premises databases.
          </p>
        </div>
      </div>
    </>
  );
}
