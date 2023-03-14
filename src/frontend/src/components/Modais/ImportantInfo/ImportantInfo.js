import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { VscFilePdf } from "react-icons/vsc";

import InfoModalCtx from "../../../context/info-modal-ctx";

import styles from "./ImportantInfo.module.scss";
import useProjectData from "../../../hooks/use-project-data";

const ImportantInfo = () => {
  const modalCtx = useContext(InfoModalCtx);

  const {
    loading,
    httpError,
    fetchProjects,
    projects: project,
  } = useProjectData();

  useEffect(() => {
    fetchProjects();
  }, []);

  let projectData;

  if (modalCtx.projectId) {
    projectData = project[modalCtx.projectId - 1];
  }

  return (
    <AnimatePresence>
      {modalCtx.showModal && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            onClick={() => modalCtx.showModalHandler()}
            className={styles.modalBackdrop}
          ></motion.div>
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className={styles.modalContentWrapper}
          >
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              className={styles.modalContent}
            >
              <div className={styles.modalWrapper}>
                <header className={styles.header}>
                  <h1 onClick={() => console.log(projectData)}>
                    Offer a Project
                  </h1>
                  <GrClose onClick={modalCtx.showModalHandler} size={15} />
                </header>
                <div className={styles.infosWrapper}>
                  {!modalCtx.loading && !modalCtx.httpError && (
                    <div className={styles.infosContainer}>
                      <div className={styles.field}>
                        <label>Project Tittle:</label>
                        <p>{projectData.name}</p>
                      </div>
                      <div className={styles.field}>
                        <label>Project area:</label>
                        <p>{projectData.area}</p>
                      </div>
                      <div className={styles.descriptionField}>
                        <label>Project description:</label>
                        <p>{projectData.description}</p>
                      </div>
                      <div className={styles.field}>
                        <label>Existing documentation:</label>
                        <a
                          target="_blank"
                          href="https://drive.google.com/file/d/1_UCDJRZZ0mmDDCLH4o_DbTcucD97OMsm/view?usp=share_link"
                        >
                          <VscFilePdf size={25} /> Tapi
                        </a>
                      </div>
                      <div className={styles.field}>
                        <label>Key words:</label>
                        <ul>
                          {projectData.keywords.map((keyword) => (
                            <li key={keyword} className={styles.keyWords}>
                              {keyword}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.field}>
                        <label>Team:</label>
                        <ul>
                          {projectData.teamMembers.map((teamMember) => (
                            <li key={teamMember} className={styles.teamLi}>
                              <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" />
                              {teamMember}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.field}>
                        <label>Status:</label>
                        <p className={styles.statusP}>{projectData.status}</p>
                      </div>
                      <div className={styles.field}>
                        <label>Application Deadline:</label>
                        <p className={styles.deadlineP}>{projectData.applicationDeadline}</p>
                      </div>
                      <div className={styles.field}>
                        <label>Project starts::</label>
                        <p className={styles.deadlineP}>{projectData.startDate}</p>
                      </div>
                      <div className={styles.field}>
                        <label>Project ends:</label>
                        <p className={styles.deadlineP}>{projectData.endDate}</p>
                      </div>
                      <div className={styles.field}>
                        <label>People needed for the project:</label>
                        <p>{projectData.teamSize}</p>
                      </div>
                      <div className={styles.occupationContainer}>
                        <div className={styles.occupationType}>
                          <div className={styles.field}>
                            <label>1st occupation type:</label>
                            <p>Shadow</p>
                          </div>
                          <div className={styles.field}>
                            <label>2st occupation type:</label>
                            <p>Shadow</p>
                          </div>
                          <div className={styles.field}>
                            <label>3st occupation type:</label>
                            <p>Shadow</p>
                          </div>
                        </div>
                        <div className={styles.occupationName}>
                          <div className={styles.field}>
                            <label>1st occupation:</label>
                            <p>Front-end developer</p>
                          </div>
                          <div className={styles.field}>
                            <label>2st occupation:</label>
                            <p>Back-end developer</p>
                          </div>
                          <div className={styles.field}>
                            <label>3st occupation:</label>
                            <p>UX Designer</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.btnContainer}>
                        <button
                          onClick={modalCtx.showModalHandler}
                          type="submit"
                        >
                          Close post
                        </button>
                      </div>
                    </div>
                  )}
                  {modalCtx.loading && (
                    <section className={styles.projectsLoading}>
                      <p>Loading...</p>
                    </section>
                  )}
                  {modalCtx.httpError && (
                    <section className={styles.projectsError}>
                      <p>{modalCtx.httpError}</p>
                    </section>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ImportantInfo;
