import React, { useState, useEffect } from "react";
import styles from "./data-engineering.module.css";
import ApproachDesktop from "./approachDesktop";
import ApproachMobile from "./approachMobile";

export default function OurApproach() {


    return (
        <>
            <div className={`${styles.ourApproach}`}>
                <div className={`container-fluid ${styles.zIndex99}`}>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className={`${styles.titleUnderline}`}>
                                <h2>Our Approach</h2>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`${styles.desktopV}`}>
                    <ApproachDesktop />
                </div>
                <div className={`${styles.mobileV}`}>
                    <ApproachMobile />
                </div>

            </div>
        </>

    );
}
