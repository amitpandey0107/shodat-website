import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./prefferedPartner.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function ResponsibleAI() {
  return (
    <div className={`${styles.tabsContent} ${styles.responsibleAI} ${styles.responsibleAIBG}`}>
      <div className={`${styles.contentFull}`}>
        <h3>
          AI should empower, not complicate. We prioritize user-friendly
          interfaces and seamless integration, ensuring that our solutions are
          not only powerful but also easy to adopt and use across your
          organization.
        </h3>
      </div>
      <div className={`${styles.contentLeft}`}>
        <div className={`${styles.contentBlock}`}>
          <h3>Data Security and Privacy</h3>
          <p>
            Trust is paramount. Our commitment to data security and privacy is
            unwavering. Rest assured that your data is handled with the utmost
            care, and our solutions comply with the highest standards of
            security and compliance.
          </p>
        </div>
      </div>
      <div className={`${styles.contentRight}`}>
        <div className={`${styles.contentBlock}`}>
          {/* <h3>Future-Proof Solutions</h3>
          <p>
            AI is an investment in the future. Our commitment to providing
            future-proof solutions means that our AI software evolves with your
            business, adapting to new challenges and opportunities in the
            ever-changing technological landscape.
          </p> */}
        </div>
      </div>
    </div>
  );
}
