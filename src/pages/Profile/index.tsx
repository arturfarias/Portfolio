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
          Bacharelando em Ciência da Computação e atualmente cursando mestrado em Informática, 
          na área de Melhoria de Processo e Qualidade de Software, pela Universidade Federal de Alagoas. 
          Possui experiência em desenvolvimento full stack Web e Mobile, além de conhecimento em testes 
          de software, segurança da informação e automação. Tem facilidade para aprender novas tecnologias 
          e resolver problemas em ambientes desafiadores.
        </div>
      </div>

        <div>Tecnologias</div>
        <div>Formação acadêmica</div>
        <div>Experiência</div>
    </Page>
  );
};

export default Profile;