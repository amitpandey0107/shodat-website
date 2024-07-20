import React from "react";
import styles from './platform.module.css';
import Header from "../header";
import FooterVersionSecond from "../footerv2";
import Banner from "./banner";
import Questions from "./questions";


export default function Platform() {

    return (
        <div className="platform">

            {/* -- Header -- */}
            <Header />

            {/* Banner */}
            <Banner />

            {/* Questions */}
            <Questions />

            {/* Footer */}
            <FooterVersionSecond />
        </div>
    )
}