import React from "react";
import styles from "./Page.module.css";

interface Props {
    children?: React.ReactNode;
    title?: String;
}

const Page: React.FC<Props> = ({ children, title="Pagina" }) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};

export default Page;
