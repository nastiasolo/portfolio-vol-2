import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, isFeatured }) {
  return (
    <div
      className={`${styles.projectCard} ${isFeatured ? styles.featuredCard : ""}`}
    >
      <div className={styles.imageWrapper}>
        <picture>
          {isFeatured && project.imageMobile && (
            <source media="(max-width: 899px)" srcSet={project.imageMobile} />
          )}
          <img
            src={project.image}
            alt={project.title}
            className={styles.projectImage}
          />
        </picture>
        <div className={styles.imageOverlay}>
          <span>Click for details coming soon</span>
        </div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.featuresBlock}>
          <h4>Key Features:</h4>
          <ul className={styles.featuresList}>
            {project.features.map((feature, index) => (
              <li key={index}>✔ {feature}</li>
            ))}
          </ul>
        </div>

        <div className={styles.stackContainer}>
          {project.stack.map((tech, index) => (
            <span key={index} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.linksContainer}>
          {project.liveLink && project.liveLink !== "#" && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnLive}
            >
              Live Demo
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnGithub}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
