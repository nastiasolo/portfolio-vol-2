import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  const [isMounted, setIsMounted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);

      const removeTimer = setTimeout(() => {
        setIsMounted(false);
      }, 1000);
      return () => clearTimeout(removeTimer);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={styles.loaderContainer}>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`${styles.bar} ${isLoaded ? styles.animateBar : ""}`}
          style={{ "--delay": `${index * 0.15}s` }}
        />
      ))}

      <div
        className={`${styles.loaderText} ${isLoaded ? styles.textFade : ""}`}
      >
        Loading<span>.</span>
      </div>
    </div>
  );
}
