import React from "react";
import ExportedImage from "next-image-export-optimizer";
import styles from "./data-engineering.module.css";
import "bootstrap/dist/css/bootstrap.css";
import FeatureSlider from "./featureSlider";

export default function KeyFeatures() {
  return (
    <div className={`${styles.keyFeatures}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-5 px-0">
            <div className={`${styles.dataEtlBox}`}>
              <h2>
                Data ETL <span>(Extract, Transform, Load)</span>
              </h2>
              <p>
                Our ETL services are designed to handle complex data ingestion
                and transformation tasks.
              </p>
              <div className={`${styles.etlImage}`}>
                <ExportedImage
                  src="/img/dataEngineering/data_etl.png"
                  alt="Data ETL"
                  height={292}
                  width={531}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7 px-0">
            <div className={`${styles.featureBox}`}>
              <h2 className={`${styles.keyFeatTitle}`}>
                Key features include:
              </h2>

              <FeatureSlider />

              {/* <div className={`${styles.featSliderButton}`}>
                                <button className={`${styles.sliderBtnLeft}`}>
                                    <ExportedImage
                                        src="/img/dataEngineering/angle_left_off_black.svg"
                                        alt="arrow-left"
                                        height={36}
                                        width={18}
                                    />
                                </button>
                                <button className={`${styles.sliderBtnRight}`}>
                                    <ExportedImage
                                        src="/img/dataEngineering/angle_right_black.svg"
                                        alt="arrow-left"
                                        height={36}
                                        width={18}
                                    />
                                </button>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
