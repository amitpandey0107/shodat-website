import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./data-engineering.module.css";
export default function Cta() {
    return (
       <div className={`${styles.cta}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className={`${styles.ctaText}`}>
                            <h2>We combine innovation with deep expertise across proven technology stack to tailor the services that solve your biggest challenges</h2>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}