import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { VscFilePdf } from "react-icons/vsc";

import InfoModalCtx from "../../context/info-modal-ctx";

import styles from "./ImportantInfo.module.scss";

const ImportantInfo = () => {
  const modalCtx = useContext(InfoModalCtx);

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
                <div className={styles.infosWrapper}>
                  <div className={styles.infosContainer}>
                    <div className={styles.field}>
                      <label>Project Tittle:</label>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <div className={styles.field}>
                      <label>Project area:</label>
                      <p>Lorem ipsum.</p>
                    </div>
                    <div className={styles.descriptionField}>
                      <label>Project description:</label>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc mattis nec elit consectetur placerat. Vivamus
                        pharetra augue lectus, rutrum pharetra nulla condimentum
                        sit amet. Curabitur ultricies odio felis, sollicitudin
                        pellentesque dui maximus id. Sed venenatis ligula justo,
                        nec porttitor nunc consectetur vel. Duis in sem at metus
                        gravida molestie.
                      </p>
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
                        <li className={styles.keyWords}>Python</li>
                        <li className={styles.keyWords}>JavaScript</li>
                        <li className={styles.keyWords}>Backend</li>
                      </ul>
                    </div>
                    <div className={styles.field}>
                      <label>Team:</label>
                      <ul>
                        <li className={styles.teamLi}>
                          <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" />
                          Andreia Carmo
                        </li>
                        <li className={styles.teamLi}>
                          <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" />
                          Lislaine Amane
                        </li>
                        <li className={styles.teamLi}>
                          <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" />
                          Mark Escobar
                        </li>
                      </ul>
                    </div>
                    <div className={styles.field}>
                      <label>Status:</label>
                      <p className={styles.statusP}>To be done</p>
                    </div>
                    <div className={styles.field}>
                      <label>Deadline:</label>
                      <p className={styles.deadlineP}>02/10/2023</p>
                    </div>
                    <div className={styles.field}>
                      <label>People needed for the project:</label>
                      <p>3</p>
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

export default ImportantInfo;
