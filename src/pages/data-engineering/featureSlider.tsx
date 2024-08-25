import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./data-engineering.module.css";
import Image from 'next/image';

export default function FeatureSlider(props: any) {
    const [oldSlide, setOldSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeSlide2, setActiveSlide2] = useState(0);
    const [toggleButton, setToggleButton] = useState(false);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        beforeChange: (current: any, next: any) => {
            setOldSlide(current);
            setActiveSlide(next);
        },
        afterChange: (current: any) => setActiveSlide2(current),
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        activeSlide > 0 ? setToggleButton(true) : setToggleButton(false);
    }, [activeSlide])
    return (
        <div className={`slider-container featureSlickSlider ${toggleButton && 'activatekro'}`}>
            <div className={`${styles.featSliderBlock}`}>
                <Slider {...settings}>
                    <div className={`${styles.featSlideItemBox}`}>
                        <div className={`${styles.itemTop}`}>
                            <Image
                                height={163}
                                width={202}
                                alt="Ingesting Data into the Cloud"
                                src="/img/dataEngineering/IngestingDataintotheCloud.svg"
                            />
                        </div>
                        <div className={`${styles.itemBottom}`}>
                            <h6>Ingesting Data into the Cloud</h6>
                            <p>We facilitate smooth and secure data migration to cloud platforms, leveraging the scalability and flexibility of cloud infrastructure.</p>
                        </div>
                    </div>

                    <div className={`${styles.featSlideItemBox}`}>
                        <div className={`${styles.itemTop}`}>
                            <Image
                                height={135}
                                width={165}
                                alt="Ingesting Data from Various Sources"
                                src="/img/dataEngineering/IngestingDatafromVariousSources.svg"
                            />
                        </div>
                        <div className={`${styles.itemBottom}`}>
                            <h6>Ingesting Data from Various Sources</h6>
                            <p>Our solutions can handle data from diverse sources such as databases, APIs, IoT devices, FTP servers and more.</p>
                        </div>
                    </div>

                    <div className={`${styles.featSlideItemBox}`}>
                        <div className={`${styles.itemTop}`}>
                            <Image
                                height={157}
                                width={160}
                                alt="Ingesting Data from Various Sources"
                                src="/img/dataEngineering/Near_Real_Time_Uploads_and_Bulk_Uploads.svg"
                            />
                        </div>
                        <div className={`${styles.itemBottom}`}>
                            <h6>Near Real-Time Uploads and Bulk Uploads</h6>
                            <p>We support both near real-time data ingestion and bulk uploads, ensuring timely data availability.</p>
                        </div>
                    </div>

                    <div className={`${styles.featSlideItemBox}`}>
                        <div className={`${styles.itemTop}`}>
                            <Image
                                height={214}
                                width={160}
                                alt="Ingesting Data from Various Sources"
                                src="/img/dataEngineering/Scheduled_Uploads.svg"
                            />
                        </div>
                        <div className={`${styles.itemBottom}`}>
                            <h6>Scheduled Uploads</h6>
                            <p>Automate your data ingestion processes with our scheduled upload capabilities, reducing manual intervention and ensuring consistency.</p>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    )
}