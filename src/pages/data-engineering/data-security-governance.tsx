import React, { useState, useEffect } from 'react';
import styles from "./data-engineering.module.css";
import Image from 'next/image';
export default function DataSecurityGovernance(props: any) {
    return (
        <div className={`${styles.DataSecurityGovernance}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className={`${styles.titleUnderline}`}>
                            <h2>Data Security, Governance & Compliance</h2>
                        </div>
                        <p>At Shodat Inc, We prioritize data governance to ensure the accuracy, consistency, and security of your data:</p>
                    </div>
                </div>

                <div className={`row ${styles.mt40}`}>

                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className={`${styles.purpleBox}`}>
                            <div className={`${styles.logo}`}>
                                <Image
                                    src="/img/dataEngineering/DataSecurity.svg"
                                    alt='Data Security'
                                    height={64}
                                    width={64}
                                />
                            </div>
                            <div className={`${styles.contentArea}`}>
                                <h4>Data Security</h4>
                                <p>Implementing robust security measures to protect your data from unauthorized access, breaches, and other cyber threats.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className={`${styles.purpleBox}`}>
                            <div className={`${styles.logo}`}>
                                <Image
                                    src="/img/dataEngineering/EstablishingPoliciesStandards.svg"
                                    alt='Establishing Policies and Standards'
                                    height={64}
                                    width={64}
                                />
                            </div>
                            <div className={`${styles.contentArea}`}>
                                <h4>Establishing Policies and Standards:</h4>
                                <p>We help you establish comprehensive data management policies and standards to ensure data quality and compliance.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className={`${styles.purpleBox}`}>
                            <div className={`${styles.logo}`}>
                                <Image
                                    src="/img/dataEngineering/DataLineageAuditing.svg"
                                    alt='Data Lineage and Auditing'
                                    height={64}
                                    width={64}
                                />
                            </div>
                            <div className={`${styles.contentArea}`}>
                                <h4>Data Lineage and Auditing:</h4>
                                <p>Implement data lineage and auditing mechanisms to track data flow and transformations, ensuring transparency and accountability.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className={`${styles.purpleBox}`}>
                            <div className={`${styles.logo}`}>
                                <Image
                                    src="/img/dataEngineering/RegulatoryCompliance.svg"
                                    alt='Regulatory Compliance'
                                    height={64}
                                    width={64}
                                />
                            </div>
                            <div className={`${styles.contentArea}`}>
                                <h4>Regulatory Compliance:</h4>
                                <p>Our solutions adhere to industry regulations such as GDPR, HIPAA, and CCPA, providing you with peace of mind that your data handling practices are compliant with legal requirements.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}