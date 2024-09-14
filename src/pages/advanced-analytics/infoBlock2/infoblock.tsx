import React from "react";
import Image from "next/image";
import styles from './infoblock.module.css';
export default function InfoBlock() {
    return (
        <>
            <div className={`${styles.infoblock}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <div className={`${styles.contentLeft}`}>
                                <div className={`${styles.title}`}>
                                    <h2>Comprehensive BI Solutions</h2>
                                </div>
                                <div className={`${styles.infoText}`}>
                                    <p>Our advanced analytics and BI offerings extend beyond individual platforms. We provide end-to-end BI solutions that cover everything from data warehousing and data modeling to reporting and visualization. </p>
                                </div>
                                <div className={`${styles.infoText}`}>
                                    <p>Our approach ensures that your BI strategy is aligned with your business goals and delivers measurable results.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <div className={`${styles.contentRight}`}>
                                <div className={`${styles.thumbnailImage}`}>
                                    <Image
                                        height={408}
                                        width={804}
                                        alt="dummy image 2"
                                        src="/img/advancedAnalytics/reactangle_2.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.infoblock}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className={`${styles.block}`}>
                                <div className={`${styles.icon}`}>
                                    <Image
                                        height={48}
                                        width={48}
                                        alt="Data Warehousing"
                                        src="/img/advancedAnalytics/svg/DataWarehousing.svg"
                                    />
                                </div>
                                <h6>Data Warehousing</h6>
                                <p>Establish a solid foundation for your BI initiatives with a robust data warehouse. We design and implement data warehouses that store and organize your data efficiently, providing a single source of truth for your analytics.</p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className={`${styles.block}`}>
                                <div className={`${styles.icon}`}>
                                    <Image
                                        height={48}
                                        width={48}
                                        alt="Data Modeling"
                                        src="/img/advancedAnalytics/svg/DataModeling.svg"
                                    />
                                </div>
                                <h6>Data Modeling</h6>
                                <p>Develop sophisticated data models that reflect your business logic and support complex queries. Our expertise in data modeling ensures that your BI tools deliver accurate, meaningful insights.</p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className={`${styles.block}`}>
                                <div className={`${styles.icon}`}>
                                    <Image
                                        height={48}
                                        width={48}
                                        alt="Reporting and Visualization"
                                        src="/img/advancedAnalytics/svg/ReportingVisualization.svg"
                                    />
                                </div>
                                <h6>Reporting and Visualization</h6>
                                <p>Create compelling reports and visualizations that communicate insights effectively. We help you design dashboards that are not only visually appealing but also highly functional, enabling users to explore data and uncover insights intuitively.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}