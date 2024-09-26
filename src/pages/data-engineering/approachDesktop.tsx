import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./data-engineering.module.css";
import Accordion from "react-bootstrap/Accordion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DataStorageAppraoch from "./dataStorageAppraoch";

export default function ApproachDesktop(props: any) {
  const [items, setItems] = useState(1);

  const sliderItem = (i: number) => {
    setItems(i);
  };

  return (
    <div className={`container-fluid`}>
      <div className={`row`}>
        <div className="col-sm-12">
          <div className={`${styles.approachContentV2}`}>
            <div className={`${styles.outerBox}`}>
              <div
                onClick={() => sliderItem(1)}
                className={`${items === 1 ? `${styles.activeBox}` : ``} ${
                  styles.tabBox
                }`}
              >
                <div className={`${styles.icons}`}>
                  <ExportedImage
                    height={64}
                    width={64}
                    alt="Data ETL (Extract, Transform, Load)"
                    src={`${
                      items === 1
                        ? "/img/dataEngineering/svg/data-etl-active.svg"
                        : "/img/dataEngineering/svg/data-etl.svg"
                    }`}
                  />
                </div>
                <h6>Data ETL (Extract, Transform, Load)</h6>
              </div>
              <div className={`${styles.dottedLine} ${styles.line1}`}></div>
            </div>

            <div className={`${styles.outerBox}`}>
              <div
                onClick={() => sliderItem(2)}
                className={`${items === 2 ? `${styles.activeBox}` : ``} ${
                  styles.tabBox
                }`}
              >
                <div className={`${styles.icons}`}>
                  <ExportedImage
                    height={64}
                    width={64}
                    alt="Application Integration"
                    src={`${
                      items === 2
                        ? "/img/dataEngineering/svg/application-integration-active.svg"
                        : "/img/dataEngineering/svg/application-integration.svg"
                    }`}
                  />
                </div>
                <h6>Application Integration</h6>
              </div>
              <div className={`${styles.dottedLine2} ${styles.line2}`}></div>
            </div>

            <div className={`${styles.outerBox}`}>
              <div
                onClick={() => sliderItem(3)}
                className={`${items === 3 ? `${styles.activeBox}` : ``} ${
                  styles.tabBox
                }`}
              >
                <div className={`${styles.icons}`}>
                  <ExportedImage
                    height={64}
                    width={64}
                    alt="Data Storage, Warehousing and Data Marts"
                    src={`${
                      items === 3
                        ? "/img/dataEngineering/svg/data-storage-active.svg"
                        : "/img/dataEngineering/svg/data-storage.svg"
                    }`}
                  />
                </div>
                <h6>Data Storage, Warehousing and Data Marts</h6>
              </div>
              <div className={`${styles.dottedLine} ${styles.line1}`}></div>
            </div>

            <div className={`${styles.outerBox}`}>
              <div
                onClick={() => sliderItem(4)}
                className={`${items === 4 ? `${styles.activeBox}` : ``} ${
                  styles.tabBox
                }`}
              >
                <div className={`${styles.icons}`}>
                  <ExportedImage
                    height={64}
                    width={64}
                    alt="Visualisation Layers and dashboarding capabilities"
                    src={`${
                      items === 4
                        ? "/img/dataEngineering/svg/visualisation-active.svg"
                        : "/img/dataEngineering/svg/visualisation.svg"
                    }`}
                  />
                </div>
                <h6>Visualisation Layers and dashboarding capabilities</h6>
              </div>
              <div className={`${styles.dottedLine2} ${styles.line2}`}></div>
            </div>

            <div className={`${styles.outerBox}`}>
              <div
                onClick={() => sliderItem(5)}
                className={`${items === 5 ? `${styles.activeBox}` : ``} ${
                  styles.tabBox
                }`}
              >
                <div className={`${styles.icons}`}>
                  <ExportedImage
                    height={64}
                    width={64}
                    alt="ML Engines Models and consulting"
                    src={`${
                      items === 5
                        ? "/img/dataEngineering/svg/ml-engine-active.svg"
                        : "/img/dataEngineering/svg/ml-engine.svg"
                    }`}
                  />
                </div>
                <h6>ML Engines Models and consulting</h6>
              </div>
              <div className={`${styles.dottedLine} ${styles.line1}`}></div>
            </div>

            <div className={`${styles.outerBox}`}>
              <div
                onClick={() => sliderItem(6)}
                className={`${items === 6 ? `${styles.activeBox}` : ``} ${
                  styles.tabBox
                }`}
              >
                <div className={`${styles.icons}`}>
                  <ExportedImage
                    height={64}
                    width={64}
                    alt="API and SDK toolkits"
                    src={`${
                      items === 6
                        ? "/img/dataEngineering/svg/api-sdk-toolkit-active-1.svg"
                        : "/img/dataEngineering/svg/api-sdk-toolkit.svg"
                    }`}
                  />
                </div>
                <h6>API and SDK toolkits</h6>
              </div>
            </div>

            {/* Dotted Lines */}
          </div>
        </div>
      </div>

      {items === 1 && (
        <div className={`row ${styles.appraochRow}`}>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.approachLeftContent}`}>
              <h3>
                Our ETL services are designed to handle complex data ingestion
                and transformation tasks.
              </h3>
              <div className={`${styles.imageBox}`}>
                <ExportedImage
                  height={291}
                  width={531}
                  alt="Data ETL (Extract, Transform, Load)"
                  src={`/img/dataEngineering/etl-service.png`}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.approachRightContent}`}>
              <div className={`${styles.dataRow}`}>
                <h6>Ingesting Data into the Cloud</h6>
                <p>
                  We facilitate smooth and secure data migration to cloud
                  platforms, leveraging the scalability and flexibility of cloud
                  infrastructure.
                </p>
              </div>
              <div className={`${styles.dataRow}`}>
                <h6>Ingesting Data from Various Sources </h6>
                <p>
                  Our solutions can handle data from diverse sources such as
                  databases, APIs, IoT devices, FTP servers and more.
                </p>
              </div>
              <div className={`${styles.dataRow}`}>
                <h6>Near Real-Time Uploads and Bulk Uploads </h6>
                <p>
                  We support both near real-time data ingestion and bulk
                  uploads, ensuring timely data availability.{" "}
                </p>
              </div>
              <div className={`${styles.dataRow}`}>
                <h6>Scheduled Uploads </h6>
                <p>
                  Automate your data ingestion processes with our scheduled
                  upload capabilities, reducing manual intervention and ensuring
                  consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {items === 2 && (
        <div className={`row ${styles.appraochRow}`}>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.approachLeftContent}`}>
              <h3>
                Our data integration services ensure seamless communication and
                data flow across your systems for event based or real time data
                streaming.
              </h3>
              <div className={`${styles.imageBox}`}>
                <ExportedImage
                  height={291}
                  width={531}
                  alt="Data ETL (Extract, Transform, Load)"
                  src={`/img/dataEngineering/application_int_2.png`}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.approachRightContent}`}>
              <div className={`${styles.dataRow}`}>
                <h6>Building Publish-Subscribe Systems:</h6>
                <p>
                  We develop robust publish-subscribe systems to manage alerts
                  and enable asynchronous communication across your data
                  ecosystem.
                </p>
              </div>
              <div className={`${styles.dataRow}`}>
                <h6>Azure Service Bus Integration:</h6>
                <p>
                  Leverage Azure Service Bus for reliable cloud messaging
                  between applications and services, ensuring smooth data
                  integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {items === 3 && (
        <div className={`row ${styles.appraochRow}`}>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.approachLeftContent}`}>
              <h3>
                We provide comprehensive solutions for data storage and
                management:
              </h3>
              <div className={`${styles.imageBox}`}>
                <ExportedImage
                  height={291}
                  width={531}
                  alt="Data ETL (Extract, Transform, Load)"
                  src={`/img/dataEngineering/data_storage.png`}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.approachRightContent}`}>
              <div className={`${styles.dataAccordianAppraoch}`}>
                <DataStorageAppraoch />
              </div>
            </div>
          </div>
        </div>
      )}

      {items === 4 && (
        <div className={`row ${styles.appraochRow}`}>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.approachLeftContent}`}>
              {/* <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </h3> */}
              <div className={`${styles.imageBox}`}>
                <ExportedImage
                  height={291}
                  width={531}
                  alt="Data ETL (Extract, Transform, Load)"
                  src={`/img/dataEngineering/VisualisationLayers.png`}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.approachRightContent}`}>
              <div className={`${styles.dataRow}`}>
                {/* <h6>Building Publish-Subscribe Systems:</h6> */}
                <p>
                  Our expertise spans across various powerful business
                  intelligence (BI) tools like Power BI, Tableau and
                  custom-built solutions, ensuring we meet diverse business
                  needs effectively.We excel in creating comprehensive
                  visualization layers that transform raw data into actionable
                  insights through intuitive and interactive dashboards.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {items === 5 && (
        <div className={`row ${styles.appraochRow}`}>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.approachLeftContent}`}>
              {/* <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </h3> */}
              <div className={`${styles.imageBox}`}>
                <ExportedImage
                  height={291}
                  width={531}
                  alt="Data ETL (Extract, Transform, Load)"
                  src={`/img/dataEngineering/ml_engine.png`}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.approachRightContent}`}>
              <div className={`${styles.dataRow}`}>
                <p>
                  The data pipeline extends into our Machine Learning (ML)
                  capabilities for further value enrichment. Processed data is
                  cleansed and a layer of feature engineering is applied before
                  feeding it into our model training and testing frameworks.
                  Anomaly detection, predictive analytics, forecasting, document
                  extraction, image processing and automated report generation
                  functions are designed to empower businesses with crucial
                  insights to drive innovation, efficiency and gain a
                  competitive edge. Our comprehensive suite of ML services and
                  autonomous turn key pipelines ensures that your organisation
                  can leverage the full potential of data to achieve your
                  strategic objectives.{" "}
                </p>
                {/* <div className={`${styles.btnWrap}`}>
                  <button className={`${styles.btnBlack}`}>
                    <span>Read more</span>
                    <ExportedImage
                      src="/img/dataEngineering/arrow-right.png"
                      alt="Teradata"
                      height={24}
                      width={24}
                    />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {items === 6 && (
        <div className={`row ${styles.appraochRow}`}>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.approachLeftContent}`}>
              {/* <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </h3> */}
              <div className={`${styles.imageBox}`}>
                <ExportedImage
                  height={291}
                  width={531}
                  alt="Data ETL (Extract, Transform, Load)"
                  src={`/img/dataEngineering/api_and_sdk.png`}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.approachRightContent}`}>
              <div className={`${styles.dataRow}`}>
                <p>
                  We offer a wide range of Comprehensive APIs for seamless data
                  integration, ensuring smooth data flow between various systems
                  and applications, allowing for extensive customization to meet
                  specific business requirements, ensuring that the tools fit
                  seamlessly into existing workflows.
                </p>
              </div>
              <div className={`${styles.dataRow}`}>
                <p>
                  We provide robust and easy-to-use SDKs for developers to
                  quickly integrate Shodat&apos;s data engineering solutions
                  into their applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
