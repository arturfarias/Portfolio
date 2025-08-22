import React from "react";
import styles from "./Profile.module.css";
import Page from "../../components/Page";

interface Props {

}

const Profile: React.FC<Props> = () => {
  return (
    <Page title="Sobre Mim">
      <div className={styles.name}>
        Artur Santos de Farias
      </div>

      <div className={styles.card}>
        <h4 className={styles.position}>Desenvolvedor</h4>
        <div className={styles.description}>
          Bacharelando com sólida formação em ciência da computação e cursando mestrado em 
          Informática na área de estudo Melhoria de Processo e Qualidade de Software pela 
          Universidade Federal de Alagoas, possuindo experiência em desenvolvimento full stack 
          Web e Mobile, e conhecimento em testes de software, segurança da informação e 
          automação. Possui facilidade para aprender novas tecnologias e resolver 
          problemas em ambientes desafiadores.
        </div>
      </div>
    </Page>
  );
};

export default Profile;