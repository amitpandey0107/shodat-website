import React from "react";
import styles from "./platform.module.css";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

export default function Questions() {
  return (
    <>
      <div className={`${styles.questionsWrap}`}>
        <div className={`${styles.questions}`}>
          <div className={`${styles.questionsContent}`}>
            <div className={`${styles.infoBox} ${styles.box1}`}>
              <p>
                Are you facing challenges in maintaining product quality and
                struggling to minimize defect rates
              </p>
              <div className={`${styles.queMark}`}>
                <ExportedImage
                  src="/img/platform/que_mark.svg"
                  alt="que_mark"
                  height={20}
                  width={20}
                />
              </div>
            </div>

            <div className={`${styles.infoBox} ${styles.box2}`}>
              <p>
                Is there a lack of visibility in your operations and processes
                due to data being dispersed across multiple systems or
                insufficient data inputs
              </p>
              <div className={`${styles.queMark2}`}>
                <ExportedImage
                  src="/img/platform/que_mark.svg"
                  alt="que_mark"
                  height={20}
                  width={20}
                />
              </div>
            </div>

            <div className={`${styles.infoBox} ${styles.box3}`}>
              <p>
                Does your root cause analysis (RCA) and reporting process take
                an excessive amount of time to complete
              </p>
              <div className={`${styles.queMark2}`}>
                <ExportedImage
                  src="/img/platform/que_mark.svg"
                  alt="que_mark"
                  height={20}
                  width={20}
                />
              </div>
            </div>

            <div className={`${styles.infoBox} ${styles.box4}`}>
              <p>
                Are you encountering difficulties with safety and compliance
                issues within your organization
              </p>
              <div className={`${styles.queMark2}`}>
                <ExportedImage
                  src="/img/platform/que_mark.svg"
                  alt="que_mark"
                  height={20}
                  width={20}
                />
              </div>
            </div>

            <div className={`${styles.infoBox} ${styles.box5}`}>
              <p>
                Are you lacking predictive capabilities or experiencing friction
                in implementing AI/ML strategies
              </p>
              <div className={`${styles.queMark2}`}>
                <ExportedImage
                  src="/img/platform/que_mark.svg"
                  alt="que_mark"
                  height={20}
                  width={20}
                />
              </div>
            </div>

            <div className={`${styles.circle}`}>
              <p>
                You&apos;re not alone in facing these complex operational
                challenges{" "}
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.phrase}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className={`${styles.phraseBox}`}>
                  <h4>
                    Average cost of poor quality (COPQ) in Industry can range
                    from <span>5% to 30%</span> of sales revenue.
                  </h4>
                  <p>- ASQ and various Six Sigma studies</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className={`${styles.phraseBox}`}>
                  <h4>
                    Product recalls in the U.S. have surged by nearly{" "}
                    <span>30%</span> over the last decade, largely due to
                    manufacturing defects and poor quality control.
                  </h4>
                  <p>- Consumer Product Safety Commission (CPSC)</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className={`${styles.phraseBox}`}>
                  <h4>
                    Unplanned downtime in manufacturing, costs industrial
                    manufacturers an estimated <span>$50 billion</span> each
                    year.
                  </h4>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className={`${styles.phraseBox}`}>
                  <h4>
                    The average estimate for regulatory compliance and economic
                    effects of federal intervention is more the{" "}
                    <span>$ 1.9 trillion</span> annually.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </>
  );
}
