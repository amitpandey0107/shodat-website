import React, { useState, useEffect } from "react";
import styles from './case-studies.module.css';
import Image from "next/image";
import Link from "next/link";
import Header from "@/pages/header";
import FooterVersionSecond from "@/pages/footerv2";
export default function Casestudy() {
    return (
        <>
            <div className={`${styles.caseStudies}`}>
                <Header />

                <div className={`${styles.caseBanner}`}>
                    <div className="container-fluid1">
                        <div className={`row ${styles.rowBlock}`}>
                            <div className="col-sm-12">
                                <div className={`${styles.bannerTitle}`}>
                                    Enhancing Workplace Safety with <br />Vision-Based AI Solutions
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.caseContent}`}>
                    <div className="container-fluid1">
                        <div className={`row ${styles.rowBlock}`}>
                            <div className="col-sm-12">
                                <div className={`${styles.block} ${styles.mt0}`}>
                                    <h3 className={`${styles.title}`}>Overview</h3>
                                    <p>A leading manufacturing organization faced rising safety challenges at high-risk sites. Despite compliance with strict protocols, hazard identification was tough because of system complexity. Shodat Inc. deployed an advanced vision-based system with object detection and distance calculation, greatly improving safety. The client has seen significant improvements, with the following results carefully estimated using robust research and industry standards, reflecting typical outcomes where complete client data was unavailable.</p>
                                </div>

                                <div className={`${styles.block}`}>
                                    <div className={`${styles.boxWrap}`}>
                                        <div className={`${styles.boxed}`}>
                                            <div className={`${styles.content}`}>
                                                <div className={`${styles.highlight}`}>50%</div>
                                                <p>drop in safety incidents in 6 months</p>
                                            </div>
                                        </div>
                                        <div className={`${styles.boxed}`}>
                                            <div className={`${styles.content}`}>
                                                <div className={`${styles.highlight}`}>30%</div>
                                                <p>reduction in risk of penalties on OSHA, ANSI, and CCOH.</p>
                                            </div>
                                        </div>
                                        <div className={`${styles.boxed}`}>
                                            <div className={`${styles.content}`}>
                                                <div className={`${styles.highlight}`}>15%</div>
                                                <p>productivity boost from minimized downtime</p>
                                            </div>
                                        </div>
                                        <div className={`${styles.boxed}`}>
                                            <div className={`${styles.content}`}>
                                                <div className={`${styles.highlight}`}>25%</div>
                                                <p>reduction in insurance premiums due to fewer incidents</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.block}`}>
                                    <h3 className={`${styles.title}`}>Problem Statement</h3>
                                    <p>The manufacturing company encountered critical safety challenges, including:</p>
                                </div>

                                <div className={`${styles.block}`}>
                                    <div className={`${styles.borderBoxWrap}`}>
                                        <div className={`${styles.borderBox}`}>
                                            <div className={`${styles.number}`}><span>1</span></div>
                                            <h4>High Incident Rate</h4>
                                            <p>The organisation faced increasing workplace incidents, including injuries and near-misses, affecting employee safety and productivity. These incidents raised insurance premiums, driving up operational costs</p>
                                        </div>
                                        <div className={`${styles.borderBox}`}>
                                            <div className={`${styles.number}`}><span>2</span></div>
                                            <h4>Inconsistent Safety Compliance</h4>
                                            <p>The organisation needed to meet strict industry safety regulations, requiring thorough documentation and reporting</p>
                                        </div>
                                        <div className={`${styles.borderBox}`}>
                                            <div className={`${styles.number}`}><span>3</span></div>
                                            <h4>Limited Hazard Identification</h4>
                                            <p>Safety systems were reactive, addressing hazards only after incidents occurred. Manual monitoring led to inconsistencies and missed opportunities to proactively prevent risks</p>
                                        </div>
                                    </div>
                                </div>


                                <div className={`${styles.block}`}>
                                    <h3 className={`${styles.title}`}>Solution Implementation</h3>
                                    <p>To overcome these challenges, the company deployed an intelligent, vision-based safety system across its facilities. This solution leverages advanced computer vision and AI to monitor the workplace in real-time, proactively detecting hazards, ensuring compliance and enhancing overall safety.</p>
                                </div>

                                <div className={`${styles.block}`}>
                                    <div className={`row ${styles.rowBlock}`}>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className={`${styles.borderBoxGreen}`}>
                                                <div className={`${styles.icon}`}>
                                                    <Image
                                                        src="/img/aiInnovation/bulb.svg"
                                                        alt="bulb icon"
                                                        height={36}
                                                        width={36}
                                                    />
                                                </div>
                                                <h4>Object Detection PPE, Helmet, and Safety Equipment Compliance Management</h4>
                                                <p>A compliance management solution was implemented using advanced object detection techniques. Convolutional Neural Networks (CNN), particularly YOLO (You Only Look Once), were trained to recognize multiple safety items within a single frame, such as helmets, safety vests, and gloves. The models were trained on annotated datasets, and performance metrics like Mean Average Precision (mAP) and Intersection over Union (IoU) were continually tracked and optimized to ensure high detection accuracy.</p>
                                            </div>
                                            <div className={`${styles.borderBoxGreen}`}>
                                                <div className={`${styles.icon}`}>
                                                    <Image
                                                        src="/img/aiInnovation/bulb.svg"
                                                        alt="bulb icon"
                                                        height={36}
                                                        width={36}
                                                    />
                                                </div>
                                                <h4>Advanced Image Analysis using YOLO and Depth Sensing</h4>
                                                <p>YOLOv4 and YOLOv5 models were fine-tuned for precise PPE detection, with depth estimation (via MiDaS and DPT) improving spatial accuracy. Paired with tracking algorithms like SORT and DeepSORT, the system provided real-time feedback on compliance across video frames.</p>
                                                <p>Performance was evaluated using Mean Average Precision (mAP) for detection accuracy, and Intersection over Union (IoU) to assess alignment of predicted bounding boxes with actual PPE positions, ensuring a reliable and accurate monitoring solution.</p>
                                            </div>
                                            <div className={`${styles.borderBoxGreen}`}>
                                                <div className={`${styles.icon}`}>
                                                    <Image
                                                        src="/img/aiInnovation/bulb.svg"
                                                        alt="bulb icon"
                                                        height={36}
                                                        width={36}
                                                    />
                                                </div>
                                                <h4>Advanced Safety Management</h4>
                                                <p>An integrated safety management system was developed, combining real-time monitoring with incident reporting and analytics. The system continuously monitored workplace conditions using cameras and IoT sensors to detect potential hazards before they escalated into safety incidents. Real-time data streams helped predict and prevent risks proactively.</p>
                                            </div>
                                            <div className={`${styles.borderBoxGreen}`}>
                                                <div className={`${styles.icon}`}>
                                                    <Image
                                                        src="/img/aiInnovation/bulb.svg"
                                                        alt="bulb icon"
                                                        height={36}
                                                        width={36}
                                                    />
                                                </div>
                                                <h4>Alerting Mechanism</h4>
                                                <p>When potential hazards were detected, the system automatically triggered alerts to safety officers and site supervisors. These alerts were delivered via SMS, email, and integrated directly into a central site management dashboard, ensuring immediate action could be taken to address safety risks.</p>
                                            </div>
                                            <div className={`${styles.borderBoxGreen}`}>
                                                <div className={`${styles.icon}`}>
                                                    <Image
                                                        src="/img/aiInnovation/bulb.svg"
                                                        alt="bulb icon"
                                                        height={36}
                                                        width={36}
                                                    />
                                                </div>
                                                <h4>Data Logging and Analysis</h4>
                                                <p>Non-compliance events were logged in a centralised database, enabling safety teams to analyse recurring patterns in safety breaches. By identifying specific areas or timeframes with low compliance, the system facilitated targeted interventions. Detailed reports, including video footage of incidents, were generated to support root cause analysis (RCA) and improve future safety protocols.</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className={`${styles.thumbnail}`}>
                                                <Image
                                                    src="/img/aiInnovation/case-study-image-1.png"
                                                    alt="case-study-image"
                                                    height={337}
                                                    width={416}
                                                />
                                                <Image
                                                    src="/img/aiInnovation/case-study-image-4.png"
                                                    alt="case-study-image"
                                                    height={416}
                                                    width={412}
                                                />
                                            </div>
                                            {/* <div className={`${styles.thumbnail}`}>
                                                
                                            </div> */}
                                            <div className={`${styles.thumbnail}`}>
                                                <Image
                                                    src="/img/aiInnovation/case-study-image-2.png"
                                                    alt="case-study-image"
                                                    height={416}
                                                    width={365}
                                                />
                                                <Image
                                                    src="/img/aiInnovation/case-study-image-3.png"
                                                    alt="case-study-image"
                                                    height={416}
                                                    width={520}
                                                />
                                            </div>
                                            {/* <div className={`${styles.thumbnail}`}>
                                                
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                {/* <div className={`${styles.block}`}>
                                    <div className={`${styles.imageThumbnail}`}>
                                        <Image
                                            src="/img/aiInnovation/aicaseimage1.png"
                                            alt="use case image"
                                            height={433}
                                            width={940}
                                        />
                                    </div>
                                    <div className={`${styles.imageThumbnail}`}>
                                        <Image
                                            src="/img/aiInnovation/AI-case-img2.png"
                                            alt="use case image"
                                            height={433}
                                            width={940}
                                        />
                                    </div>
                                </div> */}

                                <div className={`${styles.block} ${styles.mt0}`}>
                                    <p>By adopting an Intelligent, Vision-Based Safety System, the manufacturing company effectively addressed workplace safety challenges across its expansive, high-risk operations. Proactive hazard detection, real-time alerts, and centralised compliance monitoring not only cut safety incidents but also cultivated a robust culture of safety and compliance throughout the organisation.</p>
                                </div>


                                {/* <div className={`${styles.block}`}>
                                    <h3 className={`${styles.title}`}>Business Impact</h3>
                                    <p>Shodat Inc. implemented an advanced vision tracking and alerting system to address these issues. In addition to the traditional object detection capabilities, distance calculation features were implemented as well to predict potential hazardous situations in advance.The implementation of computer vision for workplace safety yielded significant improvements:</p>
                                </div>

                                <div className={`${styles.block}`}>
                                    <div className={`${styles.borderBoxGray}`}>
                                        <h4>Reduction in Safety Incidents</h4>
                                        <p>Within six months of deployment, safety incidents dropped by 50%. Real-time detection and alerting slashed incident response times, significantly improving workplace safety.</p>
                                    </div>
                                    <div className={`${styles.borderBoxGray}`}>
                                        <h4>Regulatory Compliance</h4>
                                        <p>High-risk areas and hazardous conditions were proactively identified, leading to strict adherence to regulations like OSHA, ANSI and CCOHS. This reduced the risk of violations and penalties while ensuring ongoing compliance.</p>
                                    </div>
                                    <div className={`${styles.borderBoxGray}`}>
                                        <h4>Operational Continuity</h4>
                                        <p>By preventing incidents, the company minimised downtime, boosting productivity and cutting operational costs. Fewer safety incidents led to lower insurance claims, reducing premiums and driving significant cost savings.</p>
                                    </div>
                                    <div className={`${styles.borderBoxGray}`}>
                                        <h4>Enhanced Safety Culture</h4>
                                        <p>Proactive safety measures and real-time communication created a culture of safety, with increased employee engagement in maintaining safe practices.</p>
                                    </div>
                                </div>

                                <div className={`${styles.block}`}>
                                    <div className={`${styles.purpleBG}`}>
                                        By adopting an Intelligent, Vision-Based Safety System, the manufacturing company effectively addressed workplace safety challenges across its expansive, high-risk operations. Proactive hazard detection, real-time alerts and centralised compliance monitoring not only cut safety incidents but also cultivated a robust culture of safety and compliance throughout the organisation.
                                    </div>
                                    <div className={`${styles.blackBG}`}>
                                        Interested in discovering how our vision-based AI solutions can elevate your workplace safety? Contact us today.
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>

                <FooterVersionSecond />
            </div>
        </>
    )
}