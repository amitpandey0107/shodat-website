import React from "react";
import styles from './platform.module.css';
import Link from "next/link";
import Image from "next/image";

export default function Questions() {

    return (
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
    )
}