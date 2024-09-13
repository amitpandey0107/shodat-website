import React from "react";
import styles from './box.module.css';
import Link from "next/link";
import Image from "next/image";

export default function Box() {

    return (
        <div className={`${styles.blackBox}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className={`${styles.phraseBox}`}>
                            <h4><span>91.9% of organizations</span> achieved measurable value from data and analytics investments in 2023.</h4>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className={`${styles.phraseBox}`}>
                            <h4>3 in 5 organizations are using data analytics to drive business innovation. <span>56% of data leaders</span> plan on increasing their budgets this year.</h4>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className={`${styles.phraseBox}`}>
                            <h4>Data governance is the top priority for <span>3 in 5 data leaders-In</span> an age of pervasive cyberattacks and stricter data regulations.</h4>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className={`${styles.phraseBox}`}>
                            <h4>Just one-third of data leaders currently track their teams&apos; <span>ROI: 23% track</span> operational KPIs while <span>10% use</span> quantitative and qualitative success metrics.</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}