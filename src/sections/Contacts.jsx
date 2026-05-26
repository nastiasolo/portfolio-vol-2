import styles from "./Contacts.module.css";
import { FaGithub, FaLinkedin, FaRegFilePdf, FaReact } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import resumeFile from "../assets/resume.pdf";

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
            href="https://github.com/nastiasolo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/a-solodova/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ag.solodova@gmail.com"
            className={styles.iconLink}
            aria-label="Email"
          >
            <MdOutlineEmail />
          </a>
        </div>

        <div className={styles.resumeBlock}>
          <a
            href={resumeFile}
            download="Anastasia_CV.pdf"
            className={styles.resumeButton}
          >
            <FaRegFilePdf /> Download CV
          </a>
        </div>

        <hr className={styles.divider} />
        <div className={styles.copyright}>
          <p>
            © {currentYear} Built with
            <FaReact className={styles.reactIcon} />
            React
          </p>
        </div>
      </div>
    </footer>
  );
}
