import React, { useState, useEffect, useRef } from "react";
import styles from "./platform.module.css";
import "bootstrap/dist/css/bootstrap.css";
import ExportedImage from "next-image-export-optimizer";
import Energy from "./casestudytabs/energy";
import Automotive from "./casestudytabs/automotive";
import Financial from "./casestudytabs/financial";
import Manufacturing from "./casestudytabs/manufacturing";
import WorkplaceSafety from "./casestudytabs/workplaceSafety";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSearchParams } from "next/navigation";

export function CustomLeftArrow() {
    return (
        <button className={`${styles.btnPrevArrow}`}>
            <ExportedImage
                src="/img/casestudy/angle_left_purple.png"
                alt="arrow left"
                height={32}
                width={16}
            />
        </button>
    );
}

export default function CaseStudy() {

    const [oldSlide, setOldSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeSlide2, setActiveSlide2] = useState(0);
    const [toggleButton, setToggleButton] = useState(false);

    const [tab, setTab] = useState(1);
    const ElementRef: any = useRef(null);
    const [customClass, setCustomClass] = useState("");
    useEffect(() => { });

    const searchParams = useSearchParams();
    const sliderID = searchParams?.get("id");

    const handleTabChange = (tabId: any) => {
        let current_tab = tab;
        setTab(tabId);
        if (current_tab === tab) {
            setCustomClass("addSliderClass");
        } else {
            setCustomClass("");
        }
    };
    const handleLeftArrow = () => {
        let current_tab = tab;
        const Elementcount = ElementRef.current.childNodes.length;
        console.log({
            Elementcount: Elementcount,
            current_tab: current_tab,
        });
        if (current_tab != 1) {
            setTab(current_tab - 1);
            setCustomClass("leftArrowClass");
        } else {
            setTab(5);
        }
    };
    const handleRightArrow = () => {
        let current_tab = tab;
        const Elementcount = ElementRef.current.childNodes.length;
        console.log({
            Elementcount: Elementcount,
            current_tab: current_tab,
        });
        if (current_tab <= Elementcount - 3) {
            setTab(current_tab + 1);
            setCustomClass("addSliderClass");
        } else {
            setTab(1);
        }
    };


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        activeSlide > 0 ? setToggleButton(true) : setToggleButton(false);
    }, [activeSlide]);

    return (
        <div className={`${styles.caseStudyV2} caseStudyV2`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h2 className={`${styles.title}`}>Case Studies</h2>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className={`${styles.transitionWrap}`}>
                            {tab === 1 && <Energy customClassName={customClass} />}
                            {tab === 2 && <Automotive customClassName={customClass} />}
                            {tab === 3 && <Manufacturing customClassName={customClass} />}
                            {tab === 4 && <Financial customClassName={customClass} />}
                            {tab === 5 && <WorkplaceSafety customClassName={customClass} />}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className={`${styles.caseSliderContainer}`}>
                            <div className={`${styles.caseSliderInner}`}>
                                <Slider {...settings} className="platformCaseSlider">
                                    <div className={`${styles.clientItem}`}>
                                        <button onClick={() => handleTabChange(1)}>
                                            <ExportedImage
                                                src="/img/casestudy/case_1.png"
                                                alt="Energy"
                                                height={170}
                                                width={156}
                                            />
                                            <span>Energy</span>
                                        </button>
                                    </div>
                                    <div className={`${styles.clientItem}`}>
                                        <button onClick={() => handleTabChange(2)}>
                                            <ExportedImage
                                                src="/img/casestudy/case_2.png"
                                                alt="Transportation"
                                                height={170}
                                                width={156}
                                            />
                                            <span>Transportation</span>
                                        </button>
                                    </div>
                                    <div className={`${styles.clientItem}`}>
                                        <button onClick={() => handleTabChange(3)}>
                                            <ExportedImage
                                                src="/img/casestudy/case_3.png"
                                                alt="Logistics"
                                                height={170}
                                                width={156}
                                            />
                                            <span>Logistics</span>
                                        </button>
                                    </div>
                                    <div className={`${styles.clientItem}`}>
                                        <button onClick={() => handleTabChange(4)}>
                                            <ExportedImage
                                                src="/img/casestudy/case_4.png"
                                                alt="financial"
                                                height={170}
                                                width={156}
                                            />
                                            <span>Finance</span>
                                        </button>
                                    </div>
                                    <div className={`${styles.clientItem}`}>
                                        <button onClick={() => handleTabChange(5)}>
                                            <ExportedImage
                                                src="/img/casestudy/case_5.png"
                                                alt="workplace safety"
                                                height={170}
                                                width={156}
                                            />
                                            <span>Workplace Safety</span>
                                        </button>
                                    </div>
                                </Slider>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
