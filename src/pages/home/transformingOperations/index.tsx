import Image from "next/image";
import Link from "next/link";
import styles from "./transforming.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Stack, Button } from "react-bootstrap";

export default function TransformingOperations() {
  return (
    <section
      className={`${styles.transformingOperations}`}
      id="transformingOperations"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className={`${styles.opsImage}`}>
              <Image
                src="/img/homepage-img1.png"
                alt="operations"
                width={546}
                height={546}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className={`${styles.opsContent}`}>
              <h2>
              Transforming Operations <span>with Data-Driven Intelligence</span>
              </h2>
              <div className={`${styles.line}`}></div>
              <p>
              By redefining the infusion of analytics and machine learning in heavy industries with our professional services, we at Shodat are now poised for a paradigm shift with eOps™, an advanced asset tracking and quality management platform. The platform will leverage a powerful combination of computer vision, predictive analytics, and generative AI to detect and predict operational defects, automate RCA reports and propose impactful enhancements that promise significant cost benefits.
              </p>
              <p className={`${styles.lastChildP}`}>
              Shodat eOps will serve as the vehicle to deliver Shodat XAI and YAI capabilities, making ML adoption super simple and transforming how industries manage product and process quality. With Shodat eOps, businesses will be able to streamline their operations, enhance regulatory compliance, and drive continuous improvement. From automated defect detection to real-time insights and proactive issue tracking, Shodat eOps will empower organizations to unlock the full potential of Data-Driven Intelligence.
              </p>
              <Link href="#scheduling" className={`${styles.btnGetStart} btnBlack`}>
                <span>Get Early Access</span>
                <Image
                  src="/img/arrowRight.svg"
                  alt="arrow right"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}