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
                        <p>Enabling organizations to make data-driven decisions through advanced algorithms that predict future trends, optimize operations, and deliver actionable insights.</p>
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
                        <p>Harnessing the power of language understanding to develop intelligent chatbots, sentiment analysis systems, and automation of text-heavy processes, enhancing customer experiences and operational efficiency.</p>
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
                        <p>Leveraging AI-powered vision systems for applications such as defect detection, facial recognition, image analysis, and more, enabling smarter, faster, and more reliable decisions in manufacturing, retail, and other industries.</p>
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
                        <p>Streamlining workflows through AI-driven automation of routine tasks, improving accuracy, reducing operational costs, and allowing businesses to focus on strategic initiatives.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    )
}