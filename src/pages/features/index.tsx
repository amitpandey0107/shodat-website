import Image from "next/image";
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
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className={`${styles.features}`} id="features">
      <div className={`container-fluid ${styles.featTobContainer}`}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
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
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className={`${styles.featuresBox}`}>
              <div className={`${styles.featuresInfo}`}>
                <div className={`${styles.logo}`}>
                  <Image
                    className={`${styles.logoImage}`}
                    src="/img/marketReady.svg"
                    alt="Image One"
                    width={100}
                    height={100}
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
                    src="/img/re-engineering.svg"
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
                        src="/img/ai-innovation-img1.jpg"
                        alt="Image One"
                        width={324}
                        height={353}
                      />
                      <div className={`${styles.sliderContent}`}>
                        <h4>AI Innovation</h4>
                        <p>
                          AI solutions for a brighter, smarter future
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
                        <h4>Advanced Analytics & BI</h4>
                        <p>Transform data into actionable intelligence</p>
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
                        <p>Navigate compliance with precision and speed</p>
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
