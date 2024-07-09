import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./prefferedPartner.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function PrefferedPartner() {
  const [index, setIndex] = useState(1);
  console.log("INDEX", index)
  return (
    <>
      <div className={`${styles.experienceFuture}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
              <div className={`${styles.experienceContent}`}>
                <h2>Experience The Future Today</h2>
                <p>
                  Transform your operations, drive innovation, and unlock the
                  full potential of AI with Shodat Inc. Explore our solutions
                  and discover the power of intelligent technology to shape the
                  future of your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.prefferedPartner}`}>
        <div className={`${styles.titleSection}`}>
          <h2>What makes Shodat, your preferred partner of choice</h2>
        </div>
        <div className={`${styles.tabSection}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className={`${styles.tabs}`}>
                  <button
                    className={`${styles.btnTab} ${styles.active}`}
                    onClick={() => setIndex(1)}
                  >
                    Proven
                  </button>
                  <button
                    className={`${styles.btnTab}`}
                    onClick={() => setIndex(2)}
                  >
                    Expertise
                  </button>
                  <button
                    className={`${styles.btnTab}`}
                    onClick={() => setIndex(3)}
                  >
                    Customization
                  </button>
                  <button
                    className={`${styles.btnTab}`}
                    onClick={() => setIndex(4)}
                  >
                    Innovation
                  </button>
                  <button
                    className={`${styles.btnTab}`}
                    onClick={() => setIndex(5)}
                  >
                    Responsible AI
                  </button>
                </div>
              </div>
              <div className="col-sm-12">
                <div className={`${styles.tabsContent}`}>
                  <div className={`${styles.contentLeft}`}>
                    <h3>
                      Shodat experience in developing Analytics & AI
                      technologies includes
                    </h3>
                    <ul>
                      <li>
                        Turnkey enterprise platforms for all data integration &
                        analytics needs
                      </li>
                      <li>
                        No implementation delays with critical customizations
                      </li>
                      <li>Seamless deployments & built for global scale</li>
                      <li>
                        Low/No code data ingestion, harmonization & ML features
                      </li>
                      <li>Industry-proven ML models</li>
                    </ul>
                  </div>
                  <div className={`${styles.contentRight}`}>
                    <div className={`${styles.couonterRow}`}>
                      <div className={`${styles.counterBox}`}>
                        <h6>Consistent CSAT ratings</h6>
                        <div className={`${styles.count}`}>97%</div>
                      </div>
                      <div className={`${styles.counterBox}`}>
                        <h6>Renewal ratio</h6>
                        <div className={`${styles.count}`}>95%</div>
                      </div>
                    </div>
                    <div className={`${styles.couonterRow}`}>
                      <div className={`${styles.counterBox}`}>
                        <h6>Successful Implementations</h6>
                        <div className={`${styles.count}`}>50+</div>
                      </div>
                      <div className={`${styles.counterBox}`}>
                        <h6>Data volume managed</h6>
                        <div className={`${styles.count}`}>100 TB+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
