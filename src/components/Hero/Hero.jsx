import { Typewriter } from 'react-simple-typewriter'

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <div data-aos="top-bottom" data-aos-anchor-placement="top-center">
    <section className={styles.container} >
      <div className={styles.content}>
        <h1 className={styles.Name}>Hi, I'm <span className={styles.Names}>ASHIK LENIN</span></h1>
        <h1 className={styles.title}>
        <Typewriter

            words={['MERN STACK DEVELOPER']}
            loop={true}
            cursor
            cursorStyle= "|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

          />
            </h1>
        <p className={styles.description}>
        A dedicated <span  className={styles.tag}>MERN Stack Developer</span> with a keen eye for crafting innovative and user-centric web applications. I excel in building robust, scalable solutions that turn ideas into reality.        </p>

        <div className={styles.contact}>
          <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
            <li>
              <a href="mailto:ashikleninn@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>

              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/ashik-lenin/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
              </a>
            </li>

            <li>
              <a href="https://github.com/ASHIK-LENIN" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
              </a>
            </li>
          </ul>

        </div>

      </div>


      <img
        src={getImageUrl("hero/heroImage-removebg1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    
    </section>
    </div>
  );
};
