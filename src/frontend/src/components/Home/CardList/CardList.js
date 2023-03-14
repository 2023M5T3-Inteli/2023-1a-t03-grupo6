import { memo, useEffect } from "react";
import useProjectData from "../../../hooks/use-project-data";
import Card from "../Card/Card";

import styles from "./CardList.module.scss";

const CardList = (props) => {
  const {loading, httpError, fetchProjects, projects } = useProjectData()

  useEffect(() => {
    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section className={styles.projectsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.projectsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <div className={styles.cardlist}>
      {projects.map((project) => {
        return <Card key={project.id} projectData={project} />;
      })}
    </div>
  );
};

export default memo(CardList);
