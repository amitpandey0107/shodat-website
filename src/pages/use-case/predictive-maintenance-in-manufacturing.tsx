import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./use-case.module.css";
import Head from "next/head";

import Header from "../header";
import FooterVersionSecond from "../footerv2";
import Layout from "./layout";

export default function PredictiveMaintenanceInManufacturing(props: any) {
  const data = {
    title: "Predictive Maintenance in Manufacturing",
    logo: "sgAnalytics.png",
    contentImage: "real-time-data-img.png",
    info_1:
      "A global Machine tools manufacturer uses predictive analytics to foresee equipment failures before they occur. By analyzing data from sensors and machinery, they can predict when maintenance is needed, thus preventing downtime.",
    info_2:
      "The company integrated IoT sensors across its production lines to collect real-time data on machine performance, including vibration, temperature, and pressure",
    info_3:
      "Collected data was fed into a predictive analytics platform that used machine learning algorithms to identify patterns and predict potential failures.",
    info_4:
      "The system provided insights into the health of the machinery, allowing the maintenance team to perform necessary repairs before any breakdowns occurred",
    boxedInfo: [
      {
        highlight: "30%",
        text: "company reduced unplanned downtime",
      },
      {
        highlight: "20%",
        text: "Company saved maintenance costs",
      },
      {
        highlight: "15%",
        text: "Overall production efficiency increased as machinery",
      },
    ],
    points: [
      {
        title: "Impact",
        desc: "Reduced maintenance costs, minimized downtime, and increased productivity.",
      },
      {
        title: "Reduced Downtime",
        desc: "By predicting equipment failures before they happened, the company reduced unplanned downtime by 30%.",
      },
      {
        title: "Cost Savings",
        desc: "The company saved approximately 20% in maintenance costs by shifting from reactive to predictive maintenance.",
      },
      {
        title: "Increased Production Efficiency",
        desc: "Overall production efficiency increased by 15% as machinery was kept in optimal working condition, leading to fewer interruptions in the manufacturing process.",
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
