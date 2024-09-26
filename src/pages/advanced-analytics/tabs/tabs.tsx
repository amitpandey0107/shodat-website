import React, { useState, useEffect } from "react";
import styles from "./tabs.module.css";
import ExportedImage from "next-image-export-optimizer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSearchParams } from "next/navigation";

import AdvancedDataModeling from "./advancedDataModeling";
import AIMachineLearningIntegration from "./aiMachineLearningIntegration";
import CustomVisualsReporting from "./customVisualsReporting";
import EnhancedDataConnectivity from "./enhancedDataConnectivity";
import EnterpriseLevelBI from "./enterpriseLevelBI";
import PerformanceOptimization from "./performanceOptimization";

export default function Tabs() {
  const [tab, setTab] = useState(1);
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const [toggleButton, setToggleButton] = useState(false);
  const searchParams = useSearchParams();
  const sliderID = searchParams?.get("id");
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current: any) => setActiveSlide2(current),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  useEffect(() => {
    activeSlide > 0 ? setToggleButton(true) : setToggleButton(false);
  }, [activeSlide]);

  const handleTabFunction = (tabID: number) => {
    setTab(tabID);
  };
  return (
    <>
      <div className={`${styles.tabs}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className={`${styles.titleCenter}`}>
                <h1 className={`${styles.titleUnderline}`}>
                  Expertise with Power Platform
                </h1>
                <p>
                  Transform business operations and increase organization&apos;s
                  productivity
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div
                className={`advancedAnalyticsSlider ${styles.advancedAnalyticsSlider} ${styles.tabwrap}`}
              >
                <Slider {...settings}>
                  <div className={`${styles.btnwrap}`}>
                    <button
                      className={`${styles.btnTab} ${
                        tab === 1 ? `${styles.active}` : ``
                      } `}
                      onClick={() => handleTabFunction(1)}
                    >
                      Advanced Data Modeling
                    </button>
                  </div>
                  <div className={`${styles.btnwrap}`}>
                    <button
                      className={`${styles.btnTab} ${
                        tab === 2 ? `${styles.active}` : ``
                      } `}
                      onClick={() => handleTabFunction(2)}
                    >
                      Performance Optimization
                    </button>
                  </div>
                  <div className={`${styles.btnwrap}`}>
                    <button
                      className={`${styles.btnTab} ${
                        tab === 3 ? `${styles.active}` : ``
                      } `}
                      onClick={() => handleTabFunction(3)}
                    >
                      Enhanced Data Connectivity
                    </button>
                  </div>
                  <div className={`${styles.btnwrap}`}>
                    <button
                      className={`${styles.btnTab} ${
                        tab === 4 ? `${styles.active}` : ``
                      } `}
                      onClick={() => handleTabFunction(4)}
                    >
                      Enterprise-Level BI
                    </button>
                  </div>
                  <div className={`${styles.btnwrap}`}>
                    <button
                      className={`${styles.btnTab} ${
                        tab === 5 ? `${styles.active}` : ``
                      } `}
                      onClick={() => handleTabFunction(5)}
                    >
                      Custom Visuals and Reporting
                    </button>
                  </div>
                  <div className={`${styles.btnwrap}`}>
                    <button
                      className={`${styles.btnTab} ${
                        tab === 6 ? `${styles.active}` : ``
                      } `}
                      onClick={() => handleTabFunction(6)}
                    >
                      AI and Machine Learning Integration
                    </button>
                  </div>
                </Slider>
              </div>
            </div>
            {/* <div className="col-sm-12">
                            <div className={`${styles.tabwrap}`}>
                                <div className={`${styles.btnwrap}`}>
                                    <button
                                        className={`${styles.btnTab} ${tab === 1 ? `${styles.active}` : ``} `}
                                        onClick={() => handleTabFunction(1)}
                                    >
                                        Advanced Data Modeling</button>
                                </div>
                                <div className={`${styles.btnwrap}`}>
                                    <button
                                        className={`${styles.btnTab} ${tab === 2 ? `${styles.active}` : ``} `}
                                        onClick={() => handleTabFunction(2)}
                                    >
                                        Performance Optimization</button>
                                </div>
                                <div className={`${styles.btnwrap}`}>
                                    <button
                                        className={`${styles.btnTab} ${tab === 3 ? `${styles.active}` : ``} `}
                                        onClick={() => handleTabFunction(3)}
                                    >
                                        Enhanced Data Connectivity</button>
                                </div>
                                <div className={`${styles.btnwrap}`}>
                                    <button
                                        className={`${styles.btnTab} ${tab === 4 ? `${styles.active}` : ``} `}
                                        onClick={() => handleTabFunction(4)}
                                    >
                                        Enterprise-Level BI</button>
                                </div>
                                <div className={`${styles.btnwrap}`}>
                                    <button
                                        className={`${styles.btnTab} ${tab === 5 ? `${styles.active}` : ``} `}
                                        onClick={() => handleTabFunction(5)}
                                    >
                                        Custom Visuals and Reporting</button>
                                </div>
                                <div className={`${styles.btnwrap}`}>
                                    <button
                                        className={`${styles.btnTab} ${tab === 6 ? `${styles.active}` : ``} `}
                                        onClick={() => handleTabFunction(6)}
                                    >
                                        AI and Machine Learning Integration</button>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>

        <div className={`${styles.tabsContent}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className={`${styles.leftContent}`}>
                  {tab === 1 && <AdvancedDataModeling />}
                  {tab === 2 && <PerformanceOptimization />}
                  {tab === 3 && <EnhancedDataConnectivity />}
                  {tab === 4 && <EnterpriseLevelBI />}
                  {tab === 5 && <CustomVisualsReporting />}
                  {tab === 6 && <AIMachineLearningIntegration />}
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className={`${styles.rightContent}`}>
                  <div className={`${styles.iconTxtRow}`}>
                    <div className={`${styles.icon}`}>
                      <ExportedImage
                        src="/img/advancedAnalytics/svg/powerBI.svg"
                        alt="power BI"
                        height={48}
                        width={48}
                      />
                    </div>
                    <div className={`${styles.text}`}>
                      <h6>Power BI</h6>
                      <p>
                        Transform raw data into rich, interactive dashboards and
                        reports that provide deep insights into your business
                        performance. Our Power BI solutions are designed to be
                        user-friendly, enabling everyone in your organization to
                        explore data and make data-driven decisions.
                      </p>
                    </div>
                  </div>

                  <div className={`${styles.iconTxtRow}`}>
                    <div className={`${styles.icon}`}>
                      <ExportedImage
                        src="/img/advancedAnalytics/svg/powerApp.svg"
                        alt="power Apps"
                        height={48}
                        width={48}
                      />
                    </div>
                    <div className={`${styles.text}`}>
                      <h6>Power Apps</h6>
                      <p>
                        Develop custom applications tailored to your unique
                        business needs without extensive coding. We help you
                        create powerful apps that streamline operations, improve
                        productivity, and address specific challenges within
                        your organization.
                      </p>
                    </div>
                  </div>

                  <div className={`${styles.iconTxtRow}`}>
                    <div className={`${styles.icon}`}>
                      <ExportedImage
                        src="/img/advancedAnalytics/svg/powerAutomate.svg"
                        alt="power Automate"
                        height={48}
                        width={48}
                      />
                    </div>
                    <div className={`${styles.text}`}>
                      <h6>Power Automate</h6>
                      <p>
                        Automate repetitive tasks and workflows, freeing up your
                        team to focus on more strategic initiatives. Our
                        expertise in Power Automate ensures that your processes
                        are efficient, consistent, and scalable.
                      </p>
                    </div>
                  </div>

                  <div className={`${styles.iconTxtRow}`}>
                    <div className={`${styles.icon}`}>
                      <ExportedImage
                        src="/img/advancedAnalytics/svg/powerVirtual.svg"
                        alt="Power Virtual Agents"
                        height={48}
                        width={48}
                      />
                    </div>
                    <div className={`${styles.text}`}>
                      <h6>Power Virtual Agents</h6>
                      <p>
                        Build intelligent chatbots that enhance customer
                        engagement and support. Our solutions help you deploy
                        virtual agents that can handle routine inquiries,
                        provide personalized assistance, and integrate
                        seamlessly with your data.
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
