import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './businessIntelligence.module.css';
import AccordionBusiness from './accordian';
export default function BusinessIntelligence() {
    return (
        <>
            <div className={`${styles.businessIntelligence}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className={`${styles.titleCenter}`}>
                                <h1 className={`${styles.titleUnderline}`}>Our AI Expertise</h1>
                                <p>At the core of our AI innovation strategy is driven by a deep <br /> understanding of diverse technologies and industry-specific needs.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className={`${styles.sectionInfo}`}>
                                <h2>We specialize in:</h2>
                                <div className={`${styles.accordianWrap}`}>
                                    <AccordionBusiness />        
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className={`${styles.sectionImage}`}>
                                <div className={`${styles.thumbnail}`}>
                                    <Image
                                        src="/img/advancedAnalytics/dummyRect.png"
                                        alt="dummy images"
                                        height={528}
                                        width={624}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}