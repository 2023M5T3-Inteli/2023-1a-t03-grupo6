import { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ApplyModalCtx from "../../../context/apply-modal-ctx";
import InfoModalCtx from "../../../context/info-modal-ctx";

import styles from "./Card.module.scss";

const Card = () => {
  const [liked, setLiked] = useState(false);
  const moreInfoModalCtx = useContext(InfoModalCtx)
  const applyModalCtx = useContext(ApplyModalCtx)

  const likeHandler = () => {
    setLiked((prevState) => !prevState);
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
          <button onClick={moreInfoModalCtx.showModalHandler} className={styles.moreInfo}>More info</button>
          <button onClick={applyModalCtx.showModalHandler} className={styles.apply}>Apply</button>
        </div>
      </div>
      <h1 className={styles.cardTitle}>Front-end website developer required</h1>
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
              Status: <span>In progress</span>
            </li>
            <li>
              Recruiting until: <span>March, 21</span>
            </li>
            <li>
              Deadline: <span>December, 31</span>
            </li>
            <li>
              Avaliable jobs: <span>05</span>
            </li>
            <li className={styles.keyWords}>
              Key-words:
              <div>
                <p>Python</p>
                <p>JavaScript</p>
                <p>C++</p>
                <p>Backend</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
