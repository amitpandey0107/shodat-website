import React, { useState } from "react";
import styles from './platform.module.css';
import Link from "next/link";
import Image from "next/image";

export default function Introduction() {
    const [slide, setSlider] = useState(1);
    const changeSlide = (slideNumber: any) => {
        setSlider(slideNumber)
    }
    return (
        <div className={`${styles.introduction} platformIntroduction`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6 desktopTabs">
                        {slide === 1 &&
                            <div className={`${styles.introductionPicture}`}>
                                <div className={`${styles.imageWrap}`}>
                                    <div className={`${styles.image1}`}>
                                        <Image
                                            src="/img/platform/introduction-img1.png"
                                            alt="banner"
                                            height={402}
                                            width={620}
                                        />
                                    </div>
                                </div>
                                <div className={`${slide === 1 ? `${styles.bgPurple}` : ``} ${styles.textWrap}`}>
                                    <p>By harnessing the power of AI, Shodat eOps provides real-time analytics and alerts which help in predictive maintenance and comprehensive quality control mechanisms, significantly reducing the Cost of Poor Quality (COPQ) and enhancing overall productivity. </p>
                                </div>
                            </div>
                        }

                        {slide === 2 &&
                            <div className={`${styles.introductionPicture}`}>
                                <div className={`${styles.imageWrap}`}>
                                    <div className={`${styles.image1}`}>
                                        <Image
                                            src="/img/platform/introduction-img2.png"
                                            alt="banner"
                                            height={402}
                                            width={620}
                                        />
                                    </div>
                                </div>
                                <div className={`${slide === 2 ? `${styles.bgSeaGreen}` : ``} ${styles.textWrap}`}>
                                    <p>Leveraging industry standards such as safety regulations like OSHA, ANSI & CCOHS,ISO 9001, Shodat eOps facilitates a robust quality management framework to meet regulatory requirements. The platform&apos;s capabilities in predictive analytics and real-time monitoring ensure proactive issue resolution and continuous process optimization.</p>
                                </div>
                            </div>
                        }

                        {slide === 3 &&
                            <div className={`${styles.introductionPicture}`}>
                                <div className={`${styles.imageWrap}`}>
                                    <div className={`${styles.image1}`}>
                                        <Image
                                            src="/img/platform/introduction-img3.png"
                                            alt="banner"
                                            height={402}
                                            width={620}
                                        />
                                    </div>
                                </div>
                                <div className={`${slide === 3 ? `${styles.bgBlack}` : ``} ${styles.textWrap}`}>
                                    <p>With Shodat eOps, organizations can achieve substantial reductions in defect rates, operational costs, and customer complaints, while simultaneously boosting employee engagement and market reputation.</p>
                                </div>
                            </div>
                        }

                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={`${styles.introductionContent}`}>
                            <h1>Introducing Shodat eOps™</h1>
                            <h3>Achieve operational brilliance with precision-engineered quality management.</h3>
                            <p><strong>Shodat eOps</strong> is an advanced enterprise platform engineered to elevate operational efficiency and product quality through sophisticated AI and machine learning technologies. </p>
                            <p>Designed to tackle the multifaceted challenges of modern quality management, Shodat eOps seamlessly integrates data-driven insights and automation to streamline processes, mitigate risks, and ensure regulatory compliance.</p>
                            <ul>
                                <li>
                                    <Image
                                        src="/img/platform/intro1.svg"
                                        alt="shodat-logo"
                                        height={60}
                                        width={60}
                                        className={`${styles.logoImage}`}
                                    />
                                    <span>By harnessing the power of AI, Shodat eOps provides real-time analytics and alerts which help in  predictive maintenance and comprehensive quality control mechanisms, significantly reducing the Cost of Poor Quality (COPQ) and enhancing overall productivity. </span>
                                </li>
                                <li>
                                    <Image
                                        src="/img/platform/intro2.svg"
                                        alt="shodat-logo"
                                        height={60}
                                        width={60}
                                        className={`${styles.logoImage}`}
                                    />
                                    <span>Leveraging industry standards such as safety regulations like OSHA, ANSI & CCOHS,ISO 9001, Shodat eOps facilitates a robust quality management framework to meet regulatory requirements. The platform&apos;s capabilities in predictive analytics and real-time monitoring ensure proactive issue resolution and continuous process optimization.</span>
                                </li>
                                <li>
                                    <Image
                                        src="/img/platform/intro3.svg"
                                        alt="shodat-logo"
                                        height={60}
                                        width={60}
                                        className={`${styles.logoImage}`}
                                    />
                                    <span>With Shodat eOps, organizations can achieve substantial reductions in defect rates, operational costs, and customer complaints, while simultaneously boosting employee engagement and market reputation.</span>
                                </li>
                            </ul>


                            <div className="mobileTabs">
                                {slide === 1 &&
                                    <div className={`${styles.introductionPicture}`}>
                                        <div className={`${styles.imageWrap}`}>
                                            <div className={`${styles.image1}`}>
                                                <Image
                                                    src="/img/platform/introduction-img1.png"
                                                    alt="banner"
                                                    height={402}
                                                    width={620}
                                                />
                                            </div>
                                        </div>
                                        <div className={`${slide === 1 ? `${styles.bgPurple}` : ``} ${styles.textWrap}`}>
                                            <p>By harnessing the power of AI, Shodat eOps provides real-time analytics and alerts which help in predictive maintenance and comprehensive quality control mechanisms, significantly reducing the Cost of Poor Quality (COPQ) and enhancing overall productivity. </p>
                                        </div>
                                    </div>
                                }

                                {slide === 2 &&
                                    <div className={`${styles.introductionPicture}`}>
                                        <div className={`${styles.imageWrap}`}>
                                            <div className={`${styles.image1}`}>
                                                <Image
                                                    src="/img/platform/introduction-img2.png"
                                                    alt="banner"
                                                    height={402}
                                                    width={620}
                                                />
                                            </div>
                                        </div>
                                        <div className={`${slide === 2 ? `${styles.bgSeaGreen}` : ``} ${styles.textWrap}`}>
                                            <p>Leveraging industry standards such as safety regulations like OSHA, ANSI & CCOHS,ISO 9001, Shodat eOps facilitates a robust quality management framework to meet regulatory requirements. The platform&apos;s capabilities in predictive analytics and real-time monitoring ensure proactive issue resolution and continuous process optimization.</p>
                                        </div>
                                    </div>
                                }

                                {slide === 3 &&
                                    <div className={`${styles.introductionPicture}`}>
                                        <div className={`${styles.imageWrap}`}>
                                            <div className={`${styles.image1}`}>
                                                <Image
                                                    src="/img/platform/introduction-img3.png"
                                                    alt="banner"
                                                    height={402}
                                                    width={620}
                                                />
                                            </div>
                                        </div>
                                        <div className={`${slide === 3 ? `${styles.bgBlack}` : ``} ${styles.textWrap}`}>
                                            <p>With Shodat eOps, organizations can achieve substantial reductions in defect rates, operational costs, and customer complaints, while simultaneously boosting employee engagement and market reputation.</p>
                                        </div>
                                    </div>
                                }

                            </div>


                            <div className={`${styles.selectableBtn}`}>
                                <button
                                    className={`${styles.arrowLeft}`}>
                                    <Image
                                        src="/img/platform/arrow-lef-small.png"
                                        alt="banner"
                                        height={40}
                                        width={40}
                                    />
                                </button>
                                <button
                                    className={`${styles.borderPurple1} ${styles.btnIntro} ${slide === 1 ? `${styles.borderPurple}` : ``}`}
                                    onClick={() => changeSlide(1)}>
                                    <Image
                                        src="/img/platform/introduction-img1.png"
                                        alt="banner"
                                        height={120}
                                        width={120}
                                    />
                                </button>
                                <button
                                    className={` ${styles.borderSeaGreen1} ${styles.btnIntro} ${slide === 2 ? `${styles.borderSeaGreen}` : ``} `}
                                    onClick={() => changeSlide(2)}>
                                    <Image
                                        src="/img/platform/introduction-img2.png"
                                        alt="banner"
                                        height={120}
                                        width={120}
                                    />
                                </button>
                                <button
                                    className={`${styles.borderBlack1} ${styles.btnIntro} ${slide === 3 ? `${styles.borderBlack}` : ``}`}
                                    onClick={() => changeSlide(3)}>
                                    <Image
                                        src="/img/platform/introduction-img3.png"
                                        alt="banner"
                                        height={120}
                                        width={120}
                                    />
                                </button>
                                <button
                                    className={`${styles.arrowRight}`}>
                                    <Image
                                        src="/img/platform/arrow-right-small.png"
                                        alt="banner"
                                        height={40}
                                        width={40}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}