import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./data-engineering.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'

export default function UseCasesSlider(props: any) {
    const [oldSlide, setOldSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeSlide2, setActiveSlide2] = useState(0);
    const [toggleButton, setToggleButton] = useState(false);

    const searchParams = useSearchParams();
    const sliderID = searchParams?.get('id')
    console.log({
        sliderID: sliderID
    })

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

                    {sliderID !== '1' &&
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
                                <h6>Real-Time Data Processing</h6>
                                <p>A leading financial institution sought to enhance its credit card fraud detection systems and improve compliance with Basel III regulations.</p>
                            </div>
                            <div className={`${styles.btwrap}`}>
                                <Link href="/use-case/real-time-data-processing-financial-services?id=1" className={`${styles.btnBlack}`}>
                                    <span>Read more</span>
                                    <Image
                                        src="/img/dataEngineering/arrow-right.svg"
                                        alt="Teradata"
                                        height={24}
                                        width={24}
                                    />
                                </Link>
                            </div>
                        </div>}

                    {sliderID !== '2' &&
                        <div className={`${styles.sliderItems}`}>
                            <div className={`${styles.imageContainer}`}>
                                <Image
                                    height={147}
                                    width={321}
                                    alt="ETL and Data Warehousing - Retail and E-Commerce"
                                    src={"/img/dataEngineering/usecase/PredictiveMaintenanceManufacturing.png"}
                                />
                            </div>
                            <div className={`${styles.textContainer}`}>
                                <h6>ETL and Data Warehousing - Retail and E-Commerce</h6>
                                <p>A leading retail and e-commerce company aimed to enhance its data management capabilities to drive better decision-making, optimise operations, and increase profitability.</p>
                            </div>
                            <div className={`${styles.btwrap}`}>
                                <Link href="/use-case/predictive-maintenance-in-manufacturing?id=2" className={`${styles.btnBlack}`}>
                                    <span>Read more</span>
                                    <Image
                                        src="/img/dataEngineering/arrow-right.svg"
                                        alt="Teradata"
                                        height={24}
                                        width={24}
                                    />
                                </Link>
                            </div>
                        </div>}

                    {sliderID !== '3' &&
                        <div className={`${styles.sliderItems}`}>
                            <div className={`${styles.imageContainer}`}>
                                <Image
                                    height={147}
                                    width={321}
                                    alt="Predictive Maintenance in Manufacturing"
                                    src={"/img/dataEngineering/usecase/Realtimetracking.png"}
                                />
                            </div>
                            <div className={`${styles.textContainer}`}>
                                <h6>Predictive Maintenance in Manufacturing</h6>
                                <p>A global machine tools manufacturer implemented predictive analytics to forecast equipment failures before they occurred, enabling proactive maintenance and reducing operational disruptions.</p>
                            </div>
                            <div className={`${styles.btwrap}`}>
                                <Link href="/use-case/real-time-tracking-and-monitoring-in-modern-logistics?id=3" className={`${styles.btnBlack}`}>
                                    <span>Read more</span>
                                    <Image
                                        src="/img/dataEngineering/arrow-right.svg"
                                        alt="Teradata"
                                        height={24}
                                        width={24}
                                    />
                                </Link>
                            </div>
                        </div>}

                    {sliderID !== '4' &&
                        <div className={`${styles.sliderItems}`}>
                            <div className={`${styles.imageContainer}`}>
                                <Image
                                    height={147}
                                    width={321}
                                    alt="Real-time Tracking and Monitoring in Modern Logistics"
                                    src={"/img/dataEngineering/usecase/HandlingLargeDataVolumesInAutomotive.png"}
                                />
                            </div>
                            <div className={`${styles.textContainer}`}>
                                <h6>Real-time Tracking and Monitoring in Modern Logistics</h6>
                                <p>A global logistics firm partnered with Shodat Inc. to implement real-time tracking and monitoring systems, enhancing operational visibility, resource allocation, and profitability.</p>
                            </div>
                            <div className={`${styles.btwrap}`}>
                                <Link href="/use-case/handling-large-data-volumes-in-automotive?id=4" className={`${styles.btnBlack}`}>
                                    <span>Read more</span>
                                    <Image
                                        src="/img/dataEngineering/arrow-right.svg"
                                        alt="Teradata"
                                        height={24}
                                        width={24}
                                    />
                                </Link>
                            </div>
                        </div>}

                    {sliderID !== '5' &&
                        <div className={`${styles.sliderItems}`}>
                            <div className={`${styles.imageContainer}`}>
                                <Image
                                    height={147}
                                    width={321}
                                    alt="Managing Large Data Volumes in Automotive"
                                    src={"/img/dataEngineering/usecase/PredictiveMaintenanceManufacturing.png"}
                                />
                            </div>
                            <div className={`${styles.textContainer}`}>
                                <h6>Managing Large Data Volumes in Automotive</h6>
                                <p>A leading automotive manufacturer partnered with Shodat Inc. to manage and leverage the vast amounts of data generated by sensors embedded in vehicles and manufacturing equipment.</p>
                            </div>
                            <div className={`${styles.btwrap}`}>
                                <Link href="/use-case/predictive-analytics?id=5" className={`${styles.btnBlack}`}>
                                    <span>Read more</span>
                                    <Image
                                        src="/img/dataEngineering/arrow-right.svg"
                                        alt="Teradata"
                                        height={24}
                                        width={24}
                                    />
                                </Link>
                            </div>
                        </div>}

                </Slider>
            </div>
        </div>
    )
}