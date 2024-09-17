import React from "react";
import styles from './banner.module.css';
import Link from "next/link";
import Image from "next/image";

export default function Banner() {

    return (
        <div className={`${styles.banner}`}>
            <div className={`${styles.bannerContent}`}>
                <div className={`${styles.bannerContentLeft}`}>
                    <div className={`${styles.bannerInfo}`}>
                        <h2 className={`${styles.bannerTitle}`}>Transforming Data into <br />Actionable Insights</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry.</p>
                        {/* <Link href="#" className={`${styles.btnGetStarted}`}>
                            <span>Get Started</span>
                            <Image
                                src="/img/arrowRight.svg"
                                alt="arrow right"
                                height={20}
                                width={20}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}