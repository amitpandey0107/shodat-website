import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./data-engineering.module.css";
import Image from 'next/image';

export default function DataStorageSlider(props: any) {
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
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
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
        <div className={`slider-container dataStorageSlickSlider ${toggleButton && 'activatekro'}`}>
            <div className={`${styles.featSliderBlock}`}>
                <Slider {...settings}>
                    <div className={`${styles.featSlideItemBox}`}>
                        <div className={`${styles.itemTop}`}>
                            <Image
                                height={168}
                                width={160}
                                alt="Ingesting Data into the Cloud"
                                src="/img/dataEngineering/Data_Warehousing.svg"
                            />
                        </div>
                        <div className={`${styles.itemBottom}`}>
                            <h6>Handling Complex Analytical Calculations</h6>
                            <p>We design and implement scalable data warehouses that provide a centralized repository for all your data needs and enable . Customized data marts are developed for specific business lines or departments, facilitating focused and efficient data analysis.</p>
                        </div>
                    </div>

                    <div className={`${styles.featSlideItemBox}`}>
                        <div className={`${styles.itemTop}`}>
                            <Image
                                height={168}
                                width={160}
                                alt="Ingesting Data from Various Sources"
                                src="/img/dataEngineering/Data_Warehousing.svg"
                            />
                        </div>
                        <div className={`${styles.itemBottom}`}>
                            <h6>Handling Complex Analytical Calculations</h6>
                            <p>We design and implement scalable data warehouses that provide a centralized repository for all your data needs and enable . Customized data marts are developed for specific business lines or departments, facilitating focused and efficient data analysis.</p>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    )
}