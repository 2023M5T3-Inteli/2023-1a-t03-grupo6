import React from 'react';
import styles from "./ProjectsLayout.module.scss";
import SearchBox from '../SearchBox/SearchBox';
import { BsFillCircleFill } from "react-icons/bs";
import ProjectsSideContent from '../HomeSideContent/index';
import Footer from '../Footer/Footer';

const ProjectsLayout = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.MainContent}></div>
      <div className={styles.SideContent}>
        <SearchBox />
        <div className={styles.IntKeyWords}>
          <p>Filters that can help you</p>
          <div className={styles.AllKeyWords}>
            <div style={{color: 'var(--dell-aqua)', 'border-color': 'var(--dell-aqua)'}} className={styles.SugKeyWords}>All Projects</div>
            <div style={{color: 'var(--dell-green)', 'border-color': 'var(--dell-green)'}} className={styles.SugKeyWords}>Done</div>
            <div style={{color: 'var(--dell-purple)', 'border-color': 'var(--dell-purple)'}} className={styles.SugKeyWords}>Recruitment</div>
            <div style={{color: 'var(--dell-yellow)', 'border-color': 'var(--dell-yellow)'}} className={styles.SugKeyWords}>To be done</div>
            <div style={{color: 'var(--dell-berry)', 'border-color': 'var(--dell-berry)'}} className={styles.SugKeyWords}>In progress</div>
            <div style={{color: 'var(--dell-red)', 'border-color': 'var(--dell-red)'}} className={styles.SugKeyWords}>Closed</div>
          </div>
      </div>
      <div className={styles.Ranking}>
        <div className={styles.RankingIntro}>
          <span className={styles.RankingTittle}>Your most used languages</span>
          <span className={styles.RankingSubTittle}>Data based on your projects</span>
        </div>
        <div className={styles.RankingContent}>
          <div className={styles.RankingPlace}>
            <div className={styles.InfoProfile}>
              <span className={styles.ProfileName}>JavaScript<span className={styles.ProfilePoints}><BsFillCircleFill className={styles.IconPercentage} size={11}/>45%</span></span>
              <span className={styles.DoneProjects}>12 done projects</span>
            </div>
          </div>
          <div className={styles.RankingPlace}>
            <div className={styles.InfoProfile}>
              <span className={styles.ProfileName}>TypesScript<span className={styles.ProfilePoints}><BsFillCircleFill className={styles.IconPercentage} size={11}/>26%</span></span>
              <span className={styles.DoneProjects}>08 done projects</span>
            </div>
          </div>
          <div className={styles.RankingPlace}>
            <div className={styles.InfoProfile}>
              <span className={styles.ProfileName}>Python<span className={styles.ProfilePoints}><BsFillCircleFill className={styles.IconPercentage} size={11}/>21%</span></span>
              <span className={styles.DoneProjects}>06 done projects</span>
            </div>
          </div>
          <div className={styles.RankingPlace}>
            <div className={styles.InfoProfile}>
              <span className={styles.ProfileName}>React Native<span className={styles.ProfilePoints}><BsFillCircleFill className={styles.IconPercentage} size={11}/>08%</span></span>
              <span className={styles.DoneProjects}>02 done projects</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default ProjectsLayout;