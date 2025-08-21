import React from "react";
import pages from "../../Pages.module.css";
import styles from "./Contact.module.css";

interface Props {

}

const Contact: React.FC<Props> = () => {
  return (
    <div className={pages.card}>
      <h1 className={pages.title}>Contato</h1>
      
    </div>
  );
};

export default Contact;