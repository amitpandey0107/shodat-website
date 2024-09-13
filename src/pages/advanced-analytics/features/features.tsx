import React, { useState, useEffect } from "react";
import styles from './features.module.css';
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Stack, Button } from "react-bootstrap";

export default function Features() {

    const [items, setItems] = useState(1);
    const sliderItem = (i: any) => {
        setItems(i)
    }

    return (
        <div className={`${styles.features}`}>
            <div className="container-fluid">


                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <h1 className={`${styles.title}`}>Our Advanced <br/>Analytics capabilities</h1>
                        <div className={`${styles.subTitle}`}>Lorem Ipsum is simply dummy text of the printing and </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <div className={`${styles.featSliderContainer}`} id="platformFeatSlider">
                            <Carousel controls={false} indicators={false} interval={null}>
                                <Carousel.Item interval={10500}>
                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={4}
                                    >
                                        <Card className={`${styles.sliderItem}`}>
                                            <div
                                                onClick={() => sliderItem(1)}
                                                className={`${items === 1 ? `${styles.activeBox}` : ``} ${styles.itemBox}`}
                                            >
                                                <Image
                                                    src={`${items === 1 ? '/img/platform/assetCreation_white.svg' : '/img/platform/assetCreation.svg'}`}
                                                    alt="shodat-logo"
                                                    height={64}
                                                    width={64}
                                                    className={`${styles.logoImage}`}
                                                />
                                                <h6>Machine Learning (ML)</h6>
                                            </div>
                                        </Card>
                                        <Card className={`${styles.sliderItem}`}>
                                            <div
                                                onClick={() => sliderItem(2)}
                                                className={`${items == 2 ? `${styles.activeBox}` : ``} ${styles.itemBox}`}
                                            >
                                                <Image
                                                    src={`${items === 2 ? '/img/platform/industryTested_white.svg' : '/img/platform/industryTested.svg'}`}
                                                    alt="shodat-logo"
                                                    height={64}
                                                    width={64}
                                                    className={`${styles.logoImage}`}
                                                />
                                                <h6>Data Mining</h6>
                                            </div>
                                        </Card>
                                        <Card className={`${styles.sliderItem}`}>
                                            <div
                                                onClick={() => sliderItem(3)}
                                                className={`${items === 3 ? `${styles.activeBox}` : ``} ${styles.itemBox}`}
                                            >
                                                <Image
                                                    src={`${items === 3 ? '/img/platform/proactive_active_white.svg' : '/img/platform/proactive_active.svg'}`}
                                                    alt="shodat-logo"
                                                    height={64}
                                                    width={64}
                                                    className={`${styles.logoImage}`}
                                                />
                                                <h6>Text Analytics</h6>
                                            </div>
                                        </Card>
                                        <Card className={`${styles.sliderItem}`}>
                                            <div
                                                onClick={() => sliderItem(4)}
                                                className={`${items === 4 ? `${styles.activeBox}` : ``} ${styles.itemBox}`}
                                            >
                                                <Image
                                                    src={`${items === 4 ? '/img/platform/comprehensiveReporting_white.svg' : '/img/platform/comprehensiveReporting.svg'}`}
                                                    alt="shodat-logo"
                                                    height={64}
                                                    width={64}
                                                    className={`${styles.logoImage}`}
                                                />
                                                <h6>Big Data Analytics</h6>
                                            </div>
                                        </Card>
                                    </Stack>
                                </Carousel.Item>

                                <Carousel.Item interval={10500}>
                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={4}
                                    >
                                        <Card className={`${styles.sliderItem}`}>
                                            <div
                                                onClick={() => sliderItem(1)}
                                                className={`${items === 1 ? `${styles.activeBox}` : ``} ${styles.itemBox}`}
                                            >
                                                <Image
                                                    src={`${items === 1 ? '/img/platform/assetCreation_white.svg' : '/img/platform/assetCreation.svg'}`}
                                                    alt="shodat-logo"
                                                    height={64}
                                                    width={64}
                                                    className={`${styles.logoImage}`}
                                                />
                                                <h6>Asset Creation and Tracking</h6>
                                            </div>
                                        </Card>
                                        <Card className={`${styles.sliderItem}`}>
                                            <div
                                                onClick={() => sliderItem(2)}
                                                className={`${items == 2 ? `${styles.activeBox}` : ``} ${styles.itemBox}`}
                                            >
                                                <Image
                                                    src={`${items === 2 ? '/img/platform/industryTested_white.svg' : '/img/platform/industryTested.svg'}`}
                                                    alt="shodat-logo"
                                                    height={64}
                                                    width={64}
                                                    className={`${styles.logoImage}`}
                                                />
                                                <h6>Industry-Tested ML Models</h6>
                                            </div>
                                        </Card>
                                        <Card className={`${styles.sliderItem}`}>
                                            <div
                                                onClick={() => sliderItem(3)}
                                                className={`${items === 3 ? `${styles.activeBox}` : ``} ${styles.itemBox}`}
                                            >
                                                <Image
                                                    src={`${items === 3 ? '/img/platform/proactive_active_white.svg' : '/img/platform/proactive_active.svg'}`}
                                                    alt="shodat-logo"
                                                    height={64}
                                                    width={64}
                                                    className={`${styles.logoImage}`}
                                                />
                                                <h6>Proactive Alerting</h6>
                                            </div>
                                        </Card>
                                        <Card className={`${styles.sliderItem}`}>
                                            <div
                                                onClick={() => sliderItem(4)}
                                                className={`${items === 4 ? `${styles.activeBox}` : ``} ${styles.itemBox}`}
                                            >
                                                <Image
                                                    src={`${items === 4 ? '/img/platform/comprehensiveReporting_white.svg' : '/img/platform/comprehensiveReporting.svg'}`}
                                                    alt="shodat-logo"
                                                    height={64}
                                                    width={64}
                                                    className={`${styles.logoImage}`}
                                                />
                                                <h6>Comprehensive Reporting and Dashboards</h6>
                                            </div>
                                        </Card>
                                    </Stack>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-12">
                        {items === 1 &&
                            <div className={`${styles.contentFeature}`}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className={`${styles.picture}`}>
                                            <Image
                                                src="/img/advancedAnalytics/features/machineLearning.png"
                                                alt="machine Learning"
                                                height={364}
                                                width={293}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                        <div className={`${styles.info}`}>
                                            <div className={`${styles.textRow}`}>
                                                <p>At Shodat, we leverage advanced ML algorithms to enable our systems to learn from data, making predictions and decisions without explicit programming. </p>
                                            </div>
                                            <div className={`${styles.textRow}`}>
                                                <p>Our applications of ML span across predictive analytics, clustering, classification, and anomaly detection, driving insights and operational efficiencies.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {items === 2 &&
                            <div className={`${styles.contentFeature}`}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className={`${styles.picture}`}>
                                            <Image
                                                src="/img/advancedAnalytics/features/dataMining.png"
                                                alt="data Mining"
                                                height={364}
                                                width={400}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className={`${styles.info}`}>
                                            <div className={`${styles.textRow}`}>
                                                <p>We excel in discovering patterns and relationships within large datasets through sophisticated data mining techniques.</p>
                                            </div>
                                            <div className={`${styles.textRow}`}>
                                                <p>Utilizing methods from statistics, machine learning, and database systems, our capabilities include association rule mining, cluster analysis, and sequential pattern mining, which help uncover valuable business insights.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                        {items === 3 &&
                            <div className={`${styles.contentFeature}`}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className={`${styles.picture}`}>
                                            <Image
                                                src="/img/advancedAnalytics/features/textAnalytics.png"
                                                alt="text Analytics"
                                                height={364}
                                                width={400}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className={`${styles.info}`}>
                                            <div className={`${styles.textRow}`}>
                                                <p>Shodat&apos;s text analytics solutions process unstructured data from various sources such as social media, customer reviews, and emails to derive actionable insights. </p>
                                            </div>
                                            <div className={`${styles.textRow}`}>
                                                <p>Our expertise includes sentiment analysis, topic modeling, and natural language processing (NLP), enabling us to understand and respond to customer needs effectively.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {items === 4 &&
                            <div className={`${styles.contentFeature}`}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className={`${styles.picture}`}>
                                            <Image
                                                src="/img/advancedAnalytics/features/bigData.png"
                                                alt="big Data"
                                                height={364}
                                                width={400}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className={`${styles.info}`}>
                                            <div className={`${styles.textRow}`}>
                                                <p>Handling massive datasets that traditional BI tools cannot manage efficiently is a core strength at Shodat. We employ cutting-edge technologies like Hadoop and Spark for the storage, querying, and analysis of big data, ensuring comprehensive and timely data insights that support strategic decision-making.</p>
                                            </div>
                                            <div className={`${styles.textRow}`}>
                                                <p>Our advanced analytics capabilities empower businesses to harness the power of data, driving innovation and excellence in their operations.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}