import React from 'react';
import styles from './ai.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';
export default function AISection() {
    return (
        <>
            <div className={`${styles.ai}`}>
                <div className={`${styles.aiContainer}`}>

                    <div className={`${styles.bLeft}`}>
                        <div className={`${styles.lc}`}>
                            <h2>We integrate cutting-edge Azure OpenAI and Generative AI capabilities to bring our clients unparalleled AI-powered solutions</h2>
                            <p>By tapping into Microsoft’s robust AI infrastructure, we offer businesses the ability to harness generative models and OpenAI&apos;s advanced machine learning capabilities for real-time, scalable AI applications.</p>
                        </div>
                    </div>

                    <div className={`${styles.bRight}`}>
                        <div className={`${styles.rc}`}>
                            <Accordion defaultActiveKey="10" className={`${styles.aiAccordian} aiAccordian appraochAccordion businessAccordian`}>
                                <Accordion.Item eventKey="10">
                                    <Accordion.Header>
                                        <div className={`${styles.accordionHeader}`}>
                                            <div className={`${styles.icons}`}>
                                                <Image
                                                    src="/img/aiInnovation/svg/azure.svg"
                                                    alt="Azure Services"
                                                    height={48}
                                                    width={48}
                                                />
                                                <Image
                                                    src="/img/aiInnovation/svg/openAI.svg"
                                                    alt="OpenAI Services"
                                                    height={48}
                                                    width={48}
                                                />
                                            </div>
                                            <h6>Azure OpenAI Services</h6>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className={`${styles.accBody}`}>
                                            <p>With Azure OpenAI, we leverage powerful language models to solve complex problems in natural language understanding and generation, enabling applications like intelligent document processing, automated content creation, and conversational agents. This allows businesses to automate customer service, generate dynamic content, and create personalized experiences at scale.</p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="11">
                                    <Accordion.Header>
                                        <div className={`${styles.accordionHeader}`}>
                                            <div className={`${styles.icons}`}>
                                                <Image
                                                    src="/img/aiInnovation/svg/genAI.svg"
                                                    alt="Generative AI"
                                                    height={48}
                                                    width={48}
                                                />
                                            </div>
                                            <h6>Generative AI</h6>
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
                                            <div className={`${styles.icons}`}>
                                                <Image
                                                    src="/img/aiInnovation/svg/chatbot.svg"
                                                    alt="Conversational AI & Chatbots"
                                                    height={48}
                                                    width={48}
                                                />
                                            </div>
                                            <h6>Conversational AI & Chatbots</h6>
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
                                            <div className={`${styles.icons}`}>
                                                <Image
                                                    src="/img/aiInnovation/svg/contentCreation.svg"
                                                    alt="AI-Driven Insights and Content Creation"
                                                    height={48}
                                                    width={48}
                                                />
                                            </div>
                                            <h6>AI-Driven Insights and Content Creation</h6>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className={`${styles.accBody}`}>
                                            <p>We transform raw data into intuitive dashboards and reports, making complex data easily understandable. Our team also builds efficient views for report consumption, ensuring that data is presented in a user-friendly manner. By leveraging visualization tools, we enable businesses to gain insights quickly and make informed decisions.</p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}