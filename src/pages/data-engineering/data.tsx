import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./data-engineering.module.css";
export default function Data(props: any) {
    return (
        <>
            <section className={`${styles.dataContainer}`}>
                <div className={`${styles.dataHeader} ${styles.headerGreen}`}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Handling Large Data Volumes</h2>
                                <p>Our expertise in managing large data volumes ensures that your business can scale efficiently:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.dataContent}`}>
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className={`${styles.dataBox}`}>
                                    <div className={`${styles.dataLeft}`}>
                                        <div className={`${styles.imageWrap}`}>
                                            <Image
                                                src="/img/dataEngineering/svg/ScalableStorageSolutions.svg"
                                                alt="Scalable Storage Solutions"
                                                height={48}
                                                width={48}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.dataRight}`}>
                                        <h6>Scalable Storage Solutions:</h6>
                                        <p>Implement scalable storage systems like data lakes and cloud storage to handle vast amounts of structured and unstructured data.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className={`${styles.dataBox}`}>
                                    <div className={`${styles.dataLeft}`}>
                                        <div className={`${styles.imageWrap}`}>
                                            <Image
                                                src="/img/dataEngineering/svg/EfficientDataProcessing.svg"
                                                alt="Efficient Data Processing"
                                                height={48}
                                                width={48}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.dataRight}`}>
                                        <h6>Efficient Data Processing:</h6>
                                        <p>Leverage distributed computing frameworks such as Apache Spark and Hadoop to process large datasets quickly and efficiently.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className={`${styles.dataBox}`}>
                                    <div className={`${styles.dataLeft}`}>
                                        <div className={`${styles.imageWrap}`}>
                                            <Image
                                                src="/img/dataEngineering/svg/RealTimeAnalytics.svg"
                                                alt="Real-Time Analytics"
                                                height={48}
                                                width={48}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.dataRight}`}>
                                        <h6>Real-Time Analytics:</h6>
                                        <p>Enable real-time data processing and analytics to provide immediate insights and support rapid decision-making.</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.dataContainer}`}>
                <div className={`${styles.dataHeader} ${styles.headerPurple}`}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Data Security, Governance & Compliance</h2>
                                <p>At Shodat Inc, We prioritize data governance to ensure the accuracy, consistency and security of your data:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.dataContent}`}>
                    <div className="container-fluid">
                        <div className={`row ${styles.dataBoxMargin}`}>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className={`${styles.dataBox}`}>
                                    <div className={`${styles.dataLeft}`}>
                                        <div className={`${styles.imageWrap}`}>
                                            <Image
                                                src="/img/dataEngineering/svg/DataSecurity.svg"
                                                alt="Data Security"
                                                height={48}
                                                width={48}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.dataRight}`}>
                                        <h6>Data Security:</h6>
                                        <p>Implementing robust security measures to protect your data from unauthorized access, breaches and other cyber threats.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className={`${styles.dataBox}`}>
                                    <div className={`${styles.dataLeft}`}>
                                        <div className={`${styles.imageWrap}`}>
                                            <Image
                                                src="/img/dataEngineering/svg/EstablishingPoliciesandStandards.svg"
                                                alt="Establishing Policies and Standards"
                                                height={48}
                                                width={48}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.dataRight}`}>
                                        <h6>Establishing Policies and Standards:</h6>
                                        <p>We help you establish comprehensive data management policies and standards to ensure data quality and compliance.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div className="row">

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className={`${styles.dataBox}`}>
                                    <div className={`${styles.dataLeft}`}>
                                        <div className={`${styles.imageWrap}`}>
                                            <Image
                                                src="/img/dataEngineering/svg/DataLineageandAuditing.svg"
                                                alt="Data Lineage and Auditing"
                                                height={48}
                                                width={48}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.dataRight}`}>
                                        <h6>Data Lineage and Auditing:</h6>
                                        <p>Implement data lineage and auditing mechanisms to track data flow and transformations, ensuring transparency and accountability.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className={`${styles.dataBox}`}>
                                    <div className={`${styles.dataLeft}`}>
                                        <div className={`${styles.imageWrap}`}>
                                            <Image
                                                src="/img/dataEngineering/svg/RegulatoryCompliance.svg"
                                                alt="Regulatory Compliance"
                                                height={48}
                                                width={48}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.dataRight}`}>
                                        <h6>Regulatory Compliance:</h6>
                                        <p>Our solutions adhere to industry regulations such as GDPR, HIPAA and CCPA, providing you with peace of mind that your data handling practices are compliant with legal requirements.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}