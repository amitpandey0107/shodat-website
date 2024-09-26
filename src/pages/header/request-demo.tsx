import React, { useState } from "react";
import styles from "./header.module.css";
import Modal from "react-bootstrap/Modal";
import { sendEmail } from "../../utils/emailService"; // Import your email service

export default function RequestDemoModal(props: any) {
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
  };

  const handleValidation = () => {
    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const PHONE_REGEX =
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

    const newErrorsState = { ...errors };
    let formIsValid = true;

    if (!formData.yourname) {
      formIsValid = false;
      newErrorsState.yourname = "Your name must not be empty!";
    }

    if (!formData.emailaddress) {
      formIsValid = false;
      newErrorsState.emailaddress = "Email address must not be empty!";
    } else if (!EMAIL_REGEX.test(formData.emailaddress)) {
      formIsValid = false;
      newErrorsState.emailaddress = "Please enter a valid email address!";
    }

    if (!formData.message) {
      formIsValid = false;
      newErrorsState.message = "Message must not be empty!";
    }

    if (!formData.companyName) {
      formIsValid = false;
      newErrorsState.companyName = "Company name must not be empty!";
    }

    if (!formData.phoneNumber) {
      formIsValid = false;
      newErrorsState.phoneNumber = "Phone number must not be empty!";
    } else if (!PHONE_REGEX.test(formData.phoneNumber)) {
      formIsValid = false;
      newErrorsState.phoneNumber = "Please enter a valid phone number!";
    } else if (formData.phoneNumber.length !== 10) {
      formIsValid = false;
      newErrorsState.phoneNumber =
        "Please enter a valid 10-digit phone number!";
    }

    if (!formIsValid) {
      setFormIsValid(false);
      setErrors(newErrorsState);
    }

    return formIsValid;
  };

  const submitForm = async (evt: any) => {
    evt.preventDefault();

    if (handleValidation()) {
      const subject = `Request Demo from ${formData.companyName}: ${formData.yourname}`;

      // Call the sendEmail function from emailService
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
      console.log("Validation failed!");
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`headerModal ${styles.headerModal}`}
    >
      <div className={`${styles.modalContent}`}>
        <Modal.Header closeButton className="closeButton"></Modal.Header>
        <div className={`${styles.modalContentInner}`}>
          <h3>Request Demo</h3>
          <form method="post" onSubmit={submitForm} id="myForm">
            <div className={`${styles.formWrapper}`}>
              <div className={`${styles.formGroup}`}>
                <label htmlFor="yourname">
                  Name <span>*</span>
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
                  onChange={handleInput}
                />
                <span className="text-color-red font-sm">
                  {errors.yourname}
                </span>
              </div>
              <div className={`${styles.formGroup}`}>
                <label htmlFor="emailaddress">
                  Email <span>*</span>
                </label>
                <input
                  type="text"
                  name="emailaddress"
                  id="emailaddress"
                  placeholder="Enter email address"
                  className={`form-control ${
                    errors.emailaddress ? "border-red" : "border-gray"
                  }`}
                  value={formData.emailaddress}
                  onChange={handleInput}
                />
                <span className="text-color-red font-sm">
                  {errors.emailaddress}
                </span>
              </div>
              <div className={`${styles.formGroup}`}>
                <label htmlFor="phoneNumber">
                  Phone Number <span>*</span>
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter phone number"
                  className={`form-control ${
                    errors.phoneNumber ? "border-red" : "border-gray"
                  }`}
                  value={formData.phoneNumber}
                  onChange={handleInput}
                />
                <span className="text-color-red font-sm">
                  {errors.phoneNumber}
                </span>
              </div>
              <div className={`${styles.formGroup}`}>
                <label htmlFor="companyName">
                  Company Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="Enter company name"
                  className={`form-control ${
                    errors.companyName ? "border-red" : "border-gray"
                  }`}
                  value={formData.companyName}
                  onChange={handleInput}
                />
                <span className="text-color-red font-sm">
                  {errors.companyName}
                </span>
              </div>
              <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                <label htmlFor="message">
                  Message <span>*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  className={`form-control ${
                    errors.message ? "border-red" : "border-gray"
                  }`}
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleInput}
                ></textarea>
                <span className="text-color-red font-sm">{errors.message}</span>
              </div>
            </div>
            <div className={`${styles.formGroup1} ${styles.formGroupLastNode}`}>
              <button className={`${styles.btnSubmit}`} id="submitForm">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
