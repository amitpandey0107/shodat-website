import React from 'react'
import styles from './purpleBox.module.css'
export default function PurpleBox() {
    return (
        <>
            <div className={`${styles.purpleBox}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className={`${styles.titleBlock}`}>
                                <h2>Expertise with Power Platform</h2>
                                <p>Transform business operations and increase organization’s productivity</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className={`${styles.infoBlock} ${styles.marginBot}`}>
                                <h6>Advanced Data Modeling</h6>
                                <p><strong>Composite Models:</strong> Combine direct query and import data models for greater flexibility. </p>
                                <p><strong>Aggregations:</strong> Optimize performance for large datasets with aggregations and pre-calculated tables.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className={`${styles.infoBlock} ${styles.marginBot}`}>
                                <h6>Performance Optimization</h6>
                                <p><strong>Performance Analyzer:</strong> Use the Performance Analyzer to identify and troubleshoot performance issues in reports. </p>
                                <p><strong>Incremental Refresh:</strong> Enable incremental refresh to keep data updated without full dataset reloads.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className={`${styles.infoBlock} ${styles.marginBot}`}>
                                <h6>Enhanced Data Connectivity</h6>
                                <p><strong><strong>Composite Models:</strong> Combine direct query and import data models for greater flexibility. </strong></p>
                                <p><strong>Connectivity:</strong> Connect to a wide range of data sources, including cloud-based and on-premises databases.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className={`${styles.infoBlock}`}>
                                <h6>Enterprise-Level BI</h6>
                                <p><strong>Row-Level Security (RLS):</strong> Implement row-level security to ensure data is accessible only to authorized users.</p>
                                <p><strong>Deployment Pipelines:</strong> Manage content lifecycle with deployment pipelines for development, testing, and production environments.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className={`${styles.infoBlock}`}>
                                <h6>Custom Visuals and Reporting</h6>
                                <p><strong>Custom Visualizations:</strong> Build and import custom visuals & Reports tailored to specific needs. </p>
                                <p><strong>R and Python Integration:</strong> Use R and Python scripts for advanced data manipulation and visualizations.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className={`${styles.infoBlock}`}>
                                <h6>AI and Machine Learning Integration</h6>
                                <p><strong>Power Automate :</strong> Leverage AI features like text analytics, OCR and automated insights. </p>
                                <p><strong>Integration with Auto ML:</strong> Use Azure Machine Learning models within Power BI for enhanced predictive analytics.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}