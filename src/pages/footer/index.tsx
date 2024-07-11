import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <header className={`${styles.footer}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <h2 className={`${styles.footertitle}`}>
              How can Shodat AI help scale your business? Lets talk and discover
              the answers together.
            </h2>
          </div>
          <div className="col-sm-4">
            <div className={`${styles.newsletter}`}>
              <h4>Our Newsletter</h4>
              <div className={`${styles.newsletterInput}`}>
                <input type="text" placeholder="Business email address" />
                <button>
                  <Image
                    src="/img/newsletterBtn.svg"
                    alt="arrow right"
                    height={38}
                    width={38}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid ${styles.footerMidMargin}`}>
        <div className="row">
          <div className="col-sm-12">
            <div className={`${styles.fotterContent}`}>
              <div className={`${styles.footerBlock}`}>
                <div className={`${styles.footerLogo}`}>
                  <Image
                    src="/img/footerLogo.svg"
                    alt="arrow right"
                    height={49}
                    width={229}
                  />
                </div>
                <ul className={`${styles.footerList}`}>
                  <li>
                    <Link href="tel:+1(123)4567890">
                      <Image
                        src="/img/phone-call.svg"
                        alt="arrow right"
                        height={24}
                        width={24}
                      />
                      <span>+1 (123) 456-7890</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:contact@shodat.com">
                      <Image
                        src="/img/mail.svg"
                        alt="arrow right"
                        height={24}
                        width={24}
                      />
                      <span>contact@shodat.com</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={`${styles.footerBlock}`}>
                <h2 className={`${styles.blockTitle}`}>Solutions</h2>
                <ul className={`${styles.footerList}`}>
                  <li>
                    <Link href="">Data Engineering</Link>
                  </li>
                  <li>
                    <Link href="">Vision AI</Link>
                  </li>
                  <li>
                    <Link href="">RCI</Link>
                  </li>
                  <li>
                    <Link href="">XDI</Link>
                  </li>
                  <li>
                    <Link href="">XRI</Link>
                  </li>
                  <li>
                    <Link href="">Cloud Transformation</Link>
                  </li>
                </ul>
              </div>

              <div className={`${styles.footerBlock}`}>
                <h2 className={`${styles.blockTitle}`}>Services</h2>
                <ul className={`${styles.footerList}`}>
                  <li>
                    <Link href="">Innovate</Link>
                  </li>
                  <li>
                    <Link href="">Manage</Link>
                  </li>
                  <li>
                    <Link href="">Modernize</Link>
                  </li>
                  <li>
                    <Link href="">Secure</Link>
                  </li>
                </ul>
              </div>

              <div className={`${styles.footerBlock}`}>
                <h2 className={`${styles.blockTitle}`}>Shodat AI</h2>
                <ul className={`${styles.footerList}`}>
                  <li>
                    <Link href="">AI Innovation</Link>
                  </li>
                  <li>
                    <Link href="">Frictionless AI</Link>
                  </li>
                  <li>
                    <Link href="">Pillars of AI</Link>
                  </li>
                  <li>
                    <Link href="">Shodat X</Link>
                  </li>
                  <li>
                    <Link href="">Shodat YAI</Link>
                  </li>
                </ul>
              </div>

              <div className={`${styles.footerBlock}`}>
                <h2 className={`${styles.blockTitle}`}>eOps Platform</h2>
                <ul className={`${styles.footerList}`}>
                  <li>
                    <Link href="">ERP System & Analytics</Link>
                  </li>
                  <li>
                    <Link href="">Edge Analytics</Link>
                  </li>
                  <li>
                    <Link href="">Intelligent Enterprise</Link>
                  </li>
                  <li>
                    <Link href="">Power BI</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.copyright}`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <p>&copy; 2024 Shodat Inc. All rights reserved</p>
            </div>
            <div className="col-sm-4">
              <ul className={`${styles.copyrightMenu}`}>
                <li>
                  <Link href="">Cookie Policy</Link>
                </li>
                <li>
                  <Link href="">Terms of Use</Link>
                </li>
                <li>
                  <Link href="">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
