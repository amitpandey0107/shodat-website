import Image from "next/image";
import Link from "next/link";
import styles from "./banner.module.css";

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Banner() {
  return (
    <div className={`banner ${styles.carouselContainer}`}>
      <Carousel controls={false}>
        <Carousel.Item interval={10500}>
          <Image
            className={`${styles.sliderImage}`}
            src="/img/bannerBG.png"
            alt="Image One"
            width={500}
            height={500}
          />
          <Carousel.Caption className={`${styles.carouselCaption}`}>
            <div className={`${styles.carouselContent}`}>
            <h1>Innovating Insights, <span>Accelerating Growth</span></h1>
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
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={10500}>
          <Image
            className={`${styles.sliderImage}`}
            src="/img/bannerBG.png"
            alt="Image One"
            width={500}
            height={500}
          />
          <Carousel.Caption className={`${styles.carouselCaption}`}>
            <div className={`${styles.carouselContent}`}>
            <h1>Innovating Insights, <span>Accelerating Growth</span></h1>
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
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={10500}>
          <Image
            className={`${styles.sliderImage}`}
            src="/img/bannerBG.png"
            alt="Image One"
            width={500}
            height={500}
          />
          <Carousel.Caption className={`${styles.carouselCaption}`}>
            <div className={`${styles.carouselContent}`}>
            <h1>Innovating Insights, <span>Accelerating Growth</span></h1>
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
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={10500}>
          <Image
            className={`${styles.sliderImage}`}
            src="/img/bannerBG.png"
            alt="Image One"
            width={500}
            height={500}
          />
          <Carousel.Caption className={`${styles.carouselCaption}`}>
            <div className={`${styles.carouselContent}`}>
            <h1>Innovating Insights, <span>Accelerating Growth</span></h1>
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
          </Carousel.Caption>
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
