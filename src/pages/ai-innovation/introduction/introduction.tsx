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

                    <div className="col-sm-12 col-md-6 col-lg-5">
                        <div className={`${styles.sectionImage}`}>
                            <div className={`${styles.thumbnail}`}>
                                <Image
                                    src="/img/aiInnovation/intro/ai-page-img1.png"
                                    alt="intro"
                                    height={429}
                                    width={560}
                                />
                                {/* <div className={`${styles.floater}`}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                        <div className={`${styles.sectionContent}`}>
                            <h1>AI Innovation at Shodat Inc.</h1>
                            {/* <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3> */}
                            <p>At Shodat Inc. we harness the power of Vision AI and GenAI  to drive innovation across various industries like Automotive , Manufacturing, Oil & Gas, Supply Chain and Logistics industries. </p>
                            <p>commitment to AI innovation is transforming industries and driving new levels of efficiency, accuracy, and growth. </p>
                            <p>With our cutting-edge solutions, we harness the power of artificial intelligence to deliver unparalleled insights and capabilities that propel your business into the future.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}