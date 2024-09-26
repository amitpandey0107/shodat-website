import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./industries.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Industries() {
  return (
    <>
      <div className={`${styles.slider}`} id="shodatX">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className={`${styles.shodatX}`}>
                <Carousel>
                  <Carousel.Item interval={15000}>
                    <div className={`${styles.carouselCaption}`}>
                      <h2>
                        Shodat X: Redefining Quality <br />
                        with Operational Insights
                      </h2>
                      <p>
                        The Shodat X Series represents a combination of
                        innovative analytics solutions and a collection of ML
                        models designed to empower industries with deeper
                        insights into their operations. With Shodat X,
                        businesses will be able to uncover underlying defects in
                        products and processes, improve operational efficiency
                        as well as optimise safety and compliance activities.
                        Our suite of explainable intelligence solutions will
                        deliver actionable insights that drive smarter decisions
                        and foster continuous improvement.
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                    <div className={`${styles.carouselCaption}`}>
                      <h2>
                        Shodat YAI: Uncovering the &apos;Why&apos; Behind
                        Operational Events
                      </h2>
                      <p>
                        Experience the power of AI-driven cognitive reasoning
                        with Shodat YAI. Combining inferential analytics with
                        causal and generative AI capabilities, Shodat YAI will
                        offer valuable insights and deductive diagnostic inputs.
                        From understanding the cause-and-effect relationships
                        behind operational incidents to driving growth and
                        innovation across industries, Shodat YAI will empower
                        organisations to achieve new levels of operational
                        excellence.
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
          <Carousel.Item interval={10000000}>
            <div className={`${styles.indContent}`}>
              <div className={`${styles.indImage}`}>
                <ExportedImage
                  src="/img/home/manufacturing.webp"
                  alt="Manufacturing"
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Manufacturing</h4>
                <div className={`${styles.line}`}></div>
                <h2>
                  Achieve efficiency and reliability with advanced analytics.
                </h2>
                <p>
                  A leading equipment manufacturer achieved pivotal results by
                  implementing our advanced data engineering solution which
                  minimised their defect rates by 35%, reduced root cause
                  analysis (RCA) time by 85 % (from 3 weeks to less than 3
                  days), significantly decreasing unwanted mechanical failures,
                  subsequent compliance penalties and warranty claim overheads.
                </p>
                <p>
                  An advanced data engineering solution was crafted to replace
                  manual data collection and analytical processes with automated
                  endpoint data aggregation, harmonisation and analytical
                  reporting capabilities. Real-time monitoring along with
                  Inferential analytics and AI powered RCA capabilities were
                  built to identify potential root causes to enable faster
                  problem identification and resolution of latent production
                  issues.
                </p>

                <Link
                  href="#scheduling"
                  className={`${styles.btnReadMore} btnBlack`}
                >
                  <span>Read More</span>
                  <ExportedImage
                    src="/img/home/arrowRight.svg"
                    alt="arrow right"
                    height={20}
                    width={20}
                  />
                </Link>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={10000000}>
            <div className={`${styles.indContent}`}>
              <div className={`${styles.indImage}`}>
                <ExportedImage
                  src="/img/home/automotive.webp"
                  alt="Automotive "
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Automotive </h4>
                <div className={`${styles.line}`}></div>
                <h2>
                  Driving safety forward: AI-powered tire management for safer
                  roads
                </h2>
                <p>
                  A fleet management company adopted an AI-powered system that
                  reduced the risk of tire-related accidents by 25% . By
                  accurately predicting tire wear patterns, monitoring tread
                  depth in real-time, and generating timely alerts the company
                  achieved enhanced vehicle safety and optimised maintenance
                  practices.
                </p>
                <p>
                  With our AI powered mobile app solution, we enabled early
                  identification of potentially life-threatening issues, and
                  provided personalized recommendations for tire replacements
                  based on individual driving conditions.
                </p>
                <Link
                  href="#scheduling"
                  className={`${styles.btnReadMore} btnBlack`}
                >
                  <span>Read More</span>
                  <ExportedImage
                    src="/img/home/arrowRight.svg"
                    alt="arrow right"
                    height={20}
                    width={20}
                  />
                </Link>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={10000000}>
            <div className={`${styles.indContent}`}>
              <div className={`${styles.indImage}`}>
                <ExportedImage
                  src="/img/home/oil-gas-rig-industries.webp"
                  alt="Energy"
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Energy</h4>
                <div className={`${styles.line}`}></div>
                <h2>Mitigating risks, maximising returns in energy sector</h2>
                <p>
                  A prominent player in the energy sector reduced the time spent
                  on complex volumetric calculations by 50%, improved
                  operational efficiency, enhanced decision-making and achieved
                  deeper insights into exposures and risk management, leading to
                  a 15% reduction in trading losses.
                </p>
                <p>
                  Using our analytics solution, the company established
                  reporting capabilities to perform complex calculations such as
                  forward pricing, price index analysis, weighted hedges and
                  exposures, analyzing and visualising data from multiple
                  sources, providing real-time insights and interactive
                  reporting.
                </p>
                <Link
                  href="#scheduling"
                  className={`${styles.btnReadMore} btnBlack`}
                >
                  <span>Read More</span>
                  <ExportedImage
                    src="/img/home/arrowRight.svg"
                    alt="arrow right"
                    height={20}
                    width={20}
                  />
                </Link>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={10000000}>
            <div className={`${styles.indContent}`}>
              <div className={`${styles.indImage}`}>
                <ExportedImage
                  src="/img/home/logistics.webp"
                  alt="Logistics"
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Logistics</h4>
                <div className={`${styles.line}`}></div>
                <h2>
                  Navigate the future of logistics with precision and
                  profitability.
                </h2>
                <p>
                  A global logistics company managing vast volumes of tonnage
                  annually sought to enhance its operational visibility through
                  data-driven insights.
                </p>
                <p>
                  Addressing challenges experienced due an old reporting stack,
                  difficulty in generating key operational metrics, inefficient
                  profitability calculations, delays in tracking tonnage between
                  special ports and terminals as well as forecasting delays.
                </p>
                <p>
                  Migrating to an advanced analytics platform resulted in
                  enhanced operational visibility. Efficient calculations and
                  forecasting of operational metrics with close to 99% accuracy
                  potentially opened the doors for improved resource allocation
                  eventually mitigating delivery risks, minimising disruptions
                  and increase in on-time deliveries due to optimised routing.
                </p>
                <Link
                  href="#scheduling"
                  className={`${styles.btnReadMore} btnBlack`}
                >
                  <span>Read More</span>
                  <ExportedImage
                    src="/img/home/arrowRight.svg"
                    alt="arrow right"
                    height={20}
                    width={20}
                  />
                </Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
