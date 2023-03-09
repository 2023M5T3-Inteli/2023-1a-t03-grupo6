import React from 'react';
import styles from "./MyProjectsMain.module.scss";

import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import { AiFillHeart } from "react-icons/ai";

const MyProjectsMain = () => {
  const navigate = useNavigate();
  const handleOnClickSavedProjects = useCallback(
    () => navigate("/projects", { replace: true }),
    [navigate]
  );

  return (
    <div className={styles.MainContent}>
      <div className={styles.ProjectsHeader}>
        <p><a onClick={handleOnClickSavedProjects}>Your Liked Projects</a> <span>|</span> Your projecs</p>
      </div>
      <div className={styles.ProjectsList}>
        <div>
          <p>Cloud computing service development <div style={{color: 'var(--dell-berry)', 'border-color': 'var(--dell-berry)'}} className={styles.SugKeyWords}>In progress</div> </p>
          <div>
            <span>AWS</span>
            <span>Nest.js</span>
            <span>TypeScript</span>
            <p style={{color: 'var(--blue)'}}>Approved</p>
          </div>
          <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet congue risus. Pellentesque quis accumsan dolor. Donec volutpat libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed aliquet ante.</p></span>
        </div>
        <div>
          <p>Logic for prediction with artificial intelligence <div style={{color: 'var(--dell-purple)', 'border-color': 'var(--dell-purple)'}}>Recruitment</div> </p>
          <div>
            <span>Python</span>
            <span>Jupyter</span>
            <p style={{color: 'var(--orange)'}}>Owner</p>
          </div>
          <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet congue risus. Pellentesque quis accumsan dolor. Donec volutpat libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed aliquet ante.</p></span>
        </div>
      </div>
    </div>
  );
}

export default MyProjectsMain;