import { useContext, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { BsFileEarmarkArrowUp } from "react-icons/bs";

import ProjectModalCtx from "../../../context/project-modal-ctx";
import ReactSelect from "../../ReactSelect/ReactSelect";

import styles from "./OfferProject.module.scss";
import useHttp from "../../../hooks/use-http";

const keyWordsOptions = [
  { value: "javascript", label: "Java Script" },
  { value: "python", label: "Python" },
  { value: "react", label: "React" },
];

const areaOptions = [
  { value: "IT", label: "IT" },
  { value: "Commercial", label: "Commercial" },
  { value: "Marketing", label: "Marketing" },
  { value: "HR", label: "HR" },
  { value: "Finance", label: "Finance" },
  { value: "Legal", label: "Legal" },
];

const OfferProject = () => {
  const modalCtx = useContext(ProjectModalCtx);
  const { isLoading, error, sendRequest: postProject } = useHttp();
  const [teamSize, setTeamSize] = useState(1);
  const [didSubmit, setDidSubmit] = useState(false);
  const [selectedRadioBtn, setSelectedRadioBtn] = useState("radio1");

  const isRadioSelected = (value) => selectedRadioBtn === value;
  const handleRadioClick = (event) =>
    setSelectedRadioBtn(event.target.defaultValue);

  const projectNameInputRef = useRef();
  const projectAreaInputRef = useRef();
  const projectDescriptionInputRef = useRef();
  const projectKeywordsInputRef = useRef();
  const projectManagerInputRef = useRef();
  const projectApplicationDeadlineInputRef = useRef();
  const projectEndDateInputRef = useRef();
  const projectStartDateInputRef = useRef();
  let enteredStatus;

  if (selectedRadioBtn === "radio1") {
    enteredStatus = "Open";
  } else if (selectedRadioBtn === "radio2") {
    enteredStatus = "In progress";
  } else if (selectedRadioBtn === "radio3") {
    enteredStatus = "Cancelled";
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredProjectName = projectNameInputRef.current.value;
    const enteredProjectArea = projectAreaInputRef.current.state.selectValue[0].value;
    const enteredProjectDescription = projectDescriptionInputRef.current.value;
    const enteredProjectApplicationDeadline =
      projectApplicationDeadlineInputRef.current.value;
    const enteredProjectEndDate = projectEndDateInputRef.current.value;
    const enteredProjectStartDate = projectStartDateInputRef.current.value;
    const enteredProjectKeywords = [];
    
    const selectedKeywords = projectKeywordsInputRef.current.state.selectValue;
    
    for (const key in selectedKeywords) {
      enteredProjectKeywords.push(selectedKeywords[key].value);
    }

    const projectData = {
      name: enteredProjectName,
      area: enteredProjectArea,
      description: enteredProjectDescription,
      keywords: enteredProjectKeywords,
      manager: "John Doe",
      teamSize: +teamSize,
      teamMembers: [],
      status: enteredStatus,
      applicationDeadline: enteredProjectApplicationDeadline,
      endDate: enteredProjectEndDate,
      startDate: enteredProjectStartDate,
    };

    postProject(
      {
        url: "http://44.202.40.149:3000/projects",
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: projectData,
      },
      () => {
        setDidSubmit(true);
      }
    );
  };

  const closeModalHandler = () => {
    setDidSubmit(false);
    modalCtx.showModalHandler();
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
            onClick={closeModalHandler}
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
                  <h1 onClick={() => console.log(projectAreaInputRef.current.state.selectValue[0].value)}>
                    Offer a Project
                  </h1>
                  <GrClose onClick={closeModalHandler} size={15} />
                </header>
                <div className={styles.formWrapper}>
                  {!isLoading && !error && !didSubmit && (
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
                        <ReactSelect
                          ref={projectAreaInputRef}
                          options={areaOptions}
                          isMulti={false}
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
                        <ReactSelect
                          ref={projectKeywordsInputRef}
                          options={keyWordsOptions}
                          isMulti={true}
                        />
                      </div>
                      
                      <div className={styles.statusField}>
                        <label>Status:</label>
                        <div className={styles.radioInputContainer}>
                          <div className={styles.radioInput}>
                            <input
                              type="radio"
                              name="react-radio-btn"
                              value="radio1"
                              checked={isRadioSelected("radio1")}
                              onChange={handleRadioClick}
                            />
                            <label>Open</label>
                          </div>
                          <div className={styles.radioInput}>
                            <input
                              type="radio"
                              name="react-radio-btn"
                              value="radio2"
                              checked={isRadioSelected("radio2")}
                              onChange={handleRadioClick}
                            />
                            <label>In progress</label>
                          </div>
                          <div className={styles.radioInput}>
                            <input
                              type="radio"
                              name="react-radio-btn"
                              value="radio3"
                              checked={isRadioSelected("radio3")}
                              onChange={handleRadioClick}
                            />
                            <label>Cancelled</label>
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
                  )}
                  {isLoading && (
                    <section className={styles.projectsLoading}>
                      <p>Loading...</p>
                    </section>
                  )}
                  {error && (
                    <section className={styles.projectsError}>
                      <p>{error}</p>
                    </section>
                  )}
                  {!isLoading && !error && didSubmit && (
                    <section>
                      <p>Project created!</p>
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

export default OfferProject;
