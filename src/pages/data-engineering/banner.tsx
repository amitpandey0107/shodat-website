import React, { useState, useEffect } from "react";
import styles from './data-engineering.module.css';
import Image from "next/image";
import RequestDemoModal from "../header/request-demo";

export default function Banner() {
    const [modalShow, setModalShow] = useState(false);
    const openModal = () => {
        setModalShow(true);
    }

    return (
        <>
            <div className={`${styles.platformBanner}`}>
                <div className={`${styles.bannerContent}`}>
                    <div className={`${styles.bannerContentLeft}`}>
                        <div className={`${styles.bannerInfo}`}>
                            <h2 className={`${styles.bannerTitle}`}>Empowering Insights Through <br />Robust Data Engineering</h2>
                            <p>Explore our data engineering solutions</p>
                            <button onClick={openModal} className={`${styles.btnGetStarted}`}>
                                <span>Get Started</span>
                                <Image
                                    src="/img/arrowRight.svg"
                                    alt="arrow right"
                                    height={20}
                                    width={20}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {modalShow && (
                <RequestDemoModal show={modalShow} onHide={() => setModalShow(false)} />
            )}

        </>
    )
}