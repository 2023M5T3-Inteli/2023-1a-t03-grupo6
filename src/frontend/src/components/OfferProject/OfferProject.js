import { useContext } from "react";import { AnimatePresence, motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { BsFileEarmarkArrowUp } from "react-icons/bs";

import ProjectModalCtx from "../../context/project-modal-ctx";

import styles from "./OfferProject.module.scss";
import ReactSelect from "../ReactSelect/ReactSelect";

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

  const submitHandler = (event) => {
    event.preventDefault();
  };

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
                    className={styles.formContainer}
                    onSubmit={submitHandler}
                  >
                    <div className={styles.field}>
                      <label>Project title:</label>
                      <input placeholder="Tell us a title that defines the project" />
                    </div>
                    <div className={styles.field}>
                      <label>Project area:</label>
                      <input placeholder="Tell us what the project area is" />
                    </div>
                    <div className={styles.field}>
                      <label>Project description:</label>
                      <textarea placeholder="Tell us more about the project" />
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
                        <input type="date" />
                      </div>
                      <div className={styles.field}>
                        <label>End date:</label>
                        <input type="date" />
                      </div>
                      <div className={styles.field}>
                        <label>Start date:</label>
                        <input type="date" />
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label>People needed for the project: </label>
                      <input type="number" className={styles.numberInput} />
                    </div>
                    <div className={styles.occupationContainer}>
                      <div className={styles.occupationBx}>
                        <div className={styles.field}>
                          <label>1st Occupation Type</label>
                          <input placeholder="Occupation Type" />
                        </div>
                        <div className={styles.field}>
                          <label>1st Occupation</label>
                          <input placeholder="Occupation" />
                        </div>
                      </div>
                      <div className={styles.occupationBx}>
                        <div className={styles.field}>
                          <label>2st Occupation Type</label>
                          <input placeholder="Occupation Type" />
                        </div>
                        <div className={styles.field}>
                          <label>2st Occupation</label>
                          <input placeholder="Occupation" />
                        </div>
                      </div>
                      <div className={styles.occupationBx}>
                        <div className={styles.field}>
                          <label>3st Occupation Type</label>
                          <input placeholder="Occupation Type" />
                        </div>
                        <div className={styles.field}>
                          <label>3st Occupation</label>
                          <input placeholder="Occupation" />
                        </div>
                      </div>
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
