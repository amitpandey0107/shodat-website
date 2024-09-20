import React from "react";
import styles from "./ai-innovation.module.css";
import Head from "next/head";

import Header from "../header";
import Banner from './banner/banner';
import Box from "./box/box";
import Introduction from "./introduction/introduction";
import BusinessIntelligence from "./businessIntelligence/businessIntelligence";
import AISection from "./aisection/ai";
import AIInfoBlock from "./infoblock/infoblock";
import Cta from "./cta/cta";
import Explainable from "./explainable/explainable";
import ShodatXDI from "./shodatXDI/shodatXDI";
import ShodatYAI from "./shodatYAI/shodatYAI";
import ShodatEops from "./shodatEops/shodatEops";
import UseCases from "./usecases/usecases";
import FooterVersionSecond from "../footerv2";

export default function AiInovation() {

    const data1 = {
        title: "Vision AI : Advanced Image Recognition and Inspection",
        subTitle: "Our Vision AI capabilities",
        intro: "Offer advanced image recognition capabilities, enabling businesses to perform detailed inspections and quality checks. This system is ideal for industries where precise image analysis is crucial, such as manufacturing and healthcare.",
        feat: [
            {
                title: "Key Benefits",
                text: [
                    {
                        bold: "Comprehensive Image Analysis",
                        text: "Detects and classifies a wide range of defects and anomalies."
                    },
                    {
                        bold: "Enhanced Inspection",
                        text: "Automates routine inspections, reducing manual labor and error rates."
                    },
                    {
                        bold: "Scalable Solutions",
                        text: "Easily adapts to various scales of operation."
                    }
                ]
            }
        ]
    }
    const data2 = {
        title: "Lightweight ML Models",
        subTitle: "Efficiency Meets Performance",
        intro: "Shodat Inc. specializes in developing lightweight machine learning models that deliver high performance without requiring extensive computational resources. These models are ideal for applications where speed and efficiency are critical.",
        feat: [
            {
                title: "Advantages",
                text: [
                    {
                        bold: "Scalability: ",
                        text: "Easily scalable across various devices and platforms."
                    },
                    {
                        bold: "Cost-Effective: ",
                        text: "Reduces the need for expensive hardware."
                    },
                    {
                        bold: "High Performance: ",
                        text: "Maintains high accuracy and reliability."
                    }
                ]
            }
        ]
    }
    const data3 = {
        title: "Intelligent Process Automation (IPA)",
        subTitle: "",
        intro: "Our Intelligent Process Automation (IPA) solutions integrate AI and machine learning to automate repetitive tasks, streamline workflows and enhance operational efficiency. Shodat Inc.'s IPA capabilities help businesses reduce manual labor, minimize errors and improve productivity.",
        feat: [
            {
                title: "IPA Capabilities:",
                text: [
                    {
                        bold: "Automated Workflows: ",
                        text: "Seamless automation of complex business processes."
                    },
                    {
                        bold: "Enhanced Decision-Making: ",
                        text: "AI-driven insights for better decision-making."
                    },
                    {
                        bold: "Resource Optimization: ",
                        text: "Maximizing resource utilization and minimizing waste."
                    }
                ]
            }
        ]
    }

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

                {/* AI Section */}
                <AISection />

                {/* AI Info Block */}
                <AIInfoBlock sectionData={data1} mode={1} />

                {/* AI Info Block */}
                <AIInfoBlock sectionData={data2} mode={2} />

                {/* AI Info Block */}
                <AIInfoBlock sectionData={data3} mode={1} />

                {/* CTA */}
                {/* <Cta /> */}

                <div className="bgColors">
                    {/* Explainable */}
                    <Explainable />

                    {/* Shodat XDI */}
                    <ShodatXDI />

                    {/* Shodat YAI */}
                    <ShodatYAI />

                    {/* Shodat EOPS */}
                    <ShodatEops />
                </div>

                {/* Use Cases */}
                <UseCases />

                {/* Footer */}
                <FooterVersionSecond />

            </div>

        </>
    )
}