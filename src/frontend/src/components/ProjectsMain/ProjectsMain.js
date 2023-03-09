import React from 'react';
import styles from "./ProjectsMain.module.scss";

import { AiFillHeart } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const ProjectsMain = () => {
  const navigate = useNavigate();
  const handleOnClickMyProjects = useCallback(
    () => navigate("/myProjects", { replace: true }),
    [navigate]
  );
  return (
    <div className={styles.MainContent}>
      <div className={styles.ProjectsHeader}>
        <p>Your Liked Projects <span>|</span> <a onClick={handleOnClickMyProjects}>Your projecs</a></p>
      </div>
      <div className={styles.ProjectsList}>
        <div>
          <p>Cloud computing service development <AiFillHeart size={26}/> </p>
          <div>
            <span>AWS</span>
            <span>Nest.js</span>
            <span>TypeScript</span>
          </div>
          <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet congue risus. Pellentesque quis accumsan dolor. Donec volutpat libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed aliquet ante.</p></span>
        </div>
        <div>
          <p>Logic for prediction with artificial intelligence <AiFillHeart size={26}/> </p>
          <div>
            <span>Python</span>
            <span>Jupyter</span>
          </div>
          <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet congue risus. Pellentesque quis accumsan dolor. Donec volutpat libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed aliquet ante.</p></span>
        </div>
      </div>
    </div>
  );
}

export default ProjectsMain;