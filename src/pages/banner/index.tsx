import Image from "next/image";
import Link from "next/link";
import styles from "./banner.module.css";

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Banner() {
  return (
    <div className={`banner ${styles.carouselContainer}`}>
      <Carousel controls={false}>
        <Carousel.Item interval={20000}>
          <Image
            className={`${styles.sliderImage}`}
            src="/img/banner/banner_1.jpg"
            alt="Image One"
            width={1400}
            height={700}
          />
          <div className={`${styles.carouselCaption}`}>
            <div className={`${styles.carouselContent}`}>
              <h2 className={`${styles.banner_title}`}>
                Innovating Insights, <span>Accelerating Growth</span>
              </h2>
              <p>Your Data, Our Expertise. </p>
              <Link href="/" className={`${styles.btnGetStarted}`}>
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

        <Carousel.Item interval={20000}>
          <Image
            className={`${styles.sliderImage}`}
            src="/img/banner/banner_2.jpg"
            alt="Image One"
            width={1400}
            height={700}
          />
          <div className={`${styles.carouselCaption}`}>
            <div className={`${styles.carouselContent}`}>
              <h1 className={`${styles.banner_title}`}>
                Where AI Meets<span>Efficiency</span>
              </h1>
              <p>
                Empower Your Enterprise With <br />
                Shodat eOps&apos; AI-Driven Intelligence.
              </p>
              <Link href="/" className={`${styles.btnGetStarted}`}>
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

        <Carousel.Item interval={20000}>
          <Image
            className={`${styles.sliderImage}`}
            src="/img/banner/banner_1.jpg"
            alt="Image One"
            width={1400}
            height={700}
          />
          <div className={`${styles.carouselCaption}`}>
            <div className={`${styles.carouselContent}`}>
              <h1 className={`${styles.banner_title}`}>Introducing Shodat X</h1>
              <p>Unlocking AI-Powered Insights</p>
              <Link href="/" className={`${styles.btnGetStarted}`}>
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

        <Carousel.Item interval={20000}>
          <Image
            className={`${styles.sliderImage}`}
            src="/img/banner/banner_4.jpg"
            alt="Image One"
            width={1400}
            height={700}
          />
          <div className={`${styles.carouselCaption}`}>
            <div className={`${styles.carouselContent}`}>
              <h1 className={`${styles.banner_title}`}>
                Introducing Shodat YAI
              </h1>
              <p>The Future Of Enterprise Decision-Making</p>
              <Link href="/" className={`${styles.btnGetStarted}`}>
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
