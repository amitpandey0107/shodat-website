import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./usecase.module.css";
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
                            <h6>Enhancing Operations for a Leading Logistics Player with Data-Driven Insights and BI Implementation</h6>
                            <p>A leading logistics company, operating globally and managing vast volumes of tonnage, sought to</p>
                        </div>
                        <div className={`${styles.btwrap}`}>
                            <Link href="/advanced-analytics/use-case/enhancing-operations-for-a-leading-logistics-player?id=1" className={`${styles.btnBlack}`}>
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
                            <h6>Enhancing Operational Efficiency and Inventory Management in Manufacturing with Power BI</h6>
                            <p>A leading player in the manufacturing industry sought to improve operational efficiency and inventory management processes.</p>
                        </div>
                        <div className={`${styles.btwrap}`}>
                            <Link href="/advanced-analytics/use-case/enhancing-operational-efficiency-and-inventory-management-in-manufacturing-with-power-BI?id=2" className={`${styles.btnBlack}`}>
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
                            <h6>Reducing Costs of Internal Inefficiencies and Warranties in Manufacturing with Advanced Analytics and BI</h6>
                            <p>A leading manufacturing company faced significant challenges related to internal inefficiencies and warranty costs.</p>
                        </div>
                        <div className={`${styles.btwrap}`}>
                            <Link href="/advanced-analytics/use-case/reducing-costs-of-internal-inefficiencies-and-warranties-in-manufacturing-with-advanced-analytics-and-BI?id=3" className={`${styles.btnBlack}`}>
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
                            <h6>Enhancing Reporting Capabilities in the Oil and Gas Trading Industry</h6>
                            <p>A prominent player in the oil and gas trading industry recognized the need for advanced reporting capabilities</p>
                        </div>
                        <div className={`${styles.btwrap}`}>
                            <Link href="/advanced-analytics/use-case/enhancing-reporting-capabilities-in-the-oil-and-gas-trading-industry?id=4" className={`${styles.btnBlack}`}>
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
                            <h6>Optimizing Warranty Claim Management with Advanced Analytics and BI</h6>
                            <p>A leading electronics manufacturer faced escalating costs and inefficiencies in managing warranty claims.</p>
                        </div>
                        <div className={`${styles.btwrap}`}>
                            <Link href="/advanced-analytics/use-case/optimizing-warranty-claim-management-with-advanced-analytics-and-BI?id=5" className={`${styles.btnBlack}`}>
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
                            <h6>Optimizing Inventory Management in Retail with Power BI</h6>
                            <p>A leading retail company faced challenges in managing its extensive inventory across multiple warehouses.</p>
                        </div>
                        <div className={`${styles.btwrap}`}>
                            <Link href="/advanced-analytics/use-case/optimizing-inventory-management-in-retail-with-power-BI?id=6" className={`${styles.btnBlack}`}>
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