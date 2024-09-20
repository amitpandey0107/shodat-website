import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './shodatYAI.module.css';
export default function ShodatYAI() {
    return (
        <>
            <div className={`${styles.shodatYAI}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className={`${styles.sectionLeft}`}>
                                <h2>Shodat YAI: Your Partner in AI Transformation</h2>
                                <h6>Shodat YAI Consulting </h6>
                                <p>Offers expert guidance and strategic consulting to help businesses integrate AI into their operations. Our team of seasoned consultants works closely with clients to develop customized AI solutions that address specific challenges and opportunities.</p>
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
                                            <h6>AI Strategy Development</h6>
                                            <p>Crafting tailored AI strategies.</p>
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
                                            <h6>Implementation Support</h6>
                                            <p>Assisting in the deployment of AI technologies.</p>
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
                                            <h6>Training & Support</h6>
                                            <p>Providing ongoing training and support for AI initiatives.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.shodatYAIBoxes}`}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <div className={`${styles.sectionLeft}`}>
                                    <h6>Unlock Unparalleled Insights</h6>
                                    <p>Combining generative and causal AI to provide deep reasoning and insight capabilities. Our platform enables organizations to understand the cause-and-effect relationships behind real-world incidents, driving growth, innovation and operational excellence.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-8">
                                <div className={`${styles.sectionRight}`}>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                            <div className={`${styles.colorBox} ${styles.purpleBox}`}>
                                                <h6>Generative AI</h6>
                                                <p>Create new data insights and predictive models to foresee and mitigate future challenges.</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                            <div className={`${styles.colorBox} ${styles.blueBox}`}>
                                                <h6>Causal AI</h6>
                                                <p>Understand the underlying factors and relationships that influence outcomes, enabling more effective decision-making.</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                            <div className={`${styles.colorBox} ${styles.blackBox}`}>
                                                <h6>Inference Analytics</h6>
                                                <p>Derive actionable insights from complex data sets, enhancing strategic planning and execution.</p>
                                            </div>
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