import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./use-case.module.css";
import UseCase from "../useCase/usecase";

export default function Layout(props: any) {
    const [data, setData] = useState({} as any)
    useEffect(() => {
        setData(props.pageData)
    }, [props])
    console.log({
        data: data
    })
    return (
        <div className={`${styles.layout}`}>

            <div className={`${styles.layoutTop}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className={`${styles.caseBox}`}>
                                <div className={`${styles.title}`}>
                                    <h2>{data?.title}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.layoutContent}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className={`${styles.layoutContainer}`}>
                                <h4>Overview</h4>
                                <div className={`${styles.textImage} ${styles.sectionMargin}`}>
                                    <div className={`${styles.text}`}>
                                        <p>{data?.info_1 && data?.info_1}</p>
                                        <p>{data?.info_2 && data?.info_2}</p>
                                    </div>
                                    <div className={`${styles.image}`}>
                                        <Image
                                            src={data?.contentImage ? `/img/advancedAnalytics/useCase/${data?.contentImage}` : `/img/useCases/real-time-data-img.png`}
                                            alt="sgAnalytics"
                                            height={332}
                                            width={420}
                                        />
                                    </div>
                                </div>

                                <div className={`${styles.textBlockFull} ${styles.sectionMargin}`}>
                                    <p>{data?.info_3 && data?.info_3}</p>
                                    <p>{data?.info_4 && data?.info_4}</p>
                                    <p>{data?.info_5 && data?.info_5}</p>
                                </div>

                                <div className={`${styles.infoBoxWrap} ${data?.boxedInfo && data.boxedInfo.length > 0 ? `${styles.sectionMargin}` :`${styles.null}` } `}>
                                    {
                                        data?.boxedInfo && data.boxedInfo.length > 0 ?
                                            data?.boxedInfo.map((item: any, index: any) => (
                                                <div key={index} className={`${styles.block}`}>
                                                    <div className={`${styles.highlight}`}>{item.highlight}</div>
                                                    <div className={`${styles.info}`}>{item.text}</div>
                                                </div>
                                            )) : null
                                    }
                                </div>

                                {
                                    data?.points && data?.points.length > 0 ?
                                        data?.points.map((item: any, index: any) => (
                                            <div key={index} className={`${styles.textBlockFull} ${styles.sectionMargin}`}>
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                                <>{item.desc2 ? <p><strong>{item.desc2}</strong></p> : null }</>
                                                <ul className={`${styles.lists}`}>
                                                {item?.listItems && item?.listItems.length > 0 ?
                                                    item?.listItems.map((it:any, idx:any)=>(
                                                        <li key={idx}><strong>{it.title}</strong> <span>{it.text}</span></li>
                                                    ))
                                                :null }
                                                </ul>
                                            </div>
                                        )) : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.getUseCaseSlider}`}>
                <UseCase />
            </div>

        </div>
    )
}