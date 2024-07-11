import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function FooterVersionSecond() {
  return (
    <header className={`${styles.footer} ${styles.footerv2}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <h2 className={`${styles.footertitle}`}>
              How can Shodat AI help scale your business? <br />
              Let&apos;s talk and discover the answers together.
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
            <div className={`${styles.footerContainer}`}>
              <div className={`${styles.footerLeft}`}>
                <div className={`${styles.footerLogo}`}>
                  <Image
                    src="/img/footerLogo.svg"
                    alt="arrow right"
                    height={59}
                    width={239}
                  />
                </div>
                <Link href="mailto:contact@shodat.com" className={`${styles.footerMail}`}>
                  <Image
                    src="/img/mail.svg"
                    alt="arrow right"
                    height={24}
                    width={24}
                  />
                  <span>contact@shodat.com</span>
                </Link>
                <div className={`${styles.followUs}`}>
                  <h2 className={`${styles.blockTitle}`}>Follow Us:</h2>
                  <div className={`${styles.followIcons}`}>
                    <Link href="https://www.linkedin.com/company/shodat-inc">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6686 8.03687C18.2599 8.03687 19.786 8.66901 20.9112 9.79422C22.0364 10.9194 22.6686 12.4456 22.6686 14.0369V21.0369H18.6686V14.0369C18.6686 13.5064 18.4579 12.9977 18.0828 12.6227C17.7077 12.2476 17.199 12.0369 16.6686 12.0369C16.1381 12.0369 15.6294 12.2476 15.2544 12.6227C14.8793 12.9977 14.6686 13.5064 14.6686 14.0369V21.0369H10.6686V14.0369C10.6686 12.4456 11.3007 10.9194 12.4259 9.79422C13.5512 8.66901 15.0773 8.03687 16.6686 8.03687Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M6.66858 9.03687H2.66858V21.0369H6.66858V9.03687Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.66858 6.03687C5.77315 6.03687 6.66858 5.14143 6.66858 4.03687C6.66858 2.9323 5.77315 2.03687 4.66858 2.03687C3.56401 2.03687 2.66858 2.9323 2.66858 4.03687C2.66858 5.14143 3.56401 6.03687 4.66858 6.03687Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </Link>
                    <Link href="https://twitter.com/ShodatInc"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-twitter-x" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg></Link>
                  </div>
                </div>
              </div>
              <div className={`${styles.footerRight}`}>
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
      </div>

      <div className={`${styles.copyright}`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <p>&copy; 2024 Shodat Inc. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
