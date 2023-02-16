import { AiFillHome, AiFillPlusCircle, AiFillHeart } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

import styles from "./Navbar.module.scss";

import logo from "../../assets/logo.svg";
import { useContext } from "react";
import ModalCtx from "../../context/modal-ctx";

const Navbar = () => {
    const modalCtx = useContext(ModalCtx)

  return (
    <div className={styles.navbarContainer}>
      <img src={logo} />
      <nav className={styles.navContent}>
        <ul>
          <li>
            <a>
              <AiFillHome size={20} />
              <p>Home</p>
            </a>
          </li>
          <li>
            <a onClick={() => modalCtx.showModalHandler()}>
              <AiFillPlusCircle size={20} />
              <p>Offer project</p>
            </a>
          </li>
          <li>
            <a onClick={() => console.log(modalCtx.showModal)}>
              <AiFillHeart size={20} />
              <p>Saved projects</p>
            </a>
          </li>
          <li>
            <a>
              <FaQuestionCircle size={20}/>
              <p>FAQ</p>
            </a>
          </li>
          <li>
            <a>
              <BsPersonCircle size={20}/>
              <p>My profile</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
