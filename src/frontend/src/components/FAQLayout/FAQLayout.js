import React from 'react';
import styles from "./FAQLayout.module.scss";

import FAQMain from '../FAQMain/FAQMain';
import FAQSide from '../FAQSide/FAQSide';


const FAQLayout = () => {
  return (
    <div className={styles.Container}>
      <FAQMain />
      <FAQSide />
    </div>
  );
}

export default FAQLayout;