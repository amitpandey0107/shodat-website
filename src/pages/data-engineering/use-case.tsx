import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./data-engineering.module.css";
import UseCasesSlider from "./useCasesSlider";

export default function UseCase(props: any) {
    return (
        <section className={`${styles.useCase}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className={`${styles.titleUnderline}`}>
                            <h2>Use Cases</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <UseCasesSlider />
                    </div>

                    {/* <div className="col-sm-3">
                        <div className={`${styles.useCaseSliderWrap}`}>
                            <div className={`${styles.sliderItems}`}>
                                <div className={`${styles.imageContainer}`}>
                                    <Image
                                        height={147}
                                        width={321}
                                        alt="Data ETL (Extract, Transform, Load)"
                                        src={"/img/dataEngineering/usecase/realTime.png"}
                                    />
                                </div>
                                <div className={`${styles.textContainer}`}>
                                    <h6>Real-Time Data Processing Financial Services</h6>
                                    <p>A leading financial institution employs real-time data processing to monitor transactions and detect fraudulent activities.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}