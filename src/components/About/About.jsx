import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/computer.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
            <div className={styles.aboutItemText}>
              <h3>ML and DL model developer</h3>
              <p>
                I have experience in developing Machine learning and Deep learning
                models for classification, regression and data analysis
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs using python
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon"/>
            <div className={styles.aboutItemText}>
              <h3>Blockchain Developer</h3>
              <p>
                I have designed blockchain architectures and wrote
                smart contracts for the blockchain for operations
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon"/>
            <div className={styles.aboutItemText}>
              <h3>Gen-AI Developer</h3>
              <p>
                I fine-tuned pre-trained LLMs for medical insights,
                code generation and smart contract generation.
                I'm capable of fine-tuning LLMs for a specific task
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
