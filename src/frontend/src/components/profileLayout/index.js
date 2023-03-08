import React from 'react';
import styles from "./style.module.scss";
import ProfileMain from '../ProfileMain/index';
import ProfileSideInfo from '../ProfileSideInfo/index';

const ProfileLayout = () => {
  return (
    <div className={styles.profileContent}>
      <ProfileSideInfo />
      <ProfileMain />
    </div>
  );
}

export default ProfileLayout;