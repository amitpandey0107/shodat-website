import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import styles from "./businessIntelligence.module.css";
import AccordionBusiness from "./accordian";
export default function BusinessIntelligence() {
  return (
    <>
      <div className={`${styles.businessIntelligence}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className={`${styles.titleCenter}`}>
                <h1 className={`${styles.titleUnderline}`}>
                  Shodat Inc Your Partner in Business <br />
                  Intelligence Implementation
                </h1>
                <p>
                  At Shodat Inc, we specialize in delivering robust Business
                  Intelligence (BI) solutions tailored to meet the unique needs
                  of your business. With years of experience and a dedicated
                  team of BI experts, we offer comprehensive services that
                  empower organizations to harness the full potential of their
                  data.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className={`${styles.sectionImage}`}>
                <div className={`${styles.thumbnail}`}>
                  <ExportedImage
                    src="/img/advancedAnalytics/dummyRect.png"
                    alt="dummy images"
                    height={528}
                    width={624}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className={`${styles.sectionInfo}`}>
                <h2>Our BI Implementation Services Include:</h2>
                <div className={`${styles.accordianWrap}`}>
                  <AccordionBusiness />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
