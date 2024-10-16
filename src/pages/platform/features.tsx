import React, { useState, useEffect } from "react";
import styles from "./platform.module.css";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Stack, Button } from "react-bootstrap";

export default function Features() {
  const [items, setItems] = useState(1);
  const sliderItem = (i: any) => {
    setItems(i);
  };

  return (
    <div className={`${styles.features}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <h1 className={`${styles.title}`}>Shodat eOps™ Features</h1>
            <div className={`${styles.subTitle}`}>
              Enabling access to next-generation operational excellence
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div
              className={`${styles.featSliderContainer}`}
              id="platformFeatSlider"
            >
              <Carousel controls={false} indicators={false} interval={null}>
                <Carousel.Item interval={10500}>
                  <Stack
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={4}
                  >
                    <Card className={`${styles.sliderItem}`}>
                      <div
                        onClick={() => sliderItem(1)}
                        className={`${
                          items === 1 ? `${styles.activeBox}` : ``
                        } ${styles.itemBox}`}
                      >
                        <ExportedImage
                          src={`${
                            items === 1
                              ? "/img/platform/assetCreation_white.svg"
                              : "/img/platform/assetCreation.svg"
                          }`}
                          alt="shodat-logo"
                          height={64}
                          width={64}
                          className={`${styles.logoImage}`}
                        />
                        <h6>Asset Creation and Tracking</h6>
                      </div>
                    </Card>
                    <Card className={`${styles.sliderItem}`}>
                      <div
                        onClick={() => sliderItem(2)}
                        className={`${
                          items == 2 ? `${styles.activeBox}` : ``
                        } ${styles.itemBox}`}
                      >
                        <ExportedImage
                          src={`${
                            items === 2
                              ? "/img/platform/industryTested_white.svg"
                              : "/img/platform/industryTested.svg"
                          }`}
                          alt="shodat-logo"
                          height={64}
                          width={64}
                          className={`${styles.logoImage}`}
                        />
                        <h6>Industry-Tested ML Models</h6>
                      </div>
                    </Card>
                    <Card className={`${styles.sliderItem}`}>
                      <div
                        onClick={() => sliderItem(3)}
                        className={`${
                          items === 3 ? `${styles.activeBox}` : ``
                        } ${styles.itemBox}`}
                      >
                        <ExportedImage
                          src={`${
                            items === 3
                              ? "/img/platform/proactive_active_white.svg"
                              : "/img/platform/proactive_active.svg"
                          }`}
                          alt="shodat-logo"
                          height={64}
                          width={64}
                          className={`${styles.logoImage}`}
                        />
                        <h6>Proactive Alerting</h6>
                      </div>
                    </Card>
                    <Card className={`${styles.sliderItem}`}>
                      <div
                        onClick={() => sliderItem(4)}
                        className={`${
                          items === 4 ? `${styles.activeBox}` : ``
                        } ${styles.itemBox}`}
                      >
                        <ExportedImage
                          src={`${
                            items === 4
                              ? "/img/platform/comprehensiveReporting_white.svg"
                              : "/img/platform/comprehensiveReporting.svg"
                          }`}
                          alt="shodat-logo"
                          height={64}
                          width={64}
                          className={`${styles.logoImage}`}
                        />
                        <h6>Comprehensive Reporting and Dashboards</h6>
                      </div>
                    </Card>
                  </Stack>
                </Carousel.Item>

                <Carousel.Item interval={10500}>
                  <Stack
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={4}
                  >
                    <Card className={`${styles.sliderItem}`}>
                      <div
                        onClick={() => sliderItem(1)}
                        className={`${
                          items === 1 ? `${styles.activeBox}` : ``
                        } ${styles.itemBox}`}
                      >
                        <ExportedImage
                          src={`${
                            items === 1
                              ? "/img/platform/assetCreation_white.svg"
                              : "/img/platform/assetCreation.svg"
                          }`}
                          alt="shodat-logo"
                          height={64}
                          width={64}
                          className={`${styles.logoImage}`}
                        />
                        <h6>Asset Creation and Tracking</h6>
                      </div>
                    </Card>
                    <Card className={`${styles.sliderItem}`}>
                      <div
                        onClick={() => sliderItem(2)}
                        className={`${
                          items == 2 ? `${styles.activeBox}` : ``
                        } ${styles.itemBox}`}
                      >
                        <ExportedImage
                          src={`${
                            items === 2
                              ? "/img/platform/industryTested_white.svg"
                              : "/img/platform/industryTested.svg"
                          }`}
                          alt="shodat-logo"
                          height={64}
                          width={64}
                          className={`${styles.logoImage}`}
                        />
                        <h6>Industry-Tested ML Models</h6>
                      </div>
                    </Card>
                    <Card className={`${styles.sliderItem}`}>
                      <div
                        onClick={() => sliderItem(3)}
                        className={`${
                          items === 3 ? `${styles.activeBox}` : ``
                        } ${styles.itemBox}`}
                      >
                        <ExportedImage
                          src={`${
                            items === 3
                              ? "/img/platform/proactive_active_white.svg"
                              : "/img/platform/proactive_active.svg"
                          }`}
                          alt="shodat-logo"
                          height={64}
                          width={64}
                          className={`${styles.logoImage}`}
                        />
                        <h6>Proactive Alerting</h6>
                      </div>
                    </Card>
                    <Card className={`${styles.sliderItem}`}>
                      <div
                        onClick={() => sliderItem(4)}
                        className={`${
                          items === 4 ? `${styles.activeBox}` : ``
                        } ${styles.itemBox}`}
                      >
                        <ExportedImage
                          src={`${
                            items === 4
                              ? "/img/platform/comprehensiveReporting_white.svg"
                              : "/img/platform/comprehensiveReporting.svg"
                          }`}
                          alt="shodat-logo"
                          height={64}
                          width={64}
                          className={`${styles.logoImage}`}
                        />
                        <h6>Comprehensive Reporting and Dashboards</h6>
                      </div>
                    </Card>
                  </Stack>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            {items === 1 && (
              <div className={`${styles.contentFeature}`}>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className={`${styles.picture}`}>
                      <ExportedImage
                        src="/img/platform/platform-page-imgs/assets-creation-img1.png"
                        alt="Feature Images"
                        height={371}
                        width={588}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className={`${styles.info}`}>
                      <div className={`${styles.textRow}`}>
                        <h6>Asset Onboarding and Management</h6>
                        <p>
                          Seamlessly onboard and manage assets with real-time
                          tracking capabilities.
                        </p>
                      </div>
                      <div className={`${styles.textRow}`}>
                        <h6>Data Ingestion</h6>
                        <p>
                          Efficiently ingest data from various sources including
                          sensors, vision cameras, documents (OCR) and other
                          systems.
                        </p>
                      </div>
                      <div className={`${styles.textRow}`}>
                        <h6>Data Streams and Feeds</h6>
                        <p>
                          Create continuous data streams and feeds to ensure
                          comprehensive monitoring and data integration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {items === 2 && (
              <div className={`${styles.contentFeature}`}>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className={`${styles.picture}`}>
                      <ExportedImage
                        src="/img/platform/platform-page-imgs/features-img2.png"
                        alt="Feature Images"
                        height={371}
                        width={588}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className={`${styles.info}`}>
                      <div className={`${styles.textRow}`}>
                        <h6>Domain-Specific Models</h6>
                        <p>
                          Leverage machine learning models tested and refined
                          across various industries by selecting them from the
                          library and attaching them to an asset data stream.
                        </p>
                      </div>
                      <div className={`${styles.textRow}`}>
                        <h6>Advanced AI Integration</h6>
                        <p>
                          Benefit from the domain knowledge encapsulated in
                          Shodat X series and Shodat YAI models for enhanced
                          predictive analytics and decision-making.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {items === 3 && (
              <div className={`${styles.contentFeature}`}>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className={`${styles.picture}`}>
                      <ExportedImage
                        src="/img/platform/platform-page-imgs/features-img3.png"
                        alt="Feature Images"
                        height={371}
                        width={588}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className={`${styles.info}`}>
                      <div className={`${styles.textRow}`}>
                        <h6>Real-Time Alerts</h6>
                        <p>
                          Receive timely alerts to stay ahead of potential
                          issues and ensure prompt responses to operational
                          anomalies.
                        </p>
                      </div>
                      <div className={`${styles.textRow}`}>
                        <h6>Customizable Notifications</h6>
                        <p>
                          Tailor alert settings to meet the specific needs of
                          your organization, ensuring relevant and actionable
                          information reaches the right personnel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {items === 4 && (
              <div className={`${styles.contentFeature}`}>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className={`${styles.picture}`}>
                      <ExportedImage
                        src="/img/platform/platform-page-imgs/features-img4.png"
                        alt="Feature Images"
                        height={371}
                        width={588}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className={`${styles.info}`}>
                      <div className={`${styles.textRow}`}>
                        <h6>Quality Assurance Management</h6>
                        <p>
                          Utilize customized detailed QA reports and dashboards
                          to monitor and maintain high standards in product and
                          process quality
                        </p>
                      </div>
                      <div className={`${styles.textRow}`}>
                        <h6>
                          Automating RCA with Shodat Root Cause Intelligence
                          (RCI)
                        </h6>
                        <p>
                          AI-Powered Root Cause Analysis for Efficient Issue
                          Resolution
                        </p>
                      </div>
                      <div className={`${styles.textRow}`}>
                        <h6>Service Level Agreement (SLA) Tracking</h6>
                        <p>
                          Monitor SLA compliance to ensure that service
                          commitments are met consistently
                        </p>
                      </div>
                      <div className={`${styles.textRow}`}>
                        <h6>Generative AI Insights</h6>
                        <p>
                          Harness the power of generative AI for advanced data
                          analysis and reporting, providing deeper insights and
                          facilitating informed decision-making
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
