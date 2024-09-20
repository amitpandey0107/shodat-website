import React from "react";
import styles from './platform.module.css';
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Stack, Button } from "react-bootstrap";

export default function WhyChoose() {

    return (
        <div className={`${styles.whyChooseV2} whyChooseV2`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 pr-0">
                        <div className={`${styles.leftContent}`}>
                            <h2 className={`${styles.title}`}>Why Choose <br />Shodat eOps™ Platform?</h2>
                            <div className={`${styles.text}`}>
                                <h6>Drive Operational Excellence</h6>
                                <p>Optimize processes, reduce costs and improve efficiency with AI-driven intelligence.</p>
                            </div>
                            <div className={`${styles.text}`}>
                                <h6>Make Informed Decisions</h6>
                                <p>Gain insights into the underlying causes of events to make smarter, more informed decisions.</p>
                            </div>
                            <div className={`${styles.text}`}>
                                <h6>Future-Proof Your Business</h6>
                                <p>Stay ahead of the competition by leveraging the latest advancements in AI technology.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8 plr-10px">
                        <div className={`${styles.rightContent}`}>
                            <div className={`${styles.topSection}`}>
                                <div className={`${styles.colorBox} ${styles.colorBlue}`}>
                                    <div className={`${styles.iconWrap}`}>
                                        <Image
                                            src={`/img/whychoose/image_1.png`}
                                            alt="Reduce cost to adopt PDM & BI strategies by"
                                            height={166}
                                            width={146}
                                        />
                                    </div>
                                    <div className={`${styles.textWrap}`}>
                                        <p>Reduce cost to adopt <br/>PDM & BI strategies by 30%</p>
                                        <div className={`${styles.percentage}`}>40%</div>
                                    </div>
                                </div>
                                <div className={`${styles.colorBox} ${styles.colorPurple}`}>
                                    <div className={`${styles.iconWrap}`}>
                                        <Image
                                            src={`/img/whychoose/image_2.png`}
                                            alt="Predict & reduce operational failures by"
                                            height={166}
                                            width={146}
                                        />
                                    </div>
                                    <div className={`${styles.textWrap}`}>
                                        <p>Predict & reduce <br />operational failures by 60%</p>
                                        <div className={`${styles.percentage}`}>35%</div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.bottomSection}`}>
                                <div className={`${styles.colorBox} ${styles.colorPurple}`}>
                                    <div className={`${styles.iconWrap}`}>
                                        <Image
                                            src={`/img/whychoose/image_3.png`}
                                            alt="Reduce time for auditing & compliance by"
                                            height={166}
                                            width={146}
                                        />
                                    </div>
                                    <div className={`${styles.textWrap}`}>
                                        <p>Reduce time for auditing <br/>& compliance by 50% </p>
                                        <div className={`${styles.percentage}`}>66%</div>
                                    </div>
                                </div>
                                <div className={`${styles.colorBox} ${styles.colorBlue}`}>
                                    <div className={`${styles.iconWrap}`}>
                                        <Image
                                            src={`/img/whychoose/image_4.png`}
                                            alt="Predict time for complex RCA by"
                                            height={166}
                                            width={146}
                                        />
                                    </div>
                                    <div className={`${styles.textWrap}`}>
                                        <p>Reduce time for complex <br />RCA by 40%</p>
                                        <div className={`${styles.percentage}`}>80%</div>
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