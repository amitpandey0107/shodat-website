import React from "react";
import styles from './platform.module.css';
import Link from "next/link";
import Image from "next/image";

export default function Introduction() {

    return (
        <div className={`${styles.introduction}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className={`${styles.introductionPicture}`}></div>
                    </div>
                    <div className="col-sm-6">
                        <div className={`${styles.introductionContent}`}>
                            <h1>Introducing Shodat eOps™</h1>
                            <p><strong>Shodat eOps</strong> is an advanced enterprise platform engineered to elevate operational efficiency and product quality through sophisticated AI and machine learning technologies. Designed to tackle the multifaceted challenges of modern quality management, Shodat eOps seamlessly integrates data-driven insights and automation to streamline processes, mitigate risks, and ensure regulatory compliance. </p>
                            <ul>
                                <li>
                                    <Image
                                        src="/img/platform/intro1.svg"
                                        alt="shodat-logo"
                                        height={60}
                                        width={60}
                                        className={`${styles.logoImage}`}
                                    />
                                    <span>By harnessing the power of AI, Shodat eOps provides real-time analytics and alerts which help in  predictive maintenance and comprehensive quality control mechanisms, significantly reducing the Cost of Poor Quality (COPQ) and enhancing overall productivity. </span>
                                </li>
                                <li>
                                    <Image
                                        src="/img/platform/intro2.svg"
                                        alt="shodat-logo"
                                        height={60}
                                        width={60}
                                        className={`${styles.logoImage}`}
                                    />
                                    <span>Leveraging industry standards such as safety regulations like OSHA, ANSI & CCOHS,ISO 9001, Shodat eOps facilitates a robust quality management framework to meet regulatory requirements. The platform&apos;s capabilities in predictive analytics and real-time monitoring ensure proactive issue resolution and continuous process optimization.</span>
                                </li>
                                <li>
                                    <Image
                                        src="/img/platform/intro3.svg"
                                        alt="shodat-logo"
                                        height={60}
                                        width={60}
                                        className={`${styles.logoImage}`}
                                    />
                                    <span>With Shodat eOps, organizations can achieve substantial reductions in defect rates, operational costs, and customer complaints, while simultaneously boosting employee engagement and market reputation.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}