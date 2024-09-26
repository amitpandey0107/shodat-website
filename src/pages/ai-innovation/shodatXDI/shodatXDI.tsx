import React from "react";
import ExportedImage from "next-image-export-optimizer";
import styles from "./shodatXDI.module.css";
import Accordion from "react-bootstrap/Accordion";
export default function ShodatXDI() {
  return (
    <>
      <div className={`${styles.shodatXDI}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className={`${styles.contentLeft}`}>
                <div className={`${styles.shodatAccordian}`}>
                  <Accordion
                    defaultActiveKey="10"
                    className="appraochAccordion businessAccordian shodatXDIAccordian"
                  >
                    <Accordion.Item eventKey="10">
                      <Accordion.Header>
                        <div className={`${styles.accordionHeader}`}>
                          <h6>Shodat XDI: Precision Defect Detection</h6>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className={`${styles.accBody}`}>
                          <p>
                            Shodat XDI is our flagship defect detection system,
                            leveraging advanced computer vision to identify even
                            the most minute defects that are often missed by the
                            human eye. Whether it&apos;s fine crack detection in
                            manufacturing or quality control in production
                            lines, Shodat XDI ensures the highest standards of
                            product integrity.
                          </p>
                          <div className={`${styles.keyFeature}`}>
                            <div className={`${styles.keyBenefits}`}>
                              <div className={`${styles.lineLeft}`}></div>
                              <div className={`${styles.lineRight}`}></div>
                              <div className={`${styles.lineBottom}`}></div>
                              <div className={`${styles.benefitTitle}`}>
                                Key Benefits
                              </div>
                              <div className={`${styles.boxContainer}`}>
                                <div className={`${styles.box}`}>
                                  <h6>High Accuracy</h6>
                                  <p>
                                    98% precision in detecting fine defects.
                                  </p>
                                </div>
                                <div className={`${styles.box}`}>
                                  <h6>Real-Time Processing</h6>
                                  <p>
                                    Instantaneous analysis for immediate quality
                                    control.
                                  </p>
                                </div>
                                <div className={`${styles.box}`}>
                                  <h6>Cost Efficiency</h6>
                                  <p>
                                    Reduces warranty claims by 20%, improving
                                    overall profitability.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                      <Accordion.Header>
                        <div className={`${styles.accordionHeader}`}>
                          <h6>Shodat XRI: Explainable RegTech Intelligence</h6>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className={`${styles.accBody}`}>
                          <p>
                            Shodat XRI is our advanced regulatory technology
                            solution, designed to provide explainable AI-driven
                            insights for regulatory compliance and risk
                            management. By utilizing Shodat XRI, businesses can
                            navigate complex regulatory landscapes with greater
                            ease and confidence.
                          </p>

                          <div className={`${styles.keyFeature}`}>
                            <div className={`${styles.keyBenefits}`}>
                              <div className={`${styles.lineLeft}`}></div>
                              <div className={`${styles.lineRight}`}></div>
                              <div className={`${styles.lineBottom}`}></div>
                              <div className={`${styles.benefitTitle}`}>
                                Key Benefits
                              </div>
                              <div className={`${styles.boxContainer}`}>
                                <div className={`${styles.box}`}>
                                  <h6>Regulatory Compliance</h6>
                                  <p>
                                    Automated compliance checks and reporting.
                                  </p>
                                </div>
                                <div className={`${styles.box}`}>
                                  <h6>Risk Management</h6>
                                  <p>
                                    Identifying and mitigating potential risks.
                                  </p>
                                </div>
                                <div className={`${styles.box}`}>
                                  <h6>Transparency</h6>
                                  <p>
                                    Explainable AI models ensure transparency
                                    and accountability in decision-making.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className={`${styles.contentRight}`}>
                <div className={`${styles.thumbnail}`}>
                  <ExportedImage
                    src="/img/aiInnovation/shodatXDI.PNG"
                    alt="dummy images"
                    height={433}
                    width={624}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
