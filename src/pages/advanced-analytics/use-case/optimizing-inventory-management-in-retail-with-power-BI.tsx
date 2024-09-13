import React from "react";
import styles from "./use-case.module.css";
import Head from "next/head";

import Header from "../../header";
import FooterVersionSecond from "../../footerv2";
import Layout from "./layout";

export default function OptimizingInventoryManagement(props: any) {
    const data = {
        "title": "Optimizing Inventory Management in Retail with Power BI",
        "logo": "sgAnalytics.png",
        "contentImage": "real-time-data-img.png",
        "info_1": "A leading retail company faced challenges in managing its extensive inventory across multiple warehouses. The company needed a solution to optimize stock levels, identify slow-moving items, and improve overall inventory efficiency. Power BI was chosen to provide granular insights and streamline inventory processes.",
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
                        "text": "Difficulty in tracking stock levels, managing overstock and understock, and identifying deadstock."
                    },
                    {
                        "title":"Data Fragmentation:",
                        "text": " Inventory data was scattered across multiple systems, making it hard to get a unified view."
                    },
                    {
                        title:"Manual Processes:",
                        text:"Reliance on manual sorting and tracking of inventory, leading to errors and inefficiencies."
                    },
                    {
                        title:"Lack of Insights:",
                        text:"Limited visibility into inventory performance metrics such as stock turns, inventory-to-purchase ratio, and GMROI."
                    }
                ]
            },
            {
                "title": "Solution by Shodat Inc",
                "desc": "",
                "desc2":"",
                "listItems": [
                    {
                        title:"Granular Reporting:",
                        text:" Implemented Power BI to create detailed reports on stock turns, inventory-to-purchase ratio, slow-moving stock, and GMROI by manufacturer, device, or location."
                    },
                    {
                        title:"Inventory Tracking:",
                        text:" Developed Power BI dashboards to track and monitor inventory levels, manufacturing and expiry dates, prices, and batch numbers."
                    },
                    {
                        title:"Optimized Stock Management:",
                        text:"Provided insights into product and raw material purchases, re-stocking, and re-ordering plans."
                    },
                    {
                        title:"Deadstock Elimination:",
                        text:"Enabled the creation of plans to eliminate deadstock and improve overall stocking efficiency."
                    },
                    {
                        title:"Multi-Warehouse Management:",
                        text:"Facilitated procurement budgeting and planning across multiple warehouses through comprehensive reports."
                    }
                ]
            },
            {
                title:"Outcomes",
                desc: "",
                desc2:"",
                listItems:[
                    {
                        title:"Improved Inventory Accuracy:",
                        text:"Granular reports allowed the Inventory Head to accurately identify stock levels and sort inventory based on various parameters, leading to a 25% improvement in inventory accuracy."
                    },
                    {
                        title:"Enhanced Efficiency:",
                        text:"Power BI dashboards streamlined the tracking of inventory across multiple warehouses, reducing manual effort by 30%."
                    },
                    ,
                    {
                        title:"Informed Decision-Making:",
                        text:"Detailed reports on procurement and re-stocking enabled more strategic planning, improving inventory turnover by 15%."
                    },
                    {
                        title:"Cost Savings:",
                        text:"Better inventory optimization and management led to a 10% reduction in storage and handling costs."
                    }
                ]
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