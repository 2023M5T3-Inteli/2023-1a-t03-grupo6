import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import ModalCtx from "../../context/modal-ctx";

import styles from './Modal.module.scss'

const OfferProjectModal = (props) => {
    const modalCtx = useContext(ModalCtx)
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
                {props.children}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
   )
}

export default OfferProjectModal;