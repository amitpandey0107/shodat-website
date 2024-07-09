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
                      <h2>Shodat X: Redefining quality with deeper insights</h2>
                      <p>
                        The Shodat X Series represents a suite of innovative
                        AI-driven solutions designed to empower industries with
                        unparalleled insights into their operations. With Shodat
                        X, businesses can uncover the underlying defects in
                        products and processes, optimize supply chain
                        operations, and improve operational safety. Our suite of
                        explainable intelligence solutions delivers actionable
                        insights that drive smarter decisions and foster
                        continuous improvement
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={20500}>
                    <div className={`${styles.carouselCaption}`}>
                      <h2>Shodat Y: Redefining quality with deeper insights</h2>
                      <p>
                        The Shodat X Series represents a suite of innovative
                        AI-driven solutions designed to empower industries with
                        unparalleled insights into their operations. With Shodat
                        X, businesses can uncover the underlying defects in
                        products and processes, optimize supply chain
                        operations, and improve operational safety. Our suite of
                        explainable intelligence solutions delivers actionable
                        insights that drive smarter decisions and foster
                        continuous improvement
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
                  src="/img/industries/slider-1-machin-parts_industries.jpg"
                  alt="industries"
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Industries</h4>
                <div className={`${styles.line}`}></div>
                <h2>How a leading machine parts manufacturer </h2>
                <p>
                  improved inventory accuracy, enhanced sales forecasting, and
                  increased operational efficiency, leading to a 21% reduction
                  in operational costs , Solving operational challenges,
                  including inefficient inventory management, difficulty
                  identifying slow-moving stock, and inaccurate sales and demand
                  forecasting, resulting in inflated costs.
                </p>
                <Link href="/" className={`${styles.btnReadMore} btnBlack`}>
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
                  src="/img/industries/slider-2-automotive-manufc_industries.jpg"
                  alt="industries"
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Industries</h4>
                <div className={`${styles.line}`}></div>
                <h2>How a leading machine parts manufacturer </h2>
                <p>
                  improved inventory accuracy, enhanced sales forecasting, and
                  increased operational efficiency, leading to a 21% reduction
                  in operational costs , Solving operational challenges,
                  including inefficient inventory management, difficulty
                  identifying slow-moving stock, and inaccurate sales and demand
                  forecasting, resulting in inflated costs.
                </p>
                <Link href="/" className={`${styles.btnReadMore} btnBlack`}>
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
                  src="/img/industries/slider-3-oil-gas_industries.jpg"
                  alt="industries"
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Industries</h4>
                <div className={`${styles.line}`}></div>
                <h2>How a leading machine parts manufacturer </h2>
                <p>
                  improved inventory accuracy, enhanced sales forecasting, and
                  increased operational efficiency, leading to a 21% reduction
                  in operational costs , Solving operational challenges,
                  including inefficient inventory management, difficulty
                  identifying slow-moving stock, and inaccurate sales and demand
                  forecasting, resulting in inflated costs.
                </p>
                <Link href="/" className={`${styles.btnReadMore} btnBlack`}>
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
                  src="/img/industries/slider-4-automotive-manufc_industries.jpg"
                  alt="industries"
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Industries</h4>
                <div className={`${styles.line}`}></div>
                <h2>How a leading machine parts manufacturer </h2>
                <p>
                  improved inventory accuracy, enhanced sales forecasting, and
                  increased operational efficiency, leading to a 21% reduction
                  in operational costs , Solving operational challenges,
                  including inefficient inventory management, difficulty
                  identifying slow-moving stock, and inaccurate sales and demand
                  forecasting, resulting in inflated costs.
                </p>
                <Link href="/" className={`${styles.btnReadMore} btnBlack`}>
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
                  src="/img/industries/slider-5-logistics_industries.jpg"
                  alt="industries"
                  height={604}
                  width={666}
                />
              </div>
              <div className={`${styles.indText}`}>
                <h4>Industries</h4>
                <div className={`${styles.line}`}></div>
                <h2>How a leading machine parts manufacturer </h2>
                <p>
                  improved inventory accuracy, enhanced sales forecasting, and
                  increased operational efficiency, leading to a 21% reduction
                  in operational costs , Solving operational challenges,
                  including inefficient inventory management, difficulty
                  identifying slow-moving stock, and inaccurate sales and demand
                  forecasting, resulting in inflated costs.
                </p>
                <Link href="/" className={`${styles.btnReadMore} btnBlack`}>
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
        </Carousel>
      </div>
    </>
  );
}
