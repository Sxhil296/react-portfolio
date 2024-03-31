import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
  <div>
    <NavBar />
    <Home />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    <SocialLinks />
  </div>
  );
}

export default App;
