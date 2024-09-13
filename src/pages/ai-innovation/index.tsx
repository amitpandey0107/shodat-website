import React from "react";
import styles from "./ai-innovation.module.css";
import Head from "next/head";

import Header from "../header";
import Banner from './banner/banner';
import Box from "./box/box";
import Introduction from "./introduction/introduction";
import BusinessIntelligence from "./businessIntelligence/businessIntelligence";
// import Features from "./features/features";
// import UseCase from "./useCase/usecase";
// import PurpleBox from "./purpleBox/purpleBox";
import FooterVersionSecond from "../footerv2";

export default function AiInovation() {
    return (
        <>

            <Head>
                <title>
                    Shodat AI Platform | AI Inovation
                </title>
                <meta
                    name="title"
                    content="Shodat AI Inovation | AI Inovation"
                />
                <meta
                    name="description"
                    content="Explore the powerful Shodat AI Inovation  eOps, offering advanced AI solutions to meet the unique needs of your industry."
                />
                <meta
                    name="keywords"
                    content="AI Inovation Shodat eOps AI Inovation Data integrationScalable solutions"
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
                <Box />

                {/* Introduction */}
                <Introduction />

                {/* Features */}
                {/* <Features /> */}

                {/* Business Intelligence */}
                <BusinessIntelligence />

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