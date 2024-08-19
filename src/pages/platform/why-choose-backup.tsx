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
                    <div className="col-sm-12 col-md-12 col-lg-4">
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
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        <div className={`${styles.iconInfoWrap}`}>
                            <div className="row">

                                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                                    <div className={`${styles.iconContent}`}>
                                        <div className={`${styles.iconCol}`}>
                                            <Image
                                                src="/img/platform/choose_icon_1.svg"
                                                alt="choose_icon"
                                                height={64}
                                                width={64}
                                            />
                                        </div>
                                        <div className={`${styles.txt}`}>
                                            Reduce cost to adopt PDM & BI strategies by
                                        </div>
                                        <div className={`${styles.percentage}`}>
                                            40%
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                                    <div className={`${styles.iconContent}`}>
                                        <div className={`${styles.iconCol}`}>
                                            <Image
                                                src="/img/platform/choose_icon_2.svg"
                                                alt="choose_icon"
                                                height={64}
                                                width={64}
                                            />
                                        </div>
                                        <div className={`${styles.txt}`}>
                                            Predict & reduce operational failures by
                                        </div>
                                        <div className={`${styles.percentage}`}>
                                            35%
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                                    <div className={`${styles.iconContent}`}>
                                        <div className={`${styles.iconCol}`}>
                                            <Image
                                                src="/img/platform/choose_icon_3.svg"
                                                alt="choose_icon"
                                                height={64}
                                                width={64}
                                            />
                                        </div>
                                        <div className={`${styles.txt}`}>
                                            Reduce time for auditing & compliance by
                                        </div>
                                        <div className={`${styles.percentage}`}>
                                            65%
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                                    <div className={`${styles.iconContent} ${styles.brzero}`}>
                                        <div className={`${styles.iconCol}`}>
                                            <Image
                                                src="/img/platform/choose_icon_4.svg"
                                                alt="choose_icon"
                                                height={64}
                                                width={64}
                                            />
                                        </div>
                                        <div className={`${styles.txt}`}>
                                            Predict time for complex RCA by
                                        </div>
                                        <div className={`${styles.percentage}`}>
                                            80%
                                        </div>
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