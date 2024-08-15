import React from "react";
import styles from './data-engineering.module.css';
import Link from "next/link";
import Image from "next/image";
import Accordion from 'react-bootstrap/Accordion';

export default function DataAccordian() {
    return (
        <div className={`${styles.dataAccordian}`}>

            {/* Data ETL */}
            <div className={`${styles.dataETL}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className={`${styles.aside}`}>
                                <div className={`${styles.titleUnderline}`}>
                                    <h2>Data ETL</h2>
                                </div>
                                <h5>Transforming Data with Azure Data Factory and Databricks</h5>
                                <h6>Streamline Your Data Flow</h6>
                                <p>Efficient data extraction, transformation, and loading (ETL) are the foundation of any robust data strategy. At Shodat Inc., We utilize Azure Data Factory and Databricks to ensure your data is seamlessly integrated, transformed, and ready for analysis.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8">
                            <div className={`${styles.section}`}>
                                <Accordion defaultActiveKey="0" className="accordionCustom">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className={`${styles.accordionHeader}`}>
                                            <div className={`${styles.headerLogo}`}>
                                                <Image
                                                    src="/img/dataEngineering/azure_data_factory.png"
                                                    alt="Azure Data Factory"
                                                    height={70}
                                                    width={70}
                                                />
                                            </div>
                                            <div className={`${styles.headerText}`}>Azure Data Factory</div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className={`${styles.accordionBody}`}>
                                            <p><strong>Seamless Data Integration:</strong> Connect data from various sources, whether on-premises or in the cloud, to create a unified data pipeline.</p>
                                            <p><strong>Scalable ETL Workflows:</strong> Design, automate, and orchestrate ETL workflows that scale with your business needs.</p>
                                            <p><strong>Cost-Effective:</strong> Optimize costs with Azure&apos;s pay-as-you-go model, ensuring you only pay for what you use.</p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                        <div className={`${styles.accordionHeader}`}>
                                            <div className={`${styles.headerLogo}`}>
                                                <Image
                                                    src="/img/dataEngineering/databricks.png"
                                                    alt="Databricks"
                                                    height={70}
                                                    width={70}
                                                />
                                            </div>
                                            <div className={`${styles.headerText}`}>Databricks</div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className={`${styles.accordionBody}`}>
                                            <p><strong>Seamless Data Integration:</strong> Connect data from various sources, whether on-premises or in the cloud, to create a unified data pipeline.</p>
                                            <p><strong>Scalable ETL Workflows:</strong> Design, automate, and orchestrate ETL workflows that scale with your business needs.</p>
                                            <p><strong>Cost-Effective:</strong> Optimize costs with Azure&apos;s pay-as-you-go model, ensuring you only pay for what you use.</p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Warehousing */}
            <div className={`${styles.dataETL}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className={`${styles.aside}`}>
                                <div className={`${styles.titleUnderline}`}>
                                    <h2>Data Warehousing</h2>
                                </div>
                                <h5>Secure and Scalable Storage Solutions</h5>
                                <h6>Store, Manage, and Retrieve Data Efficiently</h6>
                                <p>A robust data warehousing solution is essential for storing, managing, and retrieving vast amounts of data. At Shodat Inc., we offer state-of-the-art data warehousing solutions using Azure SQL, Synapse, Snowflake, and Azure Data Lake .</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8">
                            <div className={`${styles.section}`}>
                                <Accordion defaultActiveKey="0" className="accordionCustom">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <div className={`${styles.accordionHeader}`}>
                                                <div className={`${styles.headerLogo}`}>
                                                    <Image
                                                        src="/img/dataEngineering/sql.png"
                                                        alt="Azure SQL and Synapse"
                                                        height={70}
                                                        width={70}
                                                    />
                                                </div>
                                                <div className={`${styles.headerText}`}>Azure SQL and Synapse</div>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className={`${styles.accordionBody}`}>
                                                <p><strong>High-Performance Storage:</strong> Benefit from the high performance and scalability of Azure SQL and Synapse for your data warehousing needs.</p>
                                                <p><strong>Integrated Analytics:</strong> Conduct complex queries and analytics directly within your data warehouse environment.</p>
                                                <p><strong>Security and Compliance:</strong> Ensure your data is secure and compliant with industry standards and regulations.</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                            <div className={`${styles.accordionHeader}`}>
                                                <div className={`${styles.headerLogo}`}>
                                                    <Image
                                                        src="/img/dataEngineering/azure_data_lake.png"
                                                        alt="Azure Data Lake"
                                                        height={70}
                                                        width={70}
                                                    />
                                                </div>
                                                <div className={`${styles.headerText}`}>Azure Data Lake</div>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className={`${styles.accordionBody}`}>
                                                <p><strong>Seamless Data Integration:</strong> Connect data from various sources, whether on-premises or in the cloud, to create a unified data pipeline.</p>
                                                <p><strong>Scalable ETL Workflows:</strong> Design, automate, and orchestrate ETL workflows that scale with your business needs.</p>
                                                <p><strong>Cost-Effective:</strong> Optimize costs with Azure&apos;s pay-as-you-go model, ensuring you only pay for what you use.</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <div className={`${styles.accordionHeader}`}>
                                                <div className={`${styles.headerLogo}`}>
                                                    <Image
                                                        src="/img/dataEngineering/snow_flake.png"
                                                        alt="Snowflake"
                                                        height={70}
                                                        width={70}
                                                    />
                                                </div>
                                                <div className={`${styles.headerText}`}>Snowflake</div>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className={`${styles.accordionBody}`}>
                                                <p><strong>Seamless Data Integration:</strong> Connect data from various sources, whether on-premises or in the cloud, to create a unified data pipeline.</p>
                                                <p><strong>Scalable ETL Workflows:</strong> Design, automate, and orchestrate ETL workflows that scale with your business needs.</p>
                                                <p><strong>Cost-Effective:</strong> Optimize costs with Azure&apos;s pay-as-you-go model, ensuring you only pay for what you use.</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            <div className={`${styles.accordionHeader}`}>
                                                <div className={`${styles.headerLogo}`}>
                                                    <Image
                                                        src="/img/dataEngineering/teradata.png"
                                                        alt="Teradata"
                                                        height={70}
                                                        width={70}
                                                    />
                                                </div>
                                                <div className={`${styles.headerText}`}>Teradata</div>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className={`${styles.accordionBody}`}>
                                                <p><strong>Seamless Data Integration:</strong> Connect data from various sources, whether on-premises or in the cloud, to create a unified data pipeline.</p>
                                                <p><strong>Scalable ETL Workflows:</strong> Design, automate, and orchestrate ETL workflows that scale with your business needs.</p>
                                                <p><strong>Cost-Effective:</strong> Optimize costs with Azure&apos;s pay-as-you-go model, ensuring you only pay for what you use.</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Data Visualization */}
            <div className={`${styles.dataETL}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className={`${styles.aside}`}>
                                <div className={`${styles.titleUnderline}`}>
                                    <h2>Data Visualization</h2>
                                </div>
                                <h5>Insights with Power BI</h5>
                                <h6>Turn Data into Actionable Insights</h6>
                                <p>Visualizing data is key to making informed decisions. At Shodat Inc., we specialize in creating powerful data visualizations using Power BI, transforming complex data into clear and actionable insights.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8">
                            <div className={`${styles.section}`}>
                                <div className={`${styles.powerBox}`}>
                                    <div className={`${styles.logo}`}>
                                        <Image
                                            src="/img/dataEngineering/powerBI.png"
                                            alt="Power BI"
                                            height={70}
                                            width={70}
                                        />
                                    </div>
                                    <div className={`${styles.text}`}>
                                        <h6>Power BI</h6>
                                        <p>Our Power BI solutions enable you to visualize your data like never before, making it easier to identify trends, spot anomalies, and drive strategic decisions</p>
                                        <button className={`${styles.btnBlack}`}>
                                            <span>Read more</span>
                                            <Image
                                                src="/img/dataEngineering/arrow-right.png"
                                                alt="Teradata"
                                                height={24}
                                                width={24}
                                            />                        
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}