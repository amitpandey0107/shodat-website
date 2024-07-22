import React from "react";
import styles from './platform.module.css';
import Header from "../header";
import FooterVersionSecond from "../footerv2";
import Banner from "./banner";
import Questions from "./questions";
import Introduction from "./introduction";
import Features from "./features";
import ShodatYAI from "./shodatYAI";
import Offers from "./offers";
import WhyChoose from "./whyChoose";
import CaseStudy from "./caseStudy";


export default function Platform() {

    return (
        <div className="platform">

            {/* -- Header -- */}
            <Header />

            {/* Banner */}
            <Banner />

            {/* Questions */}
            <Questions />

            {/* Introducing Shodat eOps™ */}
            <Introduction />

            {/* Shodat eOps™ Features */}
            <Features />

            {/* Offers */}
            {/* <Offers /> */}

            {/* Shodat eOps™ Features */}
            {/* <ShodatYAI /> */}

            {/* Shodat eOps™ Features */}
            {/* <WhyChoose /> */}

            {/* Case Studies */}
            {/* <CaseStudy /> */}

            {/* Footer */}
            <FooterVersionSecond />
        </div>
    )
}