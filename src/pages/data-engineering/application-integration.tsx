import React from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./data-engineering.module.css";
export default function ApplicationIntegration() {
  return (
    <div className={`${styles.applicationIntegration} appIntegration`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-5 px-0">
            <div className={`${styles.appBox}`}>
              <h2>Application Integration</h2>
              <p>
                Our data integration services ensure seamless communication and
                data flow across your systems for event based or real time data
                streaming use cases.:
              </p>
              <div className={`${styles.appBoxImage}`}>
                <ExportedImage
                  src="/img/dataEngineering/Application_Integration.png"
                  alt="Application Integration"
                  height={261}
                  width={545}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7 px-0">
            <div className={`${styles.appInfoblock}`}>
              <div className={`${styles.appRow}`}>
                <div className={`${styles.appColHalf}`}>
                  <div className={`${styles.content}`}>
                    <div className={`${styles.appImg}`}>
                      <ExportedImage
                        src="/img/dataEngineering/Building_Publish_Subscribe_Systems.svg"
                        alt="Building Publish-Subscribe Systems"
                        height={160}
                        width={227}
                      />
                    </div>
                    <h6>Building Publish-Subscribe Systems</h6>
                    <p>
                      We develop robust publish-subscribe systems to manage
                      alerts and enable asynchronous communication across your
                      data ecosystem.
                    </p>
                  </div>
                </div>
                <div className={`${styles.appColHalf}`}>
                  <div className={`${styles.content}`}>
                    <div className={`${styles.appImg}`}>
                      <ExportedImage
                        src="/img/dataEngineering/Azure_Service_Bus_Integration.svg"
                        alt="Azure Service Bus Integration"
                        height={160}
                        width={172}
                      />
                    </div>
                    <h6>Azure Service Bus Integration</h6>
                    <p>
                      Leverage Azure Service Bus for reliable cloud messaging
                      between applications and services, ensuring smooth data
                      integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
