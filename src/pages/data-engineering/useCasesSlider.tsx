import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./data-engineering.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function UseCasesSlider(props: any) {
    const [oldSlide, setOldSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeSlide2, setActiveSlide2] = useState(0);
    const [toggleButton, setToggleButton] = useState(false);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
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
        <div className={`slider-container useCaseSlickSlider ${toggleButton && 'activateMe'}`}>
            <div className={`${styles.useCaseSliderWrap}`}>
                <Slider {...settings}>

                    <div className={`${styles.sliderItems}`}>
                        <div className={`${styles.imageContainer}`}>
                            <Image
                                height={147}
                                width={321}
                                alt="Data ETL (Extract, Transform, Load)"
                                src={"/img/dataEngineering/usecase/realTime.png"}
                            />
                        </div>
                        <div className={`${styles.textContainer}`}>
                            <h6>Real-Time Data Processing Financial Services</h6>
                            <p>A leading financial institution employs real-time data processing to monitor transactions and detect fraudulent activities.</p>
                        </div>
                        <div className={`${styles.btwrap}`}>
                            <Link href="/use-case/real-time-data-processing-financial-services" className={`${styles.btnBlack}`}>
                                <span>Read more</span>
                                <Image
                                    src="/img/dataEngineering/arrow-right.svg"
                                    alt="Teradata"
                                    height={24}
                                    width={24}
                                />
                            </Link>
                        </div>
                    </div>

                    <div className={`${styles.sliderItems}`}>
                        <div className={`${styles.imageContainer}`}>
                            <Image
                                height={147}
                                width={321}
                                alt="Predictive Maintenance in Manufacturing"
                                src={"/img/dataEngineering/usecase/PredictiveMaintenanceManufacturing.png"}
                            />
                        </div>
                        <div className={`${styles.textContainer}`}>
                            <h6>Predictive Maintenance in Manufacturing</h6>
                            <p>A global machine tools manufacturer uses predictive analytics to foresee equipment failures before they occur.</p>
                        </div>
                        <div className={`${styles.btwrap}`}>
                            <Link href="/use-case/predictive-maintenance-in-manufacturing" className={`${styles.btnBlack}`}>
                                <span>Read more</span>
                                <Image
                                    src="/img/dataEngineering/arrow-right.svg"
                                    alt="Teradata"
                                    height={24}
                                    width={24}
                                />
                            </Link>
                        </div>
                    </div>

                    <div className={`${styles.sliderItems}`}>
                        <div className={`${styles.imageContainer}`}>
                            <Image
                                height={147}
                                width={321}
                                alt="Real-time tracking & Monitoring in Modern Logistics"
                                src={"/img/dataEngineering/usecase/Realtimetracking.png"}
                            />
                        </div>
                        <div className={`${styles.textContainer}`}>
                            <h6>Real-time tracking & Monitoring in Modern Logistics</h6>
                            <p>A global logistics firm utilized a combination of IoT sensors, GPS tracking, and advanced analytics platforms to achieve real-time visibility into their operations.</p>
                        </div>
                        <div className={`${styles.btwrap}`}>
                            <Link href="/use-case/real-time-data-processing-financial-services" className={`${styles.btnBlack}`}>
                                <span>Read more</span>
                                <Image
                                    src="/img/dataEngineering/arrow-right.svg"
                                    alt="Teradata"
                                    height={24}
                                    width={24}
                                />
                            </Link>
                        </div>
                    </div>

                    <div className={`${styles.sliderItems}`}>
                        <div className={`${styles.imageContainer}`}>
                            <Image
                                height={147}
                                width={321}
                                alt="Handling Large Data Volumes In Automotive"
                                src={"/img/dataEngineering/usecase/HandlingLargeDataVolumesInAutomotive.png"}
                            />
                        </div>
                        <div className={`${styles.textContainer}`}>
                            <h6>Handling Large Data Volumes In Automotive</h6>
                            <p>An automotive manufacturer faced challenges in managing and leveraging vast amounts of data generated by sensors embedded in vehicles and manufacturing equipment.</p>
                        </div>
                        <div className={`${styles.btwrap}`}>
                            <Link href="/use-case/real-time-data-processing-financial-services" className={`${styles.btnBlack}`}>
                                <span>Read more</span>
                                <Image
                                    src="/img/dataEngineering/arrow-right.svg"
                                    alt="Teradata"
                                    height={24}
                                    width={24}
                                />
                            </Link>
                        </div>
                    </div>

                    <div className={`${styles.sliderItems}`}>
                        <div className={`${styles.imageContainer}`}>
                            <Image
                                height={147}
                                width={321}
                                alt="Predictive Maintenance in Manufacturing"
                                src={"/img/dataEngineering/usecase/PredictiveMaintenanceManufacturing.png"}
                            />
                        </div>
                        <div className={`${styles.textContainer}`}>
                            <h6>Predictive Maintenance in Manufacturing</h6>
                            <p>A global machine tools manufacturer uses predictive analytics to foresee equipment failures before they occur.</p>
                        </div>
                        <div className={`${styles.btwrap}`}>
                            <Link href="/use-case/real-time-data-processing-financial-services" className={`${styles.btnBlack}`}>
                                <span>Read more</span>
                                <Image
                                    src="/img/dataEngineering/arrow-right.svg"
                                    alt="Teradata"
                                    height={24}
                                    width={24}
                                />
                            </Link>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    )
}