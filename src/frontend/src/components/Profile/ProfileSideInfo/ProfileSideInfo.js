// import { BsFiletypePdf } from "react-icons/bs";

import styles from "./ProfileSideInfo.module.scss";
import { useState, useEffect } from "react";


const ProfileSideInfo = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [jobTitle, setJobTitle] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [age, setAge] = useState(0)


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://44.202.40.149:3000/users/3')
      const data = await response.json()
      setName(data['name'])
      setCity(data['city'])
      setJobTitle(data['jobTitle'])
      setAge(data['age'])
      setCountry(data['country'])

    }
    fetchData()

  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.infosContainer}>
        <div className={styles.pictureBx}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
            alt="profile-picture"
          />
        </div>
        <div className={styles.personalInfos}>
          <h3>{name}</h3>
          <div className={styles.address}>
            <p>{city} - {country} </p>
          </div>
        </div>
      </div>
      <div className={styles.curriculumContainer}>
        <h2>View Dell Curriculum</h2>
        <div>
          {/* <BsFiletypePdf size={20} /> */}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1_UCDJRZZ0mmDDCLH4o_DbTcucD97OMsm/view?usp=share_link"
          >
            {name} Curriculum
          </a>
        </div>
      </div>
      <div className={styles.achievementsContainer}>
        <h2>Achievements</h2>
        <ul>
          <li>
            <img src="https://www.pngmart.com/files/14/Red-Badge-Transparent-PNG.png" />
            <p>Badge Title</p>
          </li>
          <li>
            <img src="https://www.pngmart.com/files/14/Red-Badge-Transparent-PNG.png" />
            <p>Badge Title</p>
          </li>
          <li>
            <img src="https://www.pngmart.com/files/14/Red-Badge-Transparent-PNG.png" />
            <p>Badge Title</p>
          </li>
          <li>
            <img src="https://www.pngmart.com/files/14/Red-Badge-Transparent-PNG.png" />
            <p>Badge Title</p>
          </li>
          <li>
            <img src="https://www.pngmart.com/files/14/Red-Badge-Transparent-PNG.png" />
            <p>Badge Title</p>
          </li>
          <li>
            <img src="https://www.pngmart.com/files/14/Red-Badge-Transparent-PNG.png" />
            <p>Badge Title</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSideInfo;
