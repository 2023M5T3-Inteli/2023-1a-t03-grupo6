import React from "react";
import styles from './style.module.scss'


const Card = ({ title, body, tags}) => {
    return (
      <div className={styles.cardcontainer}>
        <h2>{title}</h2>
        <div className= {styles.tagscontainer}>
        {tags.map(tag => (
          <p className={styles.tag}>{tag}</p>
        ))}
        </div>
        <p>{body}</p>
      </div>
    );
  };
  
export default Card;
  