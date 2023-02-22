import React from 'react';
import styles from "./style.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const HomeSideContent = () => {
  return (
    <div className={styles.SideContent}>
      <form className={styles.SearchInput}>
        <AiOutlineSearch className={styles.SearchIcon} size={24} />
        <input type="search" placeholder="What do you want to learn today?" />
      </form>
      <div className={styles.IntKeyWords}>
        <p>Key-words you may be interested</p>
        <div>
          <span className={styles.SugKeyWords}><p>Python</p></span>
        </div>

      </div>
    </div>
  );
}

export default HomeSideContent;