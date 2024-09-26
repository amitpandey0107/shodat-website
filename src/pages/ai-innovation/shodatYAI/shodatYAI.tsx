import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import styles from "./shodatYAI.module.css";
export default function ShodatYAI() {
  return (
    <>
      <div className={`${styles.explainable}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className={`${styles.sectionLeft}`}>
                <h2>
                  Shodat YAI: Your Partner in AI <br />
                  Transformation
                </h2>
                <h6>Unlock Unparalleled Insights</h6>
                <p>
                  Combining generative and causal AI to provide deep reasoning
                  and insight capabilities. Our platform enables organizations
                  to understand the cause-and-effect relationships behind
                  real-world incidents, driving growth, innovation, and
                  operational excellence.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className={`${styles.sectionRight}`}>
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className={`${styles.whiteBox}`}>
                      <div className={`${styles.iconWrap}`}>
                        <div className={`${styles.icon}`}>
                          <ExportedImage
                            src="/img/aiInnovation/GenerativeAI.svg"
                            alt="Generative AI"
                            height={44}
                            width={44}
                          />
                        </div>
                      </div>
                      <h6>Generative AI</h6>
                      <p>
                        Create new data insights and predictive models to
                        foresee and mitigate future challenges.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className={`${styles.whiteBox}`}>
                      <div className={`${styles.iconWrap}`}>
                        <div className={`${styles.icon}`}>
                          <ExportedImage
                            src="/img/aiInnovation/CausalAI.svg"
                            alt="Causal AI"
                            height={44}
                            width={44}
                          />
                        </div>
                      </div>
                      <h6>Causal AI</h6>
                      <p>
                        Understand the underlying factors and relationships that
                        influence outcomes, enabling more effective
                        decision-making.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className={`${styles.whiteBox} ${styles.br0}`}>
                      <div className={`${styles.iconWrap}`}>
                        <div className={`${styles.icon}`}>
                          <ExportedImage
                            src="/img/aiInnovation/InferenceAnalytics.svg"
                            alt="Inference Analytics"
                            height={44}
                            width={44}
                          />
                        </div>
                      </div>
                      <h6>Inference Analytics</h6>
                      <p>
                        Derive actionable insights from complex data sets,
                        enhancing strategic planning and execution.
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
