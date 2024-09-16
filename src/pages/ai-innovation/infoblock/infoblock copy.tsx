import React from "react";
import styles from './infoblock.module.css';
import Image from "next/image";
export default function AIInfoBlock() {
    return (
        <>
            <div className={`${styles.aiInfoBlock}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <div className={`${styles.leftSection}`}>
                                <h2>Vision AI Advanced Image <br />Recognition and Inspection </h2>
                                <div className={`${styles.textRow}`}>
                                    <h6>Our  Vision AI capabilities </h6>
                                    <p>Offer advanced image recognition capabilities, enabling businesses to perform detailed inspections and quality checks. This system is ideal for industries where precise image analysis is crucial, such as manufacturing and healthcare.</p>
                                </div>
                                <div className={`${styles.textRow}`}>
                                    <h6>Key Benefits:</h6>
                                    <p><strong>Comprehensive Image Analysis:</strong> Detects and classifies a wide range of defects and anomalies.</p>
                                    <p><strong>Enhanced Inspection:</strong> Automates routine inspections, reducing manual labor and error rates.</p>
                                    <p><strong>Scalable Solutions:</strong> Easily adapts to various scales of operation.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <div className={`${styles.rightSection}`}>
                                <div className={`${styles.thumbnail}`}>
                                    <Image
                                        src="/img/aiInnovation/intro/introduction.png"
                                        alt="intro"
                                        height={429}
                                        width={560}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}