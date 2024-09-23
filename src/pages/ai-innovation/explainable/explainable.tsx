import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './explainable.module.css';
export default function Explainable() {
    return (
        <>
            <div className={`${styles.explainable}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className={`${styles.sectionLeft}`}>
                                <h2>Shodat X: Explainable Intelligence</h2>
                                <h6>Illuminate the Unknown</h6>
                                <p>Shodat X is our state-of-the-art explainable intelligence platform that provides deep insights into product defects, process inefficiencies and operational risks. By leveraging generative AI and inference analytics, Shodat X uncovers the root causes of issues and presents them in an understandable and actionable manner.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <div className={`${styles.sectionRight}`}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className={`${styles.whiteBox}`}>
                                            <div className={`${styles.iconWrap}`}>
                                                <div className={`${styles.icon}`}>
                                                    <Image
                                                        src="/img/aiInnovation/DefectDetection.svg"
                                                        alt="Defect Detection"
                                                        height={44}
                                                        width={44}
                                                    />
                                                </div>
                                            </div>
                                            <h6>Defect Detection</h6>
                                            <p>Identify defects in manufacturing processes and optimize quality control measures.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className={`${styles.whiteBox}`}>
                                            <div className={`${styles.iconWrap}`}>
                                                <div className={`${styles.icon}`}>
                                                    <Image
                                                        src="/img/aiInnovation/OperationalSafety.svg"
                                                        alt="Operational Safety"
                                                        height={44}
                                                        width={44}
                                                    />
                                                </div>
                                            </div>
                                            <h6>Operational Safety</h6>
                                            <p>Enhance safety protocols by understanding and mitigating potential risks.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className={`${styles.whiteBox}`}>
                                            <div className={`${styles.iconWrap}`}>
                                                <div className={`${styles.icon}`}>
                                                    <Image
                                                        src="/img/aiInnovation/SupplyChainOptimization.svg"
                                                        alt="Supply Chain Optimization"
                                                        height={44}
                                                        width={44}
                                                    />
                                                </div>
                                            </div>
                                            <h6>Supply Chain Optimization</h6>
                                            <p>Streamline operations and improve supply chain efficiency with data-driven insights.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}