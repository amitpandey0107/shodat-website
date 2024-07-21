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
                    <p>Shodat X engineered to deliver transparent, actionable insights across diverse industries. By integrating advanced AI algorithms with domain-specific knowledge, Shodat X provides a comprehensive suite of tools designed to optimize operations, enhance decision-making, and improve overall performance.</p>
                </div>
            </div>
            <div className={`${styles.offerRight}`}>
                <div className={`${styles.offerContent}`}>
                    <h2>Offers</h2>

                    <div className={`${styles.offerSliderWrap}`} id="offerSlider">
                        <Carousel indicators={false}>
                            <Carousel.Item interval={7000}>
                                <div className={`${styles.offerSliderContent}`}>
                                    <p>Shodat XDI <span>(Explainable Defect Intelligence)</span></p>
                                    <div className={`${styles.offerContentWrap}`}>
                                        <div className={`${styles.imageWrap}`}>
                                            <Image
                                                src="/img/platform/offer_image.png"
                                                height={292}
                                                width={437}
                                                alt="offer image"
                                            />
                                        </div>
                                        <div className={`${styles.textWrap}`}>
                                            <div className={`${styles.textRow1}`}>
                                                <h6>Defect Detection and Analysis</h6>
                                                <p>Utilizes sophisticated AI models to identify and analyze defects with high accuracy.</p>
                                            </div>
                                            <div className={`${styles.textRow1}`}>
                                                <h6>Explainable Intelligence</h6>
                                                <p>Offers detailed explanations of defect causes, enabling targeted corrective actions.</p>
                                            </div>
                                            <div className={`${styles.textRow1}`}>
                                                <h6>Predictive Maintenance</h6>
                                                <p>Predicts potential defects before they occur, minimizing downtime and maintenance costs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={7000}>
                                <div className={`${styles.offerSliderContent}`}>
                                    <p>Shodat XDI <span>(Explainable Defect Intelligence)</span></p>
                                    <div className={`${styles.offerContentWrap}`}>
                                        <div className={`${styles.imageWrap}`}>
                                            <Image
                                                src="/img/platform/offer_image.png"
                                                height={292}
                                                width={437}
                                                alt="offer image"
                                            />
                                        </div>
                                        <div className={`${styles.textWrap}`}>
                                            <div className={`${styles.textRow1}`}>
                                                <h6>Defect Detection and Analysis</h6>
                                                <p>Utilizes sophisticated AI models to identify and analyze defects with high accuracy.</p>
                                            </div>
                                            <div className={`${styles.textRow1}`}>
                                                <h6>Explainable Intelligence</h6>
                                                <p>Offers detailed explanations of defect causes, enabling targeted corrective actions.</p>
                                            </div>
                                            <div className={`${styles.textRow1}`}>
                                                <h6>Predictive Maintenance</h6>
                                                <p>Predicts potential defects before they occur, minimizing downtime and maintenance costs.</p>
                                            </div>
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