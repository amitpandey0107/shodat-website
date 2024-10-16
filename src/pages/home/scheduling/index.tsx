import React, { useState, useEffect, useRef } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./scheduling.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Stack, Button } from "react-bootstrap";
import { sendEmail } from "../../../utils/emailService";

export default function Scheduling() {
  const [formData, setFormData] = useState({
    yourname: "",
    emailaddress: "",
    phoneNumber: "",
    companyName: "",
    message: "",
  } as any);
  const [errors, setErrors] = useState({
    yourname: "",
    emailaddress: "",
    phoneNumber: "",
    companyName: "",
    message: "",
  });
  const [formIsValid, setFormIsValid] = useState(true);
  const [userData, setUserData] = useState([] as any);
  const [hiddenField, setHiddenField] = useState({} as any);
  const [success, setSuccess] = useState(false);
  const handleInput = (evt: any) => {
    evt.preventDefault();
    let targetName = evt.target.name;
    let targetValue = evt.target.value;
    setFormData((state: any) => ({
      ...state,
      [targetName]: targetValue,
    }));
    setErrors({
      ...errors,
      [targetName]: "",
    });
    setFormIsValid(false);

    console.log("formData", formData);
    setHiddenField(formData);
  };

  const form = useRef();

  const handleValidation = () => {
    const EMAIL_REGEX = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    const PHONE_REGEX = new RegExp(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
    );
    const newErrorsState = { ...errors };
    let formIsValid = true;
    if (!formData.yourname) {
      formIsValid = false;
      newErrorsState.yourname = "Your name must not be empty!";
    }

    // Validate Email Address
    if (!formData.emailaddress) {
      formIsValid = false;
      newErrorsState.emailaddress = "Email address must not be empty!";
    } else if (!EMAIL_REGEX.test(formData.emailaddress)) {
      formIsValid = false;
      newErrorsState.emailaddress = "Please enter valid email address!";
    }

    // Validate message
    if (!formData.message) {
      formIsValid = false;
      newErrorsState.message = "Message must not be empty!";
    }

    // Validate company name
    if (!formData.companyName) {
      formIsValid = false;
      newErrorsState.companyName = "Company name must not be empty!";
    }

    // Validate phone number
    if (!formData.phoneNumber) {
      formIsValid = false;
      newErrorsState.phoneNumber = "Phone number must not be empty!";
    } else if (!PHONE_REGEX.test(formData.phoneNumber)) {
      formIsValid = false;
      newErrorsState.phoneNumber = "Please enter valid phone number!";
    } else if (formData.phoneNumber.length != 10) {
      formIsValid = false;
      newErrorsState.phoneNumber = "Please enter valid  phone number!";
    }

    // if any field is invalid - then we need to update our state
    if (!formIsValid) {
      setFormIsValid(false);
      setErrors(newErrorsState);
    }

    return formIsValid;
  };

  const submitForm = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (handleValidation()) {
      const subject = `New Meeting Request from ${formData.companyName}: ${formData.yourname}`;

      // Call sendEmail from emailService, passing formData and subject
      const { success, error } = await sendEmail(formData, subject);

      if (success) {
        setSuccess(true);
        setFormData({
          yourname: "",
          emailaddress: "",
          phoneNumber: "",
          companyName: "",
          message: "",
        });
        setTimeout(() => {
          setSuccess(false);
        }, 6000);
      } else {
        console.error("Email sending failed:", error);
      }
    } else {
      console.log("SOMETHING WENT WRONG!");
    }
  };

  return (
    <div className={`${styles.scheduling}`} id="scheduling">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className={`${styles.whiteBox}`}>
              <div className={`${styles.growingTeam}`}>
                <div className={`${styles.title}`}>
                  <h3>Our Clients</h3>
                  <div className={`${styles.line}`}></div>
                </div>

                {/* Desktop */}
                <div className={`${styles.clients} ${styles.clientsDesktop}`}>
                  <ul>
                    <li>
                      <ExportedImage
                        src="/img/clientLogo/L&T.jpeg"
                        alt="clients"
                        height={180}
                        width={350}
                      />
                    </li>
                    <li>
                      <ExportedImage
                        src="/img/clientLogo/SASKEN.png"
                        alt="sganalyst"
                        height={90}
                        width={120}
                      />
                    </li>
                    <li>
                      <ExportedImage
                        src="/img/clientLogo/sgAnalytics.png"
                        alt="sganalyst"
                        height={260}
                        width={260}
                      />
                    </li>
                    <li>
                      <ExportedImage
                        src="/img/clientLogo/infochips.png"
                        alt="infoChips"
                        height={155}
                        width={190}
                      />
                    </li>
                  </ul>
                </div>

                {/* Tablet */}
                <div
                  className={`${styles.clients} ${styles.clientsMobile}`}
                  id="clientsMobile"
                >
                  <Carousel controls={true} indicators={false}>
                    <Carousel.Item interval={6000}>
                      <Stack
                        direction="horizontal"
                        className="h-100 justify-content-center align-items-center"
                        gap={3}
                      >
                        <Card className={`${styles.clientItem}`}>
                          <ExportedImage
                            src="/img/clientLogo/L&T.jpeg"
                            alt="clients"
                            height={120}
                            width={280}
                          />
                        </Card>

                        <Card className={`${styles.clientItem}`}>
                          <ExportedImage
                            src="/img/clientLogo/SASKEN.png"
                            alt="sganalyst"
                            height={165}
                            width={220}
                          />
                        </Card>
                      </Stack>
                    </Carousel.Item>

                    <Carousel.Item interval={6000}>
                      <Stack
                        direction="horizontal"
                        className="h-100 justify-content-center align-items-center"
                        gap={3}
                      >
                        <Card className={`${styles.clientItem}`}>
                          <ExportedImage
                            src="/img/clientLogo/infochips.png"
                            alt="infoChips"
                            height={100}
                            width={140}
                          />
                        </Card>
                        <Card className={`${styles.clientItem}`}>
                          <ExportedImage
                            src="/img/clientLogo/sgAnalytics.png"
                            alt="sganalyst"
                            height={200}
                            width={200}
                          />
                        </Card>
                      </Stack>
                    </Carousel.Item>
                  </Carousel>
                </div>

                {/* Mobile */}
                <div
                  className={`${styles.clients} ${styles.clientsMobilev2}`}
                  id="clientsMobile"
                >
                  <Carousel controls={true} indicators={false}>
                    <Carousel.Item interval={6000}>
                      <Stack
                        direction="horizontal"
                        className="h-100 justify-content-center align-items-center"
                        gap={3}
                      >
                        <Card className={`${styles.clientItem}`}>
                          <ExportedImage
                            src="/img/clientLogo/L&T.jpeg"
                            alt="clients"
                            height={120}
                            width={280}
                          />
                        </Card>
                      </Stack>
                    </Carousel.Item>

                    <Carousel.Item interval={6000}>
                      <Stack
                        direction="horizontal"
                        className="h-100 justify-content-center align-items-center"
                        gap={3}
                      >
                        <Card className={`${styles.clientItem}`}>
                          <ExportedImage
                            src="/img/clientLogo/SASKEN.png"
                            alt="sganalyst"
                            height={155}
                            width={190}
                          />
                        </Card>
                      </Stack>
                    </Carousel.Item>

                    <Carousel.Item interval={6000}>
                      <Stack
                        direction="horizontal"
                        className="h-100 justify-content-center align-items-center"
                        gap={3}
                      >
                        <Card className={`${styles.clientItem}`}>
                          <ExportedImage
                            src="/img/clientLogo/infochips.png"
                            alt="infoChips"
                            height={100}
                            width={140}
                          />
                        </Card>
                      </Stack>
                    </Carousel.Item>

                    <Carousel.Item interval={6000}>
                      <Stack
                        direction="horizontal"
                        className="h-100 justify-content-center align-items-center"
                        gap={3}
                      >
                        <Card className={`${styles.clientItem}`}>
                          <ExportedImage
                            src="/img/clientLogo/sgAnalytics.png"
                            alt="sganalyst"
                            height={200}
                            width={200}
                          />
                        </Card>
                      </Stack>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>

              <div className={`${styles.contactForm}`}>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
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
                      {/* <Link
                                                href="#scheduling"
                                                className={`${styles.btnLetsTalkAI} btnBlack`}
                                            >
                                                <span>Let&apos;s Talk AI</span>
                                                <ExportedImage
                                                    src="/img/arrowRight.svg"
                                                    alt="arrow right"
                                                    height={20}
                                                    width={20}
                                                />
                                            </Link> */}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className={`${styles.schedulingForm}`}>
                      <h2>Scheduling a meeting</h2>
                      {success && (
                        <div className={`${styles.formRow}`}>
                          <div className={`${styles.formGroupFull}`}>
                            <div className="alert alert-success" role="alert">
                              Message sent successfully! Someone from our team
                              will reach out shortly.
                            </div>
                          </div>
                        </div>
                      )}
                      <form method="post" onSubmit={submitForm} id="myForm">
                        <div className={`${styles.formWrap}`}>
                          <div className={`${styles.formRow}`}>
                            <div className={`${styles.formGroup}`}>
                              <label htmlFor="yourname">
                                Name <em>*</em>
                              </label>
                              <input
                                type="text"
                                name="yourname"
                                id="yourname"
                                placeholder="Enter your name"
                                className={`form-control ${
                                  errors.yourname ? "border-red" : "border-gray"
                                }`}
                                value={formData.yourname}
                                onChange={(e) => handleInput(e)}
                              />
                              <span className="text-color-red font-sm">
                                {errors.yourname}
                              </span>
                            </div>
                            <div className={`${styles.formGroup}`}>
                              <label htmlFor="emailaddress">
                                Email <em>*</em>
                              </label>
                              <input
                                type="text"
                                name="emailaddress"
                                id="emailaddress"
                                placeholder="Enter email address"
                                className={`form-control ${
                                  errors.emailaddress
                                    ? "border-red"
                                    : "border-gray"
                                }`}
                                value={formData.emailaddress}
                                onChange={(e) => handleInput(e)}
                              />
                              <span className="text-color-red font-sm">
                                {errors.emailaddress}
                              </span>
                            </div>
                          </div>
                          <div className={`${styles.formRow}`}>
                            <div className={`${styles.formGroup}`}>
                              <label htmlFor="phoneNumber">
                                Phone number <em>*</em>
                              </label>
                              <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="Enter phone number"
                                className={`form-control ${
                                  errors.phoneNumber
                                    ? "border-red"
                                    : "border-gray"
                                }`}
                                value={formData.phoneNumber}
                                onChange={(e) => handleInput(e)}
                              />
                              <span className="text-color-red font-sm">
                                {errors.phoneNumber}
                              </span>
                            </div>
                            <div className={`${styles.formGroup}`}>
                              <label htmlFor="companyName">
                                Company name <em>*</em>
                              </label>
                              <input
                                type="text"
                                name="companyName"
                                id="companyName"
                                placeholder="Enter company name"
                                className={`form-control ${
                                  errors.companyName
                                    ? "border-red"
                                    : "border-gray"
                                }`}
                                value={formData.companyName}
                                onChange={(e) => handleInput(e)}
                              />
                              <span className="text-color-red font-sm">
                                {errors.companyName}
                              </span>
                            </div>
                          </div>
                          <div className={`${styles.formRow}`}>
                            <div className={`${styles.formGroupFull}`}>
                              <label htmlFor="message">
                                Message <em>*</em>
                              </label>
                              <textarea
                                name="message"
                                id="message"
                                className={`form-control ${
                                  errors.message ? "border-red" : "border-gray"
                                }`}
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={(e) => handleInput(e)}
                              ></textarea>
                              <span className="text-color-red font-sm">
                                {errors.message}
                              </span>
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
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container-fluid displayNone">
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
                <ExportedImage
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
