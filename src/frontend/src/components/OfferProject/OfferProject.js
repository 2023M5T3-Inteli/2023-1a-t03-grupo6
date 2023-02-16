import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import ModalCtx from "../../context/modal-ctx";

import Modal from "../Modal/Modal";

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
  const modalCtx = useContext(ModalCtx);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Modal>
      <header className={styles.header}>
        <h1>Offer a Project</h1>
        <GrClose onClick={modalCtx.showModalHandler} size={15} />
      </header>
      <div className={styles.formWrapper}>
        <form className={styles.formContainer} onSubmit={submitHandler}>
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
          {/* <div className={styles.dateFieldContainer}>
            <div className={styles.dateField}>
              <label>
                Application Deadline:
              </label>
            </div>
          </div> */}
        </form>
      </div>
    </Modal>
  );
};

export default OfferProject;
