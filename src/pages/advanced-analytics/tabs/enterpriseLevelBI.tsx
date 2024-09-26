import React from "react";
import ExportedImage from "next-image-export-optimizer";
import styles from "./tabs.module.css";
export default function EnterpriseLevelBI() {
  return (
    <>
      <div className={`${styles.imageThumbnail}`}>
        <ExportedImage
          src="/img/advancedAnalytics/reactangle.png"
          alt="dummy-image"
          height={357}
          width={624}
        />
        <span>Enterprise-Level BI</span>
      </div>
      <div className={`${styles.infoText}`}>
        <div className={`${styles.textRow}`}>
          <p>
            <strong>Row-Level Security (RLS): </strong> Implement row-level
            security to ensure data is accessible only to authorized users.
          </p>
        </div>
        <div className={`${styles.textRow}`}>
          <p>
            <strong>Deployment Pipelines:</strong> Manage content lifecycle with
            deployment pipelines for development, testing, and production
            environments.
          </p>
        </div>
      </div>
    </>
  );
}
