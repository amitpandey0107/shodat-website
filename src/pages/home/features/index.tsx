import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./features.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Stack, Button } from "react-bootstrap";

export default function Features() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={`${styles.features}`} id="features">
      <div className={`container-fluid ${styles.featTobContainer}`}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className={`${styles.infoBox}`}>
              <p>
                We at Shodat specialize in delivering advanced analytics and
                AI-driven solutions that transform industries and empower
                businesses to thrive in the digital era. Our commitment to
                excellence and continuous innovation ensures that we stay ahead
                of the curve, providing intelligent technologies that drive
                efficiency, foster growth, and unlock new opportunities.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className={`${styles.featuresBox}`}>
              <div className={`${styles.featuresInfo}`}>
                <div className={`${styles.logo}`}>
                  <ExportedImage
                    className={`${styles.logoImage}`}
                    src="/img/home/marketReady.svg"
                    alt="Adopt"
                    width={100}
                    height={100}
                  />
                </div>
                <div className={`${styles.text}`}>
                  <p>
                    <strong>Adopt </strong>our market ready solutions providing
                    flexible and scalable capabilities that enterprises need to
                    successfully become AI-fueled organisations
                  </p>
                </div>
              </div>

              <div className={`${styles.featuresInfo}`}>
                <div className={`${styles.logo}`}>
                  <ExportedImage
                    className={`${styles.logoImage}`}
                    src="/img/home/re-engineering.svg"
                    alt="re-engineering"
                    width={100}
                    height={100}
                  />
                </div>
                <div className={`${styles.text}`}>
                  <p>
                    <strong>Re-engineer</strong> your operations, drive
                    efficiency and unlock the full potential of your data with
                    Shodat eOps platform.
                  </p>
                </div>
              </div>

              <div className={`${styles.featuresInfo}`}>
                <div className={`${styles.logo}`}>
                  <ExportedImage
                    className={`${styles.logoImage}`}
                    src="/img/home/exploreSolutions.svg"
                    alt="Explore"
                    width={100}
                    height={100}
                  />
                </div>
                <div className={`${styles.text}`}>
                  <p>
                    <strong>Explore </strong>our research and advanced solutions
                    to discover how technology can further continue to shape the
                    future of your business.
                  </p>
                </div>
              </div>

              <Link href="#scheduling" className={`${styles.btnLetsTalk}`}>
                <span>Let&#39;s Talk AI</span>
                <ExportedImage
                  src="/img/home/arrowRight.svg"
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
                      <Link href="/data-engineering">
                        <ExportedImage
                          className={`${styles.sliderImage}`}
                          src="/img/home/data-engineering.webp"
                          alt="Data Engineering"
                          width={324}
                          height={353}
                        />
                        <div className={`${styles.sliderContent}`}>
                          <h4>Data Engineering</h4>
                          <p>
                            Building a robust data infrastructure for seamless
                            integration and analysis.
                          </p>
                        </div>
                      </Link>
                    </Card>
                    <Card className={`${styles.sliderItem}`}>
                      <Link href="">
                        <ExportedImage
                          className={`${styles.sliderImage}`}
                          src="/img/home/advancedAnalytics.webp"
                          alt="Advanced Analytics & BI"
                          width={324}
                          height={353}
                        />
                        <div className={`${styles.sliderContent}`}>
                          <h4>Advanced Analytics & BI</h4>
                          <p>
                            In-depth custom analytics, dashboarding and
                            reporting frameworks to enable data-driven decision
                            making.
                          </p>
                        </div>
                      </Link>
                    </Card>
                    <Card className={`${styles.sliderItem}`}>
                      <Link href="/ai-innovation">
                        <ExportedImage
                          className={`${styles.sliderImage}`}
                          src="/img/home/ai-innovation-img1.webp"
                          alt="AI Innovation"
                          width={324}
                          height={353}
                        />
                        <div className={`${styles.sliderContent}`}>
                          <h4>AI Innovation</h4>
                          <p>
                            Transforming data into actionable insights and
                            predictive intelligence.
                          </p>
                        </div>
                      </Link>
                    </Card>

                    <Card className={`${styles.sliderItem}`}>
                      <Link href="">
                        <ExportedImage
                          className={`${styles.sliderImage}`}
                          src="/img/home/security.webp"
                          alt="Security & Compliance"
                          width={324}
                          height={353}
                        />
                        <div className={`${styles.sliderContent}`}>
                          <h4>Security & Compliance</h4>
                          <p>
                            Ensure data protection & navigate compliance with
                            precision and speed.
                          </p>
                        </div>
                      </Link>
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
