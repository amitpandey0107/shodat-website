import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./visionai.module.css";

export default function VisionAI() {
  return (
    <>
      <div className={`${styles.visionAIWrap}`}>
        <div className={`${styles.visionAI}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-5">
                <div className={`${styles.rightBlock}`}>
                  <div className={`${styles.imageThumbnail}`}>
                    <ExportedImage
                      src="/img/aiInnovation/Vision-AI-Advanced-Image.svg"
                      alt="Vision AI Advanced Image Recognition and Inspection"
                      height={560}
                      width={644}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className={`${styles.leftBlock}`}>
                  <h2>
                    Vision AI Advanced Image Recognition <br />
                    and Inspection
                  </h2>
                  <h4>Our Vision AI capabilities </h4>
                  <p>
                    Offer advanced image recognition capabilities, enabling
                    businesses to perform detailed inspections and quality
                    checks. This system is ideal for industries where precise
                    image analysis is crucial, such as manufacturing and
                    healthcare.
                  </p>

                  <div className={`${styles.keyBenefits}`}>
                    <div className={`${styles.lineLeft}`}></div>
                    <div className={`${styles.lineRight}`}></div>
                    <div className={`${styles.lineBottom}`}></div>
                    <div className={`${styles.benefitTitle}`}>Key Benefits</div>
                    <div className={`${styles.boxContainer}`}>
                      <div className={`${styles.box}`}>
                        <h6>Comprehensive Image Analysis</h6>
                        <p>
                          Detects and classifies a wide range of defects and
                          anomalies.
                        </p>
                      </div>
                      <div className={`${styles.box}`}>
                        <h6>Enhanced Inspection</h6>
                        <p>
                          Automates routine inspections, reducing manual labor
                          and error rates.
                        </p>
                      </div>
                      <div className={`${styles.box}`}>
                        <h6>Scalable Solutions</h6>
                        <p>Easily adapts to various scales of operation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.visionAI}`}>
          <div className="container-fluid">
            <div className="row">
              <div className={`col-sm-12 col-md-12 col-lg-7 ${styles.col2}`}>
                <div className={`${styles.leftBlock}`}>
                  <h2>Lightweight ML Models</h2>
                  <h4>Efficiency Meets Performance</h4>
                  <p>
                    Shodat Inc. specializes in developing lightweight machine
                    learning models that deliver high performance without
                    requiring extensive computational resources. These models
                    are ideal for applications where speed and efficiency are
                    critical.
                  </p>

                  <div className={`${styles.keyBenefits}`}>
                    <div className={`${styles.lineLeft}`}></div>
                    <div className={`${styles.lineRight}`}></div>
                    <div className={`${styles.lineBottom}`}></div>
                    <div className={`${styles.benefitTitle}`}>Advantages</div>
                    <div className={`${styles.boxContainer}`}>
                      <div className={`${styles.box}`}>
                        <h6>Scalability</h6>
                        <p>
                          Easily scalable across various devices and platforms.
                        </p>
                      </div>
                      <div className={`${styles.box}`}>
                        <h6>Cost-Effective </h6>
                        <p>Reduces the need for expensive hardware.</p>
                      </div>
                      <div className={`${styles.box}`}>
                        <h6>High Performance</h6>
                        <p>Maintains high accuracy and reliability.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`col-sm-12 col-md-12 col-lg-5 ${styles.col1}`}>
                <div className={`${styles.rightBlock}`}>
                  <div className={`${styles.imageThumbnail}`}>
                    <ExportedImage
                      src="/img/aiInnovation/ML-img.svg"
                      alt="Lightweight ML Models"
                      height={337}
                      width={517}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.visionAI} ${styles.mb0} ${styles.ipa}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-5">
                <div className={`${styles.rightBlock}`}>
                  <div className={`${styles.imageThumbnail}`}>
                    <ExportedImage
                      src="/img/aiInnovation/IPA_img.svg"
                      alt="Intelligent Process Automation (IPA)"
                      height={560}
                      width={644}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className={`${styles.leftBlock}`}>
                  <h2>Intelligent Process Automation (IPA)</h2>
                  <p>
                    Our Intelligent Process Automation (IPA) solutions integrate
                    AI and machine learning to automate repetitive tasks,
                    streamline workflows, and enhance operational efficiency.
                    Shodat Inc.&apos;s IPA capabilities help businesses reduce
                    manual labor, minimize errors, and improve productivity.
                  </p>

                  <div className={`${styles.keyBenefits}`}>
                    <div className={`${styles.lineLeft}`}></div>
                    <div className={`${styles.lineRight}`}></div>
                    <div className={`${styles.lineBottom}`}></div>
                    <div className={`${styles.benefitTitle}`}>
                      IPA Capabilities
                    </div>
                    <div className={`${styles.boxContainer}`}>
                      <div className={`${styles.box}`}>
                        <h6>Automated Workflows</h6>
                        <p>
                          Seamless automation of complex business processes.
                        </p>
                      </div>
                      <div className={`${styles.box}`}>
                        <h6>Enhanced Decision-Making</h6>
                        <p>Reduces the need for expensive hardware.</p>
                      </div>
                      <div className={`${styles.box}`}>
                        <h6>Resource Optimization</h6>
                        <p>
                          Maximizing resource utilization and minimizing waste.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
