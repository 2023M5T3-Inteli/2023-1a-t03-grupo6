import { AiFillHome, AiFillPlusCircle, AiFillHeart } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Navbar.module.scss";

import logo from "../../assets/logo.svg";
import { useContext } from "react";
import ProjectModalCtx from "../../context/project-modal-ctx";

const Navbar = () => {
  const modalCtx = useContext(ProjectModalCtx);
  const navigate = useNavigate();
  const handleOnClickProfile = useCallback(
    () => navigate("/profile", { replace: true }),
    [navigate]
  );

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
              <FaQuestionCircle size={20} />
              <p>FAQ</p>
            </a>
          </li>
          <li>
            <a onClick={handleOnClickProfile}>
              <BsPersonCircle size={20} />
              <p>My profile</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
