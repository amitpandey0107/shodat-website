import React, { useState, useEffect } from 'react';
import styles from "./data-engineering.module.css";
import Image from 'next/image';
export default function HandlineLargeData(props: any) {
    return (
        <div className={`${styles.handlineLargeData}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <div className={`${styles.titleBox}`}>
                            <h2>Handling Large Data Volumes</h2>
                        </div>
                        <p>Our expertise in managing large data volumes ensures that your business can scale efficiently:</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className={`${styles.whiteBox}`}>
                            <div className={`${styles.logo}`}>
                                <Image
                                    src="/img/dataEngineering/ScalableStorageSolutions.svg"
                                    alt='Scalable Storage Solutions'
                                    height={64}
                                    width={64}
                                />
                            </div>
                            <div className={`${styles.contentArea}`}>
                                <h4>Scalable Storage Solutions:</h4>
                                <p>Implement scalable storage systems like data lakes and cloud storage to handle vast amounts of structured and unstructured data.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className={`${styles.whiteBox}`}>
                            <div className={`${styles.logo}`}>
                                <Image
                                    src="/img/dataEngineering/RealTimeAnalytics.svg"
                                    alt='Real-Time Analytics'
                                    height={64}
                                    width={64}
                                />
                            </div>
                            <div className={`${styles.contentArea}`}>
                                <h4>Real-Time Analytics:</h4>
                                <p>Enable real-time data processing and analytics to provide immediate insights and support rapid decision-making.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className={`${styles.whiteBox}`}>
                            <div className={`${styles.logo}`}>
                                <Image
                                    src="/img/dataEngineering/EfficientDataProcessing.svg"
                                    alt='Efficient Data Processing'
                                    height={64}
                                    width={64}
                                />
                            </div>
                            <div className={`${styles.contentArea}`}>
                                <h4>Efficient Data Processing:</h4>
                                <p>Leverage distributed computing frameworks such as Apache Spark and Hadoop to process large datasets quickly and efficiently.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}