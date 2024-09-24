import React, { useState, useEffect, useRef } from "react";
import styles from "./platform.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Energy from "./casestudytabs/energy";
import Automotive from "./casestudytabs/automotive";
import Financial from "./casestudytabs/financial";
import Manufacturing from "./casestudytabs/manufacturing";
import WorkplaceSafety from "./casestudytabs/workplaceSafety";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function CustomLeftArrow() {
    return (
        <button className={`${styles.btnPrevArrow}`}>
            <Image
                src="/img/casestudy/angle_left_purple.png"
                alt="arrow left"
                height={32}
                width={16}
            />
        </button>
    )
}

export default function CaseStudy() {
    const [tab, setTab] = useState(1);
    const ElementRef: any = useRef(null);
    const [customClass, setCustomClass] = useState("")
    useEffect(() => {

    })

    const handleTabChange = (tabId: any) => {
        let current_tab = tab;
        setTab(tabId);
        if (current_tab === tab) {
            setCustomClass('addSliderClass');
        } else {
            setCustomClass("")
        }
    }
    const handleLeftArrow = () => {
        let current_tab = tab;
        const Elementcount = ElementRef.current.childNodes.length;
        console.log({
            Elementcount: Elementcount,
            current_tab: current_tab
        })
        if (current_tab != 1) {
            setTab(current_tab - 1)
            setCustomClass('leftArrowClass');
        } else {
            setTab(5)
        }
    }
    const handleRightArrow = () => {
        let current_tab = tab;
        const Elementcount = ElementRef.current.childNodes.length;
        console.log({
            Elementcount: Elementcount,
            current_tab: current_tab
        })
        if (current_tab <= (Elementcount - 3)) {
            setTab(current_tab + 1)
            setCustomClass('addSliderClass');
        } else {
            setTab(1)
        }
    }

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
                                <Carousel
                                    additionalTransfrom={0}
                                    arrows
                                    autoPlaySpeed={3000}                                    
                                    centerMode={false}
                                    className=""
                                    containerClass="containerCarousel"
                                    dotListClass=""
                                    draggable
                                    focusOnSelect={false}
                                    infinite={true}
                                    itemClass=""
                                    keyBoardControl
                                    minimumTouchDrag={80}
                                    pauseOnHover
                                    renderArrowsWhenDisabled={false}
                                    renderButtonGroupOutside={false}
                                    renderDotsOutside={false}
                                    responsive={{
                                        desktop: {
                                            breakpoint: {
                                                max: 3000,
                                                min: 1024
                                            },
                                            items: 3,
                                            partialVisibilityGutter: 40
                                        },
                                        mobile: {
                                            breakpoint: {
                                                max: 579,
                                                min: 0
                                            },
                                            items: 2,
                                            partialVisibilityGutter: 30
                                        },
                                        tablet: {
                                            breakpoint: {
                                                max: 1024,
                                                min: 580
                                            },
                                            items: 3,
                                            partialVisibilityGutter: 30
                                        }
                                    }}
                                    rewind={false}
                                    rewindWithAnimation={false}
                                    rtl={false}
                                    shouldResetAutoplay
                                    showDots={false}
                                    sliderClass=""
                                    slidesToSlide={1}
                                    swipeable
                                >
                                    <div className={`${styles.clientItem}`}>
                                        <button onClick={() => handleTabChange(1)}>
                                            <Image
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
                                            <Image
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
                                            <Image
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
                                            <Image
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
                                            <Image
                                                src="/img/casestudy/case_5.png"
                                                alt="workplace safety"
                                                height={170}
                                                width={156}
                                            />
                                            <span>Workplace Safety</span>
                                        </button>
                                    </div>

                                </Carousel>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
