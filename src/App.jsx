
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import AnimatedCursor from "react-animated-cursor"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out-sine',
      delay: 200,
    });
  },[]);
 
  return (
    <div className={styles.App } >
      <AnimatedCursor 
      color="0, 64, 255" 
      innerSize={10}
      outerSize={8} />
        <div data-aos="fade-up" >
        
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Contact />
      <Footer/>
      </div>
      
    </div>
  );
}

export default App;
