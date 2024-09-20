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
                            <p>eOps™ Advanced Quality Management And Asset Tracking Platform, ensures that every asset, from raw materials to finished products, is meticulously monitored, minimizing errors and enhancing overall quality control. By leveraging AI-driven insights and automated tracking, businesses can proactively address potential issues, reduce waste and ensure compliance with industry standards.  The result is a streamlined process that not only boosts efficiency but also significantly reduces operational costs, ensuring a higher standard of quality and reliability in every product delivered.</p>
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
                                <Carousel
                                    indicators={false}
                                    controls={false}
                                    pause={'hover'}
                                >
                                    <Carousel.Item interval={2000}>
                                        <div className={`${styles.imageWrapper}`}>
                                            <Image
                                                src="/img/platform/intro/introduction-img1.png"
                                                alt="introduction"
                                                height={561}
                                                width={706}
                                            />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <div className={`${styles.imageWrapper}`}>
                                            <Image
                                                src="/img/platform/intro/introduction-img2.png"
                                                alt="introduction"
                                                height={561}
                                                width={706}
                                            />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <div className={`${styles.imageWrapper}`}>
                                            <Image
                                                src="/img/platform/intro/introduction-img3.png"
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

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className={`${styles.sectionTextBox}`}>
                                <div className={`${styles.sectionImageBox}`}>

                                    <div className={`${styles.textBox} ${styles.purpleBox}`}>
                                        <p>By leveraging the power of AI, the platform delivers real-time analytics and alerts that facilitate predictive maintenance and comprehensive quality control mechanisms, substantially reducing the Cost of Poor Quality (COPQ) and boosting overall productivity.</p>
                                    </div>
                                </div>

                                <div className={`${styles.sectionImageBox}`}>

                                    <div className={`${styles.textBox} ${styles.skyBlueBox}`}>
                                        <p>The platform adheres to industry standards, including OSHA, ANSI, CCOHS, and ISO 9001, providing a robust quality management framework to meet stringent regulatory requirements. Its capabilities in predictive analytics and real-time monitoring ensure proactive issue resolution and continuous process optimization. </p>
                                    </div>
                                </div>

                                <div className={`${styles.sectionImageBox}`}>

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