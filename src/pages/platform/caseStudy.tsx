import React, { useState, useEffect } from "react";
import styles from "./platform.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Stack } from "react-bootstrap";
import MyVerticallyCenteredModal from "./caseStudyModal";
import Energy from "./modal/energy";
import Automotive from "./modal/automotive";
import Manufacturing from "./modal/manufacturing";
import Financial from "./modal/financial";
import WorkplaceSafety from "./modal/workplaceSafety";

export default function CaseStudy() {
  const [modalShow, setModalShow] = useState(false);
  const [modelID, setModalID] = useState(1);
  const openModalFuncttion = (modalId: any) => {
    setModalID(modalId);
    setModalShow(true);
  };
  return (
    <div className={`${styles.caseStudy}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h2 className={`${styles.title}`}>Case Studies</h2>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className={`${styles.caseStudySlider}`} id="caseStudySlider">
              <Carousel
                indicators={false}
                className={`${styles.desktopCaseSlider}`}
              >
                <Carousel.Item interval={700000}>
                  <Stack
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={4}
                  >
                    <Card
                      className={`${styles.sliderItem}`}
                      onClick={() => openModalFuncttion(1)}
                    >
                      <div className={`${styles.csItem}`}>
                        <div className={`${styles.topItem}`}>
                          <h4>Energy</h4>
                          <p>
                            A prominent manufacturer of energy faced significant
                            challenges in predicting battery life accurately.
                            Inconsistent performance data, variations in usage
                            patterns, and environmental factors made it
                            difficult to provide reliable predictions.
                          </p>
                        </div>
                        <div className={`${styles.imageItem}`}>
                          <Image
                            src="/img/platform/evCharging.png"
                            alt="evCharging"
                            height={290}
                            width={392}
                          />
                          <div className={`${styles.purpleText}`}>
                            To address these issues, the manufacturer
                            implemented Shodat eOps™, an advanced asset tracking
                            and quality management platform, to enhance their
                            battery life prediction capabilities.
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      className={`${styles.sliderItem}`}
                      onClick={() => openModalFuncttion(2)}
                    >
                      <div className={`${styles.csItem}`}>
                        <div className={`${styles.topItem}`}>
                          <h4>Automotive</h4>
                          <p>
                            A leading automotive faced challenges in predicting
                            tire wear accurately, which impacted vehicle safety,
                            maintenance schedules, and overall operational
                            efficiency.{" "}
                          </p>
                        </div>
                        <div className={`${styles.imageItem}`}>
                          <Image
                            src="/img/platform/automotive.png"
                            alt="automotive"
                            height={290}
                            width={392}
                          />
                          <div className={`${styles.purpleText}`}>
                            By implementing Shodat eOps™, the manufacturer aimed
                            to enhance their tire wear prediction capabilities. 
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      className={`${styles.sliderItem}`}
                      onClick={() => openModalFuncttion(3)}
                    >
                      <div className={`${styles.csItem}`}>
                        <div className={`${styles.topItem}`}>
                          <h4>Manufacturing</h4>
                          <p>
                            A leader in the manufacturing industry needed an
                            effective solution for detecting and addressing
                            structural cracks in product components. Traditional
                            inspection methods were labour-intensive,
                            error-prone, and time-consuming.
                          </p>
                        </div>
                        <div className={`${styles.imageItem}`}>
                          <Image
                            src="/img/platform/manufaturing.png"
                            alt="manufaturing"
                            height={290}
                            width={392}
                          />
                          <div className={`${styles.purpleText}`}>
                            To enhance their crack detection capabilities, the
                            company implemented the Shodat eOps™platform.
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Stack>
                </Carousel.Item>

                <Carousel.Item interval={700000}>
                  <Stack
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={4}
                  >
                    <Card
                      className={`${styles.sliderItem}`}
                      onClick={() => openModalFuncttion(4)}
                    >
                      <div className={`${styles.csItem}`}>
                        <div className={`${styles.topItem}`}>
                          <h4>Financial</h4>
                          <p>
                            A leading financial services firm faced significant
                            challenges in managing compliance due to the
                            complexity and dynamic nature of regulatory
                            requirements. Manual processes and disparate systems
                            resulted in inefficiencies and increased the risk of
                            non-compliance.
                          </p>
                        </div>
                        <div className={`${styles.imageItem}`}>
                          <Image
                            src="/img/platform/platform-page-imgs/financial-services.jpg"
                            alt="Financial Services"
                            height={554}
                            width={547}
                          />
                          <div className={`${styles.purpleText}`}>
                            To address these challenges, the firm implemented
                            Shodat eOps™ integrated with Generative AI to
                            enhance their compliance management capabilities.
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      className={`${styles.sliderItem}`}
                      onClick={() => openModalFuncttion(5)}
                    >
                      <div className={`${styles.csItem}`}>
                        <div className={`${styles.topItem}`}>
                          <h4>Workplace Safety</h4>
                          <p>
                            A large manufacturing company faced significant
                            challenges in maintaining workplace safety due to
                            the complex and hazardous nature of its operations.
                            Traditional safety monitoring methods were
                            insufficient to prevent incidents and ensure
                            regulatory compliance.
                          </p>
                        </div>
                        <div className={`${styles.imageItem}`}>
                          <Image
                            src="/img/platform/platform-page-imgs/workplace-safety.jpg"
                            alt="Workplace Safety"
                            height={554}
                            width={547}
                          />
                          <div className={`${styles.purpleText}`}>
                            To address these issues, the company implemented
                            Shodat eOps™, an advanced asset tracking and quality
                            management platform.
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Stack>
                </Carousel.Item>
              </Carousel>

              <Carousel
                indicators={false}
                className={`${styles.mobileCaseSlider}`}
              >
                <Carousel.Item interval={150000}>
                  <Stack
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={4}
                  >
                    <Card
                      className={`${styles.sliderItem}`}
                      onClick={() => openModalFuncttion(1)}
                    >
                      <div className={`${styles.csItem}`}>
                        <div className={`${styles.topItem}`}>
                          <h4>Energy</h4>
                          <p>
                            A prominent manufacturer of energy faced significant
                            challenges in predicting battery life accurately.
                            Inconsistent performance data, variations in usage
                            patterns, and environmental factors made it
                            difficult to provide reliable predictions.
                          </p>
                        </div>
                        <div className={`${styles.imageItem}`}>
                          <Image
                            src="/img/platform/evCharging.png"
                            alt="evCharging"
                            height={290}
                            width={392}
                          />
                          <div className={`${styles.purpleText}`}>
                            To address these issues, the manufacturer
                            implemented Shodat eOps™, an advanced asset tracking
                            and quality management platform, to enhance their
                            battery life prediction capabilities.
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Stack>
                </Carousel.Item>

                <Carousel.Item interval={150000}>
                  <Stack
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={4}
                  >
                    <Card
                      className={`${styles.sliderItem}`}
                      onClick={() => openModalFuncttion(2)}
                    >
                      <div className={`${styles.csItem}`}>
                        <div className={`${styles.topItem}`}>
                          <h4>Automotive</h4>
                          <p>
                            A leading automotive faced challenges in predicting
                            tire wear accurately, which impacted vehicle safety,
                            maintenance schedules, and overall operational
                            efficiency.{" "}
                          </p>
                        </div>
                        <div className={`${styles.imageItem}`}>
                          <Image
                            src="/img/platform/automotive.png"
                            alt="automotive"
                            height={290}
                            width={392}
                          />
                          <div className={`${styles.purpleText}`}>
                            By implementing Shodat eOps™, the manufacturer aimed
                            to enhance their tire wear prediction capabilities. 
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Stack>
                </Carousel.Item>

                <Carousel.Item interval={150000}>
                  <Stack
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={4}
                  >
                    <Card
                      className={`${styles.sliderItem}`}
                      onClick={() => openModalFuncttion(3)}
                    >
                      <div className={`${styles.csItem}`}>
                        <div className={`${styles.topItem}`}>
                          <h4>Manufacturing</h4>
                          <p>
                            A leader in the manufacturing industry needed an
                            effective solution for detecting and addressing
                            structural cracks in product components. Traditional
                            inspection methods were labour-intensive,
                            error-prone, and time-consuming.
                          </p>
                        </div>
                        <div className={`${styles.imageItem}`}>
                          <Image
                            src="/img/platform/manufaturing.png"
                            alt="manufaturing"
                            height={290}
                            width={392}
                          />
                          <div className={`${styles.purpleText}`}>
                            To enhance their crack detection capabilities, the
                            company implemented the Shodat eOps™platform.
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Stack>
                </Carousel.Item>

                <Carousel.Item interval={150000}>
                  <Stack
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={4}
                  >
                    <Card
                      className={`${styles.sliderItem}`}
                      onClick={() => openModalFuncttion(4)}
                    >
                      <div className={`${styles.csItem}`}>
                        <div className={`${styles.topItem}`}>
                          <h4>Financial</h4>
                          <p>
                            A leading financial services firm faced significant
                            challenges in managing compliance due to the
                            complexity and dynamic nature of regulatory
                            requirements. Manual processes and disparate systems
                            resulted in inefficiencies and increased the risk of
                            non-compliance.
                          </p>
                        </div>
                        <div className={`${styles.imageItem}`}>
                          <Image
                            src="/img/platform/platform-page-imgs/financial-services.jpg"
                            alt="Financial Services"
                            height={554}
                            width={547}
                          />
                          <div className={`${styles.purpleText}`}>
                            To address these challenges, the firm implemented
                            Shodat eOps™ integrated with Generative AI to
                            enhance their compliance management capabilities.
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Stack>
                </Carousel.Item>

                <Carousel.Item interval={150000}>
                  <Stack
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={4}
                  >
                    <Card
                      className={`${styles.sliderItem}`}
                      onClick={() => openModalFuncttion(5)}
                    >
                      <div className={`${styles.csItem}`}>
                        <div className={`${styles.topItem}`}>
                          <h4>Workplace Safety</h4>
                          <p>
                            A large manufacturing company faced significant
                            challenges in maintaining workplace safety due to
                            the complex and hazardous nature of its operations.
                            Traditional safety monitoring methods were
                            insufficient to prevent incidents and ensure
                            regulatory compliance.
                          </p>
                        </div>
                        <div className={`${styles.imageItem}`}>
                          <Image
                            src="/img/platform/platform-page-imgs/workplace-safety.jpg"
                            alt="Workplace safety"
                            height={554}
                            width={547}
                          />
                          <div className={`${styles.purpleText}`}>
                            To address these issues, the company implemented
                            Shodat eOps™, an advanced asset tracking and quality
                            management platform.
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Stack>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {modelID === 1 && (
        <Energy show={modalShow} onHide={() => setModalShow(false)} />
      )}

      {modelID === 2 && (
        <Automotive show={modalShow} onHide={() => setModalShow(false)} />
      )}

      {modelID === 3 && (
        <Manufacturing show={modalShow} onHide={() => setModalShow(false)} />
      )}

      {modelID === 4 && (
        <Financial show={modalShow} onHide={() => setModalShow(false)} />
      )}

      {modelID === 5 && (
        <WorkplaceSafety show={modalShow} onHide={() => setModalShow(false)} />
      )}
    </div>
  );
}
