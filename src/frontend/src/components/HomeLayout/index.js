import React from 'react';
import styles from "./style.module.scss";
import HomeMain from '../HomeMain/index';
import HomeSideContent from '../HomeSideContent/index';

const HomeLayout = () => {
  return (
    <div className={styles.Container}>
      <HomeMain />
      <HomeSideContent />
    </div>
  );
}

export default HomeLayout;