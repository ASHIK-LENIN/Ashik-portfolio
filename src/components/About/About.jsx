import React from "react";

import styles from "./About.module.css";

import  resumePdf  from '../../../assets/resume/Resume.Ashik-Lenin.pdf'

export const About = () => {
  return (
    <div data-aos="fade-right" data-aos-anchor-placement="top-center">
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>

            <div className={styles.aboutItemText}>
              <h3> ⸺ A Dedicated Full Stack <span style={{color: "blue"}}>Developer</span></h3>
              <br />
              <p>
                A skilled and versatile MERN full-stack developer with a passion for creating user-friendly and scalable web applications. Possesses a comprehensive understanding of front-end technologies like React, back-end frameworks like Node.js, and databases like MongoDB.
                <br />
                <br />

                Expertise in:
<br />
                &emsp;&emsp;▶ &emsp;Front-end development: HTML5, CSS3, JavaScript, React, Redux, Bootstrap, Material UI, Tailwind CSS
                <br />

                &emsp;&emsp;▶&emsp; Back-end development: Node.js, Express.js, REST APIs, JSON Web Tokens (JWTs)
                <br />

                &emsp;&emsp;▶&emsp; Databases: MongoDB, Mongoose
                <br />

                &emsp;&emsp;▶&emsp; Version control: Git, GitHub
                <br />

                &emsp;&emsp;▶&emsp; Deployment: AWS, Netlify, Vercel
              </p>
            </div>
          </li>
          
          {/* <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3> ⸺ My Skills</h3>
              <p className="skills-icons">
               
              </p>
            </div>
          </li> */}

        </ul>
       
      </div>
<div className="download">
<a
        href= { resumePdf }
        download="ASHIK LENIN Resume.pdf"
        
      >

  <button>Download CV📩</button>
  </a>

  
</div>
    </section>
    </div>
    
  );
};
