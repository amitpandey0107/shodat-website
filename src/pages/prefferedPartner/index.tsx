import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./prefferedPartner.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Proven from "./proven";
import Expertise from "./expertise";
import Customization from "./customization";
import Innovation from "./innovation";
import ResponsibleAI from "./responsibleAI";

export default function PrefferedPartner() {
  const [index, setIndex] = useState(1);
  const [bgClass, setBgClass] = useState("bg1");
  
  return (
    <>
      <div className={`${styles.experienceFuture} experienceFutureSection`}>
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

      <div className={`${styles.prefferedPartner} prefferedPartnerSection`}>
        <div className={`${styles.titleSection}`}>
          <h2>What makes Shodat, your preferred partner of choice</h2>
        </div>
        <div className={`${styles.tabSection}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className={`${styles.tabs}`}>
                  <button
                    className={`${styles.btnTab} ${index === 1 && styles.active}`}
                    onClick={() => setIndex(1)}
                  >
                    Proven
                  </button>
                  <button
                    className={`${styles.btnTab} ${index === 2 && styles.active}`}
                    onClick={() => setIndex(2)}
                  >
                    Expertise
                  </button>
                  <button
                    className={`${styles.btnTab} ${index === 3 && styles.active}`}
                    onClick={() => setIndex(3)}
                  >
                    Customization
                  </button>
                  <button
                    className={`${styles.btnTab} ${index === 4 && styles.active}`}
                    onClick={() => setIndex(4)}
                  >
                    Innovation
                  </button>
                  <button
                    className={`${styles.btnTab} ${index === 5 && styles.active}`}
                    onClick={() => setIndex(5)}
                  >
                    Security & Compliance
                  </button>
                </div>
              </div>

              <div className="col-sm-12">
                {
                  index === 1 && <Proven />
                }

                {
                  index === 2 && <Expertise />
                }

                {
                  index === 3 && <Customization />
                }

                {
                  index === 4 && <Innovation />
                }

                {
                  index === 5 && <ResponsibleAI />
                }
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
