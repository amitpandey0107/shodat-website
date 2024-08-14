import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./data-engineering.module.css";
export default function KeyFeatures() {
    return (
        <div className={`${styles.keyFeatures}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-5 px-0">
                        <div className={`${styles.dataEtlBox}`}>
                            <h2>Data ETL <span>(Extract, Transform, Load)</span></h2>
                            <p>Our ETL services are designed to handle complex data ingestion and transformation tasks.</p>
                            <div className={`${styles.etlImage}`}>
                                <Image
                                    src="/img/dataEngineering/data_etl.png"
                                    alt="Data ETL"
                                    height={292}
                                    width={531}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-7 px-0">
                            <div className={`${styles.featureBox}`}>
                                <h2>Key features include:</h2>
                                <div className={`${styles.infoRow}`}>
                                    <div className={`${styles.infoBox}`}>
                                        <h6>Ingesting Data into the Cloud</h6>
                                        <p>We facilitate smooth and secure data migration to cloud platforms, leveraging the scalability and flexibility of cloud infrastructure.</p>
                                    </div>
                                    <div className={`${styles.infoBox}`}>
                                        <h6>Ingesting Data from Various Sources</h6>
                                        <p>Our solutions can handle data from diverse sources such as databases, APIs, IoT devices, FTP servers and more.</p>
                                    </div>
                                </div>
                                <div className={`${styles.infoRow}`}>
                                    <div className={`${styles.infoBox}`}>
                                        <h6>Near Real-Time Uploads <br />
                                        and Bulk Uploads</h6>
                                        <p>We support both near real-time data ingestion and bulk uploads, ensuring timely data availability.</p>
                                    </div>
                                    <div className={`${styles.infoBox}`}>
                                        <h6>Scheduled Uploads</h6>
                                        <p>Automate your data ingestion processes with our scheduled upload capabilities, reducing manual intervention and ensuring consistency.</p>
                                    </div>
                                </div>
                            </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}