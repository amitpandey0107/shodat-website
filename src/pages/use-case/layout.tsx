import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./use-case.module.css";
import UseCase from "../data-engineering/use-case";

export default function Layout(props: any) {
    return (
        <div className={`${styles.layout}`}>

            <div className={`${styles.layoutTop}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className={`${styles.caseBox}`}>
                                <div className={`${styles.logo}`}>
                                    <Image
                                        src="/img/useCases/sgAnalytics.png"
                                        alt="sgAnalytics"
                                        height={179}
                                        width={416}
                                    />
                                </div>
                                <div className={`${styles.title}`}>
                                    <h2>Real-Time Data Processing Financial Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.layoutContent}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className={`${styles.layoutContainer}`}>
                                <h4>Overview</h4>
                                <div className={`${styles.textImage} ${styles.sectionMargin}`}>
                                    <div className={`${styles.text}`}>
                                        <p>A leading retail and e-commerce company sought to enhance its data management capabilities to improve decision-making, optimize operations, and boost profitability. The company faced several challenges, including fragmented data sources, inefficient data processing, and inadequate insights into customer behavior and sales trends.</p>
                                        <p>With Shodat Inc, the company  uses advanced ETL (Extract, Transform, Load) processes to handle massive amounts of data The company extracted data from multiple sources including point-of-sale systems, customer relationship management (CRM) software, social media platforms, and product review sites.</p>
                                    </div>
                                    <div className={`${styles.image}`}>
                                        <Image
                                            src="/img/useCases/real-time-data-img.png"
                                            alt="sgAnalytics"
                                            height={332}
                                            width={420}
                                        />
                                    </div>
                                </div>

                                <div className={`${styles.textBlockFull} ${styles.sectionMargin}`}>
                                    <p>The ETL processes managed over 1TB of data daily, ensuring that all relevant information was captured and ready for transformation.The extracted data underwent cleansing, normalization, and enrichment to ensure consistency and accuracy, maintaing data availability at 99.9%.</p>
                                </div>

                                <div className={`${styles.infoBoxWrap} ${styles.sectionMargin}`}>
                                    <div className={`${styles.block}`}>
                                        <div className={`${styles.highlight}`}>1TB</div>
                                        <div className={`${styles.info}`}>The ETL processes managed over 1TB of data daily</div>
                                    </div>
                                    <div className={`${styles.block}`}>
                                        <div className={`${styles.highlight}`}>40%</div>
                                        <div className={`${styles.info}`}>Optimized to handle real-time data, reducing latency</div>
                                    </div>
                                    <div className={`${styles.block}`}>
                                        <div className={`${styles.highlight}`}>30%</div>
                                        <div className={`${styles.info}`}>Inventory tracking and forecasting, reducing stockouts</div>
                                    </div>
                                </div>

                                <div className={`${styles.textBlockFull} ${styles.sectionMargin}`}>
                                    <h4>Speed</h4>
                                    <p>The transformation processes were optimized to handle real-time data, reducing latency by 40%.</p>
                                </div>

                                <div className={`${styles.textBlockFull}`}>
                                    <h4>Impact</h4>
                                    <p>Improved inventory management, The centralized data warehouse enabled more accurate inventory tracking and forecasting, reducing stockouts by 30% and overstock situations by 25%.</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.getUseCaseSlider}`}>
                <UseCase />
            </div>

        </div>
    )
}