import Image from "next/image";
import Link from "next/link";
import styles from "./banner.module.css";

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Banner() {
  return (
    <div className={`banner ${styles.carouselContainer}`}>
      <Image
            className={`${styles.ellipseImage}`}
            src="/img/banner/ellipse.png" 
            alt="ellipse"
            width={557}
            height={557}
          />
      <Carousel controls={false} fade>
        <Carousel.Item interval={7000}>
          <Image
            className={`${styles.sliderImage}`}
            src="/img/banner/slider5.jpg"
            alt="Image One"
            width={1400}
            height={700}
          />
          <div className={`${styles.carouselCaption}`}>
            <div className={`${styles.carouselContent}`}>
              <h2 className={`${styles.banner_title}`}>
              Innovating Insights, <span>Accelerating Growth</span>
              </h2>
              <p>Your Data, Our Expertise</p>
              <Link href="#scheduling" className={`${styles.btnGetStarted}`}>
                <span>Get Started</span>
                <Image
                  src="/img/arrowRight.svg"
                  alt="arrow right"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={7000}>
          <Image
            className={`${styles.sliderImage}`}
            src="/img/banner/slider3.jpg"
            alt="Image One"
            width={1400}
            height={700}
          />
          <div className={`${styles.carouselCaption}`}>
            <div className={`${styles.carouselContent}`}>
              <h1 className={`${styles.banner_title}`}>
                Where AI Drives<span>Efficiency</span>
              </h1>
              <p>
              Shodat eOps™ - An Advanced Quality Management <br />And Asset Tracking Platform 
              </p>
              <Link href="#scheduling" className={`${styles.btnGetStarted}`}>
                <span>Get Started</span>
                <Image
                  src="/img/arrowRight.svg"
                  alt="arrow right"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={7000}>
          <Image
            className={`${styles.sliderImage}`}
            src="/img/banner/slider2.jpg"
            alt="Image One"
            width={1400}
            height={700}
          />
          <div className={`${styles.carouselCaption}`}>
            <div className={`${styles.carouselContent}`}>
              <h1 className={`${styles.banner_title}`}>Shodat XAI</h1>
              <p>Enhancing Operational Quality <br/>and Compliance with Defect Intelligence</p>
              <Link href="#scheduling" className={`${styles.btnGetStarted}`}>
                <span>Get Started</span>
                <Image
                  src="/img/arrowRight.svg"
                  alt="arrow right"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={7000}>
          <Image
            className={`${styles.sliderImage}`}
            src="/img/banner/slider1.jpg"
            alt="Image One"
            width={1400}
            height={700}
          />
          <div className={`${styles.carouselCaption}`}>
            <div className={`${styles.carouselContent}`}>
              <h1 className={`${styles.banner_title}`}>
              Shodat YAI
              </h1>
              <p>Uncovering the &#39;Why&#39; of Decision Making with Advanced AI</p>
              <Link href="#scheduling" className={`${styles.btnGetStarted}`}>
                <span>Get Started</span>
                <Image
                  src="/img/arrowRight.svg"
                  alt="arrow right"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <Link href="#features" className={`${styles.mouseIcon} iconmouse`}>
        <Image
          src="/img/mouseIcon.svg"
          alt="mouse icon"
          height={30}
          width={30}
        />
      </Link>
    </div>
  );
}
