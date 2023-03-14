import { useCallback, useState } from "react";

const useProjectData = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const fetchProjects = useCallback(async (id) => {
    setLoading(true);
    setHttpError(null);
    try {
      const response = await fetch(
        `http://localhost:3000/projects/${id ? id : ""}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const projectsFormatedData = [];

      for (const key in responseData) {
        projectsFormatedData.push({
          ...responseData[key],
          applicationDeadline: new Date(
            responseData[key].applicationDeadline
          ).toLocaleDateString("en", {
            day: "numeric",
            year: "numeric",
            month: "long",
          }),
          startDate: new Date(responseData[key].startDate).toLocaleDateString(
            "en",
            {
              day: "numeric",
              year: "numeric",
              month: "long",
            }
          ),
          endDate: new Date(responseData[key].endDate).toLocaleDateString(
            "en",
            {
              day: "numeric",
              year: "numeric",
              month: "long",
            }
          ),
        });
      }

      setProjects(projectsFormatedData);
    } catch (error) {
      setHttpError(error.message);
    }
    setLoading(false);
    
  }, []);

  return {
    loading,
    httpError,
    fetchProjects,
    projects,
  };
};

export default useProjectData;
