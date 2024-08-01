import React from "react";
import styles from './platform.module.css';
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Stack, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props: any) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={`caseStudyModal ${styles.caseStudyModal}`}
            id
        >
            <div className={`${styles.modalContent}`}>
                <Modal.Header closeButton className="closeButton">
                </Modal.Header>
                <div className={`${styles.modalLeft}`}>
                    <Image
                        src="/img/platform/platform-page-imgs/casestudies-ev-img1.jpg"
                        alt="evCharging"
                        height={554}
                        width={547}
                    />
                </div>
                <div className={`${styles.modalRight}`}>
                    <div className={`${styles.modalRightContent}`}>
                        <h2>Energy</h2>
                        <p>A prominent manufacturer of Energy faced significant challenges in predicting battery life accurately. Inconsistent performance data, variations in usage patterns, and environmental factors made it difficult to provide reliable predictions. To address these issues, the manufacturer implemented Shodat eOps™, an advanced asset tracking and quality management platform, to enhance their battery life prediction capabilities.</p>
                        <div className={`${styles.result} ${styles.desktop}`}>
                            <h4>Result</h4>
                            <div className={`${styles.resultBox}`}>
                                <p>The implementation of Shodat eOps™ led to a significant improvement in the accuracy of battery life predictions, with accuracy rates close to 93%.</p>
                                <p>Proactive alerting and predictive maintenance strategies resulted in a 25% reduction in maintenance costs by preventing unexpected battery failures.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.result} ${styles.mobile}`}>
                    <h4>Result</h4>
                    <div className={`${styles.resultBox}`}>
                        <p>The implementation of Shodat eOps™ led to a significant improvement in the accuracy of battery life predictions, with accuracy rates close to 93%.</p>
                        <p>Proactive alerting and predictive maintenance strategies resulted in a 25% reduction in maintenance costs by preventing unexpected battery failures.</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default function CaseStudy() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className={`${styles.caseStudy}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className={`${styles.title}`}>Case Studies</h2>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className={`${styles.caseStudySlider}`} id="caseStudySlider">
                            <Carousel indicators={false} className={`${styles.desktopCaseSlider}`}>

                                <Carousel.Item interval={700000}>
                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={4}
                                    >
                                        <Card className={`${styles.sliderItem}`} onClick={() => setModalShow(true)}>
                                            <div className={`${styles.csItem}`}>
                                                <div className={`${styles.topItem}`}>
                                                    <h4>Energy</h4>
                                                    <p>A prominent manufacturer of energy faced significant challenges in predicting battery life accurately. Inconsistent performance data, variations in usage patterns, and environmental factors made it difficult to provide reliable predictions.</p>
                                                </div>
                                                <div className={`${styles.imageItem}`}>
                                                    <Image
                                                        src="/img/platform/evCharging.png"
                                                        alt="evCharging"
                                                        height={290}
                                                        width={392}
                                                    />
                                                    <div className={`${styles.purpleText}`}>To address these issues, the manufacturer implemented Shodat eOps™, an advanced asset tracking and quality management platform, to enhance their battery life prediction capabilities.</div>
                                                </div>
                                            </div>
                                        </Card>
                                        <Card className={`${styles.sliderItem}`}>
                                            <div className={`${styles.csItem}`}>
                                                <div className={`${styles.topItem}`}>
                                                    <h4>Automotive</h4>
                                                    <p>A leading automotive faced challenges in predicting tire wear accurately, which impacted vehicle safety, maintenance schedules, and overall operational efficiency. </p>
                                                </div>
                                                <div className={`${styles.imageItem}`}>
                                                    <Image
                                                        src="/img/platform/automotive.png"
                                                        alt="automotive"
                                                        height={290}
                                                        width={392}
                                                    />
                                                    <div className={`${styles.purpleText}`}>By implementing Shodat eOps™, the manufacturer aimed to enhance their tire wear prediction capabilities. </div>
                                                </div>
                                            </div>
                                        </Card>
                                        <Card className={`${styles.sliderItem}`}>
                                            <div className={`${styles.csItem}`}>
                                                <div className={`${styles.topItem}`}>
                                                    <h4>Manufacturing</h4>
                                                    <p>A leader in the manufacturing industry needed an effective solution for detecting and addressing structural cracks in product components. Traditional inspection methods were labour-intensive, error-prone, and time-consuming.</p>
                                                </div>
                                                <div className={`${styles.imageItem}`}>
                                                    <Image
                                                        src="/img/platform/manufaturing.png"
                                                        alt="manufaturing"
                                                        height={290}
                                                        width={392}
                                                    />
                                                    <div className={`${styles.purpleText}`}>To enhance their crack detection capabilities, the company implemented the Shodat eOps™platform.</div>
                                                </div>
                                            </div>
                                        </Card>
                                    </Stack>
                                </Carousel.Item>

                            </Carousel>

                            <Carousel indicators={false} className={`${styles.mobileCaseSlider}`}>

                                <Carousel.Item interval={700000}>
                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={4}
                                    >
                                        <Card className={`${styles.sliderItem}`} onClick={() => setModalShow(true)}>
                                            <div className={`${styles.csItem}`}>
                                                <div className={`${styles.topItem}`}>
                                                    <h4>Energy</h4>
                                                    <p>A prominent manufacturer of energy faced significant challenges in predicting battery life accurately. Inconsistent performance data, variations in usage patterns, and environmental factors made it difficult to provide reliable predictions.</p>
                                                </div>
                                                <div className={`${styles.imageItem}`}>
                                                    <Image
                                                        src="/img/platform/evCharging.png"
                                                        alt="evCharging"
                                                        height={290}
                                                        width={392}
                                                    />
                                                    <div className={`${styles.purpleText}`}>To address these issues, the manufacturer implemented Shodat eOps™, an advanced asset tracking and quality management platform, to enhance their battery life prediction capabilities.</div>
                                                </div>
                                            </div>
                                        </Card>
                                    </Stack>
                                </Carousel.Item>

                                <Carousel.Item interval={700000}>                                    
                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={4}
                                    >
                                        <Card className={`${styles.sliderItem}`}>
                                            <div className={`${styles.csItem}`}>
                                                <div className={`${styles.topItem}`}>
                                                    <h4>Automotive</h4>
                                                    <p>A leading automotive faced challenges in predicting tire wear accurately, which impacted vehicle safety, maintenance schedules, and overall operational efficiency. </p>
                                                </div>
                                                <div className={`${styles.imageItem}`}>
                                                    <Image
                                                        src="/img/platform/automotive.png"
                                                        alt="automotive"
                                                        height={290}
                                                        width={392}
                                                    />
                                                    <div className={`${styles.purpleText}`}>By implementing Shodat eOps™, the manufacturer aimed to enhance their tire wear prediction capabilities. </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </Stack>
                                </Carousel.Item>

                                <Carousel.Item interval={700000}>                                    
                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={4}
                                    >
                                        <Card className={`${styles.sliderItem}`}>
                                            <div className={`${styles.csItem}`}>
                                                <div className={`${styles.topItem}`}>
                                                    <h4>Manufacturing</h4>
                                                    <p>A leader in the manufacturing industry needed an effective solution for detecting and addressing structural cracks in product components. Traditional inspection methods were labour-intensive, error-prone, and time-consuming.</p>
                                                </div>
                                                <div className={`${styles.imageItem}`}>
                                                    <Image
                                                        src="/img/platform/manufaturing.png"
                                                        alt="manufaturing"
                                                        height={290}
                                                        width={392}
                                                    />
                                                    <div className={`${styles.purpleText}`}>To enhance their crack detection capabilities, the company implemented the Shodat eOps™platform.</div>
                                                </div>
                                            </div>
                                        </Card>
                                    </Stack>
                                </Carousel.Item>
                                
                            </Carousel>

                        </div>
                    </div>
                </div>
            </div>


            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </div>
    )
}