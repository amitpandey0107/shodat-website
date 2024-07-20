import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";

export default function Services() {
  return (
    <section className={`${styles.services}`} id="services">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className={`${styles.title}`}>Services</div>
                </div>
            </div>
        </div>
    </section>
  );
}
