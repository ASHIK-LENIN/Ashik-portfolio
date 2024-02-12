import React from "react";
import { skills } from "../../data/skills";
import styles from "./Experience.module.css";

const Skill = ({ imageUrl, name }) => {
  return (
    <div className={styles.blockContainer}>
      <div className={styles.skill}>
        <div className={styles.skillImageContainer}>
          <img src={imageUrl} alt={name} className={styles.skillImage} />
        </div>
       
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div data-aos="fade-left" data-aos-anchor-placement="top-center">
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.skillsContainer }>
        
          <div className="btn-back-rounded-xl btn-front-rounded-xl"/>
          {skills.map((skill) => (
          <div>
            <div>
          <Skill key={skill.name} {...skill} />
          </div>
          </div>
        ))}
          
       
      </div>
    </section>
    </div>
  );
};
