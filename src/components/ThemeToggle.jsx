import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./ThemeToggle.module.css";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleBtn}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon className={styles.iconMoon} />
      ) : (
        <FiSun className={styles.iconSun} />
      )}
    </button>
  );
}
