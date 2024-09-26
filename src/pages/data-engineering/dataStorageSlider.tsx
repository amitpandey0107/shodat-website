import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./data-engineering.module.css";
import ExportedImage from "next-image-export-optimizer";

export default function DataStorageSlider(props: any) {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const [toggleButton, setToggleButton] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current: any) => setActiveSlide2(current),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    activeSlide > 0 ? setToggleButton(true) : setToggleButton(false);
  }, [activeSlide]);
  return (
    <div
      className={`slider-container dataStorageSlickSlider ${
        toggleButton && "activatekro"
      }`}
    >
      <div className={`${styles.featSliderBlock}`}>
        <Slider {...settings}>
          <div className={`${styles.featSlideItemBox}`}>
            <div className={`${styles.itemTop}`}>
              <ExportedImage
                height={168}
                width={160}
                alt="Ingesting Data into the Cloud"
                src="/img/dataEngineering/Data_Warehousing.svg"
              />
            </div>
            <div className={`${styles.itemBottom}`}>
              <h6>Data Warehousing</h6>
              <p>
                We design and implement scalable data warehouses that provide a
                centralized repository for all your data needs and enable .
                Customized data marts are developed for specific business lines
                or departments, facilitating focused and efficient data
                analysis.
              </p>
            </div>
          </div>

          <div className={`${styles.featSlideItemBox}`}>
            <div className={`${styles.itemTop}`}>
              <ExportedImage
                height={168}
                width={160}
                alt="Ingesting Data from Various Sources"
                src="/img/dataEngineering/Data_Warehousing.svg"
              />
            </div>
            <div className={`${styles.itemBottom}`}>
              <h6>Building Customized Data Models</h6>
              <p>
                Our team excels in creating tailored data models to suit your
                specific business requirements, ensuring data is organized,
                accessible and optimized for performance.{" "}
              </p>
            </div>
          </div>

          <div className={`${styles.featSlideItemBox}`}>
            <div className={`${styles.itemTop}`}>
              <ExportedImage
                height={168}
                width={160}
                alt="Ingesting Data from Various Sources"
                src="/img/dataEngineering/Data_Warehousing.svg"
              />
            </div>
            <div className={`${styles.itemBottom}`}>
              <h6>Handling Complex Analytical Calculations</h6>
              <p>
                We utilize sophisticated data transformation techniques to
                prepare data for complex analyses. Our approach ensures that
                data is cleansed, normalised and structured efficiently, which
                is crucial for accurate analytical computations.{" "}
              </p>
            </div>
          </div>

          <div className={`${styles.featSlideItemBox}`}>
            <div className={`${styles.itemTop}`}>
              <ExportedImage
                height={168}
                width={160}
                alt="Ingesting Data from Various Sources"
                src="/img/dataEngineering/Data_Warehousing.svg"
              />
            </div>
            <div className={`${styles.itemBottom}`}>
              <h6>Building Visualization Layers</h6>
              <p>
                We transform raw data into intuitive dashboards and reports,
                making complex data easily understandable. Our team also builds
                efficient views for report consumption, ensuring that data is
                presented in a user-friendly manner.
              </p>
            </div>
          </div>

          <div className={`${styles.featSlideItemBox}`}>
            <div className={`${styles.itemTop}`}>
              <ExportedImage
                height={168}
                width={160}
                alt="Ingesting Data from Various Sources"
                src="/img/dataEngineering/Data_Warehousing.svg"
              />
            </div>
            <div className={`${styles.itemBottom}`}>
              <h6>File Based Storage</h6>
              <p>
                We offer the ability to store, extract and process data stored
                in various file formats such as CSV, XLSX, PDFs, JPEGs and more,
                ensuring all your data sources are integrated and managed
                efficiently.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
