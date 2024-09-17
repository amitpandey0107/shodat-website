import React from "react";
import Image from "next/image";
import styles from './shodatXDI.module.css';
import Accordion from 'react-bootstrap/Accordion';
export default function ShodatXDI() {
    return (
        <>
            <div className={`${styles.shodatXDI}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <div className={`${styles.contentLeft}`}>
                                <div className={`${styles.shodatAccordian}`}>
                                    <Accordion defaultActiveKey="10" className="appraochAccordion businessAccordian shodatXDIAccordian">
                                        <Accordion.Item eventKey="10">
                                            <Accordion.Header>
                                                <div className={`${styles.accordionHeader}`}>
                                                    <h6>Shodat XDI: Precision Defect Detection</h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className={`${styles.accBody}`}>
                                                    <p><strong>Shodat XDI</strong> is our flagship defect detection system, leveraging advanced computer vision to identify even the most minute defects that are often missed by the human eye. Whether it&apos;s fine crack detection in manufacturing or quality control in production lines, Shodat XDI ensures the highest standards of product integrity.</p>
                                                    <div className={`${styles.keyFeature}`}>
                                                        <div className={`${styles.featTitle}`}>Key Benefits:</div>
                                                        <div className={`${styles.keyFeatureWrapper}`}>
                                                            <div className={`${styles.featBox} ${styles.purpleBG}`}> 
                                                                <p><strong>High Accuracy</strong></p> 
                                                                <p><strong>98% precision </strong> in detecting fine defects.</p>  
                                                            </div>   
                                                            <div className={`${styles.featBox} ${styles.blueBG}`}> 
                                                                <p><strong>Real-Time Processing</strong></p> 
                                                                <p>Instantaneous analysis for immediate quality control.</p>  
                                                            </div>
                                                            <div className={`${styles.featBox} ${styles.blackBG}`}> 
                                                                <p><strong>Cost Efficiency</strong></p> 
                                                                <p>Reduces warranty claims by 20%, improving overall profitability.</p>  
                                                            </div>        
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="11">
                                            <Accordion.Header>
                                                <div className={`${styles.accordionHeader}`}>
                                                    <h6>Shodat XRI: Explainable RegTech Intelligence</h6>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className={`${styles.accBody}`}>
                                                    <p>Shodat XDI is our flagship defect detection system, leveraging advanced computer vision to identify even the most minute defects that are often missed by the human eye. Whether it&apos;s fine crack detection in manufacturing or quality control in production lines, Shodat XDI ensures the highest standards of product integrity.</p>
                                                    <div className={`${styles.keyFeature}`}>
                                                        <div className={`${styles.featTitle}`}>Key Benefits:</div>
                                                        <div className={`${styles.keyFeatureWrapper}`}>
                                                            <div className={`${styles.featBox} ${styles.purpleBG}`}> 
                                                                <p><strong>High Accuracy</strong></p> 
                                                                <p><strong>98% precision </strong> in detecting fine defects.</p>  
                                                            </div>   
                                                            <div className={`${styles.featBox} ${styles.blueBG}`}> 
                                                                <p><strong>Real-Time Processing</strong></p> 
                                                                <p>Instantaneous analysis for immediate quality control.</p>  
                                                            </div>
                                                            <div className={`${styles.featBox} ${styles.blackBG}`}> 
                                                                <p><strong>Cost Efficiency</strong></p> 
                                                                <p>Reduces warranty claims by 20%, improving overall profitability.</p>  
                                                            </div>        
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <div className={`${styles.contentRight}`}>
                                <div className={`${styles.thumbnail}`}>
                                    <Image
                                        src="/img/advancedAnalytics/dummyRect.png"
                                        alt="dummy images"
                                        height={433}
                                        width={624}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}