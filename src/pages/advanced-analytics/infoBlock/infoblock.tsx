import React from "react";
import ExportedImage from "next-image-export-optimizer";
import styles from "./infoblock.module.css";
export default function InfoBlock() {
  return (
    <>
      <div className={`${styles.infoblock}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-5 col-lg-5">
              <div className={`${styles.contentLeft}`}>
                <div className={`${styles.title}`}>
                  <h2>Microsoft Fabric</h2>
                </div>
                <div className={`${styles.infoText}`}>
                  <p>
                    Microsoft Fabric is a unified platform for data integration,
                    analytics, and AI. It enables organizations to bring
                    together data from various sources, perform advanced
                    analytics, and deploy AI models at scale.
                  </p>
                </div>
                <div className={`${styles.infoText}`}>
                  <p>
                    Our expertise in Microsoft Fabric allows us to help you
                    create a data fabric that supports seamless data flow and
                    empowers your business with predictive and prescriptive
                    analytics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className={`${styles.contentRight}`}>
                <div className={`${styles.thumbnailImage}`}>
                  <ExportedImage
                    height={408}
                    width={804}
                    alt="dummy image 2"
                    src="/img/advancedAnalytics/reactangle_2.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.infoblock}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className={`${styles.block}`}>
                <div className={`${styles.icon}`}>
                  <ExportedImage
                    height={48}
                    width={48}
                    alt="Data Integration"
                    src="/img/advancedAnalytics/svg/DataIntegration.svg"
                  />
                </div>
                <h6>Data Integration</h6>
                <p>
                  We assist in connecting disparate data sources, ensuring that
                  your data is clean, consistent, and readily available for
                  analysis. Whether it&apos;s structured or unstructured data,
                  we help you integrate it into a single, unified platform.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className={`${styles.block}`}>
                <div className={`${styles.icon}`}>
                  <ExportedImage
                    height={48}
                    width={48}
                    alt="Advanced Analytics"
                    src="/img/advancedAnalytics/svg/AdvancedAnalytics.svg"
                  />
                </div>
                <h6>Advanced Analytics</h6>
                <p>
                  Our team harnesses the power of Microsoft Fabric to perform
                  sophisticated analytics that go beyond descriptive insights.
                  We help you uncover hidden patterns, predict future trends,
                  and optimize decision-making through machine learning and AI.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className={`${styles.block}`}>
                <div className={`${styles.icon}`}>
                  <ExportedImage
                    height={48}
                    width={48}
                    alt="AI Deployment"
                    src="/img/advancedAnalytics/svg/AIDeployment.svg"
                  />
                </div>
                <h6>AI Deployment</h6>
                <p>
                  With Microsoft Fabric, deploying AI models is streamlined and
                  scalable. We work with you to implement AI-driven solutions
                  that enhance your business processes, from predictive
                  maintenance to personalized customer experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
