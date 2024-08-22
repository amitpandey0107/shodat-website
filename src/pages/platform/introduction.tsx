import React, { useState } from "react";
import styles from './platform.module.css';
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Introduction() {
    const [slide, setSlider] = useState(1);
    const changeSlide = (slideNumber: any) => {
        setSlider(slideNumber)
    }
    return (
        <div className={`${styles.introductionV2} platformIntroduction`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={`${styles.sectionContent}`}>
                            <h1>Introducing Shodat eOps™</h1>
                            <h3>Achieve operational brilliance with precision-engineered quality management.</h3>
                            <p>Shodat eOps is an advanced enterprise platform meticulously designed to enhance operational efficiency and product quality through cutting-edge AI and machine learning technologies.</p>
                            <p>Shodat eOps seamlessly integrates data-driven insights and automation to optimize processes, mitigate risks, and ensure regulatory compliance.</p>
                            <div className={`${styles.btnWrap}`}>
                                <button className="btn-black">
                                    <span>Get Early Access</span>
                                    <Image
                                        src="/img/arrowRight.svg"
                                        alt="arrow right"
                                        height={20}
                                        width={20}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={`${styles.sectionImage}`}>
                            <div className={`p_into_carousel ${styles.p_into_carousel}`}>
                                <Carousel indicators={false} controls={false} pause={'hover'}>
                                    <Carousel.Item interval={4000}>
                                        <div className={`${styles.imageWrapper}`}>
                                            <Image
                                                src="/img/platform/intro_1/intro_1.png"
                                                alt="introduction"
                                                height={561}
                                                width={706}
                                            />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item interval={4000}>
                                        <div className={`${styles.imageWrapper}`}>
                                            <Image
                                                src="/img/platform/intro_1/intro_2.png"
                                                alt="introduction"
                                                height={561}
                                                width={706}
                                            />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item interval={4000}>
                                        <div className={`${styles.imageWrapper}`}>
                                            <Image
                                                src="/img/platform/intro_1/intro_3.png"
                                                alt="introduction"
                                                height={561}
                                                width={706}
                                            />
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.thumbnails}`}>
                {/* <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className={`${styles.sectionImageBox}`}>
                                <div className={`${styles.imgThumbnail}`}>
                                    <Image
                                        src="/img/platform/intro_1/introduction_thumbnail_1.png"
                                        alt="introduction 1"
                                        height={239}
                                        width={300}
                                    />
                                </div>
                                <div className={`${styles.imgThumbnail}`}>
                                    <Image
                                        src="/img/platform/intro_1/introduction_thumbnail_2.png"
                                        alt="introduction 2"
                                        height={239}
                                        width={300}
                                    />
                                </div>
                                <div className={`${styles.imgThumbnail}`}>
                                    <Image
                                        src="/img/platform/intro_1/introduction_thumbnail_3.png"
                                        alt="introduction 3"
                                        height={239}
                                        width={300}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className={`${styles.sectionTextBox}`}>
                                <div className={`${styles.sectionImageBox}`}>
                                    {/* <div className={`${styles.imgThumbnail}`}>
                                        <Image
                                            src="/img/platform/intro_1/introduction_thumbnail_1.png"
                                            alt="introduction 1"
                                            height={239}
                                            width={300}
                                        />
                                    </div> */}

                                    <div className={`${styles.textBox} ${styles.purpleBox}`}>
                                        <p>By leveraging the power of AI, the platform delivers real-time analytics and alerts that facilitate predictive maintenance and comprehensive quality control mechanisms, substantially reducing the Cost of Poor Quality (COPQ) and boosting overall productivity.</p>
                                    </div>
                                </div>

                                <div className={`${styles.sectionImageBox}`}>
                                    {/* <div className={`${styles.imgThumbnail}`}>
                                        <Image
                                            src="/img/platform/intro_1/introduction_thumbnail_2.png"
                                            alt="introduction 2"
                                            height={239}
                                            width={300}
                                        />
                                    </div> */}

                                    <div className={`${styles.textBox} ${styles.skyBlueBox}`}>
                                        <p>The platform adheres to industry standards, including OSHA, ANSI, CCOHS, and ISO 9001, providing a robust quality management framework to meet stringent regulatory requirements. Its capabilities in predictive analytics and real-time monitoring ensure proactive issue resolution and continuous process optimization. </p>
                                    </div>
                                </div>

                                <div className={`${styles.sectionImageBox}`}>
                                    {/* <div className={`${styles.imgThumbnail}`}>
                                        <Image
                                            src="/img/platform/intro_1/introduction_thumbnail_3.png"
                                            alt="introduction 3"
                                            height={239}
                                            width={300}
                                        />
                                    </div> */}

                                    <div className={`${styles.textBox} ${styles.blackBox}`}>
                                        <p>With Shodat eOps, organizations can achieve significant reductions in defect rates, operational costs, and customer complaints, while simultaneously enhancing employee engagement and market reputation.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}