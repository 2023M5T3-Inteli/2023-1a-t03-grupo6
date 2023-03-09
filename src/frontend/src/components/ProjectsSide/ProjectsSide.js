import React from 'react';
import styles from "./ProjectsSide.module.scss";

import SearchBox from '../SearchBox/SearchBox';
import Footer from '../Footer/Footer';

const ProjectsSide = () => {
  return (
    <div className={styles.SideContent}>
        <SearchBox />
        <Footer />
      </div>
  );
}

export default ProjectsSide;