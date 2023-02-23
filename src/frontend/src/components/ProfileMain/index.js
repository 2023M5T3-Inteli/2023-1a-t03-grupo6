import React from 'react';
import styles from "./style.module.scss";

import { SiMicrosoftteams } from "react-icons/si";
import { FiEdit } from "react-icons/fi";


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
        <div className={styles.Technologies}></div>
        <div className={styles.DellMatchStats}></div>
      </div>
      <div className={styles.ProfileProjects}></div>
    </div>
  );
}

export default ProfileMain;