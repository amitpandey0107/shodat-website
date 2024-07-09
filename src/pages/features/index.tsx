import Image from "next/image";
import Link from "next/link";
import styles from "./features.module.css";

export default function Features() {
  return (
    <section className={`${styles.features}`} id="features">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className={`${styles.infoBox}`}>
              <p>
                Where cutting-edge technology meets unparalleled innovation. We
                at Shodat Inc. specialize in delivering advanced AI-driven
                solutions that transform industries and empower businesses to
                thrive in the digital era. Our commitment to excellence and
                continuous innovation ensures that we stay ahead of the curve,
                providing intelligent technologies that drive efficiency, foster
                growth, and unlock new opportunities.
              </p>
            </div>
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8">
            <div className={`${styles.featuresBox}`}>
              <div className={`${styles.featuresInfo}`}>
                <div className={`${styles.logo}`}>
                  <Image
                    className={`${styles.logoImage}`}
                    src="/img/ourMarket.svg"
                    alt="Image One"
                    width={80}
                    height={80}
                  />
                </div>
                <div className={`${styles.text}`}>
                  <p>
                    <strong>Our market</strong> ready solutions provide flexible
                    and scalable capabilities that enterprises need to
                    successfully become AI-fueled organizations.
                  </p>
                </div>
              </div>

              <div className={`${styles.featuresInfo}`}>
                <div className={`${styles.logo}`}>
                  <Image
                    className={`${styles.logoImage}`}
                    src="/img/reEngineer.svg"
                    alt="Image One"
                    width={80}
                    height={80}
                  />
                </div>
                <div className={`${styles.text}`}>
                  <p>
                    <strong>Re-engineer </strong> your operations, drive
                    innovation, and unlock the full potential of AI with Shodat
                    Inc.
                  </p>
                </div>
              </div>

              <div className={`${styles.featuresInfo}`}>
                <div className={`${styles.logo}`}>
                  <Image
                    className={`${styles.logoImage}`}
                    src="/img/exploreSolutions.svg"
                    alt="Image One"
                    width={80}
                    height={80}
                  />
                </div>
                <div className={`${styles.text}`}>
                  <p>
                    <strong>Explore our solutions</strong> and discover the
                    power of intelligent technology to shape the future of your
                    business.
                  </p>
                </div>
              </div>

              <Link href="/" className={`${styles.btnLetsTalk}`}>
                <span>Let&#39;s Talk AI</span>
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
