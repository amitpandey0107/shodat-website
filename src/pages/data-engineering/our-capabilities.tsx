import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./data-engineering.module.css";

export default function OurCapabilities() {
  return (
    <div className={`${styles.ourCapabilities}`}>
        <div className={`${styles.capabilitiesBox}`}>
            <h2>Our Capabilities and Expertise</h2>
            <h4>Our team excels in constructing robust data pipelines that manage data workflows and processing efficiently. </h4>
            <p>These pipelines are essential for ensuring that data is moved seamlessly and transformed correctly as it flows from source to destination, enabling continuous and reliable data operations.</p>
        </div>
        <div className={`container-fluid ${styles.zIndex99}`}></div>
        <div className={`${styles.overlayGradient}`}></div>
    </div>
  );
}
