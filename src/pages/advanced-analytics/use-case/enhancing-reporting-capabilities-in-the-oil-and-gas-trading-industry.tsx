import React from "react";
import styles from "./use-case.module.css";
import Head from "next/head";

import Header from "../../header";
import FooterVersionSecond from "../../footerv2";
import Layout from "./layout";

export default function EnhancingReportingCapabilities(props: any) {
    const data = {
        "title": "Enhancing Reporting Capabilities in the Oil and Gas Trading Industry",
        "logo": "sgAnalytics.png",
        "contentImage": "case4.png",
        "info_1": "A prominent player in the oil and gas trading industry recognized the need for advanced reporting capabilities to perform complex calculations, such as forward pricing, price index analysis, weighted hedges, and exposures. The existing system was inadequate, leading to delays and inaccuracies in decision-making.",
        "info_2":"",
        "info_3":"",
        "boxedInfo": [],
        "points": [
            {
                "title": "Challenges",
                "desc": "",
                "desc2":"",
                "listItems": [
                    {
                        "title":"Lack of Real-Time Insights: ",
                        "text": "Difficulties in obtaining real-time insights into forward pricing, price indexes, and weighted hedges, causing delays in decision-making."
                    },
                    {
                        "title":"Complex Calculations: ",
                        "text": "Manual calculations of exposures and risk assessments were time-consuming and prone to errors."
                    },
                    {
                        title:"Inefficient Reporting Processes: ",
                        text:"Outdated and inefficient reporting systems resulted in delays and inaccuracies in generating critical reports."
                    }
                ]
            },
            {
                "title": "Solution by Shodat Inc",
                "desc": "",
                "desc2":"",
                "listItems": [
                    {
                        title:"Utilization of Power BI: ",
                        text:"Deployed Power BI to analyze and visualize data from multiple sources, enabling real-time insights and interactive reporting."
                    },
                    {
                        title:"Customized Dashboards: ",
                        text:"Developed custom-built dashboards to provide detailed insights into forward pricing, price index analysis, weighted hedges, exposures, and other key performance indicators."
                    },
                    {
                        title:"Automation of Complex Calculations: ",
                        text:"Implemented advanced algorithms to automate complex calculations, such as exposures and risk assessments, reducing manual effort and minimizing errors."
                    },
                    {
                        title:"Integration with Trading Systems:",
                        text:"Ensured seamless integration with existing trading systems for real-time data extraction, ensuring accuracy and timeliness in reporting."
                    }
                ]
            },
            {
                title:"Outcomes",
                desc: "",
                desc2:"",
                listItems:[
                    {
                        title:"Enhanced Decision-Making:",
                        text:"Power BI automation reduced the time spent on forward pricing calculations by 50%, leading to faster decision-making and improved operational efficiency."
                    },
                    {
                        title:"Improved Efficiency:",
                        text:"Automation of complex calculations reduced manual effort and improved report accuracy, enabling teams to focus on strategic analysis rather than routine tasks."
                    },
                    {
                        title:"Better Risk Management:",
                        text:"Advanced analytics provided deeper insights into exposures and risk assessments, allowing the company to proactively manage risks and optimize hedging strategies, resulting in a 15% reduction in trading losses."
                    },
                    {
                        title:"Streamlined Reporting Processes:",
                        text:"Implementation of Power BI streamlined reporting processes, leading to 40% faster report generation and improved data accuracy."
                    }
                ]
            },
            {
                title:"",
                desc: "This case study demonstrates how Shodat Inc. leveraged Power BI to transform the manufacturing company's inventory management and operational efficiency, resulting in significant cost savings and enhanced productivity.",
                desc2:"",
                listItems:[]
            }
        ]
    }
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
                    <Layout pageData={data} />
                </div>

                {/* Footer */}
                <FooterVersionSecond />
            </div>

        </>
    )
}