import React from "react";
import styles from './platform.module.css';
import Link from "next/link";
import Image from "next/image";

export default function ShodatYAI() {

    return (
        <div className={`${styles.introduction}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className={`${styles.introductionPicture}`}></div>
                    </div>
                    <div className="col-sm-6">
                        <div className={`${styles.introductionContent}`}>
                            <h1>Shodat YAI</h1>
                            <p>Shodat YAI combines the cutting-edge technologies of Generative AI, Causal AI, and Inference Analytics to deliver unparalleled insights and predictive intelligence. Our platform enables organizations to comprehend complex cause-and-effect relationships, offering a deeper understanding of real-world incidents and the &apos;why&apos; behind them. This profound knowledge drives growth, innovation, and excellence in operations.</p>
                            <p><strong>Shodat YAI helps you identify and predict defects in your products and processes, performs automatic  RCAs and generates risk reports and other custom reports using generative AI.</strong></p>
                            <p><strong>Unlike traditional methods, Shodat YAI delves deeper by connecting the dots within multiple data feeds across an asset lifecycle, providing insights into cause-and-effect relationships that drive smarter, more informed decisions.</strong></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}