import React from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./usecases.module.css";
export default function UseCases() {
  return (
    <div className={`${styles.useCases}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-8">
            <div className={`${styles.sectionLeft}`}>
              <h2>Use Cases</h2>
              <h6>Enhancing Workplace Safety with Vision-Based AI Solutions</h6>
              <p>
                A major manufacturing organisation with large-scale production
                facilities faced ongoing challenges in workplace safety. With
                operations spanning multiple high-risk sites, safety incidents
                and near-misses were on the rise. Despite established safety
                protocols, the scale and complexity of operations made it
                difficult to ensure compliance and identify hazards proactively.
              </p>
              <div className={`${styles.btnWrp}`}>
                <Link
                  href="/ai-innovation/case-studies"
                  className={`${styles.readMore}`}
                >
                  <span>Read more</span>
                  <ExportedImage
                    src="/img/arrowRight.svg"
                    alt="arrow right"
                    height={20}
                    width={20}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-4">
            <div className={`${styles.sectionRight}`}>
              <div className={`${styles.thumbnail}`}>
                <ExportedImage
                  src="/img/aiInnovation/ai-case-img-main.png"
                  alt="use case"
                  height={277}
                  width={545}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
