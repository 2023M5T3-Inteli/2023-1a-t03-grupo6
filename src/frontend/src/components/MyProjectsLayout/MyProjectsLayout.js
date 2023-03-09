import React from 'react';
import styles from "./MyProjectsLayout.module.scss";

import MyProjectsMain from '../MyProjectsMain/MyProjectsMain';
import MyProjectsSide from '../MyProjectsSide/MyProjectsSide';

const MyProjectsLayout = () => {
  return (
    <div className={styles.Container}>
      <MyProjectsMain />
      <MyProjectsSide />
    </div>
  );
}

export default MyProjectsLayout;