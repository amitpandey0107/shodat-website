import React from "react";
import Image from "next/image";
import styles from "./data-engineering.module.css";
import "bootstrap/dist/css/bootstrap.css";
import DataStorageSlider from "./dataStorageSlider";

export default function DataStorage() {
    return (
        <div className={`${styles.keyFeatures} ${styles.dataStorage}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-5 px-0">
                        <div className={`${styles.dataEtlBox}`}>
                            <h2>Data Storage, Warehousing and <br/>Data Marts</h2>
                            <p>We provide comprehensive solutions for data storage and management</p>
                            <div className={`${styles.etlImage}`}>
                                <Image
                                    src="/img/dataEngineering/DataStorage.png"
                                    alt="Data ETL"
                                    height={286}
                                    width={481}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-7 px-0">
                        <div className={`${styles.featureBox}`}>

                            <DataStorageSlider />   

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}