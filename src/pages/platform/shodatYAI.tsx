import React from "react";
import styles from './platform.module.css';
import Link from "next/link";
import Image from "next/image";

export default function ShodatYAI() {

    return (
        <div className={`${styles.shodatYAIContainer}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-5">
                        <div className={`${styles.shodatYAIContent}`}>
                            <h1>Shodat YAI</h1>
                            <h2>Deeper understanding of real world incidents and the &apos;why&apos; behind them</h2>
                            <p>Shodat YAI combines the cutting-edge technologies of Generative AI, Causal AI, and Inference Analytics to deliver unparalleled insights and predictive intelligence. Our platform enables organizations to comprehend complex cause-and-effect relationships. Offering a deeper understanding of real-world incidents and the &apos;why&apos; behind them. This profound knowledge drives growth, innovation, and excellence in operations.</p>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className={`${styles.shodatYAIBox}`}>
                                    <div className={`${styles.imgContainer}`}>
                                        <Image
                                            src="/img/platform/SHODAT_YAI_1.png"
                                            alt="SHODAT_YAI_1"
                                            height={217}
                                            width={370}
                                        />
                                    </div>
                                    <div className={`${styles.textContainer}`}>
                                        <h6>Shodat YAI helps you </h6>
                                        <p>Identify and predict defects in your products and processes, perform automatic RCAs and generate risk reports and other custom reports using generative AI.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className={`${styles.shodatYAIBox}`}>
                                    <div className={`${styles.imgContainer}`}>
                                        <Image
                                            src="/img/platform/SHODAT_YAI_2.png"
                                            alt="SHODAT_YAI_1"
                                            height={217}
                                            width={370}
                                        />
                                    </div>
                                    <div className={`${styles.textContainer}`}>
                                        <h6>Shodat YAI delves deeper </h6>
                                        <p>By connecting the dots within multiple data feeds across an asset lifecycle, providing insights into cause-and-effect relationships that drive smarter, more informed decisions.</p>
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