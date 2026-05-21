import styles from "./Hero.module.css";
import backgroundVideo from "../assets/images/background.mp4";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <video className={styles.videoBg} loop muted autoPlay playsInline>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Hello, World. I'm Anastasia.</h1>
        <p className={styles.subtitle}>Frontend-developer.</p>
        <a href="#projects" className={styles.button}>
          Check projects
        </a>
      </div>
    </section>
  );
}
