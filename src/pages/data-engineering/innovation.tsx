import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./data-engineering.module.css";

export default function Innovation() {
    return (
        <div className={`${styles.innovation}`}>
            <div className="container-fluid">
                <div className={`row ${styles.rowFlex}`}>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={`${styles.blackBox}`}>
                            <h3>Engineering Data for Precision, <span>Insight, and Innovation</span></h3>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={`${styles.information}`}>
                            <h2>We Craft Intelligent Data Solutions for Peak Performance.</h2>
                            <p>At Shodat Inc., we understand that data is the backbone of modern businesses. Our data engineering services are designed to help organizations harness the power of their data to drive smarter decisions, optimize operations, and unlock new opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
