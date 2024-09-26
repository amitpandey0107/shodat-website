import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./data-engineering.module.css";

export default function Innovation() {
  return (
    <div className={`${styles.innovation}`}>
      <div className="container-fluid">
        <div className={`row ${styles.rowFlex}`}>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.blackBox}`}>
              <h3>
                {/* Engineering Data for Precision,{" "}
                <span>Insight and Innovation</span> */}
                Data Engineering  for Precision, <span>Insight, and Innovation.</span>
              </h3>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`${styles.information}`}>
              <h2>Our Capabilities and Expertise</h2>
              <p>
                Our team excels in constructing robust data pipelines that
                manage data workflows and processing efficiently. These
                pipelines are essential for ensuring that data is moved
                seamlessly and transformed correctly as it flows from source to
                destination, enabling continuous and reliable data operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
