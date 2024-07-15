import Image from "next/image";
import Link from "next/link";
import styles from "./slider.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Slider() {
  return (
    <>
      <div className={`${styles.slider}`} id="shodatX">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className={`${styles.shodatX}`}>
                <Carousel>
                  <Carousel.Item interval={20500}>
                    <div className={`${styles.carouselCaption}`}>
                      <h2>Shodat X: Redefining Quality <br/>with Deeper Insights</h2>
                      <p>
                        The Shodat X Series will represent a suite of innovative
                        AI-driven solutions and a collection of ML models
                        designed to empower industries with clear insights into
                        their operations. With Shodat X, businesses will be able
                        to uncover underlying defects in products and processes,
                        optimize supply chain operations, and improve
                        operational safety. Our suite of explainable
                        intelligence solutions will deliver actionable insights
                        that drive smarter decisions and foster continuous
                        improvement.
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={20500}>
                    <div className={`${styles.carouselCaption}`}>
                      <h2>
                        Shodat YAI: The Intelligence Behind Real-World Events
                        Insights
                      </h2>
                      <p>
                        Experience the power of AI-driven intelligence with
                        Shodat YAI. Combining generative and causal AI
                        capabilities, Shodat YAI will offer valuable insights
                        and reasoning capabilities. From understanding the
                        cause-and-effect relationships behind real-world
                        incidents to driving growth and innovation across
                        industries, Shodat YAI will empower organizations to
                        achieve new levels of operational excellence.
                      </p>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.sliderIndustries}`} id="sliderIndustries">
        <Carousel indicators={false}>
          <Carousel.Item interval={20500}>
            <div className={`${styles.indContent}`}>
              <div className={`${styles.indImage}`}>
                <Image
                  src="/img/industries/image2.jpg"
                  alt="industries"
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Manufacturing</h4>
                <div className={`${styles.line}`}></div>
                <h2>
                How a leading machine parts manufacturer 
                </h2>
                <p>
                improved inventory accuracy, enhanced sales forecasting, and increased operational efficiency, leading to a 21% reduction in operational costs , Solving operational challenges, including inefficient inventory management, difficulty identifying slow-moving stock, and inaccurate sales and demand forecasting, resulting in inflated costs.
                </p>
                {/* <p>
                  Proactive maintenance and quicker issue resolution minimized
                  failures during and after manufacturing by 40%.
                </p> */}
                <Link
                  href="#scheduling"
                  className={`${styles.btnReadMore} btnBlack`}
                >
                  <span>Read More</span>
                  <Image
                    src="/img/arrowRight.svg"
                    alt="arrow right"
                    height={20}
                    width={20}
                  />
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={20500}>
            <div className={`${styles.indContent}`}>
              <div className={`${styles.indImage}`}>
                <Image
                  src="/img/industries/image3.png"
                  alt="Automotive "
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Automotive </h4>
                <div className={`${styles.line}`}></div>
                <h2>
                  Driving Safety Forward: AI-Powered Tire Management for
                  Smarter, Safer Roads
                </h2>
                <p>
                  A leading automotive manufacturer adopted AI-powered system
                  that reduced the risk of tire-related accidents by 16% . By
                  accurately predicting tire wear patterns, monitoring tread
                  depth in real-time, and generating timely alerts the
                  manufacturer achieved enhanced vehicle safety and optimised
                  maintenance practices.
                </p>
                <p>
                  The Manufacturer enabled early identification of potentially
                  life-threatening issues, and providing personalized
                  recommendations for tire replacements based on individual
                  driving conditions.
                </p>
                <Link
                  href="#scheduling"
                  className={`${styles.btnReadMore} btnBlack`}
                >
                  <span>Read More</span>
                  <Image
                    src="/img/arrowRight.svg"
                    alt="arrow right"
                    height={20}
                    width={20}
                  />
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={20500}>
            <div className={`${styles.indContent}`}>
              <div className={`${styles.indImage}`}>
                <Image
                  src="/img/industries/image3.jpg"
                  alt="industries"
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Oil & Gas</h4>
                <div className={`${styles.line}`}></div>
                <h2>Mitigating Risks, Maximizing Returns in Oil & Gas</h2>
                <p>
                  A prominent player in the Oil and Gas trading industry reduced
                  the time spent on complex volumetric calculations by 50%,
                  improved operational efficiency, enhanced decision-making, and
                  provided deeper insights into exposures and risk management,
                  leading to a 15% reduction in trading losses.
                </p>
                <p>
                  The Client established reporting capabilities to perform
                  complex calculations such as forward pricing, price index
                  analysis, weighted hedges, and exposures,analyzing and
                  visualising data from multiple sources, providing real-time
                  insights and interactive reporting.
                </p>
                <Link
                  href="#scheduling"
                  className={`${styles.btnReadMore} btnBlack`}
                >
                  <span>Read More</span>
                  <Image
                    src="/img/arrowRight.svg"
                    alt="arrow right"
                    height={20}
                    width={20}
                  />
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={20500}>
            <div className={`${styles.indContent}`}>
              <div className={`${styles.indImage}`}>
                <Image
                  src="/img/industries/image4.jpg"
                  alt="industries"
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Logistics</h4>
                <div className={`${styles.line}`}></div>
                <h2>
                  Navigate the Future of Logistics with Precision and
                  Profitability.
                </h2>
                <p>
                  A leading logistics player, operating across multiple
                  countries and managing vast volumes of tonnage, achieved
                  real-time activity tracking, leading to a 15% increase in
                  overall profitability.
                </p>
                <p>
                  Enhanced operational visibility improved resource allocation,
                  resulting in 25% increase in on-time deliveries and 20%
                  reduction in fuel costs due to optimized routing.
                </p>
                <p>
                  Proactively forecasting operational metrics with close to 98%
                  accuracy allowed the company to mitigate delivery risks and
                  minimize disruptions effectively.
                </p>
                <Link
                  href="#scheduling"
                  className={`${styles.btnReadMore} btnBlack`}
                >
                  <span>Read More</span>
                  <Image
                    src="/img/arrowRight.svg"
                    alt="arrow right"
                    height={20}
                    width={20}
                  />
                </Link>
              </div>
            </div>
          </Carousel.Item>
          {/* <Carousel.Item interval={20500}>
            <div className={`${styles.indContent}`}>
              <div className={`${styles.indImage}`}>
                <Image
                  src="/img/industries/slider-4-automotive-manufc_industries.jpg"
                  alt="industries"
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Logistics</h4>
                <div className={`${styles.line}`}></div>
                <h2>
                  Navigate the Future of Logistics with Precision and
                  Profitability.
                </h2>
                <p>
                  A leading logistics player, operating across multiple
                  countries and managing vast volumes of tonnage, achieved
                  real-time activity tracking, leading to a 15% increase in
                  overall profitability.
                </p>
                <p>
                  Enhanced operational visibility improved resource allocation,
                  resulting in 25% increase in on-time deliveries and 20%
                  reduction in fuel costs due to optimized routing.
                </p>
                <p>
                  Proactively forecasting operational metrics with close to 98%
                  accuracy allowed the company to mitigate delivery risks and
                  minimize disruptions effectively.
                </p>
                <Link
                  href="#scheduling"
                  className={`${styles.btnReadMore} btnBlack`}
                >
                  <span>Read More</span>
                  <Image
                    src="/img/arrowRight.svg"
                    alt="arrow right"
                    height={20}
                    width={20}
                  />
                </Link>
              </div>
            </div>
          </Carousel.Item> */}
        </Carousel>
      </div>
    </>
  );
}
