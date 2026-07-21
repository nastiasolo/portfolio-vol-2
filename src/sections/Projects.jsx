import styles from "./Projects.module.css";
import ProjectCard from "../components/ProjectCard";

import eventAppImg from "../assets/images/event-app.png";
import spaceGalacticaImg from "../assets/images/space-galactica.png";
import expenseTrackerImg from "../assets/images/expense-tracker.png";
import memoryGameImg from "../assets/images/memory-game.png";
import readiculousImg from "../assets/images/readiculous.png";
import readiculousDesktopImg from "../assets/images/readiculous-desktop.png";
import constructionImg from "../assets/images/construction.png";

const FEATURED_PROJECT = {
  id: 0,
  title: "Readiculous",
  description:
    "A responsive and user-friendly React web application designed to guilt-trip you into finishing your reading list, cataloging books, visualizing stats, and earning badges.",
  features: [
    "Profile Gamification: Profile customization modal allowing users to pick from a preset of cute animal avatars and set favourite genres.",
    "Book Cataloging: Search and discover actual books dynamically via the OpenLibrary API.",
    "Challenges: Challenges page to see your trophy cabinet. Turn those locked, gray achievements into shiny, colorized badges!",
    "Fully Responsive UI: Fully adaptive layout that shifts into an app-like experience on smartphones.",
  ],
  stack: [
    "React",
    "JavaScript",
    "Pure CSS",
    "JSON Server",
    "React Router",
    "Context API",
    "Open Library API",
  ],
  image: readiculousImg,
  imageMobile: readiculousDesktopImg,
  liveLink: "https://readiculous-app.vercel.app/",
  githubLink: "https://github.com/nastiasolo/readiculous",
};

const PROJECTS = [
  {
    id: 1,
    title: "Event App",
    description:
      "A responsive web application for discovering tech events, workshops, and hackathons, featuring user authentication, an interactive shopping cart, and a personal order history.",
    features: [
      "Browse through upcoming tech conferences, hackathons, and workshops.",
      "Adaptive user interface.",
      "User registration and login using JWT tokens (handled via context).",
      "Add tickets, dynamically update quantities, and clear the cart.",
      "Authenticated users can view their past orders with real-time checkout simulation.",
    ],
    stack: ["React", "JavaScript", "Vite", "React Router DOM", "Context API"],
    image: eventAppImg,
    liveLink: "https://event-app-startup-hyf.vercel.app/",
    githubLink: "https://github.com/nastiasolo/event-app-startup-hyf",
  },
  {
    id: 2,
    title: "Space Galactica",
    description:
      "Galactica is a web application for a fictional space tourism agency that allows users to explore planets, manage a wishlist of dream destinations, and get to know the crew of space explorers.",
    features: [
      "Next.js's native file-system-based routing (App Router).",
      "CSS Modules (for component-scoped styling).",
      "Users can seamlessly add planets to their wishlist, remove them, add custom planets via forms, and track the real-time dynamic countdown of selected destinations.",
      "A dedicated dashboard layout prepared for tracking outer-space data and rover photograph elements fetched from NASA API.",
    ],
    stack: ["Next.js", "JavaScript", "React", "CSS Modules", "Vercel"],
    image: spaceGalacticaImg,
    liveLink: "https://space-galactica-nextjs.vercel.app/",
    githubLink: "https://github.com/nastiasolo/space-galactica-nextjs",
  },
  // {
  //   id: 3,
  //   title: "Expense Tracker",
  //   description:
  //     "A simple Expense Tracker that lets you log daily spendings, categorize expenses, view monthly total, and track your budget in real time.",
  //   features: [
  //     "Categorize spendings (Housing, Food, Transport, Entertainment, etc.).",
  //     "View total expenses and income for the current month, expenses broken down by category with a visual bar chart.",
  //     "LocalStorage to save the data (income and expenses).",
  //     "Archive page with monthly expense summaries.",
  //   ],
  //   stack: ["HTML", "CSS", "Vanilla JavaScript", "LocalStorage"],
  //   image: expenseTrackerImg,
  //   liveLink: "https://nastiasolo.github.io/expense-tracker/",
  //   githubLink: "https://github.com/nastiasolo/expense-tracker",
  // },
  {
    id: 4,
    title: "Memory Game",
    description:
      "A classic Memory Card Game built with JavaScript, featuring a backend and database for dynamic card data, responsive design, and multiple difficulty levels.",
    features: [
      "Fullstack Application.",
      "Fully mobile-friendly layout.",
      "Three Difficulty Levels.",
      "Timer tracks your speed.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "SQLite"],
    image: memoryGameImg,
    liveLink: null,
    githubLink: "https://github.com/nastiasolo/memory-game-fullstack",
  },
  {
    id: 5,
    title: "Landing page",
    description:
      "A responsive landing page for a construction company, initially built from scratch and later enhanced using AI-assisted development tools to optimize structure, styling, and performance.",
    features: [
      "semantic HTML5 and clean CSS.",
      "Fully mobile-friendly layout.",
      "AI-Optimized Workflow.",
      "Deployed and hosted on Netlify.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "AI Tooling", "Netlify"],
    image: constructionImg,
    liveLink: "https://2mtbyg.dk/",
    githubLink: null,
  },
];

export default function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionSubtitle}>A showcase of things I built</p>

        <div className={styles.featuredWrapper}>
          <span className={styles.featuredBadge}>Featured Project</span>
          <ProjectCard project={FEATURED_PROJECT} isFeatured={true} />
        </div>

        <div className={styles.projectsGrid}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
