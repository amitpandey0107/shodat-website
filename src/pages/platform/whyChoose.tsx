import React from "react";
import styles from './platform.module.css';
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Stack, Button } from "react-bootstrap";

export default function WhyChoose() {

    return (
        <div className={`${styles.whyChoose}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className={`${styles.title}`}>Why Choose Shodat eOps™ Platform?</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <ul className={`${styles.chooseList}`}>
                            <li>
                                <Image
                                    src="/img/platform/target.svg"
                                    height={16}
                                    width={16}
                                    alt="target"
                                />
                                <div className={`${styles.text}`}>
                                    <h6>Drive Operational Excellence</h6>
                                    <p>Optimize processes, reduce costs, and improve efficiency with AI-driven intelligence.</p>
                                </div>
                            </li>
                            <li>
                                <Image
                                    src="/img/platform/target.svg"
                                    height={16}
                                    width={16}
                                    alt="target"
                                />
                                <div className={`${styles.text}`}>
                                    <h6>Make Informed Decisions</h6>
                                    <p>Gain insights into the underlying causes of events to make smarter, more informed decisions.</p>
                                </div>
                            </li>
                            <li>
                                <Image
                                    src="/img/platform/target.svg"
                                    height={16}
                                    width={16}
                                    alt="target"
                                />
                                <div className={`${styles.text}`}>
                                    <h6>Future-Proof Your Business</h6>
                                    <p>Stay ahead of the competition by leveraging the latest advancements in AI technology.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <div className={`${styles.iconRow}`}>
                            <div className={`${styles.infoWrap}`}>
                                <div className={`${styles.value}`}>
                                    <Image
                                        src="/img/platform/colorBGIcon.svg"
                                        height={95}
                                        width={106}
                                        alt="colorBGIcon"
                                    />
                                    <span>40%</span>
                                </div>
                                <p>Reduce cost to adopt PDM & BI strategies </p>
                            </div>
                            <div className={`${styles.infoWrap}`}>
                                <div className={`${styles.value}`}>
                                    <Image
                                        src="/img/platform/colorBGIcon.svg"
                                        height={95}
                                        width={106}
                                        alt="colorBGIcon"
                                    />
                                    <span>35%</span>
                                </div>
                                <p>Predict & reduce operational failures </p>
                            </div>
                        </div>
                        <div className={`${styles.iconRow} ${styles.mb0}`}>
                            <div className={`${styles.infoWrap}`}>
                                <div className={`${styles.value}`}>
                                    <Image
                                        src="/img/platform/colorBGIcon.svg"
                                        height={95}
                                        width={106}
                                        alt="colorBGIcon"
                                    />
                                    <span>66%</span>
                                </div>
                                <p>Reduce time for auditing & compliance </p>
                            </div>
                            <div className={`${styles.infoWrap}`}>
                                <div className={`${styles.value}`}>
                                    <Image
                                        src="/img/platform/colorBGIcon.svg"
                                        height={95}
                                        width={106}
                                        alt="colorBGIcon"
                                    />
                                    <span>80%</span>
                                </div>
                                <p>Predict time for complex RCA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}