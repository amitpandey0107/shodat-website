import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./prefferedPartner.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Innovation() {
  return (
    <div className={`${styles.tabsContent} ${styles.innovation} ${styles.innovationBG} innovationSection`}>
      <div className={`${styles.contentFull}`}>
        <h3>
          The AI landscape is dynamic, and so are we. Our commitment to continuous
          innovation means that you&apos;ll always have access to the latest
          features and functionalities, keeping your business on the cutting edge.
        </h3>
      </div>

      <div className={`${styles.contentInnovation}`}>
        <div className={`${styles.contentLeft}`}>
          <div className={`${styles.contentBlock}`}>
            <h3>Cutting-Edge AI Solutions</h3>
            <p>
              Explore the capabilities of the latest advancements in artificial
              intelligence with Shodat Inc. We are committed to delivering
              cutting-edge AI solutions that keep your business at the forefront
              of innovation, unlocking endless opportunities for growth and value
              generation for the industry
            </p>
          </div>
        </div>
        <div className={`${styles.contentRight}`}>
          <div className={`${styles.contentBlock}`}>
            <h3>Future-Proof Solutions</h3>
            <p>
              AI is an investment in the future. Our commitment to providing
              future-proof solutions means that our AI software evolves with your
              business, adapting to new challenges and opportunities in the
              ever-changing technological landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
