import React from "react";
import styles from './platform.module.css';
import Link from "next/link";
import Image from "next/image";

export default function Questions() {

    return (
        <>
            <div className={`${styles.questions}`}>
                <div className={`${styles.questionsContent}`}>

                    <div className={`${styles.infoBox} ${styles.box1}`}>
                        <p>Are you facing challenges with maintaining product quality and struggling to minimize defect rates</p>
                        <div className={`${styles.queMark}`}>
                            <Image
                                src="/img/platform/que_mark.svg"
                                alt="que_mark"
                                height={20}
                                width={20}
                            />
                        </div>
                    </div>

                    <div className={`${styles.infoBox} ${styles.box2}`}>
                        <p>Is there a lack of visibility into your operations and processes due to data being dispersed across multiple systems or insufficient data inputs</p>
                        <div className={`${styles.queMark2}`}>
                            <Image
                                src="/img/platform/que_mark.svg"
                                alt="que_mark"
                                height={20}
                                width={20}
                            />
                        </div>
                    </div>

                    <div className={`${styles.infoBox} ${styles.box3}`}>
                        <p>Does your root cause analysis (RCA) and reporting process take an excessive amount of time to complete</p>
                        <div className={`${styles.queMark2}`}>
                            <Image
                                src="/img/platform/que_mark.svg"
                                alt="que_mark"
                                height={20}
                                width={20}
                            />
                        </div>
                    </div>

                    <div className={`${styles.infoBox} ${styles.box4}`}>
                        <p>Are you encountering difficulties with safety and compliance issues within your organization</p>
                        <div className={`${styles.queMark2}`}>
                            <Image
                                src="/img/platform/que_mark.svg"
                                alt="que_mark"
                                height={20}
                                width={20}
                            />
                        </div>
                    </div>

                    <div className={`${styles.infoBox} ${styles.box5}`}>
                        <p>Are you lacking predictive capabilities or experiencing friction in implementing AI/ML strategies</p>
                        <div className={`${styles.queMark2}`}>
                            <Image
                                src="/img/platform/que_mark.svg"
                                alt="que_mark"
                                height={20}
                                width={20}
                            />
                        </div>
                    </div>

                    <div className={`${styles.circle}`}>
                        <p>You&apos;re not alone in facing these complex operational challenges !</p>
                    </div>
                </div>
            </div>

            <div className={`${styles.points}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className={`${styles.pointsInfo}`}>
                                <Image
                                    src="/img/platform/target.svg"
                                    alt="shodat-logo"
                                    height={18}
                                    width={18}
                                    className={`${styles.logoImage}`}
                                />
                                <p>Average Cost of Poor Quality (COPQ) in Industry can range from 5% to 30% of sales revenue. - <span>(American Society for Quality (ASQ) and various Six Sigma studies.)</span></p>
                            </div>
                            <div className={`${styles.pointsInfo}`}>
                                <Image
                                    src="/img/platform/target.svg"
                                    alt="shodat-logo"
                                    height={18}
                                    width={18}
                                    className={`${styles.logoImage}`}
                                />
                                <p>Only 6% of companies report full visibility on their supply chain, while 69% of companies don&apos;t have total visibility. - <span>( Forbs )</span></p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className={`${styles.pointsInfo}`}>
                                <Image
                                    src="/img/platform/target.svg"
                                    alt="shodat-logo"
                                    height={18}
                                    width={18}
                                    className={`${styles.logoImage}`}
                                />
                                <p>69% of businesses lack critical visibility over supply chains</p>
                            </div>
                            <div className={`${styles.pointsInfo}`}>
                                <Image
                                    src="/img/platform/target.svg"
                                    alt="shodat-logo"
                                    height={18}
                                    width={18}
                                    className={`${styles.logoImage}`}
                                />
                                <p>The average estimate for regulatory compliance and economic effects of federal intervention is more than $1.9 trillion annually.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}