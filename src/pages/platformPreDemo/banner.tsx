import React from "react";
import styles from './platform.module.css';
import Link from "next/link";
import Image from "next/image";

export default function Banner() {

    return (
        <div className={`${styles.platformBanner}`}>
            <div className={`${styles.bannerContent}`}>
                <div className={`${styles.bannerContentLeft}`}>
                    <div className={`${styles.bannerInfo}`}>
                        <h2 className={`${styles.bannerTitle}`}>Shodat eOps™</h2>
                        <p>An advanced asset tracking <br /> and quality management platform</p>
                        <Link href="#" className={`${styles.btnGetStarted}`}>
                            <span>Get Started</span>
                            <Image
                                src="/img/arrowRight.svg"
                                alt="arrow right"
                                height={20}
                                width={20}
                            />
                        </Link>
                    </div>
                </div>
                <div className={`${styles.bannerContentRight}`}>
                    <div className={`${styles.bannerImage}`}>
                    <Image
                                src="/img/platform/banner.png"
                                alt="banner"
                                height={362}
                                width={683}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}