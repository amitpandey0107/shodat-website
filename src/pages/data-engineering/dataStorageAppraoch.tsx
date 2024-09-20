import React, { useState, useEffect } from "react";
import styles from "./data-engineering.module.css";
import Accordion from 'react-bootstrap/Accordion';

export default function DataStorageAppraoch(props: any) {
    return (
        <Accordion defaultActiveKey="10" className="appraochAccordion">
            <Accordion.Item eventKey="10">
                <Accordion.Header>
                    <div className={`${styles.accordionHeader}`}>
                        <h6>Data Warehousing</h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className={`${styles.accBody}`}>
                        <p>We design and implement scalable data warehouses that provide a centralized repository for all your data needs and enable . Customized data marts are developed for specific business lines or departments, facilitating focused and efficient data analysis.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="11">
                <Accordion.Header>
                    <div className={`${styles.accordionHeader}`}>
                        <h6>Building Customized Data Models</h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className={`${styles.accBody}`}>
                        <p>Our team excels in creating tailored data models to suit your specific business requirements, ensuring data is organized, accessible and optimized for performance. Utilizing advanced schema designs and other modelling techniques, we organize data into well integrated facts and dimensions to enhance performance and usability, ensuring a structured and scalable approach to data management.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="12">
                <Accordion.Header>
                    <div className={`${styles.accordionHeader}`}>
                        <h6>Handling Complex Analytical Calculations</h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className={`${styles.accBody}`}>
                        <p>We utilize sophisticated data transformation techniques  to prepare data for complex analyses. Our approach ensures that data is cleansed, normalised and structured efficiently, which is crucial for accurate analytical computations. Indexing techniques, complex joins and aggregate calculations are employed to utilise processing capabilities of db engines and ensure that data is in optimal format for further analysis.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="13">
                <Accordion.Header>
                    <div className={`${styles.accordionHeader}`}>
                        <h6>Building Visualization Layers</h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className={`${styles.accBody}`}>
                        <p>We transform raw data into intuitive dashboards and reports, making complex data easily understandable. Our team also builds efficient views for report consumption, ensuring that data is presented in a user-friendly manner. By leveraging visualization tools, we enable businesses to gain insights quickly and make informed decisions.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="14">
                <Accordion.Header>
                    <div className={`${styles.accordionHeader}`}>
                        <h6>File Based Storage </h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className={`${styles.accBody}`}>
                        <p>We offer the ability to store, extract and process data stored in various file formats such as CSV, XLSX, PDFs, JPEGs and more, ensuring all your data sources are integrated and managed efficiently</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    )
}