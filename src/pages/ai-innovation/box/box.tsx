import React from "react";
import styles from './box.module.css';
import Link from "next/link";
import Image from "next/image";

export default function Box() {

    return (
        <div className={`${styles.blackBox}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className={`${styles.phraseBox}`}>
                            <h4><span>49% of frontrunners</span> have a full AI adoption plan in place, with departments expected to follow, providing them an instant size and speed advantage over competitors.</h4>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className={`${styles.phraseBox}`}>
                            <h4>As per Cisco&apos;s survey,<span> 83% of executives</span> think AI is a top priority in their business plans today and <span>75%</span> find AI as their gateway to shift into new businesses and ventures.
                            </h4>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className={`${styles.phraseBox}`}>
                            <h4>Business leaders trust AI’s power in driving growth. <span>84% of C-level</span> executives believe that they need to adopt and leverage Artificial Intelligence to drive growth objectives.</h4>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className={`${styles.phraseBox}`}>
                            <h4>Around <span>4 in 5 companies</span> deem AI to be a top priority in their business strategy</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}