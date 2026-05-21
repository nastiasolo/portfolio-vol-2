import styles from "./Projects.module.css";

// import eventAppGif from '../assets/images/event-app.gif';

const PROJECTS = [
  {
    id: 1,
    title: "Event App",
    description:
      "A dynamic web application designed for organizing and managing events, scheduling, and community invitations.",
    features: [
      "Event coordination & scheduling",
      "Interactive guest invitations",
      "Real-time updates",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "JavaScript"],
    image: "https://via.placeholder.com/400x250?text=Event+App+Demo", // Заменишь на путь к гифке
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Space Galactica",
    description:
      "An immersive, space-themed frontend project exploring responsive design, cosmic visuals, and interactive elements.",
    features: [
      "Stunning space aesthetics",
      "Fully responsive layouts",
      "Smooth interactive components",
    ],
    stack: ["JavaScript", "HTML5", "CSS Modules", "Vite"],
    image: "https://via.placeholder.com/400x250?text=Space+Galactica+Demo",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Expense Tracker",
    description:
      "A smart financial tool to track income and expenses, manage budgets, and visualize personal balance analytics.",
    features: [
      "Dynamic balance & history calculation",
      "Category-based transaction filtering",
      "Local state persistence",
    ],
    stack: ["React", "TypeScript", "CSS Modules"],
    image: "https://via.placeholder.com/400x250?text=Expense+Tracker+Demo",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Memory Game",
    description:
      "A classic tile-matching card game designed to test and improve memory skills, built with robust state logic.",
    features: [
      "Card flipping & matching logic",
      "Score and moves tracking",
      "Game restart and win conditions",
    ],
    stack: ["React", "JavaScript", "CSS3"],
    image: "https://via.placeholder.com/400x250?text=Memory+Game+Demo",
    liveLink: "#",
    githubLink: "#",
  },
];

export default function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionSubtitle}>A showcase of things I built</p>

        <div className={styles.projectsGrid}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className={styles.projectImage}
                />
                <div className={styles.imageOverlay}>
                  <span>Click for details coming soon</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.featuresBlock}>
                  <h4>Key Features:</h4>
                  <ul className={styles.featuresList}>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
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
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnLive}
                  >
                    Live Demo
                  </a>
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
          ))}
        </div>
      </div>
    </section>
  );
}
