import React from "react";

import { Sidebar, Menu as ProMenu, MenuItem, SubMenu } from 'react-pro-sidebar';

import { MdContactPhone, MdOutlineOndemandVideo } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { IoHelpCircleOutline, IoFastFoodOutline} from "react-icons/io5";
import { RiArticleLine } from "react-icons/ri";
import { TbCertificate, TbDatabaseEdit  } from "react-icons/tb";



import styles from "./Menu.module.css"

import { Link } from "react-router-dom";

interface Props {

}

const Menu: React.FC<Props> = () => {
  return (
  <Sidebar 
  backgroundColor="#1e1e2f"
  rootStyles={{
    borderRight: "none",}}
  >
    <ProMenu
      menuItemStyles={{
        button: ({ level, active, disabled, open }) => {
          let bgColor = "transparent";
          if (level === 0) {
            bgColor = open ? "#1e1e2f" : "transparent";
          }
          if (level > 0) {
            bgColor = open ? "#1e1e2f" : "#1e1e2f";
          }
          return {
            backgroundColor: bgColor,
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#555",
            },
          };
        },
      }}
    >
      <h1 className={styles.logo}>Portfólio</h1>
      <MenuItem icon={<CgProfile />} component={<Link to="/profile" />}> Sobre </MenuItem>
        <SubMenu label="Projetos" icon={<FaLaptopCode />}>
          <MenuItem icon={<IoFastFoodOutline />} component={<Link to="/myfood" />}> MyFood </MenuItem>
          <MenuItem icon={<TbDatabaseEdit />} component={<Link to="/arko" />}> Desafio ARKO  </MenuItem>
        </SubMenu>
      <MenuItem icon={<MdOutlineOndemandVideo />} component={<Link to="/courses" />}> Cursos </MenuItem>
      <MenuItem icon={<TbCertificate />} component={<Link to="/certificates" />}> Certificados </MenuItem>
      <MenuItem icon={<RiArticleLine />} component={<Link to="/articles" />}> Artigos </MenuItem>
      <MenuItem icon={<MdContactPhone />} component={<Link to="/contact" />}> Contato </MenuItem>
    </ProMenu>
  </Sidebar>
  );
};

export default Menu;
