import React, { useState, useEffect } from "react";
import styles from "./businessIntelligence.module.css";
import Accordion from 'react-bootstrap/Accordion';

export default function AccordionBusiness(props: any) {
    return (
        <Accordion defaultActiveKey="10" className="appraochAccordion businessAccordian">
            <Accordion.Item eventKey="10">
                <Accordion.Header>
                    <div className={`${styles.accordionHeader}`}>
                        <h6>Machine Learning & Predictive Analytics</h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className={`${styles.accBody}`}>
                        <p>Enabling organizations to make data-driven decisions through advanced algorithms that predict future trends, optimize operations, and deliver actionable insights</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="11">
                <Accordion.Header>
                    <div className={`${styles.accordionHeader}`}>
                        <h6>Natural Language Processing (NLP)</h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className={`${styles.accBody}`}>
                        <p>Our team excels in creating tailored data models to suit your specific business requirements, ensuring data is organized, accessible, and optimized for performance. Utilizing advanced schema designs and other modelling techniques, we organize data into well integrated facts and dimensions to enhance performance and usability, ensuring a structured and scalable approach to data management.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="12">
                <Accordion.Header>
                    <div className={`${styles.accordionHeader}`}>
                        <h6>Computer Vision</h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className={`${styles.accBody}`}>
                        <p>We utilize sophisticated data transformation techniques  to prepare data for complex analyses. Our approach ensures that data is cleansed, normalised, and structured efficiently, which is crucial for accurate analytical computations. Indexing techniques, complex joins and aggregate calculations are employed to utilise processing capabilities of db engines and ensure that data is in optimal format for further analysis.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="13">
                <Accordion.Header>
                    <div className={`${styles.accordionHeader}`}>
                        <h6>Intelligent Automation</h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className={`${styles.accBody}`}>
                        <p>We transform raw data into intuitive dashboards and reports, making complex data easily understandable. Our team also builds efficient views for report consumption, ensuring that data is presented in a user-friendly manner. By leveraging visualization tools, we enable businesses to gain insights quickly and make informed decisions.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    )
}