import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./use-case.module.css";
import Head from "next/head";

import Header from "../header";
import FooterVersionSecond from "../footerv2";
import Layout from "./layout";

export default function RealTimeDataProcessingFinancialServices(props: any) {
    return (
        <>
            <Head>
                <title>
                    Shodat AI Platform | Use Cases
                </title>
                <meta
                    name="title"
                    content="Shodat AI Platform | Use Cases"
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

            <div className="useCases">
                {/* -- Header -- */}
                <Header />

                
                <div className={`${styles.useCasesWrapper}`}>
                    <Layout />
                </div>

                {/* Footer */}
                <FooterVersionSecond />
            </div>

        </>
    )
}