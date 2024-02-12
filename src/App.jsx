
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out-sine',
      delay: 200,
    });
  },[]);

  <ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  transition:Bounce
/>
 
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
