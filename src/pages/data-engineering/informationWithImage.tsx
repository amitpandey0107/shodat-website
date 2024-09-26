import React from "react";
import ExportedImage from "next-image-export-optimizer";
import styles from "./data-engineering.module.css";

export default function InformationWithImage() {
  return (
    <div className={`${styles.informationWithImage}`}>
      <div className={`${styles.leftTextRightImage}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className={`${styles.infoBlock}`}>
                <h2>
                  Visualisation Layers and <br />
                  dashboarding capabilities
                </h2>
                <p>
                  Our expertise spans across various powerful business
                  intelligence (BI) tools like Power BI, Tableau and
                  custom-built solutions, ensuring we meet diverse business
                  needs effectively.{" "}
                </p>
                <p>
                  We excel in creating comprehensive visualization layers that
                  transform raw data into actionable insights through intuitive
                  and interactive dashboards.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className={`${styles.imageBlock}`}>
                <ExportedImage
                  src="/img/dataEngineering/Visualisation_Layers.png"
                  alt="Visualisation Layers and dashboarding capabilities"
                  height={364}
                  width={532}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.rightTextLeftImage}`}>
        <div className="container-fluid">
          <div className="row">
            <div className={`col-sm-12 col-md-6 col-lg-6 ${styles.bgPink}`}>
              <div className={`${styles.imageBlock}`}>
                <ExportedImage
                  src="/img/dataEngineering/ML_Engines.png"
                  alt="ML Engines Models and consulting"
                  height={616}
                  width={690}
                />
              </div>
            </div>
            <div className={`col-sm-12 col-md-6 col-lg-6 ${styles.bgPink}`}>
              <div className={`${styles.infoBlock}`}>
                <h2>ML Engines Models and consulting</h2>
                <p>
                  The data pipeline extends into our Machine Learning (ML)
                  capabilities for further value enrichment.{" "}
                </p>
                <p>
                  Processed data is cleansed and a layer of feature engineering
                  is applied before feeding it into our model training and
                  testing frameworks.
                </p>
                <p>
                  Anomaly detection, predictive analytics, forecasting, document
                  extraction, image processing and automated report generation
                  functions are designed to empower businesses with crucial
                  insights to drive innovation, efficiency and gain a
                  competitive edge.{" "}
                </p>
                <p>
                  Our comprehensive suite of ML services and autonomous turn key
                  pipelines ensures that your organisation can leverage the full
                  potential of data to achieve your strategic objectives.
                </p>
                <div className={`${styles.btnWrapper}`}>
                  <button className={`${styles.btnBlack}`}>
                    <span>Read more</span>
                    <ExportedImage
                      src="/img/dataEngineering/arrow-right.png"
                      alt="Teradata"
                      height={24}
                      width={24}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
