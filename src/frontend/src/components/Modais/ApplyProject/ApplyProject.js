import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrClose } from "react-icons/gr";

import ApplyModalCtx from "../../../context/apply-modal-ctx";

import styles from "./ApplyProject.module.scss";
import ReactSelect from "../../ReactSelect/ReactSelect";

const keyWordsOptions = [
  { value: "frontend_developer", label: "Front-end developer" },
  { value: "backend_developer", label: "Back-end developer" },
  { value: "ux_designer", label: "UX Designer" },
];

const ApplyProject = () => {
  const modalCtx = useContext(ApplyModalCtx);

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
                  <h1>Join Project</h1>
                  <GrClose onClick={modalCtx.showModalHandler} size={15} />
                </header>
                <div className={styles.applyWrapper}>
                  <div className={styles.applyContainer}>
                    <div className={styles.field}>
                      <label>Project:</label>
                      <p>
                        Web Application for Sales Ocupation
                      </p>
                    </div>
                    <div className={styles.field}>
                      <label>Occupation</label>
                      <ReactSelect options={keyWordsOptions}/>
                    </div>
                    <div className={styles.essayField}>
                      <label>Why would you like to apply for this job?</label>
                      <textarea placeholder="Tell us why you'd like to apply" />
                    </div>
                    <div className={styles.btnContainer}>
                      <button onClick={modalCtx.showModalHandler} type="submit">
                        Close post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ApplyProject;
