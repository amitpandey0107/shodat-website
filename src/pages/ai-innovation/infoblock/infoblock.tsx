import React, { useState, useEffect } from "react";
import styles from './infoblock.module.css';
import Image from "next/image";
export default function AIInfoBlock(props: any) {
    const [data, setData] = useState<any>();
    const [co11, setCol1] = useState({}) 
    const [co12, setCol2] = useState({}) 
    useEffect(() => {
        setData(props?.sectionData);
        if(props?.mode===1) {
            setCol1({order:1})
            setCol2({order:2})
        } else {
            setCol1({order:2})
            setCol2({order:1})
        }
    }, [props])


    return (
        <>
            <div className={`${styles.aiInfoBlock}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={`col-sm-12 col-md-7 col-lg-7 ${styles.column1}`} style={co11}>
                            <div className={`${styles.leftSection}`}>
                                <h2>{data?.title}</h2>
                                <div className={`${styles.textRow}`}>
                                    {data?.subTitle ? <h6>{data?.subTitle}</h6> : null}
                                    {data?.intro ? <p>{data?.intro}</p> : null}
                                </div>
                                <div className={`${styles.textRowWrap}`}>
                                    {
                                        data?.feat && data?.feat.length > 0 ?
                                            data?.feat.map((item: any, index: any) => (
                                                <div className={`${styles.textRow}`} key={index}>
                                                    <h6>{item?.title}</h6>
                                                    {
                                                        item?.text.map((it: any, idx: any) => (
                                                            <p key={idx}><strong>{it.bold} </strong> {it.text} </p>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                            : null
                                    }

                                    {/* <p><strong>Comprehensive Image Analysis:</strong> Detects and classifies a wide range of defects and anomalies.</p>
                                    <p><strong>Enhanced Inspection:</strong> Automates routine inspections, reducing manual labor and error rates.</p>
                                    <p><strong>Scalable Solutions:</strong> Easily adapts to various scales of operation.</p> */}
                                </div>

                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-5 col-lg-5 ${styles.column21}`} style={co12}>
                            <div className={`${styles.rightSection}`}>
                                <div className={`${styles.thumbnail}`}>
                                    <Image
                                        src="/img/aiInnovation/intro/introduction.png"
                                        alt="intro"
                                        height={429}
                                        width={560}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}