import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { BiTerminal } from "react-icons/bi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logoWrapper} aria-label="Home">
          <BiTerminal className={styles.logoIcon} />
        </a>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        <div
          className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ""}`}
        >
          <a href="#hero" className={styles.link} onClick={closeMenu}>
            Up
          </a>
          <a href="#skills" className={styles.link} onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" className={styles.link} onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" className={styles.link} onClick={closeMenu}>
            Contact
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
