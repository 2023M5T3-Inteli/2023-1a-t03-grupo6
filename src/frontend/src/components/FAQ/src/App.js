import React from "react"
import styles from './style.module.scss'
import CardList from './CardList';



const App = () => {
  const cards = [

    { id: 1, title: '  How to post a project?', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet congue risus. Pellentesque quis accumsan dolor. Donec volutpat libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed aliquet ante.', tags: ["project", "Add"] },
    { id: 2, title: 'Can anyone post a project?', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet congue risus. Pellentesque quis accumsan dolor. Donec volutpat libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed aliquet ante.  ', tags: ["project", "Add"] },
    { id: 3, title: 'How to post a project?', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet congue risus. Pellentesque quis accumsan dolor. Donec volutpat libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed aliquet ante. ', tags: ["project", "Add"] },
  ];



  return (
    <div className={styles.app}>
      <div className={styles.classetitulo}>
        <h1>FAQ - Frequently Asked Questions </h1>
        <button id="meuBotao" >Ask a question</button>
      </div>
      <CardList cards={cards} />
    </div>
  );
};

export default App;

