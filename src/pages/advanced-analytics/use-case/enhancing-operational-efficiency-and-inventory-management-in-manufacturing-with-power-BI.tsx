import React from "react";
import styles from "./use-case.module.css";
import Head from "next/head";

import Header from "../../header";
import FooterVersionSecond from "../../footerv2";
import Layout from "./layout";

export default function EnhancingOperationalEfficiencyandInventoryManagementinManufacturingwithPowerBI(props: any) {
    const data = {
        "title": "Enhancing Operational Efficiency and Inventory Management in Manufacturing  with Power BI",
        "logo": "sgAnalytics.png",
        "contentImage": "case2.png",
        "info_1": "A leading player in the manufacturing industry sought to improve operational efficiency and inventory management processes. Facing challenges such as inefficient inventory management across multiple warehouses, difficulty in identifying slow-moving stock, and lack of accurate sales and demand forecasting, they turned to Power BI to streamline operations and gain valuable insights from their data.",
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
                        "title":"Inefficient Inventory Management:",
                        "text": "Struggles with managing inventory across multiple warehouses."
                    },
                    {
                        "title":"Identifying Slow-Moving Stock:",
                        "text": "Difficulty pinpointing slow-moving and stagnant inventory."
                    },
                    {
                        title:"Inaccurate Sales and Demand Forecasting:",
                        text:"Ineffective forecasting leading to overstocking or understocking."
                    }
                ]
            },
            {
                "title": "Solution by Shodat Inc",
                "desc": "",
                "desc2":"",
                "listItems": [
                    {
                        title:"Automated Reporting:",
                        text:"Implemented automated daily inventory and customized reports using Power BI to provide real-time visibility into inventory levels and movements."
                    },
                    {
                        title:"Intricate Calculations:",
                        text:"Used Power BI to perform complex calculations to measure slow-moving stock and identify stagnant inventory."
                    },
                    {
                        title:"Accurate Forecasting:",
                        text:"Developed accurate sales and demand forecasts based on historical data and market trends using Power BI's advanced analytics capabilities."
                    }
                ]
            },
            {
                title:"Outcomes",
                desc: "",
                desc2:"",
                listItems:[
                    {
                        title:"Improved Inventory Management:",
                        text:"Real-time tracking of stock levels across warehouses enhanced inventory accuracy and reduced stockouts by 30%."
                    },
                    {
                        title:"Enhanced Sales Forecasting:",
                        text:"Accurate sales forecasting improved demand planning and inventory optimization, reducing excess inventory by 25% and minimizing associated costs by 20%."
                    },
                    {
                        title:"Operational Efficiency:",
                        text:"Streamlined operations and data-driven insights led to a 15% increase in overall operational efficiency."
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