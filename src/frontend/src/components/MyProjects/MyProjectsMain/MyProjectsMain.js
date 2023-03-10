import LikedProject from "../LikedProjects/LikedProject";
import YourProjects from "../YourProjects/YourProjects";

import styles from "./MyProjectsMain.module.scss";

const MyProjectsMain = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.ProjectsHeader}>
          <div className={styles.btnBx}>
            <button
              className={styles.likedProjectBtn}
              onClick={props.showLikedProjectsHandler}
            >
              Your Liked Projects
            </button>
            <button
              className={styles.yourProjectBtn}
              onClick={props.showLikedProjectsHandler}
            >
              Your Projects
            </button>
          </div>
        </div>
        {props.showLikedProjects ? <LikedProject /> : <YourProjects />}
      </div>
    </div>
  );
};

export default MyProjectsMain;
