import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './shodatEops.module.css';
export default function ShodatEops() {
    return (
        <>
            <div className={`${styles.ShodatEops}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className={`${styles.sectionLeft}`}>
                                <h2>Shodat eOps: The Vehicle for AI Excellence</h2>
                                <h6>Empowering Intelligent Operations</h6>
                                <p>Shodat eOps is the backbone of our AI-driven solutions, providing the infrastructure and tools necessary to deliver the capabilities of Shodat X and Shodat YAI. It ensures seamless integration, real-time data processing, and actionable intelligence for optimized operations.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <div className={`${styles.sectionRight}`}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className={`${styles.whiteBox}`}>
                                            <div className={`${styles.icon}`}>
                                                <Image
                                                    src="/img/aiInnovation/iconRect.png"
                                                    alt="icon"
                                                    height={110}
                                                    width={120}
                                                />
                                            </div>
                                            <h6>AI-Driven Operations Intelligence</h6>
                                            <p>Leverage advanced AI algorithms to gain deeper insights and optimize performance.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className={`${styles.whiteBox}`}>
                                            <div className={`${styles.icon}`}>
                                                <Image
                                                    src="/img/aiInnovation/iconRect.png"
                                                    alt="icon"
                                                    height={110}
                                                    width={120}
                                                />
                                            </div>
                                            <h6>Integrated Safety and Compliance</h6>
                                            <p>Ensure regulatory compliance and operational safety with real-time monitoring and alerts.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className={`${styles.whiteBox}`}>
                                            <div className={`${styles.icon}`}>
                                                <Image
                                                    src="/img/aiInnovation/iconRect.png"
                                                    alt="icon"
                                                    height={110}
                                                    width={120}
                                                />
                                            </div>
                                            <h6>Live Dashboard, Reporting & Alerts</h6>
                                            <p>Access real-time insights and customizable reports to track key performance indicators and address emerging issues promptly.</p>
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