import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import styles from "./shodatEops.module.css";
export default function ShodatEops() {
  return (
    <>
      <div className={`${styles.ShodatEops}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className={`${styles.sectionLeft}`}>
                <h2>
                  Shodat eOps: The <br />
                  Vehicle for AI <br />
                  Excellence
                </h2>
                <h6>Empowering Intelligent Operations</h6>
                <p>
                  Shodat eOps is the backbone of our AI-driven solutions,
                  providing the infrastructure and tools necessary to deliver
                  the capabilities of Shodat X and Shodat YAI. It ensures
                  seamless integration, real-time data processing and actionable
                  intelligence for optimized operations.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className={`${styles.sectionRight}`}>
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className={`${styles.whiteBox}`}>
                      <div className={`${styles.iconWrap}`}>
                        <div className={`${styles.icon}`}>
                          <ExportedImage
                            src="/img/aiInnovation/AIStrategyDevelopment.svg"
                            alt="AI Strategy Development"
                            height={44}
                            width={44}
                          />
                        </div>
                      </div>
                      <h6>AI-Driven Operations Intelligence</h6>
                      <p>
                        Leverage advanced AI algorithms to gain deeper insights
                        and optimize performance.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className={`${styles.whiteBox}`}>
                      <div className={`${styles.iconWrap}`}>
                        <div className={`${styles.icon}`}>
                          <ExportedImage
                            src="/img/aiInnovation/AIStrategyDevelopment.svg"
                            alt="AI Strategy Development"
                            height={44}
                            width={44}
                          />
                        </div>
                      </div>
                      <h6>Integrated Safety and Compliance</h6>
                      <p>
                        Ensure regulatory compliance and operational safety with
                        real-time monitoring and alerts.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className={`${styles.whiteBox}`}>
                      <div className={`${styles.iconWrap}`}>
                        <div className={`${styles.icon}`}>
                          <ExportedImage
                            src="/img/aiInnovation/AIStrategyDevelopment.svg"
                            alt="AI Strategy Development"
                            height={44}
                            width={44}
                          />
                        </div>
                      </div>
                      <h6>Live Dashboard, Reporting & Alerts</h6>
                      <p>
                        Access real-time insights and customizable reports to
                        track key performance indicators and address emerging
                        issues promptly.
                      </p>
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
