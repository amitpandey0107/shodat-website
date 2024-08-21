import React from "react";
import styles from './platform.module.css';
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Stack, Button } from "react-bootstrap";

export default function Offers() {

    return (
        <div className={`${styles.offers}`}>
            <div className={`${styles.offerLeft}`}>
                <div className={`${styles.offerInfo}`}>
                    <h2>Shodat X Series</h2>
                    <h4>Unlocking AI-Powered Insights</h4>
                    <p>Shodat X is being engineered to deliver transparent, actionable insights across diverse industries.</p>
                    <p>By integrating advanced AI algorithms with domain-specific knowledge, Shodat X will offer a comprehensive suite of tools designed to optimize operations, enhance decision-making and improve overall performance.</p>
                    <p>Shodat X provides a comprehensive suite of tools designed to optimize operations, enhance decision-making, and improve overall performance.</p>
                </div>
            </div>
            <div className={`${styles.offerRight}`}>
                <div className={`${styles.offerContent}`}>
                    {/* <h2>Offers</h2> */}

                    <div className={`${styles.offerSliderWrap}`} id="offerSlider">
                        <Carousel indicators={true}>
                            <Carousel.Item interval={700000}>
                                <div className={`${styles.offerSliderContent}`}>
                                    <div className={`${styles.left}`}>
                                        <h2>Shodat XDI </h2>
                                        <h4>eXplainable Defect Intelligence</h4>
                                        <div className={`${styles.info}`}>
                                            <div className={`${styles.textRow}`}>
                                                <h6>Defect Detection and Analysis</h6>
                                                <p>Utilizes sophisticated AI models to identify and analyze defects with high accuracy.</p>
                                            </div>

                                            <div className={`${styles.textRow}`}>
                                                <h6>Explainable Intelligence</h6>
                                                <p>Offers detailed explanations of defect causes, enabling targeted corrective actions.</p>
                                            </div>

                                            <div className={`${styles.textRow}`}>
                                                <h6>Predictive Maintenance</h6>
                                                <p>Predicts potential defects before they occur, minimizing downtime and maintenance costs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.right}`}>
                                        <div className={`${styles.rightImg}`}>
                                            <Image
                                                src="/img/platform/shodatXDI.png"
                                                height={292}
                                                width={437}
                                                alt="offer image"
                                                className={`${styles.img1}`}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={700000}>
                                <div className={`${styles.offerSliderContent}`}>
                                    <div className={`${styles.left}`}>
                                        <h2>Shodat XRI </h2>
                                        <h4>eXplainable RegTech Intelligence</h4>
                                        <div className={`${styles.info}`}>
                                            <div className={`${styles.textRow}`}>
                                                <h6>Regulatory Compliance</h6>
                                                <p>Utilizes advanced Generative AI algorithms to analyze complex regulatory frameworks which automates compliance monitoring and reporting, ensuring adherence to regulatory standards.</p>
                                            </div>

                                            <div className={`${styles.textRow}`}>
                                                <h6>Risk Assessment</h6>
                                                <p>Provides transparent risk assessments, highlighting potential compliance issues and recommending mitigation strategies.</p>
                                            </div>

                                            <div className={`${styles.textRow}`}>
                                                <h6>Audit Trail</h6>
                                                <p>Maintains a comprehensive audit trail for all compliance-related activities, enhancing accountability and transparency.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.right}`}>
                                        <div className={`${styles.rightImg}`}>
                                            <Image
                                                src="/img/platform/shodatXRI.png"
                                                height={292}
                                                width={437}
                                                alt="offer image"
                                                className={`${styles.img1}`}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}