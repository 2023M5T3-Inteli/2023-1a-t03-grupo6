import React from 'react';
import styles from "./style.module.scss";

import { SiMicrosoftteams } from "react-icons/si";
import { FiEdit } from "react-icons/fi";
import { BsInfoCircleFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";


import tempChart from '../../assets/tempChart.png';
import exampleImgProject from '../../assets/exampleImgProject.jpg';


const ProfileMain = () => {
  return (
    <div className={styles.ProfileMain}>
      <div className={styles.ProfileInfo}>
        <span className={styles.TittleInfo}>Full Name:<span className={styles.PersonalInfo}>Andreia Carmo de Andrade</span><button className={styles.EditButton}><FiEdit className={styles.EditIcon} size={20} /><p>Editar</p></button></span>
        <span className={styles.TittleInfo}>Email:<span className={styles.PersonalInfo}>andreia.carmo@dell.com</span></span>
        <span className={styles.TittleInfo}>Current area:<span className={styles.PersonalInfo}>IT</span></span>
        <span className={styles.TittleInfo}>Job type:<span className={styles.PersonalInfo}>Remote</span></span>
        <button className={styles.TeamsButton}>
          <SiMicrosoftteams className={styles.TeamsIcon} size={20} />
          <p>Entre em contato</p>
        </button>
      </div>
      <div className={styles.ProfileStats}>
        <div className={styles.Technologies}>
          <span className={styles.TittleTech}>Technologies <button className={styles.EditTech}><FiEdit className={styles.EditIcon} size={14} /><p>Editar</p></button></span>
          <div className={styles.ContentTech}>
            <div className={styles.GraphTech}>
              <img src={tempChart}></img>
            </div>
            <div className={styles.SpecGraph}>
              <div className={styles.TechList}><div style={{background: 'var(--dell-berry)'}} className={styles.TechCircle}></div><p>Python</p></div>
              <div className={styles.TechList}><div style={{background: 'var(--dell-purple)'}} className={styles.TechCircle}></div><p>C++</p></div>
              <div className={styles.TechList}><div style={{background: 'var(--dell-red)'}} className={styles.TechCircle}></div><p>JavaScript</p></div>
              <div className={styles.TechList}><div style={{background: 'var(--dell-yellow)'}} className={styles.TechCircle}></div><p>PHP</p></div>
            </div>
          </div>
        </div>
        <div className={styles.DellMatchStats}>
          <span className={styles.TittleStats}>DellMatch Stats <BsInfoCircleFill className={styles.InfoIcon} size={18} /></span>
          <div className={styles.InfoStats}>
            <span className={styles.SpanStats}>10<span className={styles.SpanMidStats}>Projects</span><span className={styles.SpanBotStats}>Total Contributions</span></span>
            <span className={styles.SpanStats}>750<span className={styles.SpanMidStats}>Pts</span><span className={styles.SpanBotStats}>Total Dell Points</span></span>
          </div>
        </div>
      </div>
      <div className={styles.ProfileProjects}>
        <span className={styles.TittleProjects}>Projects<span className={styles.SpanProjects}>View all projects<AiOutlineRight className={styles.IconProjects} size={16} /></span></span>
        <div className={styles.ProjectsList}>
          <div className={styles.Projects}>
            <div className={styles.ProjectImage}><img src={exampleImgProject}></img></div>
            <span>Project name</span>
          </div>
          <div className={styles.Projects}>
            <div className={styles.ProjectImage}><img src={exampleImgProject}></img></div>
            <span>Project name</span>
          </div>
          <div className={styles.Projects}>
            <div className={styles.ProjectImage}><img src={exampleImgProject}></img></div>
            <span>Project name</span>
          </div>
          <div className={styles.Projects}>
            <div className={styles.ProjectImage}><img src={exampleImgProject}></img></div>
            <span>Project name</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProfileMain;