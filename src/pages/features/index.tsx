import Image from "next/image";
import Link from "next/link";
import styles from "./features.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Stack, Button } from "react-bootstrap";

export default function Features() {
  return (
    <section className={`${styles.features}`} id="features">
      <div className={`container-fluid ${styles.featTobContainer}`}>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className={`${styles.infoBox}`}>
              <p>
                We at Shodat Inc. specialize in delivering advanced AI-driven
                solutions that transform industries and empower businesses to
                thrive in the digital era. Our Commitment to excellence and
                continuous innovation ensures that we stay ahead of the curve,
                providing intelligent technologies that drive efficiency, foster
                growth, and unlock new opportunities.
              </p>
            </div>
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8">
            <div className={`${styles.featuresBox}`}>
              <div className={`${styles.featuresInfo}`}>
                <div className={`${styles.logo}`}>
                  <Image
                    className={`${styles.logoImage}`}
                    src="/img/market.PNG"
                    alt="Image One"
                    width={90}
                    height={90}
                  />
                </div>
                <div className={`${styles.text}`}>
                  <p>
                    Our<strong> market ready</strong> solutions provide flexible
                    and scalable capabilities that enterprises need to
                    successfully become AI-fueled organizations.
                  </p>
                </div>
              </div>

              <div className={`${styles.featuresInfo}`}>
                <div className={`${styles.logo}`}>
                  <Image
                    className={`${styles.logoImage}`}
                    src="/img/reEngineer.svg"
                    alt="Image One"
                    width={100}
                    height={100}
                  />
                </div>
                <div className={`${styles.text}`}>
                  <p>
                    <strong>Re-engineer </strong> your operations, drive
                    innovation, and unlock the full potential of AI with Shodat
                    Inc.
                  </p>
                </div>
              </div>

              <div className={`${styles.featuresInfo}`}>
                <div className={`${styles.logo}`}>
                  <Image
                    className={`${styles.logoImage}`}
                    src="/img/exploreSolutions.svg"
                    alt="Image One"
                    width={100}
                    height={100}
                  />
                </div>
                <div className={`${styles.text}`}>
                  <p>
                    <strong>Explore </strong>our solutions and discover the
                    power of intelligent technology to shape the future of your
                    business.
                  </p>
                </div>
              </div>

              <Link href="#scheduling" className={`${styles.btnLetsTalk}`}>
                <span>Let&#39;s Talk AI</span>
                <Image
                  src="/img/arrowRight.svg"
                  alt="arrow right"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className={`${styles.serviceTitle}`}>
              <h2>
                Discover how Shodat can elevate your business with <br />
                our bespoke data analytics solutions
              </h2>
              <div className={`${styles.line}`}></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`container-fluid ${styles.featuresSlider}`}
        id="featuresSlider"
      >
        <div className="row">
          <div className="col-sm-12">
            <div className={`${styles.sliderWrapper}`}>
              <Carousel controls={false} indicators={false} interval={null}>
                <Carousel.Item interval={10500}>
                  <Stack
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={3}
                  >
                    <Card className={`${styles.sliderItem}`}>
                      <Image
                        className={`${styles.sliderImage}`}
                        src="/img/dataEngineering.png"
                        alt="Image One"
                        width={324}
                        height={353}
                      />
                      <div className={`${styles.sliderContent}`}>
                        <h4>Data Engineering</h4>
                        <p>
                          Empowering insights through robust data engineering
                        </p>
                      </div>
                    </Card>
                    <Card className={`${styles.sliderItem}`}>
                      <Image
                        className={`${styles.sliderImage}`}
                        src="/img/aiInnovation.png"
                        alt="Image One"
                        width={324}
                        height={353}
                      />
                      <div className={`${styles.sliderContent}`}>
                        <h4>AI Innovation</h4>
                        <p>
                          Pioneering AI innovations, transforming data into
                          intelligent action.
                        </p>
                      </div>
                    </Card>
                    <Card className={`${styles.sliderItem}`}>
                      <Image
                        className={`${styles.sliderImage}`}
                        src="/img/advancedAnalytics.png"
                        alt="Image One"
                        width={324}
                        height={353}
                      />
                      <div className={`${styles.sliderContent}`}>
                        <h4>Advanced Analytics + BI</h4>
                        <p>Transform Data into Actionable Intelligence</p>
                      </div>
                    </Card>
                    <Card className={`${styles.sliderItem}`}>
                      <Image
                        className={`${styles.sliderImage}`}
                        src="/img/security.png"
                        alt="Image One"
                        width={324}
                        height={353}
                      />
                      <div className={`${styles.sliderContent}`}>
                        <h4>Security & Compliance</h4>
                        <p>Navigate compliance with Precision and Speed.</p>
                      </div>
                    </Card>
                  </Stack>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
