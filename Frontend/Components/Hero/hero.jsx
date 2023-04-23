import React from "react";
import styles from "./hero.module.css";


function Hero() {
  return (
    <div id="Hero" className={styles.container}>
      <h1 className={styles.title}>OS.Devcommunity</h1>
      <h3 className={styles.subtitle}>--Grow together--</h3>
      <p className={styles.description}>
        This is a <span>community</span> which provides <span>free</span> hands-on training in various
        fields of <span>computer science</span> and have an inclusive <span>community focusing on a
        learn by doing approach.</span>
      </p>

      <label>
        <input type="text" placeholder="your email" className={styles.input} />
        <button className={styles.joinButton}>Join us</button>
      </label>

      <div className={styles.iconContainer}>
        <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
        <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/"><i className="fab fa-github"></i></a>
      </div>

    </div>
  );
}

export default Hero;
