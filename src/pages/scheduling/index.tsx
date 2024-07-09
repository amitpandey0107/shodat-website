import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./scheduling.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Scheduling() {
  return (
    <div className={`${styles.scheduling}`}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className={`${styles.whiteBox}`}>
                        <div className={`${styles.growingTeam}`}>
                            <div className={`${styles.title}`}>
                                <h3>Our Growing team of Technology Partners</h3>
                                <div className={`${styles.line}`}></div>
                            </div>
                            <div className={`${styles.clients}`}>
                                <ul>
                                    <li>
                                        <Image
                                            src="/img/L&T.png"
                                            alt="clients"
                                            height={100}
                                            width={200}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="/img/infoChips.png"
                                            alt="infoChips"
                                            height={100}
                                            width={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="/img/brillio.png"
                                            alt="brillio"
                                            height={100}
                                            width={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="/img/pwc.png"
                                            alt="pwc"
                                            height={100}
                                            width={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src="/img/sganalyst.png"
                                            alt="sganalyst"
                                            height={200}
                                            width={120}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  );
}
