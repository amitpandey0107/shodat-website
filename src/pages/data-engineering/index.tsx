import React from "react";
import Head from "next/head";
import Header from "../header";
import FooterVersionSecond from "../footerv2";
import Banner from "./banner";
import Innovation from "./innovation";
import OurApproach from "./our-approach";
import Cta from "./cta";
import DataAccordian from "./data-accordian";
import UseCase from "./use-case";
import HandlineLargeData from "./handling-large-data";
import DataSecurityGovernance from "./data-security-governance";

function DataEngineering() {
    return (
        <>
            <Head>
                <title>
                    Shodat AI Platform | Data Engineering
                </title>
                <meta
                    name="title"
                    content="Shodat AI Platform | Data Engineering"
                />
                <meta
                    name="description"
                    content="Explore the powerful Shodat AI platform eOps, offering advanced AI solutions to meet the unique needs of your industry."
                />
                <meta
                    name="keywords"
                    content="AI platform Shodat eOps Advanced analyticsData integrationScalable solutions"
                />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
            </Head>
            <div className="dataEngineering">
                {/* -- Header -- */}
                <Header />

                {/* Banner */}
                <Banner />

                {/* Innovation */}
                <Innovation />

                {/* Our Approach */}
                <OurApproach />

                {/* Handling Large Data Volumes */}
                <HandlineLargeData />

                {/* Data Security, Governance & Compliance */}
                <DataSecurityGovernance />

                {/* Use Case */}
                <UseCase />

                {/* CTA */}
                <Cta />

                {/* Data Accordian */}
                <DataAccordian />

                {/* Footer */}
                <FooterVersionSecond />
            </div>
        </>
    );
}
export default DataEngineering;
