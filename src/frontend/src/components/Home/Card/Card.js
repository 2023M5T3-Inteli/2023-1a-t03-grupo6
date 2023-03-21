import { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ApplyModalCtx from "../../../context/apply-modal-ctx";
import InfoModalCtx from "../../../context/info-modal-ctx";
import useHttp from "../../../hooks/use-http";

import styles from "./Card.module.scss";

const Card = (props) => {
  const [liked, setLiked] = useState(false);
  const moreInfoModalCtx = useContext(InfoModalCtx);
  const applyModalCtx = useContext(ApplyModalCtx);
  const { isLoading, error, sendRequest: fetchProject } = useHttp();

  const projectData = props.projectData;

  const likeHandler = () => {
    setLiked((prevState) => !prevState);
  };

  const getProject = (projectObject) => {
    const loadedProject = {
      ...projectObject,
      applicationDeadline: new Date(
        projectObject.applicationDeadline
      ).toLocaleDateString("en", {
        day: "numeric",
        year: "numeric",
        month: "long",
      }),
      startDate: new Date(projectObject.startDate).toLocaleDateString("en", {
        day: "numeric",
        year: "numeric",
        month: "long",
      }),
      endDate: new Date(projectObject.endDate).toLocaleDateString("en", {
        day: "numeric",
        year: "numeric",
        month: "long",
      }),
    };

    moreInfoModalCtx.projectDataHandler(loadedProject)
  };

  const moreInfoHandler = () => {
    moreInfoModalCtx.showModalHandler()
    
    fetchProject(
      {
        url: `https://52.207.254.113:3000/projects/${projectData.id}`,
      },
      getProject
    );
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.profileInfo}>
          <div className={styles.profilePictureBx}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
              alt="Profile-Picture"
            />
          </div>
          <div className={styles.profileInfoContent}>
            <h4>Joyce Batista</h4>
            <p>Web developer</p>
          </div>
        </div>
        <div className={styles.actionContainer}>
          {liked ? (
            <AiFillHeart color={"var(--red)"} onClick={likeHandler} size={20} />
          ) : (
            <AiOutlineHeart
              color={"var(--red)"}
              onClick={likeHandler}
              size={20}
            />
          )}
          <button onClick={moreInfoHandler} className={styles.moreInfo}>
            More info
          </button>
          <button
            onClick={applyModalCtx.showModalHandler}
            className={styles.apply}
          >
            Apply
          </button>
        </div>
      </div>
      <h1 className={styles.cardTitle}>{projectData.name}</h1>
      <div className={styles.cardContent}>
        <div className={styles.cardImg}>
          <img
            src="https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            alt="project-image"
          />
        </div>
        <div className={styles.projectInfos}>
          <ul>
            <li>
              Status: <span>{projectData.status}</span>
            </li>
            <li>
              Application Deadline:{" "}
              <span>{projectData.applicationDeadline}</span>
            </li>
            <li>
              Project starts: <span>{projectData.startDate}</span>
            </li>
            <li>
              Project ends: <span>{projectData.endDate}</span>
            </li>
            <li>
              Avaliable jobs: <span>{projectData.teamSize}</span>
            </li>
            <li className={styles.keyWords}>
              Key-words:
              <div>
                {projectData.keywords.map((keyword) => (
                  <p key={Math.random()}>{keyword}</p>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
