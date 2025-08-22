import React from "react";

import { Sidebar, Menu as ProMenu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdContactPhone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { IoHelpCircleOutline } from "react-icons/io5";

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
      <h1>Portfolio</h1>
      <MenuItem icon={<CgProfile />} component={<Link to="/profile" />}>Sobre </MenuItem>
        <SubMenu label="Projetos" icon={<FaLaptopCode />}>
          <MenuItem icon={<IoHelpCircleOutline />}> Projeto 1</MenuItem>
          <MenuItem icon={<IoHelpCircleOutline />}> Projeto 2</MenuItem>
        </SubMenu>
      <MenuItem icon={<MdContactPhone />} component={<Link to="/contact" />}> Contato </MenuItem>
    </ProMenu>
  </Sidebar>
  );
};

export default Menu;
