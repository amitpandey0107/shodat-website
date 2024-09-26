import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./use-case.module.css";
import Head from "next/head";

import Header from "../header";
import FooterVersionSecond from "../footerv2";
import Layout from "./layout";

export default function RealtimeTrackingMonitoring(props: any) {
  const data = {
    title: "Real-time tracking & Monitoring in modern Logistics",
    logo: "sgAnalytics.png",
    contentImage: "real-time-data-img.png",
    info_1:
      "A global logistics firm utilized a combination of IoT sensors, GPS tracking, and advanced analytics platforms to achieve real-time visibility into their operations. With this setup Shodat Inc, enabled them to track shipments, monitor vehicle status, and get immediate insights into any delays or issues.",
    info_2: "",
    info_4: "",
    boxedInfo: [
      {
        highlight: "15%",
        text: "By leading to a 15% increase in overall profitability",
      },
      {
        highlight: "25%",
        text: "Fuel costs increase in on-time deliveries",
      },
      {
        highlight: "85%",
        text: "Forecast delays with 85% accuracy",
      },
    ],
    points: [
      {
        title: "Improved Profitability Analysis",
        desc: "leading to a 15% increase in overall profitability.",
      },
      {
        title: "Enhanced Operational Efficiency",
        desc: "Real-time tracking of tonnage transportation between special ports and terminals improved operational efficiency and resource allocation leading to a 20% reduction in fuel costs and a 25% increase in on-time deliveries.",
      },
      {
        title: "Proactive Delay Management",
        desc: "The predictive analytics capabilities allowed the logistics company to forecast delays with 85% accuracy.",
      },
      {
        title: "",
        desc: "A leading logistics company operating across multiple countries, handling vast volumes of tonnage, sought to enhance its operations through data-driven insights. The company faced significant challenges, including a lack of visibility into daily profitability calculations, difficulty tracking tonnage between special ports and terminals, inefficient customer management and invoicing processes, and forecasting delays.",
      },
      {
        title: "",
        desc: "To address these issues, the company with help of Shadat, implemented a real-time activity tracking system, which provided immediate visibility into operations and profitability. This led to a 15% increase in overall profitability. Enhanced operational visibility improved resource allocation, resulting in a 25% increase in on-time deliveries. Additionally, optimized routing, informed by data insights, reduced fuel costs by 20%.",
      },
      {
        title: "",
        desc: "The company also developed a forecasting model with close to 98% accuracy, allowing it to proactively predict operational metrics and mitigate delivery risks. This accurate forecasting minimized disruptions and effectively managed delivery risks. Overall, the integration of data engineering significantly improved the company's efficiency and profitability.",
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
