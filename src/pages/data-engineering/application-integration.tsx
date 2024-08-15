import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./data-engineering.module.css";
export default function ApplicationIntegration() {
    return (
        <div className={`${styles.applicationIntegration} appIntegration`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-5 px-0">
                        <div className={`${styles.appBox}`}>
                            <h2>Application Integration</h2>
                            <p>Our data integration services ensure seamless communication and data flow across your systems for event based or real time data streaming use cases</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-7 px-0">
                        <div className={`${styles.appInfoblock}`}>
                            <div className={`${styles.appRow}`}>
                                <div className={`${styles.appColHalf}`}>
                                    <div className={`${styles.content}`}>
                                        <div className={`${styles.appImg}`}>
                                            <Image
                                                src="/img/dataEngineering/publish_subscribe.png"
                                                alt="Building Publish-Subscribe Systems"
                                                height={159}
                                                width={125}
                                            />
                                        </div>
                                        <h6>Building Publish-Subscribe Systems</h6>
                                        <p>We develop robust publish-subscribe systems to manage alerts and enable asynchronous communication across your data ecosystem.</p>
                                    </div>
                                </div>
                                <div className={`${styles.appColHalf}`}>
                                    <div className={`${styles.content}`}>
                                        <div className={`${styles.appImg}`}>
                                            <Image
                                                src="/img/dataEngineering/azure_service_bus.png"
                                                alt="Azure Service Bus Integration"
                                                height={95}
                                                width={260}
                                            />
                                        </div>
                                        <h6>Azure Service Bus Integration</h6>
                                        <p>Leverage Azure Service Bus for reliable cloud messaging between applications and services, ensuring smooth data integration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}