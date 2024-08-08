import React, { useEffect, useState } from "react";
import styles from "./platform.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

export default function MyVerticallyCenteredModal(props: any) {
  const [data, setData] = useState([] as any);
  useEffect(() => {
    fetch("/json/casestudy.json", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        var filtered = json.filter((item: any) => {
          return item.caseid === props?.modalid;
        });
        setData(filtered);
      });
  }, [props?.modalid]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`caseStudyModal ${styles.caseStudyModal}`}
      id
    >
      <div className={`${styles.modalContent}`}>
        <Modal.Header closeButton className="closeButton"></Modal.Header>
        {data && data.length > 0
          ? data.map((item: any, index: any) => (
              <div className={`${styles.modalContentInner}`} key={index}>
                <div className={`${styles.modalLeft}`}>
                  <Image
                    src={`/img/platform/platform-page-imgs/${item.image}`}
                    alt="evCharging"
                    height={554}
                    width={547}
                  />
                </div>
                <div className={`${styles.modalRight}`}>
                  <div className={`${styles.modalRightContent}`}>
                    <h2>{item.caseStudy}</h2>
                    <p>{item.text}</p>
                    <div className={`${styles.result} ${styles.desktop}`}>
                      <h4>Result</h4>
                      <div className={`${styles.resultBox}`}>
                        {item?.result?.map((it: any, ind: any) => (
                          <p key={ind}>{it}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.result} ${styles.mobile}`}>
                  <h4>Result</h4>
                  <div className={`${styles.resultBox}`}>
                    {item?.result?.map((it: any, ind: any) => (
                      <p key={ind}>{it}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </Modal>
  );
}
