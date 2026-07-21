import styles from "./Skills.module.css";
import useSound from "use-sound";
import hoverSoundFile from "../assets/sounds/hover.wav";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaSass,
} from "react-icons/fa";
import { DiJavascript1, DiPostgresql } from "react-icons/di";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbApi } from "react-icons/tb";
import { IoGameControllerOutline, IoBookOutline } from "react-icons/io5";
import { FaDiceD20 } from "react-icons/fa";

import { GrYoga } from "react-icons/gr";
import { ImCompass } from "react-icons/im";
import { BsPuzzle, BsStars } from "react-icons/bs";

const TECH_STACK = [
  { name: "HTML5", icon: <FaHtml5 className={styles.iconHtml} /> },
  { name: "CSS3", icon: <FaCss3Alt className={styles.iconCss} /> },
  { name: "Sass / SCSS", icon: <FaSass className={styles.iconSass} /> },
  { name: "JavaScript", icon: <DiJavascript1 className={styles.iconJs} /> },
  { name: "TypeScript", icon: <SiTypescript className={styles.iconTs} /> },
  { name: "React", icon: <FaReact className={styles.iconReact} /> },
  { name: "Next.js", icon: <SiNextdotjs className={styles.iconNext} /> },
  { name: "Node.js", icon: <FaNodeJs className={styles.iconNode} /> },
  {
    name: "PostgreSQL",
    icon: <DiPostgresql className={styles.iconPostgres} />,
  },
  { name: "REST API", icon: <TbApi className={styles.iconApi} /> },
  { name: "Vite", icon: <AiOutlineThunderbolt className={styles.iconVite} /> },
  { name: "Git", icon: <FaGitAlt className={styles.iconGit} /> },
  { name: "AI Tools", icon: <BsStars className={styles.iconAi} /> },
];

const LANGUAGES = [
  { name: "English", level: "Advanced" },
  { name: "Russian", level: "Native" },
  { name: "Danish", level: "Intermediate (ongoing)" },
];

const HOBBIES = [
  { name: "Yoga", icon: <GrYoga className={styles.iconYoga} /> },
  { name: "Puzzles", icon: <BsPuzzle className={styles.iconPuzzle} /> },
  {
    name: "Video Games",
    icon: <IoGameControllerOutline className={styles.iconGames} />,
  },
  { name: "Travelling", icon: <ImCompass className={styles.iconTravel} /> },
  {
    name: "Literature",
    icon: <IoBookOutline className={styles.iconLiterature} />,
  },
  {
    name: "Board Games",
    icon: <FaDiceD20 className={styles.iconBoardGames} />,
  },
];

export default function Skills() {
  const [playHover] = useSound(hoverSoundFile, {
    volume: 0.1,
    interrupt: true,
  });

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <p className={styles.sectionSubtitle}>
          Tools I use, languages I speak, and things I love
        </p>

        <div className={styles.mainCard}>
          <h3 className={styles.groupTitle}>Tech Stack</h3>
          <div className={styles.skillsGrid}>
            {TECH_STACK.map((skill, index) => (
              <div
                key={index}
                className={styles.skillItem}
                onMouseEnter={playHover}
              >
                <div className={styles.iconWrapper}>{skill.icon}</div>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.personalGrid}>
          <div className={styles.personalCard}>
            <h3 className={styles.groupTitle}>Languages</h3>
            <div className={styles.languagesList}>
              {LANGUAGES.map((lang, idx) => (
                <div
                  key={idx}
                  className={styles.langItem}
                  onMouseEnter={playHover}
                >
                  <span className={styles.langName}>{lang.name}</span>
                  <span className={styles.langLevel}>{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.personalCard}>
            <h3 className={styles.groupTitle}>Beyond Coding</h3>
            <div className={styles.hobbiesGrid}>
              {HOBBIES.map((hobby, idx) => (
                <div
                  key={idx}
                  className={styles.hobbyItem}
                  onMouseEnter={playHover}
                >
                  <div className={styles.hobbyIcon}>{hobby.icon}</div>
                  <span>{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
