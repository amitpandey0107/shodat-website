import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./usecase.module.css";
import UseCasesSlider from "./useCasesSlider";

export default function UseCase(props: any) {
  return (
    <section className={`${styles.useCase}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className={`${styles.titleUnderline}`}>
              <h2>Use Cases</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <UseCasesSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
