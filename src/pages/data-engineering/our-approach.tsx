import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./data-engineering.module.css";

export default function OurApproach() {
    return (
        <div className={`${styles.ourApproach}`}>
            <div className={`container-fluid ${styles.zIndex99}`}>

                <div className="row">
                    <div className="col-sm-12">
                        <div className={`${styles.titleUnderline}`}>
                            <h2>Our Approach</h2>
                        </div>
                    </div>
                </div>

                <div className={`row`}>
                    <div className="col-sm-12">
                        <div className={`${styles.approachContent}`}>

                            <div className={`${styles.columns} ${styles.columns1}`}>
                                <div className={`${styles.block}`}>
                                    <div className={`${styles.logo}`}>
                                        <span>
                                            <Image
                                                height={64}
                                                width={64}
                                                alt="Data ETL (Extract, Transform, Load)"
                                                src={"/img/dataEngineering/appraoch_1.svg"}
                                            />
                                        </span>
                                    </div>
                                    <h4>Data ETL (Extract, <br />Transform, Load)</h4>
                                </div>
                            </div>

                            <div className={`${styles.columns} ${styles.columns2}`}>
                                <div className={`${styles.block}`}>
                                    <div className={`${styles.logo}`}>
                                        <span>
                                            <Image
                                                height={64}
                                                width={64}
                                                alt="Application Integration"
                                                src={"/img/dataEngineering/appraoch_2.svg"}
                                            />
                                        </span>
                                    </div>
                                    <h4>Application <br />Integration</h4>
                                </div>
                            </div>

                            <div className={`${styles.columns} ${styles.columns3}`}>
                                <div className={`${styles.block}`}>
                                    <div className={`${styles.logo}`}>
                                        <span>
                                            <Image
                                                height={64}
                                                width={64}
                                                alt="Data Storage, Warehousing, and Data Marts"
                                                src={"/img/dataEngineering/appraoch_3.svg"}
                                            />
                                        </span>
                                    </div>
                                    <h4>Data Storage, <br />Warehousing, and <br />Data Marts</h4>
                                </div>
                            </div>

                            <div className={`${styles.columns} ${styles.columns4}`}>
                                <div className={`${styles.block}`}>
                                    <div className={`${styles.logo}`}>
                                        <span>
                                            <Image
                                                height={64}
                                                width={64}
                                                alt="Visualisation Layers and dashboarding capabilities"
                                                src={"/img/dataEngineering/appraoch_4.svg"}
                                            />
                                        </span>
                                    </div>
                                    <h4>Visualisation Layers <br />and dashboarding <br />capabilities</h4>
                                </div>
                            </div>

                            <div className={`${styles.columns} ${styles.columns5}`}>
                                <div className={`${styles.block}`}>
                                    <div className={`${styles.logo}`}>
                                        <span>
                                            <Image
                                                height={64}
                                                width={64}
                                                alt="ML Engines Models and consulting"
                                                src="/img/dataEngineering/appraoch_5.svg"
                                            />
                                        </span>
                                    </div>
                                    <h4>ML Engines Models <br />and consulting</h4>
                                </div>
                            </div>

                            <div className={`${styles.columns} ${styles.columns6}`}>
                                <div className={`${styles.block}`}>
                                    <div className={`${styles.logo}`}>
                                        <span>
                                            <Image
                                                height={64}
                                                width={64}
                                                alt="API and SDK toolkits"
                                                src="/img/dataEngineering/appraoch_6.svg"
                                            />
                                        </span>
                                    </div>
                                    <h4>API and SDK toolkits</h4>
                                </div>
                            </div>

                            <div className={`${styles.dottedLine}`}>
                                <Image
                                    height={200}
                                    width={1000}
                                    alt="Data Integration and Management"
                                    src={"/img/dataEngineering/line.svg"}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
