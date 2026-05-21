import styles from "./Contacts.module.css";

import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Let's Connect!</h2>
        <p className={styles.subtitle}>
          I'm always open to new opportunities, collaborations, or just a
          friendly chat about frontend development.
        </p>

        <div className={styles.socialGrid}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your.email@example.com"
            className={styles.iconLink}
            aria-label="Email"
          >
            <MdOutlineEmail />
          </a>
        </div>

        <div className={styles.resumeBlock}>
          <a href="/resume.pdf" download className={styles.resumeButton}>
            <FaRegFilePdf /> Download CV
          </a>
        </div>

        <hr className={styles.divider} />
        <div className={styles.copyright}>
          <p>© {currentYear} Built with React & lots of coffee ☕</p>
        </div>
      </div>
    </footer>
  );
}
