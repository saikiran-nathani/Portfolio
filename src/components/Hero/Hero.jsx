import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nathani Sai Kiran</h1>
        <p className={styles.description}>
            I'm an AI/ML engineer aspirant equipped with strong problem-solving abilities, willingness to learn, and excellent communication skills. Poised to contribute
            to team success and achieve positive results. Ready to tackle new challenges and advance organizational objectives with
            dedication and enthusiasm.

        </p>
        <a href="mailto:saikirannathani@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/sk_image_2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
