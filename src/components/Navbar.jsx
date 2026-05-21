import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { BiTerminal } from "react-icons/bi";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logoWrapper} aria-label="Home">
          <BiTerminal className={styles.logoIcon} />
        </a>

        <div className={styles.navLinks}>
          <a href="#hero" className={styles.link}>
            Up
          </a>
          <a href="#skills" className={styles.link}>
            Skills
          </a>
          <a href="#projects" className={styles.link}>
            Projects
          </a>
          <a href="#contact" className={styles.link}>
            Contact
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
