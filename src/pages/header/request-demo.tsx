import React, { useState, useEffect, useRef } from "react";
import emailjs from 'emailjs-com';
import styles from './header.module.css';
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";

export default function RequestDemoModal(props: any) {

    const [formData, setFormData] = useState({
        yourname: "",
        emailaddress: "",
        phoneNumber: "",
        companyName: "",
        message: ""
    } as any);
    const [errors, setErrors] = useState({
        yourname: "",
        emailaddress: "",
        phoneNumber: "",
        companyName: "",
        message: ""
    });
    const [formIsValid, setFormIsValid] = useState(true);
    const [userData, setUserData] = useState([] as any);
    const [hiddenField, setHiddenField] = useState({} as any);
    const [success, setSuccess] = useState(false);
    const handleInput = (evt: any) => {
        evt.preventDefault()
        let targetName = evt.target.name;
        let targetValue = evt.target.value;
        setFormData((state: any) => ({
            ...state,
            [targetName]: targetValue
        }));
        setErrors({
            ...errors,
            [targetName]: ""

        })
        setFormIsValid(false);

        console.log("formData", formData)
        setHiddenField(formData)
    };

    const form = useRef();

    const handleValidation = () => {
        const EMAIL_REGEX = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
        const PHONE_REGEX = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);
        const newErrorsState = { ...errors };
        let formIsValid = true;
        if (!formData.yourname) {
            formIsValid = false;
            newErrorsState.yourname = "Your name must not be empty!"
        }

        // Validate Email Address
        if (!formData.emailaddress) {
            formIsValid = false;
            newErrorsState.emailaddress = "Email address must not be empty!"
        } else if (!EMAIL_REGEX.test(formData.emailaddress)) {
            formIsValid = false;
            newErrorsState.emailaddress = "Please enter valid email address!"
        }


        // Validate message
        if (!formData.message) {
            formIsValid = false;
            newErrorsState.message = "Message must not be empty!"
        }

        // Validate company name
        if (!formData.companyName) {
            formIsValid = false;
            newErrorsState.companyName = "Company name must not be empty!"
        }

        // Validate phone number
        if (!formData.phoneNumber) {
            formIsValid = false;
            newErrorsState.phoneNumber = "Phone number must not be empty!"
        } else if (!PHONE_REGEX.test(formData.phoneNumber)) {
            formIsValid = false;
            newErrorsState.phoneNumber = "Please enter valid phone number!"
        } else if (formData.phoneNumber.length != 10) {
            formIsValid = false;
            newErrorsState.phoneNumber = "Please enter valid  phone number!"
        }

        // if any field is invalid - then we need to update our state
        if (!formIsValid) {
            setFormIsValid(false);
            setErrors(newErrorsState);
        }

        return formIsValid
    }

    const submitForm = (evt: any) => {
        evt.preventDefault();
        if (handleValidation()) {
            emailjs.sendForm('service_9e2j0tf', 'template_0oc12we', evt.target, 'Cu6hkIskYYHv1iCa_')
                .then((result) => {
                    // window.location.reload();
                    setSuccess(true)
                    setFormData({
                        yourname: "",
                        emailaddress: "",
                        phoneNumber: "",
                        companyName: "",
                        message: ""
                    })
                    setTimeout(() => {
                        setSuccess(false)
                    }, 6000)
                }, (error) => {
                    console.log(error.text);
                });

        } else {
            console.log("SOMETHING WENT WRONG !")
        }
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={`headerModal ${styles.headerModal}`}
            id
        >
            <div className={`${styles.modalContent}`}>
                <Modal.Header closeButton className="closeButton"></Modal.Header>
                <div className={`${styles.modalContentInner}`}>
                    <h3>Scheduling a meeting</h3>
                    <form method='post' onSubmit={submitForm} id="myForm">
                        <div className={`${styles.formWrapper}`}>
                            <div className={`${styles.formGroup}`}>
                                <label htmlFor="yourname">Name <span>*</span></label>
                                <input
                                    type="text"
                                    name="yourname"
                                    id="yourname"
                                    placeholder="Enter your name"
                                    className={`form-control ${errors.yourname ? 'border-red' : 'border-gray'}`}
                                    value={formData.yourname}
                                    onChange={(e) => handleInput(e)}
                                />
                                <span className='text-color-red font-sm'>
                                    {errors.yourname}
                                </span>
                            </div>
                            <div className={`${styles.formGroup}`}>
                                <label htmlFor="youremail">Email <span>*</span></label>
                                <input
                                    type="text"
                                    name="emailaddress"
                                    id="emailaddress"
                                    placeholder="Enter email address"
                                    className={`form-control ${errors.emailaddress ? 'border-red' : 'border-gray'}`}
                                    value={formData.emailaddress}
                                    onChange={(e) => handleInput(e)}
                                />
                                <span className='text-color-red font-sm'>
                                    {errors.emailaddress}
                                </span>
                            </div>
                            <div className={`${styles.formGroup}`}>
                                <label htmlFor="phonenumber">Phone Number <span>*</span></label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    placeholder="Enter phone number"
                                    className={`form-control ${errors.phoneNumber ? 'border-red' : 'border-gray'}`}
                                    value={formData.phoneNumber}
                                    onChange={(e) => handleInput(e)}
                                />
                                <span className='text-color-red font-sm'>
                                    {errors.phoneNumber}
                                </span>
                            </div>
                            <div className={`${styles.formGroup}`}>
                                <label htmlFor="companyname">Company Name <span>*</span></label>
                                <input
                                    type="text"
                                    name="companyName"
                                    id="companyName"
                                    placeholder="Enter company name"
                                    className={`form-control ${errors.companyName ? 'border-red' : 'border-gray'}`}
                                    value={formData.companyName}
                                    onChange={(e) => handleInput(e)}
                                />
                                <span className='text-color-red font-sm'>
                                    {errors.companyName}
                                </span>
                            </div>
                            <div className={`${styles.formGroup}`}>
                                <label htmlFor="message">Message <span>*</span></label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className={`form-control ${errors.message ? 'border-red' : 'border-gray'}`}
                                    placeholder="Enter your message"
                                    value={formData.message}
                                    onChange={(e) => handleInput(e)}
                                ></textarea>
                                <span className='text-color-red font-sm'>
                                    {errors.message}
                                </span>
                            </div>
                            <div className={`${styles.formGroup} ${styles.formGroupLastNode}`}>
                                <button className={`${styles.btnSubmit}`} id="submitForm">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
}
