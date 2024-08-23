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
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        beforeChange: (current:any, next:any) => {
            setOldSlide(current);
            setActiveSlide(next);
        },
        afterChange: (current:any) => setActiveSlide2(current)
    };

    useEffect(()=> {
        activeSlide > 0 ? setToggleButton(true) : setToggleButton(false);        
    }, [activeSlide])
    return (
        <div className={`slider-container dataStorageSlickSlider ${toggleButton && 'activatekro'}`}>
            <div className={`${styles.featSliderBlock}`}>
                <Slider {...settings}>
                    <div className={`${styles.featSlideItemBox}`}>
                        <div className={`${styles.itemTop}`}>
                            <Image
                                height={75}
                                width={110}
                                alt="Ingesting Data into the Cloud"
                                src="/img/dataEngineering/publish_subscribe.svg"
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
                                height={75}
                                width={110}
                                alt="Ingesting Data from Various Sources"
                                src="/img/dataEngineering/publish_subscribe.svg"
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