import React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";

import Header from "../header";
import Banner from './banner/banner';
import Box from "./box/box";
import Introduction from "./introduction/introduction";
import Features from "./features/features";
import UseCase from "./useCase/usecase";
import BusinessIntelligence from "./businessIntelligence/businessIntelligence";
import PurpleBox from "./purpleBox/purpleBox";
import Cta from "./cta/cta";
import Tabs from "./tabs/tabs";
import InfoBlock from "./infoBlock/infoblock";
import InfoBlock2 from "./infoBlock2/infoblock";
import FooterVersionSecond from "../footerv2";

export default function AdvancedAnalytics() {
    return (
        <>

            <Head>
                <title>
                    Shodat AI Platform | Data Engineering
                </title>
                <meta
                    name="title"
                    content="Shodat Advanced Analytics | Data Engineering"
                />
                <meta
                    name="description"
                    content="Explore the powerful Shodat Advanced Analytics eOps, offering advanced AI solutions to meet the unique needs of your industry."
                />
                <meta
                    name="keywords"
                    content="Advanced Analytics Shodat eOps Advanced analyticsData integrationScalable solutions"
                />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
            </Head>

            <div className="advancedAnalytics">
                {/* Header */}
                <Header />

                {/* Banner */}
                <Banner />

                {/* Box */}
                <Box />

                {/* Introduction */}
                <Introduction />

                {/* Features */}
                <Features />

                {/* Business Intelligence */}
                <BusinessIntelligence />

                {/* Purple Section */}
                {/* <PurpleBox /> */}

                {/* CTA */}
                <Cta />

                {/* TABS */}
                <Tabs/> 

                {/* INFO BLOCK */}
                <InfoBlock />

                {/* INFO BLOCK */}
                <InfoBlock2 />

                {/* Use Cases */}
                <UseCase />

                {/* Footer */}
                <FooterVersionSecond />

            </div>

        </>
    )
}