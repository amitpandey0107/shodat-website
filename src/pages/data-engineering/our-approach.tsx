import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./data-engineering.module.css";

export default function OurApproach() {
  return (
    <div className={`${styles.ourApproach}`}>
      <div className={`container-fluid ${styles.zIndex99}`}>
        
        <div className="row">
            <div className="col-sm-12">
                <div className={`${styles.titleUnderline}`}>
                    <h2>Our Approach</h2>
                </div>
            </div>
        </div>

        <div className={`row`}>
          <div className="col-sm-12">
            <div className={`${styles.approachContent}`}>
              <div className={`${styles.columns} ${styles.columns1}`}>
                <div className={`${styles.block}`}>
                  <div className={`${styles.logo}`}>
                    <span>
                      <Image
                        height={64}
                        width={64}
                        alt="Data Integration and Management"
                        src={"/img/dataEngineering/appraoch_1.png"}
                      />
                    </span>
                  </div>
                  <h4>Data Integration and <br/>Management</h4>
                  <p>
                  Efficient data integration and management are crucial for deriving meaningful insights.
                  </p>
                </div>
              </div>
              <div className={`${styles.columns} ${styles.columns2}`}>
                <div className={`${styles.block}`}>
                  <div className={`${styles.logo}`}>
                    <span>
                      <Image
                        height={64}
                        width={64}
                        alt="Data Integration and Management"
                        src={"/img/dataEngineering/appraoch_2.png"}
                      />
                    </span>
                  </div>
                  <h4>Scalable Data <br/>Architecture</h4>
                  <p>
                  Our team designs and implements scalable data architectures.
                  </p>
                </div>
              </div>
              <div className={`${styles.columns} ${styles.columns3}`}>
                <div className={`${styles.block}`}>
                  <div className={`${styles.logo}`}>
                    <span>
                      <Image
                        height={64}
                        width={64}
                        alt="Data Integration and Management"
                        src={"/img/dataEngineering/appraoch_3.png"}
                      />
                    </span>
                  </div>
                  <h4>Advanced Analytics <br/>and Machine Learning</h4>
                  <p>Unlock the full potential of your data.</p>
                </div>
              </div>
              <div className={`${styles.columns} ${styles.columns4}`}>
                <div className={`${styles.block}`}>
                  <div className={`${styles.logo}`}>
                    <span>
                      <Image
                        height={64}
                        width={64}
                        alt="Data Integration and Management"
                        src={"/img/dataEngineering/appraoch_4.png"}
                      />
                    </span>
                  </div>
                  <h4>Data Security <br/>and Compliance</h4>
                  <p>We prioritize data security and compliance.</p>
                </div>
              </div>
              <div className={`${styles.columns} ${styles.columns5}`}>
                <div className={`${styles.block}`}>
                  <div className={`${styles.logo}`}>
                    <span>
                      <Image
                        height={64}
                        width={64}
                        alt="Real-Time Data Processing"
                        src="/img/dataEngineering/real_time_approach.png"
                      />
                    </span>
                  </div>
                  <h4>Real-Time Data <br/>Processing</h4>
                  <p>
                    In today&apos;s fast-paced world, real-time data processing is
                    essential.
                  </p>
                </div>
              </div>
              <div className={`${styles.dottedLine}`}>
                <Image
                  height={200}
                  width={1000}
                  alt="Data Integration and Management"
                  src={"/img/dataEngineering/dotted_curved_line.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
