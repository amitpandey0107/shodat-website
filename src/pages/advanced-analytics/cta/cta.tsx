import React from "react";
import styles from './cta.module.css';

export default function Cta() {
    return (
        <>
            <div className={`${styles.experienceFuture} experienceFutureSection`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                            <div className={`${styles.experienceContent}`}>
                                <h2>Unlocking Insights, Driving Decisions</h2>
                                <p>
                                At Shodat we help organizations make informed decisions that drive growth, optimize operations, and enhance customer experiences by turning vast amounts of data into actionable insights,Our expertise in Advanced Analytics and BI, powered by the latest technologies, ensures that your business remains agile and ahead of the curve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}