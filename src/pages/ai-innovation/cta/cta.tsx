import React from "react";
import styles from './cta.module.css';

export default function Cta() {
    return (
        <>
            <div className={`${styles.experienceFuture} experienceFutureSection`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                            <div className={`${styles.experienceContent}`}>
                                <h2>Our AI Innovation Suite</h2>
                                <p>
                                    At Shodat Inc., we offer a comprehensive suite of AI-driven solutions designed to address the unique challenges of various industries. Our flagship platforms, Shodat X, Shodat YAI, and Shodat eOps, embody our commitment to innovation and excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}