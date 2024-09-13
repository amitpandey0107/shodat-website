import React, { useState } from "react";
import styles from './introduction.module.css';
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Introduction() {
    const [slide, setSlider] = useState(1);
    const changeSlide = (slideNumber: any) => {
        setSlider(slideNumber)
    }
    return (
        <div className={`${styles.introduction}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-7">
                        <div className={`${styles.sectionContent}`}>
                            <h1>Transforming Data into Actionable Insights</h1>
                            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                            <p>Shodat Inc. transforms data into actionable insights by leveraging advanced analytics and business intelligence. We utilize predictive analytics and AI to anticipate trends and optimize operations. Our real-time data visualization tools, like Power BI and Tableau, enable timely decision-making.</p>
                            <p>Shodat also enhances customer experiences through detailed insights and improves financial performance by translating data into actionable intelligence. Our solutions ensure robust compliance and effective risk management, fostering a data-driven culture within organizations. Additionally, we handle large datasets efficiently using technologies like Hadoop and Spark, converting vast amounts of data into valuable strategic insights.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-5">
                        <div className={`${styles.sectionImage}`}>
                            <div className={`${styles.thumbnail}`}>
                                <Image
                                    src="/img/advancedAnalytics/transformingData.png"
                                    alt="intro"
                                    height={429}
                                    width={560}
                                />
                                <div className={`${styles.floater}`}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}