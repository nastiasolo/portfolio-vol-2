import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";
import Loader from "./components/Loader";
import { ThemeProvider } from "./context/ThemeProvider";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Loader />
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    </ThemeProvider>
  );
}

export default App;
