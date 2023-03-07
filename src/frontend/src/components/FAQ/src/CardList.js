import React from "react";
import Card from "./Card";
import styles from './style.module.scss'

const CardList = ({ cards }) => {
    return (
      <div className={styles.cardlist}>
        {cards.map(card => (
          <Card key={card.id} title={card.title} body={card.body} tags={card.tags}/>
        ))}
      </div>
    );
  };
  

export default CardList;