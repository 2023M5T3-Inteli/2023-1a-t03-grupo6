import { useContext, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { BsFileEarmarkArrowUp } from "react-icons/bs";

import ProjectModalCtx from "../../../context/project-modal-ctx";
import ReactSelect from "../../ReactSelect/ReactSelect";

import styles from "./OfferProject.module.scss";

const keyWordsOptions = [
  { value: "javascript", label: "Java Script" },
  { value: "python", label: "Python" },
  { value: "react", label: "React" },
];

const teamOptions = [
  { value: "joão", label: "João" },
  { value: "maria", label: "Maria" },
  { value: "josé", label: "Jose" },
  { value: "carla", label: "Carla" },
];

const OfferProject = () => {
  const modalCtx = useContext(ProjectModalCtx);
  const [teamSize, setTeamSize] = useState(1);

  const projectNameInputRef = useRef();
  const projectAreaInputRef = useRef();
  const projectDescriptionInputRef = useRef();
  const projectKeywordsInputRef = useRef();
  const projectManagerInputRef = useRef();
  const projectTeamMembersInputRef = useRef();
  const projectStatusInputRef = useRef();
  const projectApplicationDeadlineInputRef = useRef();
  const projectEndDateInputRef = useRef();
  const projectStartDateInputRef = useRef();

  const submitHandler = async(event) => {
    event.preventDefault();

    const enteredProjectName = projectNameInputRef.current.value;
    const enteredProjectArea = projectAreaInputRef.current.value;
    const enteredProjectDescription = projectDescriptionInputRef.current.value;
    const enteredProjectApplicationDeadline =
      projectApplicationDeadlineInputRef.current.value;
    const enteredProjectEndDate = projectEndDateInputRef.current.value;
    const enteredProjectStartDate = projectStartDateInputRef.current.value;

    const projectData = {
      name: enteredProjectName,
      area: enteredProjectArea,
      description: enteredProjectDescription,
      keywords: [],
      manager: "John Doe",
      teamSize: +teamSize,
      teamMembers: [],
      status: "Open",
      applicationDeadline: enteredProjectApplicationDeadline,
      endDate: enteredProjectEndDate,
      startDate: enteredProjectStartDate,
    };

    const response = await fetch("http://localhost:3000/projects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(projectData)
    })

    const responseData = await response.json();

    console.log(responseData)
  };

  let teamSizeCounter = [];

  for (let index = 0; index < teamSize; index++) {
    teamSizeCounter.push(index);
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
                  <h1>Offer a Project</h1>
                  <GrClose onClick={modalCtx.showModalHandler} size={15} />
                </header>
                <div className={styles.formWrapper}>
                  <form
                    onSubmit={submitHandler}
                    className={styles.formContainer}
                  >
                    <div className={styles.field}>
                      <label>Project title:</label>
                      <input
                        ref={projectNameInputRef}
                        placeholder="Tell us a title that defines the project"
                      />
                    </div>
                    <div className={styles.field}>
                      <label>Project area:</label>
                      <input
                        ref={projectAreaInputRef}
                        placeholder="Tell us what the project area is"
                      />
                    </div>
                    <div className={styles.field}>
                      <label>Project description:</label>
                      <textarea
                        ref={projectDescriptionInputRef}
                        placeholder="Tell us more about the project"
                      />
                    </div>
                    <label htmlFor="inputTag" className={styles.field}>
                      <label>Existing documentation:</label>
                      <div className={styles.embedFile}>
                        <BsFileEarmarkArrowUp size={25} />
                        <p>Embed a file</p>
                        <input
                          id="inputTag"
                          type="file"
                          placeholder="Tell us more about the project"
                        />
                      </div>
                    </label>
                    <div className={styles.field}>
                      <label>Key words:</label>
                      <ReactSelect options={keyWordsOptions} />
                    </div>
                    <div className={styles.field}>
                      <label>Team:</label>
                      <ReactSelect options={teamOptions} />
                    </div>
                    <div className={styles.statusField}>
                      <label>Status:</label>
                      <div className={styles.radioInputContainer}>
                        <div className={styles.radioInput}>
                          <input type="radio" />
                          <p>Not started</p>
                        </div>
                        <div className={styles.radioInput}>
                          <input type="radio" />
                          <p>In progress</p>
                        </div>
                        <div className={styles.radioInput}>
                          <input type="radio" />
                          <p>To be done</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.dateContainer}>
                      <div className={styles.field}>
                        <label>Application Deadline:</label>
                        <input
                          ref={projectApplicationDeadlineInputRef}
                          type="date"
                        />
                      </div>
                      <div className={styles.field}>
                        <label>Start date:</label>
                        <input ref={projectStartDateInputRef} type="date" />
                      </div>
                      <div className={styles.field}>
                        <label>End date:</label>
                        <input ref={projectEndDateInputRef} type="date" />
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label>People needed for the project: </label>
                      <input
                        onChange={(event) => setTeamSize(event.target.value)}
                        value={teamSize}
                        type="number"
                        className={styles.numberInput}
                        min="1"
                      />
                    </div>
                    <div className={styles.occupationContainer}>
                      {teamSizeCounter.map((index) => {
                        return (
                          <div key={index} className={styles.occupationBx}>
                            <div className={styles.field}>
                              <label>{index + 1}st Occupation</label>
                              <input placeholder="Occupation" />
                            </div>
                            <div className={styles.field}>
                              <label>{index + 1}st Role</label>
                              <input placeholder="Role" />
                            </div>
                            <div className={styles.field}>
                              <label>{index + 1}st Area</label>
                              <input placeholder="Area" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className={styles.submtiContainer}>
                      <button
                        className={styles.cancelBtn}
                        onClick={modalCtx.showModalHandler}
                      >
                        Cancel post
                      </button>
                      <button className={styles.submitBtn} type="submit">
                        Post Project
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OfferProject;
