import { memo, useEffect, useState } from "react";
import useHttp from "../../../hooks/use-http";
import Card from "../Card/Card";

import styles from "./CardList.module.scss";

const CardList = (props) => {
  const [projects, setProjects] = useState([]);

  const { isLoading, error, sendRequest: fetchProjects } = useHttp();

  useEffect(() => {
    const applyProjects = (projectObject) => {
      const loadedProjects = [];

      for (const projectKey in projectObject) {
        loadedProjects.push({
          ...projectObject[projectKey],
          applicationDeadline: new Date(
            projectObject[projectKey].applicationDeadline
          ).toLocaleDateString("en", {
            year: "numeric",
            month: "long",
          }),
          startDate: new Date(
            projectObject[projectKey].startDate
          ).toLocaleDateString("en", {
            year: "numeric",
            month: "long",
          }),
          endDate: new Date(
            projectObject[projectKey].endDate
          ).toLocaleDateString("en", {
            year: "numeric",
            month: "long",
          }),
        });
      }

      loadedProjects.reverse()

      setProjects(loadedProjects);
    };

    fetchProjects(
      {
        url: "http://localhost:3000/projects",
      },
      applyProjects
    );
  }, [fetchProjects]);

  if (isLoading) {
    return (
      <section className={styles.projectsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.projectsError}>
        <p>{error}</p>
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
