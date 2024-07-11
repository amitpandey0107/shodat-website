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
              How can Shodat AI help scale your business? Let&apos;s talk and discover
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
                <Link href="" className={`${styles.footerMail}`} >
                  <Image
                    src="/img/mail.svg"
                    alt="arrow right"
                    height={24}
                    width={24}
                  />
                  <span>contact@shodat.com</span>
                </Link>
                <h2 className={`${styles.blockTitle}`}>Follow Us</h2>
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
