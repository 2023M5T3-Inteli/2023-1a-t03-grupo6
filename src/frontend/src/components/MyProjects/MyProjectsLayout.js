import { useState } from "react";

import MyProjectsSide from "./MyProjectsSide/MyProjectsSide";
import MyProjectsMain from "./MyProjectsMain/MyProjectsMain";

import styles from "./MyProjectsLayout.module.scss";

const MyProjectsLayout = () => {
  const [showLikedProjects, setShowLikedProjects] = useState(true);

  const showLikedProjectsHandler = () => {
    setShowLikedProjects((prevState) => !prevState);
  };


  return (
    <div className={styles.container}>
      <MyProjectsMain showLikedProjects={showLikedProjects} showLikedProjectsHandler={showLikedProjectsHandler}/>
      <MyProjectsSide showLikedProjects={showLikedProjects}/>
    </div>
  );
};

export default MyProjectsLayout;
