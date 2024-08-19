import React, { useState, useEffect, useRef } from "react";
import styles from "./platform.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Energy from "./casestudytabs/energy";
import Automotive from "./casestudytabs/automotive";
import Financial from "./casestudytabs/financial";
import Manufacturing from "./casestudytabs/manufacturing";
import WorkplaceSafety from "./casestudytabs/workplaceSafety";

export default function CaseStudy() {
    const [tab, setTab] = useState(1);
    const ElementRef:any = useRef(null);
    const [customClass, setCustomClass] = useState("")
    useEffect(() => {
        
    })
    
    const handleTabChange = (tabId: any) => {
        let current_tab = tab;
        setTab(tabId);
        if(current_tab===tab) {
            setCustomClass('addSliderClass');
        } else {
            setCustomClass("")
        }
    }
    const handleLeftArrow = () => {
        let current_tab = tab;
        const Elementcount = ElementRef.current.childNodes.length;
        console.log({
            Elementcount:Elementcount,
            current_tab:current_tab
        })
        if (current_tab != 1) {
            setTab(current_tab-1)
            setCustomClass('leftArrowClass');
        } else {
            setTab(5)
        }   
    }
    const handleRightArrow = () => {
        let current_tab = tab;
        const Elementcount = ElementRef.current.childNodes.length;
        console.log({
            Elementcount:Elementcount,
            current_tab:current_tab
        })
        if (current_tab <= (Elementcount-3)) {
            setTab(current_tab+1)
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
                        <div className={`${styles.tabContent}`} ref={ElementRef}>
                            <div className={`${styles.arrowLeft}`}>
                                <button onClick={handleLeftArrow}>
                                    <Image
                                        src="/img/casestudy/angle_left_purple.png"
                                        alt="arrow left"
                                        height={32}
                                        width={16}
                                    />
                                </button>
                            </div>
                            <div className={`${styles.tab}`}>
                                <button onClick={() => handleTabChange(1)}>
                                    <Image
                                        src="/img/casestudy/case_study_2.jpg"
                                        alt="Energy"
                                        height={170}
                                        width={156}
                                    />
                                </button>
                            </div>
                            <div className={`${styles.tab}`}>
                                <button onClick={() => handleTabChange(2)}>
                                    <Image
                                        src="/img/casestudy/case_study_3.png"
                                        alt="Automotive"
                                        height={170}
                                        width={156}
                                    />
                                </button>
                            </div>
                            <div className={`${styles.tab}`}>
                                <button onClick={() => handleTabChange(3)}>
                                    <Image
                                        src="/img/casestudy/case_study_4.png"
                                        alt="Manfacturing"
                                        height={170}
                                        width={156}
                                    />
                                </button>
                            </div>
                            <div className={`${styles.tab}`}>
                                <button onClick={() => handleTabChange(4)}>
                                    <Image
                                        src="/img/casestudy/case_study_5.png"
                                        alt="financial"
                                        height={170}
                                        width={156}
                                    />
                                </button>
                            </div>
                            <div className={`${styles.tab}`}>
                                <button onClick={() => handleTabChange(5)}>
                                    <Image
                                        src="/img/casestudy/case_study_6.png"
                                        alt="workplace safety"
                                        height={170}
                                        width={156}
                                    />
                                </button>
                            </div>

                            <div className={`${styles.arrowRight}`}>
                                <button onClick={handleRightArrow}>
                                    <Image
                                        src="/img/casestudy/angle_right_purple.png"
                                        alt="arrow right"
                                        height={32}
                                        width={16}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
