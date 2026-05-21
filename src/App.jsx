import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
