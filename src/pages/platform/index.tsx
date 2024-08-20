import React from "react";
import styles from './platform.module.css';
import type { Metadata } from 'next'
import Head from "next/head";
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

export const metadata: Metadata = {
    title: 'Shodat AI Platform | Advanced AI Solutions for Automotive, Manufacturing ,Oil & Gas and Logistics  Industry',
    description: '...',
}
export default function Platform() {

    return (
        <>
            <Head>
                <title>Shodat AI Platform | Advanced AI Solutions for Automotive, Manufacturing ,Oil & Gas and Logistics  Industry</title>
                <meta name="title" content="Shodat AI Platform | Advanced AI Solutions for Automotive, Manufacturing ,Oil & Gas and Logistics  Industry" />
                <meta name="description" content="Explore the powerful Shodat AI platform eOps, offering advanced AI solutions to meet the unique needs of your industry." />
                <meta name="keywords" content="AI platform Shodat eOps Advanced analyticsData integrationScalable solutions" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
            </Head>

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
                <Offers />

                {/* Shodat eOps™ Features */}
                <ShodatYAI />                

                {/* Case Studies */}
                <CaseStudy />

                {/* Shodat eOps™ Features */}
                <WhyChoose />

                {/* Footer */}
                <FooterVersionSecond />
            </div>
        </>
    )
}