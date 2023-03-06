import React from 'react';
import styles from "./SearchBox.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  return (
    <form className={styles.SearchInput}>
      <AiOutlineSearch className={styles.SearchIcon} size={24} />
      <input type="search" placeholder="What do you want to learn today?" />
    </form>
  );
}

export default SearchBox;