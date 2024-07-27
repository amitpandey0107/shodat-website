import React from "react";
import styles from './platform.module.css';
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Stack, Button } from "react-bootstrap";

export default function CaseStudy() {

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
                            <Carousel indicators={false}>
                                
                                <Carousel.Item interval={700000}>
                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={4}
                                    >
                                        <Card className={`${styles.sliderItem}`}>
                                            <div className={`${styles.csItem}`}>
                                                <div className={`${styles.topItem}`}>
                                                    <h4>EV charging stations</h4>
                                                    <p>A prominent manufacturer of EV charging stations faced significant challenges in predicting battery life accurately. Inconsistent performance data, variations in usage patterns, and environmental factors made it difficult to provide reliable predictions.</p>
                                                </div>
                                                <div className={`${styles.imageItem}`}>
                                                    <Image
                                                        src="/img/platform/evCharging.png"
                                                        alt="evCharging"
                                                        height={290}
                                                        width={392}
                                                    />
                                                    <div className={`${styles.purpleText}`}>To address these issues, the manufacturer implemented Shodat eOps™, an advanced asset tracking and quality management platform, to enhance their battery life prediction capabilities.</div>
                                                </div>
                                            </div>
                                        </Card>
                                        <Card className={`${styles.sliderItem}`}>
                                            <div className={`${styles.csItem}`}>
                                                <div className={`${styles.topItem}`}>
                                                    <h4>Automotive manufacturer</h4>
                                                    <p>A leading automotive manufacturer faced challenges in predicting tire wear accurately, which impacted vehicle safety, maintenance schedules, and overall operational efficiency. </p>
                                                </div>
                                                <div className={`${styles.imageItem}`}>
                                                    <Image
                                                        src="/img/platform/automotive.png"
                                                        alt="automotive"
                                                        height={290}
                                                        width={392}
                                                    />
                                                    <div className={`${styles.purpleText}`}>By implementing Shodat eOps™, the manufacturer aimed to enhance their tire wear prediction capabilities. </div>
                                                </div>
                                            </div>
                                        </Card>
                                        <Card className={`${styles.sliderItem}`}>
                                            <div className={`${styles.csItem}`}>
                                                <div className={`${styles.topItem}`}>
                                                    <h4>Manufacturing</h4>
                                                    <p>A leader in the manufacturing industry needed an effective solution for detecting and addressing structural cracks in product components. Traditional inspection methods were labour-intensive, error-prone, and time-consuming.</p>
                                                </div>
                                                <div className={`${styles.imageItem}`}>
                                                    <Image
                                                        src="/img/platform/manufaturing.png"
                                                        alt="manufaturing"
                                                        height={290}
                                                        width={392}
                                                    />
                                                    <div className={`${styles.purpleText}`}>To enhance their crack detection capabilities, the company implemented the Shodat eOps™platform.</div>
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

        </div>
    )
}