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
                        <h2 className={`${styles.bannerTitle}`}>Cultivating innovation</h2>
                        <p>Redefining possibilities in data analytics.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}