import React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";

import Header from "../header";
import Banner from './banner/banner';
// import Box from "./box/box";
// import Introduction from "./introduction/introduction";
// import Features from "./features/features";
// import UseCase from "./useCase/usecase";
// import BusinessIntelligence from "./businessIntelligence/businessIntelligence";
// import PurpleBox from "./purpleBox/purpleBox";
import FooterVersionSecond from "../footerv2";

export default function SecurityCompliance() {
    return (
        <>

            <Head>
                <title>
                    Shodat AI Platform | Security & Compliance
                </title>
                <meta
                    name="title"
                    content="Shodat Security & Compliance | Security & Compliance"
                />
                <meta
                    name="description"
                    content="Explore the powerful Shodat Security & Compliance  eOps, offering advanced AI solutions to meet the unique needs of your industry."
                />
                <meta
                    name="keywords"
                    content="Security & Compliance Shodat eOps Security & Compliance Data integrationScalable solutions"
                />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
            </Head>

            <div className="aiInnovations">
                {/* Header */}
                <Header />

                {/* Banner */}
                <Banner />

                {/* Box */}
                {/* <Box /> */}

                {/* Introduction */}
                {/* <Introduction /> */}

                {/* Features */}
                {/* <Features /> */}

                {/* Business Intelligence */}
                {/* <BusinessIntelligence /> */}

                {/* Purple Section */}
                {/* <PurpleBox /> */}

                {/* Use Cases */}
                {/* <UseCase /> */}

                {/* Footer */}
                <FooterVersionSecond />

            </div>

        </>
    )
}