import React from 'react';
import styles from "./ProjectsLayout.module.scss";

import ProjectsMain from '../ProjectsMain/ProjectsMain';
import ProjectsSide from '../ProjectsSide/ProjectsSide';


const ProjectsLayout = () => {
  return (
    <div className={styles.Container}>
      <ProjectsMain />
      <ProjectsSide />
    </div>
  );
}

export default ProjectsLayout;