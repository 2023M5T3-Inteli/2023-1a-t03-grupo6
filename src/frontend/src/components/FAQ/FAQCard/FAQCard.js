import styles from '../style.module.scss'

const FAQCard = ({ title, body, tags}) => {
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
  
export default FAQCard;