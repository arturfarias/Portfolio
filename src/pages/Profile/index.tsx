import React from "react";
import pages from "../../Pages.module.css";
import styles from "./Profile.module.css";

interface Props {

}

const Profile: React.FC<Props> = () => {
  return (
    <div className={pages.card}>
      <h1 className={pages.title}>Profile</h1>
      <div className={styles.name}>
        Artur Santos de Farias
      </div>
      
    </div>
  );
};

export default Profile;