import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { GrClose } from "react-icons/gr";
import { MdArrowForwardIos } from "react-icons/md";

import PeopleApply from '../../assets/firstProfile.jfif';
import PeopleOwner from '../../assets/thirdProfile.jfif';

import RejectedModalCtx from "../../context/rejected-modal-ctx";

import styles from "./RejectedProject.module.scss";


const RejectedProject = () => {
  const modalCtx = useContext(RejectedModalCtx);

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
              <div className={styles.TopContent}>
                <p>It didn't happen this time</p>
                <GrClose className={styles.CloseIcon} onClick={modalCtx.showModalHandler} size={30} />
              </div>
              <div className={styles.RejectTeam}>
                <div>
                  <span className={styles.SpaceImg}><img src={PeopleOwner} alt="Logo" /></span>
                  <MdArrowForwardIos className={styles.iconHeader} size={30} />
                  <span className={styles.SpaceImg}><img src={PeopleApply} alt="Logo" /></span>
                </div>
                <span>Joyce Batista declined you in the team</span>
              </div>
              <div className={styles.Tittle}>
                <div className={styles.Vector}></div>
                <span>You dont got the job 🙁</span>
              </div>
              <div className={styles.VectorTriangle}></div>
              <div className={styles.RejectMessage}>
                <h2>Logic for prediction with artificial intelligence</h2>
                <p>Thank you for submitting your application. We have received your response from the application and unfortunately we are not going to continue with your participation in the project. We really enjoyed getting to know you and what you have to offer, but we ended up opting for another profile for the position in the project, more in line with what we are looking for at the moment.</p>
              </div>
              <div className={styles.EndText}>
                  <p>Thank you for taking the time to subscribe.</p>
                  <p>Good luck in future applications!</p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RejectedProject;
