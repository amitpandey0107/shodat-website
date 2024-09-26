import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./use-case.module.css";
import Head from "next/head";

import Header from "../header";
import FooterVersionSecond from "../footerv2";
import Layout from "./layout";

export default function RealTimeDataProcessingFinancialServices(props: any) {
  const data = {
    title: "Real-Time Data Processing Financial Services",
    logo: "sgAnalytics.png",
    contentImage: "real-time-data-img.png",
    info_1:
      "A leading retail and e-commerce company sought to enhance its data management capabilities to improve decision-making, optimize operations, and boost profitability. The company faced several challenges, including fragmented data sources, inefficient data processing, and inadequate insights into customer behavior and sales trends.",
    info_2:
      "With Shodat Inc, the company  uses advanced ETL (Extract, Transform, Load) processes to handle massive amounts of data The company extracted data from multiple sources including point-of-sale systems, customer relationship management (CRM) software, social media platforms, and product review sites.",
    info_3:
      "The ETL processes managed over 1TB of data daily, ensuring that all relevant information was captured and ready for transformation.The extracted data underwent cleansing, normalization, and enrichment to ensure consistency and accuracy, maintaing data availability at 99.9%.",
    boxedInfo: [
      {
        highlight: "1TB",
        text: "The ETL processes managed over 1TB of data daily",
      },
      {
        highlight: "40%",
        text: "Optimized to handle real-time data, reducing latency",
      },
      {
        highlight: "30%",
        text: "Inventory tracking and forecasting, reducing stockouts",
      },
    ],
    points: [
      {
        title: "Speed",
        desc: "The transformation processes were optimized to handle real-time data, reducing latency by 40%.",
      },
      {
        title: "Impact",
        desc: "Improved inventory management, The centralized data warehouse enabled more accurate inventory tracking and forecasting, reducing stockouts by 30% and overstock situations by 25%.",
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Shodat AI Platform | Use Cases</title>
        <meta name="title" content="Shodat AI Platform | Use Cases" />
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
          <Layout pageData={data} />
        </div>

        {/* Footer */}
        <FooterVersionSecond />
      </div>
    </>
  );
}
