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
                        height={120}
                        width={280}
                      />
                    </li>
                    <li>
                      <Image
                        src="/img/infoChips.png"
                        alt="infoChips"
                        height={100}
                        width={140}
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
                        width={200}
                      />
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`${styles.contactForm}`}>
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className={`${styles.schedulingInfo}`}>
                      <h2>
                        Unlock the untapped potential of your business with the
                        transformative capabilities of AI.
                      </h2>
                      <p>
                        From automating repetitive tasks to optimizing
                        decision-making through advanced analytics, Shodat AI
                        solutions is the key to scalability and innovation.
                      </p>
                      <Link
                        href="/"
                        className={`${styles.btnLetsTalkAI} btnBlack`}
                      >
                        <span>Lets Talk AI</span>
                        <Image
                          src="/img/arrowRight.svg"
                          alt="arrow right"
                          height={20}
                          width={20}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className={`${styles.schedulingForm}`}>
                      <h2>Scheduling a meeting</h2>
                      <div className={`${styles.formWrap}`}>
                        <div className={`${styles.formRow}`}>
                          <div className={`${styles.formGroup}`}>
                            <label htmlFor="yourname">Name</label>
                            <input
                              type="text"
                              name="yourname"
                              id="yourname"
                              placeholder="Enter your name"
                              className="form-control"
                            />
                          </div>
                          <div className={`${styles.formGroup}`}>
                            <label htmlFor="emailaddress">Email</label>
                            <input
                              type="text"
                              name="emailaddress"
                              id="emailaddress"
                              placeholder="Enter email address"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className={`${styles.formRow}`}>
                          <div className={`${styles.formGroup}`}>
                            <label htmlFor="phoneNumber">Phone number</label>
                            <input
                              type="text"
                              name="phoneNumber"
                              id="phoneNumber"
                              placeholder="Enter phone number"
                              className="form-control"
                            />
                          </div>
                          <div className={`${styles.formGroup}`}>
                            <label htmlFor="companyName">Company name</label>
                            <input
                              type="text"
                              name="companyName"
                              id="companyName"
                              placeholder="Enter company name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className={`${styles.formRow}`}>
                          <div className={`${styles.formGroupFull}`}>
                            <label htmlFor="message">Message</label>
                            <textarea
                              name="message"
                              id="message"
                              className="form-control"
                              placeholder="Enter your message"
                            ></textarea>
                          </div>
                        </div>
                        <div className={`${styles.formRow}`}>
                          <div className={`${styles.formGroupFull}`}>
                            <button className={`${styles.btnSubmit}`}>
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className={`${styles.cta}`}>
              <div className={`${styles.ctaContent}`}>
                <h3>Ready to embark on your AI innovation journey?</h3>
                <p>
                  Join our innovation workshop to explore custom solutions
                  tailored to your business
                </p>
              </div>
              <Link href="/" className={`${styles.getStarted} btnBlack`}>
                <span>Get Started</span>
                <Image
                  src="/img/arrowRight.svg"
                  alt="arrow right"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
