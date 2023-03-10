import Card from "../Card/Card";
import styles from './CardList.module.scss'

const CardList = (props) => {
    return (
      <div className={styles.cardlist}>
          <Card />
          <Card />
      </div>
    );
  };
  

export default CardList;